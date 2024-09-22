import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';

import { formatCurrency, formatDate } from "../../lib/utils"

import { getCore } from '@/lib/db';

export default async function handler(req, res) {
    const orderID = req.query.order;

    if (!orderID) {
        return res.status(404).send(null)
    }

    try {

        const order = await getCore("order/" + orderID)

        if (!order) {
            return res.status(404).send(null)
        }


        const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
            <Layout
                companyName={order.invoice_detail.address_detail.user_detail.company_detail.name}
                companyDomain={order.invoice_detail.address_detail.user_detail.company_detail.domain}
                companyEmail={order.invoice_detail.address_detail.user_detail.company_detail.support_email}
                customerEmail={order.invoice_detail.customer_email}
                companyLogo={order.invoice_detail.address_detail.user_detail.company_detail.logo}
            >
                <span style={{ fontSize: '1.25rem', fontWeight: 600, display: 'block', marginBottom: '0.9rem' }}>
                    Pesanan {order.number} Dalam Pengiriman
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai {order.invoice_detail.customer_name},</span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Dengan senang hati kami informasikan bahwa pesanan
                    <span style={{ fontWeight: 'bold' }}> {order.product_detail.name} </span>
                    Anda telah dikirim! Paket Anda kini sedang dalam perjalanan.
                </span>

                <div style={{ marginBottom: '0.9rem' }}>
                    <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ padding: '0.9rem' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Jasa Pengiriman</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Nomor Pelacakan</span>
                                <span style={{ display: 'block' }}>Estimasi Pengiriman</span>
                            </td>
                            <td style={{ padding: '0.9rem', fontWeight: 600 }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{order.shipment_vendor}</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{order.shipment_tracking_number}</span>
                                <span style={{ display: 'block' }}>1 - {order.shipment_estimation} Hari</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Lacak pesanan Anda di
                    <a href={order.invoice_detail.address_detail.user_detail.company_detail.order_url + order.id} style={{ color: 'blue', cursor: 'pointer' }}> Halaman pesanan </a>
                    atau langsung melalui
                    <a href="https://jne.co.id" style={{ color: 'blue', cursor: 'pointer' }}> Website JNE </a>
                    dengan memasukkan nomor tracking.
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
                        <tr>
                            <td style={{ padding: '0.9rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={order.product_detail.images}
                                        alt={order.product_detail.name}
                                        style={{ width: '48px', height: '48px', marginRight: '0.9rem' }}
                                    />
                                    <span>{order.product_detail.name} {order.order_variants.map((dataOrderVariant) => (<span key={dataOrderVariant.id}> - {dataOrderVariant.variant_detail.name}</span>))}</span>
                                </div>
                            </td>
                            <td style={{ padding: '0.9rem', textAlign: 'center' }}>{order.quantity}</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right' }}>{formatCurrency(order.sub_total)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr style={{ backgroundColor: '#f3f4f6' }}>
                            <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Biaya Pengiriman ({order.invoice_detail.shipment_service})</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right' }}>{formatCurrency(order.shipment_fee)}</td>
                        </tr>
                        <tr style={{ backgroundColor: '#f3f4f6' }}>
                            <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Total</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right', fontWeight: 'bold' }}>{formatCurrency(order.grand_total)}</td>
                        </tr>
                    </tfoot>
                </table>
                <div style={{ marginTop: '0.9rem' }}>
                    <span style={{ fontWeight: '600' }}>Alamat Pengiriman</span><br />
                    <span style={{ fontSize: '0.875rem' }}>{order.invoice_detail.customer_name}</span><br />
                    <span style={{ fontSize: '0.875rem' }}>{order.invoice_detail.address_detail.detail}, {order.invoice_detail.address_detail.village_detail.name}, {order.invoice_detail.address_detail.district_detail.name}, {order.invoice_detail.address_detail.regency_detail.name}, {order.invoice_detail.address_detail.province_detail.name} - {order.invoice_detail.address_detail.postal_code}</span><br />
                    <span style={{ fontSize: '0.875rem' }}>{order.invoice_detail.customer_phone}</span>
                </div>
            </Layout>
        );

        res.status(200).send(htmlTemplate);
    } catch (error) {
        
        res.status(500).send('Internal Server Error');
    }
}
