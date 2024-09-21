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
            <span style={{ fontSize: '1.25rem', fontWeight: 600, display: 'block', marginBottom: '0.9rem' }}>
                Permintaan Pengembalian Pesanan Telah Diterima
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai Figan,</span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Kami telah menerima permintaan pengembalian untuk pesanan
                <span style={{ fontWeight: 'bold' }}> Air Jordan 1 Low </span>
                Anda dan akan melakukan peninjauan secepatnya.
            </span>

            <div style={{ marginBottom: '0.9rem' }}>
                <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                    <tr>
                        <td style={{ padding: '0.9rem' }}>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Nomor Pesanan</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Masalah</span>
                            <span style={{ display: 'block' }}>Solusi</span>
                        </td>
                        <td style={{ padding: '0.9rem', fontWeight: 600 }}>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>105802959</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Pesanan Tidak Sesuai</span>
                            <span style={{ display: 'block' }}>Pengembalian Barang & Dana</span>
                        </td>
                    </tr>
                </table>
            </div>

            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Kami akan memberitahukan Anda mengenai perkembangan peninjauan dan memproses pengembalian Anda mengikuti
                <a href="https://jne.co.id" style={{ color: 'blue', cursor: 'pointer' }}> Syarat & Ketentuan </a>.
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
                        <td colSpan="2" style={{ padding: '0.9rem', textAlign: 'right', fontWeight: 600 }}>Total</td>
                        <td style={{ padding: '0.9rem', textAlign: 'right', fontWeight: 'bold' }}>Rp.150.000</td>
                    </tr>
                </tfoot>
            </table>
        </Layout>
    );

    res.status(200).send(htmlTemplate);
}
