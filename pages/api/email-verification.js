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
      <span style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.9rem', display: 'block' }}>
        Verifikasi Email Anda
      </span>
      <span style={{ marginBottom: '0.9rem', display: 'block' }}>
        Hai Figan,
      </span>
      <span style={{ marginBottom: '0.9rem', display: 'block' }}>
        Untuk mengaktifkan akun Anda, silakan klik tombol di bawah ini:
      </span>
      <a
        href="https://auth.kravindo.com/verify/b337e84de8752b27eda3a12363109e7eda3a12363109e7eda3a12363109e7eda3a12363109e7eda3a12363109e"
        style={btnPrimary}
        >
        Verifikasi Email
      </a>
      <span style={{ marginTop: '0.9rem', marginBottom: '0.9rem', display: 'block' }}>
        Jika Anda tidak dapat mengeklik tombol tersebut, Anda dapat menyalin link di bawah ini dan menempelkannya ke peramban web Anda.
      </span>
      <span style={{ color: '#1d4ed8', textDecoration: 'underline', fontSize: '0.875rem', marginBottom: '0.9rem', display: 'block' }}>
        https://auth.kravindo.com/verify/b337e84de8752b27eda3a12363109e7eda3a12363109e7eda3a12363109e7eda3a12363109e7eda3a12363109e
      </span>
      <span>
        Jika Anda tidak mengajukan permintaan ini, mohon abaikan email ini.
      </span>
    </Layout>
  );

  res.status(200).send(htmlTemplate);
}
