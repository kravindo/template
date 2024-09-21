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
                Kata Sandi Anda Telah Diatur Ulang
            </span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>Hai Figan,</span>
            <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                Kata sandi Anda telah berhasil disetel ulang. Kini Anda dapat masuk menggunakan kata sandi baru Anda.
            </span>
        </Layout>
    );

    res.status(200).send(htmlTemplate);
}
