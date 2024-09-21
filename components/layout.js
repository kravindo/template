import Image from "next/image";

function Layout({ children, companyName, companyLogo, companyEmail, customerEmail, companyDomain }) {
    return (
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style={{ backgroundColor: '#f1f2f3', minHeight: '100vh', margin: 0, padding: 0 }}>
            <tr>
                <td align="center">
                    <table role="presentation" width="100%" maxWidth="640" cellspacing="0" cellpadding="0" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', maxWidth: '40rem', margin: '0 auto' }}>
                        <tr>
                            <td style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #e5e7eb', height: '4.5rem' }}>
                                <img
                                    width={50}
                                    height={50}
                                    src={companyLogo}
                                    alt="Company Logo"
                                    style={{ maxWidth: '100%', borderRadius: '100%' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '20px', fontSize: '14px', lineHeight: '1.5', textAlign: 'left' }}>
                                {children}
                                <div style={{ marginTop: '30px' }}>
                                    <span style={{ fontSize: '16px', color: '#1d4ed8', display: 'block' }}>Tim {companyName}</span>
                                    <span style={{ fontSize: '14px', lineHeight: '1.5' }}>Jika Anda ingin berbicara dengan anggota tim dukungan, <br /> mohon hubungi <span style={{ color: '#1d4ed8' }}>{companyEmail}</span>.</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table role="presentation" width="100%" maxWidth="640" cellspacing="0" cellpadding="0" style={{ marginTop: '10px', maxWidth: '40rem', textAlign: 'center', color: '#666666' }}>
                        <tr>
                            <td style={{ padding: '20px', fontSize: '12px', lineHeight: '1.5' }}>
                                <span style={{ display: 'block', marginBottom: '10px' }}>
                                    Email ini ditujukan untuk <span style={{ color: '#1d4ed8' }}>{customerEmail}</span>
                                </span>
                                <span style={{ display: 'block', marginBottom: '10px' }}>
                                    Harap waspada terhadap upaya penipuan. Kami tidak akan pernah meminta informasi pribadi Anda, termasuk kata sandi, melalui email atau komunikasi lain yang tidak diminta.
                                </span>
                                <span style={{ display: 'block', marginBottom: '10px' }}>
                                    Kami selalu berusaha untuk memberikan informasi yang paling akurat dan terkini. Apabila terdapat perbedaan informasi, kami sarankan untuk mengunjungi website <span style={{ color: '#1d4ed8', textDecoration: 'underline' }}>{companyDomain}</span> untuk mendapatkan informasi terbaru.
                                </span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
}

export default Layout;
