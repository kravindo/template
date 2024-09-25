import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';

import { formatCurrency, formatDate } from "../../lib/utils"

import { getCore } from '@/lib/db';

export default async function handler(req, res) {
    const orderReturnID = req.query.orderReturn;

    if (!orderReturnID) {
        return res.status(404).send(null)
    }

    try {

        const orderReturn = await getCore("order-return/" + orderReturnID)

        if (!orderReturn) {
            return res.status(404).send(null)
        }


        const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
            <Layout
                companyName={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.name}
                companyDomain={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.domain}
                companyEmail={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.support_email}
                customerEmail={orderReturn.order_detail.invoice_detail.customer_email}
                companyLogo={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.logo}
            >
                <span style={{ fontSize: '1.25rem', fontWeight: 600, display: 'block', marginBottom: '0.9rem' }}>
                    Pengajuan Pengembalian Pesanan {orderReturn.order_detail.number} Ditolak
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai {orderReturn.order_detail.invoice_detail.customer_name},</span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Kami telah melakukan peninjauan terhadap pengajuan pengembalian pesanan
                    <span style={{ fontWeight: 'bold' }}> {orderReturn.order_detail.product_detail.name} </span>
                    Anda di nomor pesanan <span style={{ fontWeight: 'bold' }}>{orderReturn.order_detail.number}</span>.
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Dengan berat hati kami informasikan bahwa pengajuan pengembalian pesanan Anda
                    <span style={{ fontWeight: 'bold' }}> Tidak dapat disetujui</span>. Cek <a href={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.terms_and_condition_url} style={{ color: 'blue', cursor: 'pointer' }}> Syarat & Ketentuan </a>.
                </span>

                <div style={{ marginBottom: '0.9rem' }}>
                    <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ padding: '0.9rem' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Nomor Pesanan</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Permasalahan</span>
                                <span style={{ display: 'block' }}>Alasan Ditolak</span>
                            </td>
                            <td style={{ padding: '0.9rem', fontWeight: 600 }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{orderReturn.order_detail.number}</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{orderReturn.return_reason}</span>
                                <span style={{ display: 'block' }}>{orderReturn.reject_reason}</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Jika Anda merasa ada kekeliruan mohon kirimkan detail atau bukti lebih lanjut ke
                    <span style={{ color: 'blue', cursor: 'pointer' }}> {orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.support_email}</span>.
                </span>

                <table style={{ width: '100%', marginTop: '0.9rem', borderCollapse: 'collapse', }}>
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
                                        src={orderReturn.order_detail.product_detail.images}
                                        alt={orderReturn.order_detail.product_detail.name}
                                        style={{ width: '48px', height: '48px', marginRight: '0.9rem' }}
                                    />
                                    <span>{orderReturn.order_detail.product_detail.name} {orderReturn.order_detail.order_variants.map((dataOrderVariant) => (<span key={dataOrderVariant.id}> - {dataOrderVariant.variant_detail.name}</span>))}</span>
                                </div>
                            </td>
                            <td style={{ padding: '0.9rem', textAlign: 'center' }}>{orderReturn.order_detail.quantity}</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right' }}>{formatCurrency(orderReturn.order_detail.sub_total)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr style={{ backgroundColor: '#f3f4f6' }}>
                            <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Total</td>
                            <td style={{ padding: '0.9rem', textAlign: 'right', fontWeight: 'bold' }}>{formatCurrency(orderReturn.order_detail.sub_total)}</td>
                        </tr>
                    </tfoot>
                </table>
            </Layout>
        );

        res.status(200).send(htmlTemplate);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}
