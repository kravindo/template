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
                Reset Kata Sandi
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Kami telah menerima permintaan untuk mereset kata sandi Anda.
            </span>
            <span style={{ display: 'block', marginBottom: '20px' }}>
                Silakan klik tombol di bawah ini:
            </span>
            <a
                href="https://yourwebsite.com/reset-password"
                style={btnPrimary}
            >
                Reset Kata Sandi
            </a>
            <span style={{ display: 'block', marginTop: '0.9rem' }}>
                Jika Anda tidak mengajukan permintaan ini, mohon abaikan email ini.
            </span>
        </Layout>
    );

    res.status(200).send(htmlTemplate);
}
