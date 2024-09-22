import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
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

        console.log(xenditInvoice)


        const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
            <Layout
                companyName={invoice.address_detail.user_detail.company_detail.name}
                companyDomain={invoice.address_detail.user_detail.company_detail.domain}
                companyEmail={invoice.address_detail.user_detail.company_detail.support_email}
                customerEmail={invoice.customer_email}
                companyLogo={invoice.address_detail.user_detail.company_detail.logo}
            >
                <span style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '0.9rem' }}>
                    Pembayaran Pesanan {invoice.number} Telah Diterima
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai {invoice.customer_name},</span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Pembayaran terverifikasi dan pesanan Anda kini sedang dipersiapkan untuk pengiriman.
                </span>

                <div style={{ marginBottom: '0.9rem' }}>
                    <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ padding: '0.9rem' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Total bayar</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Metode pembayaran</span>
                                <span style={{ display: 'block' }}>Tanggal bayar</span>
                            </td>
                            <td style={{ padding: '0.9rem', fontWeight: '600' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{formatCurrency(xenditInvoice.paid_amount)}</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{xenditInvoice.payment_method} ({xenditInvoice.payment_channel})</span>
                                <span style={{ display: 'block' }}>{formatDate(xenditInvoice.paid_at)}</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Kami akan mengirimkan pemberitahuan mengenai konfirmasi pengiriman yang akan menyertakan informasi pelacakan setelah pesanan Anda dikirim.
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
