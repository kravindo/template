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
                Permintaan Pengembalian Pesanan Berhasil
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai Figan,</span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Kami telah melakukan peninjauan terhadap pengembalian pesanan
                <span style={{ fontWeight: 'bold' }}> Air Jordan 1 Low </span>
                Anda di nomor pesanan <span style={{ fontWeight: 'bold' }}>105802959</span>.
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Dengan senang hati kami memberitahukan bahwa permintaan pengembalian pesanan Anda
                <span style={{ fontWeight: 'bold' }}> Telah Berhasil</span>. Pengembalian Dana Sebesar
                <span style={{ fontWeight: 'bold' }}> Rp1.393.000</span> sudah di transfer ke rekening:
            </span>

            <div style={{ marginBottom: '0.9rem' }}>
                <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                    <tr>
                        <td style={{ padding: '0.9rem' }}>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Bank/E-Wallet</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Atas Nama</span>
                            <span style={{ display: 'block' }}>Nomor Rekening</span>
                        </td>
                        <td style={{ padding: '0.9rem', fontWeight: 600 }}>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Bank Central Asia (BCA)</span>
                            <span style={{ display: 'block', marginBottom: '0.8rem' }}>Talenta Figan</span>
                            <span style={{ display: 'block' }}>080474839</span>
                        </td>
                    </tr>
                </table>
            </div>


            <span style={{ display: 'block', marginBottom: '0.9rem', fontSize: '0.875rem', fontStyle: 'italic' }}>
                Durasi pengiriman dana berlangsung selama 1 Hari Kerja tergantung jenis bank.
            </span>
        </Layout>
    );

    res.status(200).send(htmlTemplate);
}
