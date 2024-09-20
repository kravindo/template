import Image from "next/image";

function Layout({ children, companyName, companyLogo, companyEmail, customerEmail, companyDomain }) {
    return (
        <div className="bg-[#f1f2f3] min-h-screen w-full">
            <div className="w-full max-w-[40rem] flex flex-col bg-white mx-auto border">
                <div className="w-full flex flex-col h-[4.5rem] px-8 items-center justify-center border-b">
                    <Image className="rounded-full" width={40} height={40} src={companyLogo} alt="Company Logo" style={{ maxWidth: '100%' }} />
                </div>
                <div className="text-sm flex flex-col p-6 gap-4 w-full leading-relaxed">
                    {children}
                    <div className="flex flex-col mt-2 gap-2">
                        <span className="text-base text-blue-700">Tim Kravindo.com</span>
                        <span className="text-xs leading-relaxed">Jika Anda ingin berbicara dengan anggota tim dukungan, <br /> mohon hubungi <span className="text-blue-700">support@kravindo.com</span> .</span>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[40rem] leading-loose gap-3 items-center px-10 py-6 flex flex-col text-center mx-auto text-[#666666]">
                <span className="text-xs">Email ini ditujukan untuk <span className="text-blue-700 cursor-pointer">{customerEmail}</span></span>
                <span className="text-xs">Harap waspada terhadap upaya penipuan. Kami tidak akan pernah meminta informasi pribadi Anda, termasuk kata sandi, melalui email atau komunikasi lain yang tidak diminta.</span>
                <span className="text-xs">Kami selalu berusaha untuk memberikan informasi yang paling akurat dan terkini. Apabila terdapat perbedaan informasi, kami sarankan untuk mengunjungi website <span className="text-blue-700 underline cursor-pointer">{companyDomain}</span> untuk mendapatkan informasi terbaru.</span>
            </div>
        </div>
    );
}

export default Layout;
