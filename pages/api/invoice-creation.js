import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
import { btnPrimary } from "../../components/styles"

export default function handler(req, res) {
    const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
        <Layout
            companyName="Kravindo"
            companyDomain="https://kravindo.com"
            companyEmail="hello@kravindo.com"
            customerEmail="talentafigan@gmail.com"
            companyLogo="https://kreativa-indonesia.s3.ap-southeast-2.amazonaws.com/company/logo-company"
        >
            <span style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '0.9rem' }}>
                Pesanan INV1394303939 Menunggu Pembayaran
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai Figan,</span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Pesanan Anda sudah diterima. Segera lakukan pembayaran sebelum <span style={{ fontWeight: 'bold' }}>07-09-24 pukul 01.04</span> melalui tombol di bawah ini:
            </span>
            <table style={{ width: '100%', marginBottom: '0.9rem' }}>
                <tr>
                    <td style={{ textAlign: 'center', padding: '0.9rem' }}>
                        <a
                            href="https://payment-link.example.com"
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
                        <span style={{ display: 'block', marginBottom: '0.8rem' }}>INV1394303939</span>
                        <span style={{ display: 'block', marginBottom: '0.8rem' }}>Rp.159.000</span>
                        <span style={{ display: 'block' }}>29-01-2024</span>
                    </td>
                </tr>
            </table>
            <span style={{ fontSize: '0.875rem', fontStyle: 'italic', lineHeight: '1.5', display: 'block', marginTop: '0.9rem' }}>
                Sistem akan otomatis mengkonfirmasi pembayaran Anda. Jangan lupa untuk menyimpan tanda terima/nomor referensi sebagai bukti pembayaran.
            </span>
            <span style={{ display: 'block', marginTop: '0.5rem' }}>
                Tim Kravindo akan memulai persiapan pengiriman pesanan segera setelah menerima konfirmasi pembayaran.
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
                                    src="https://kreativa-indonesia.s3.ap-southeast-2.amazonaws.com/product/AIR%2BJORDAN%2B1%2BLOW.jpeg"
                                    alt="Product"
                                    style={{ width: '48px', height: '48px', marginRight: '0.9rem' }}
                                />
                                <span style={{ fontSize: '0.875rem' }}>Air Jordan 1 Low - Hitam/Merah - 41</span>
                            </div>
                        </td>
                        <td style={{ padding: '0.9rem', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '0.9rem', textAlign: 'right' }}>Rp.150.000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr style={{ backgroundColor: '#f3f4f6' }}>
                        <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Biaya Pengiriman</td>
                        <td style={{ padding: '0.9rem', textAlign: 'right' }}>Rp.9.000</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f3f4f6' }}>
                        <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: '600' }}>Total</td>
                        <td style={{ padding: '0.9rem', textAlign: 'right', fontWeight: 'bold' }}>Rp.159.000</td>
                    </tr>
                </tfoot>
            </table>
            <div style={{ marginTop: '0.9rem' }}>
                <span style={{ fontWeight: '600' }}>Alamat Pengiriman</span><br />
                <span style={{ fontSize: '0.875rem' }}>Figan</span><br />
                <span style={{ fontSize: '0.875rem' }}>Perum graha bringin mas jalan selatan dalam 1 no 31 RT 10 RW 11, Ngaliyan Kota Semarang Jawa Tengah - 50187</span><br />
                <span style={{ fontSize: '0.875rem' }}>085641462576</span>
            </div>
        </Layout>
    );

    res.status(200).send(htmlTemplate);
}
