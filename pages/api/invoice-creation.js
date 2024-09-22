import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
import { btnPrimary } from "../../components/styles"
import { formatCurrency, formatDate } from "../../lib/utils"

import { getXenditInvoice, getCore } from '@/lib/db';

export default async function handler(req, res) {
    const invoiceID = req.query.invoice;

    if (!invoiceID) {
        return res.status(404).send(null)
    }

    try {

        const invoice = await getCore("invoice/" + invoiceID)

        if (!invoice) {
            return res.status(404).send(null)
        }

        const xenditInvoice = await getXenditInvoice(invoice.number)

        if (!xenditInvoice) {
            return res.status(404).send(null)
        }


        const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
            <Layout
                companyName={invoice.address_detail.user_detail.company_detail.name}
                companyDomain={invoice.address_detail.user_detail.company_detail.domain}
                companyEmail={invoice.address_detail.user_detail.company_detail.support_email}
                customerEmail={invoice.customer_email}
                companyLogo={invoice.address_detail.user_detail.company_detail.logo}
            >
                <span style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '0.9rem' }}>
                    Pesanan {invoice.number} Menunggu Pembayaran
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai {invoice.customer_name},</span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Pesanan Anda sudah diterima. Segera lakukan pembayaran sebelum <span style={{ fontWeight: 'bold' }}>{formatDate(xenditInvoice.expiry_date)}</span> melalui tombol di bawah ini:
                </span>
                <table style={{ width: '100%', marginBottom: '0.9rem' }}>
                    <tr>
                        <td style={{ textAlign: 'center', padding: '0.9rem' }}>
                            <a
                                href={invoice.payment_url}
                                style={btnPrimary}
                            >
                                Bayar Sekarang
                            </a>
                        </td>
                    </tr>
                </table>
                <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse', marginBottom: '0.9rem' }}>
                    <tr>
                        <td style={{ padding: '0.9rem' }}>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Nomor Pesanan</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Total Bayar</span>
                            <span style={{ display: 'block' }}>Tanggal Pesanan</span>
                        </td>
                        <td style={{ padding: '0.9rem', fontWeight: '600' }}>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>{invoice.number}</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>{formatCurrency(invoice.grand_total)}</span>
                            <span style={{ display: 'block' }}>{formatDate(invoice.created_date)}</span>
                        </td>
                    </tr>
                </table>
                <span style={{ fontSize: '0.875rem', fontStyle: 'italic', lineHeight: '1.5', display: 'block', marginTop: '0.9rem' }}>
                    Sistem akan otomatis mengkonfirmasi pembayaran Anda. Jangan lupa untuk menyimpan tanda terima/nomor referensi sebagai bukti pembayaran.
                </span>
                <span style={{ display: 'block', marginTop: '0.5rem' }}>
                    Tim {invoice.address_detail.user_detail.company_detail.name} akan memulai persiapan pengiriman pesanan segera setelah menerima konfirmasi pembayaran.
                </span>
                <table style={{ width: '100%', marginTop: '0.9rem', border: '1px solid black', borderCollapse: 'collapse', }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f3f4f6' }}>
                            <th style={{ padding: '0.9rem', textAlign: 'left' }}>Produk</th>
                            <th style={{ padding: '0.9rem', textAlign: 'center' }}>Jumlah</th>
                            <th style={{ padding: '0.9rem', textAlign: 'right' }}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoice.orders.map((dataOrder) => (
                                <tr key={dataOrder.id}>
                                    <td style={{ padding: '0.9rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img
                                                src={dataOrder.product_detail.images}
                                                alt={dataOrder.product_detail.name}
                                                style={{ width: '48px', height: '48px', marginRight: '0.9rem' }}
                                            />
                                            <span>{dataOrder.product_detail.name} {dataOrder.order_variants.map((dataOrderVariant) => (<span key={dataOrderVariant.id}> - {dataOrderVariant.variant_detail.name}</span>))}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '0.9rem', textAlign: 'center' }}>{dataOrder.quantity}</td>
                                    <td style={{ padding: '0.9rem', textAlign: 'right' }}>{formatCurrency(dataOrder.sub_total)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr style={{ backgroundColor: '#f3f4f6' }}>
                        <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Biaya Pengiriman ({invoice.shipment_service})</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right' }}>{formatCurrency(invoice.shipment_fee)}</td>
                        </tr>
                        <tr style={{ backgroundColor: '#f3f4f6' }}>
                            <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Total</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right', fontWeight: 'bold' }}>{formatCurrency(invoice.grand_total)}</td>
                        </tr>
                    </tfoot>
                </table>
                <div style={{ marginTop: '0.9rem' }}>
                    <span style={{ fontWeight: '600' }}>Alamat Pengiriman</span><br />
                    <span style={{ fontSize: '0.875rem' }}>{invoice.customer_name}</span><br />
                    <span style={{ fontSize: '0.875rem' }}>{invoice.address_detail.detail}, {invoice.address_detail.village_detail.name}, {invoice.address_detail.district_detail.name}, {invoice.address_detail.regency_detail.name}, {invoice.address_detail.province_detail.name} - {invoice.address_detail.postal_code}</span><br />
                    <span style={{ fontSize: '0.875rem' }}>{invoice.customer_phone}</span>
                </div>
            </Layout>
        );

        res.status(200).send(htmlTemplate);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}
