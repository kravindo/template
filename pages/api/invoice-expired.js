import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
import { btnPrimary } from "../../components/styles"
import { formatCurrency, formatDate } from "../../lib/utils"

import { getCore } from '@/lib/db';

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


        const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
            <Layout
                companyName={invoice.address_detail.user_detail.company_detail.name}
                companyDomain={invoice.address_detail.user_detail.company_detail.domain}
                companyEmail={invoice.address_detail.user_detail.company_detail.support_email}
                customerEmail={invoice.customer_email}
                companyLogo={invoice.address_detail.user_detail.company_detail.logo}
            >
                <span style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '0.9rem' }}>
                    Maaf, Kami Harus Membatalkan Pesanan {invoice.number}
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai {invoice.customer_name},</span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Sudah lebih dari 24 jam kami tidak menerima pembayaran. Dengan berat hati, kami harus membatalkan pesanan Anda.
                </span>

                <div style={{ marginBottom: '0.9rem' }}>
                    <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ padding: '0.9rem' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Nomor Pesanan</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Total Tagihan</span>
                                <span style={{ display: 'block' }}>Tanggal Pembatalan</span>
                            </td>
                            <td style={{ padding: '0.9rem', fontWeight: '600' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{invoice.number}</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{formatCurrency(invoice.grand_total)}</span>
                                <span style={{ display: 'block' }}>{formatDate(invoice.expired_date)}</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <table style={{ width: '100%', marginBottom: '0.9rem' }}>
                    <tr>
                        <td style={{ textAlign: 'center', padding: '0.9rem' }}>
                            <a
                                href={invoice.address_detail.user_detail.company_detail.domain}
                                style={btnPrimary}
                            >
                                Belanja Lagi
                            </a>
                        </td>
                    </tr>
                </table>

                <span style={{ fontSize: '0.875rem', fontStyle: 'italic', lineHeight: '1.5', display: 'block', marginTop: '0.9rem' }}>
                    Apabila Anda menerima email ini namun pembayaran telah Anda lakukan, mohon kirim bukti pembayaran ke tim kami <span style={{ color: '#1d4ed8', cursor: 'pointer' }}>{invoice.address_detail.user_detail.company_detail.support_email}</span>
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
                            <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Biaya Pengiriman</td>
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
