import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';

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
                Pembayaran Pesanan INV1394303939 Telah Diterima
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai Figan,</span>
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
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Rp.159.000</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Bank Transfer (BCA)</span>
                            <span style={{ display: 'block' }}>29-01-2024</span>
                        </td>
                    </tr>
                </table>
            </div>

            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Kami akan mengirimkan pemberitahuan mengenai konfirmasi pengiriman yang akan menyertakan informasi pelacakan setelah pesanan Anda dikirim.
            </span>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '0.9rem' }}>
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
