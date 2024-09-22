import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/layout';
import { btnPrimary } from "../../components/styles"

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

        const htmlTemplate = ReactDOMServer.renderToStaticMarkup(
            <Layout
                companyName={company.name}
                companyDomain={company.domain}
                companyEmail={company.support_email}
                customerEmail={user.email}
                companyLogo={company.logo}
            >
                <span style={{ fontSize: '1.25rem', fontWeight: '600', display: 'block', marginBottom: '0.8rem' }}>
                    Aktivasi Akun Berhasil
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Hai {user.name},
                </span>
                <span style={{ display: 'block', marginBottom: '0.9rem' }}>
                    Akun Anda telah berhasil diaktifkan. Sekarang Anda dapat masuk dan mulai menjelajahi penawaran eksklusif kami.
                </span>
                <a
                    href={company.domain}
                    style={btnPrimary}
                >
                    Jelajahi Produk
                </a>
            </Layout>
        );

        res.status(200).send(htmlTemplate);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}
