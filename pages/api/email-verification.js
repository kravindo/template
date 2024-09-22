import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
import { btnPrimary } from "../../components/styles";
import { getMany, getOne } from '@/lib/db';

export default async function handler(req, res) {
  const accessLogId = req.query.accessLog;

  if (!accessLogId) {
    return res.status(404).send('Access log not provided');
  }

  try {
    const accessLog = await getOne('SELECT * FROM access_log WHERE id = ?', [accessLogId]);
    if (!accessLog) {
      return res.status(404).send('Access log not found');
    }

    const user = await getOne('SELECT * FROM user WHERE id = ?', [accessLog.user]);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const company = await getOne('SELECT * FROM company WHERE id = ?', [user.company]);
    if (!company) {
      return res.status(404).send('Company not found');
    }

    const activationUrl = `${company.activation_url}/${accessLog.id}`;
    const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
      <Layout
        companyName={company.name}
        companyDomain={company.domain}
        companyEmail={company.support_email}
        customerEmail={user.email}
        companyLogo={company.logo}
      >
        <span style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.9rem', display: 'block' }}>
          Verifikasi Email Anda
        </span>
        <span style={{ marginBottom: '0.9rem', display: 'block' }}>
          Hai {user.name},
        </span>
        <span style={{ marginBottom: '0.9rem', display: 'block' }}>
          Untuk mengaktifkan akun Anda, silakan klik tombol di bawah ini:
        </span>
        <a href={activationUrl} style={btnPrimary}>
          Verifikasi Email
        </a>
        <span style={{ marginTop: '0.9rem', marginBottom: '0.9rem', display: 'block' }}>
          Jika Anda tidak dapat mengeklik tombol tersebut, Anda dapat menyalin link di bawah ini dan menempelkannya ke peramban web Anda.
        </span>
        <span style={{ color: '#1d4ed8', textDecoration: 'underline', fontSize: '0.875rem', marginBottom: '0.9rem', display: 'block' }}>
          {activationUrl}
        </span>
        <span>
          Jika Anda tidak mengajukan permintaan ini, mohon abaikan email ini.
        </span>
      </Layout>
    );

    res.status(200).send(htmlTemplate);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
