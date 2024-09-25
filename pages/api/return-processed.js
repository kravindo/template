import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
import { btnPrimary } from '@/components/styles';

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
                    Pengajuan Pengembalian Pesanan {orderReturn.order_detail.number} Telah Disetujui
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai {orderReturn.order_detail.invoice_detail.customer_name},</span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Dengan senang hati kami informasikan bahwa permintaan pengembalian pesanan
                    <span style={{ fontWeight: 'bold' }}> {orderReturn.order_detail.product_detail.name} </span>
                    Anda Telah Disetujui.
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Mohon lakukan pengiriman barang ke detail alamat berikut:
                </span>

                <div style={{ marginTop: '0.9rem' }}>
                    <span style={{ fontWeight: 700, marginBottom: '0.2rem', display: 'inline-block' }}>Alamat Pengembalian</span><br />
                    <div
                        dangerouslySetInnerHTML={{ __html: orderReturn.return_address }}
                    />
                </div>

                <table style={{ width: '100%', marginBottom: '0.9rem' }}>
                    <tr>
                        <td style={{ textAlign: 'center', padding: '0.9rem' }}>
                            <a
                                href={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.return_url + "/" + orderReturn.id}
                                style={btnPrimary}
                            >
                                Atur Pengiriman
                            </a>
                        </td>
                    </tr>
                </table>

                <div style={{ marginBottom: '0.9rem' }}>
                    <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <tr>
                            <td style={{ padding: '0.9rem' }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Nomor Pesanan</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>Permasalahan</span>
                                <span style={{ display: 'block' }}>Nominal Pengembalian</span>
                            </td>
                            <td style={{ padding: '0.9rem', fontWeight: 600 }}>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{orderReturn.order_detail.number}</span>
                                <span style={{ display: 'block', marginBottom: '0.8rem' }}>{orderReturn.return_reason}</span>
                                <span style={{ display: 'block' }}>{formatCurrency(orderReturn.amount)}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Setelah barang sampai kami akan melakukan pengecekan & memproses pengembalian dana Anda dalam 1 Hari Kerja. Cek
                    <a href={orderReturn.order_detail.invoice_detail.address_detail.user_detail.company_detail.terms_and_condition_url} style={{ color: 'blue', cursor: 'pointer' }}> Syarat & Ketentuan </a>
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
