import Image from "next/image";

function Layout({ children, companyName, companyLogo, companyEmail, customerEmail, companyDomain }) {
    return (
        <div className="bg-[#f3f7f9] min-h-screen w-full">
            <div className="w-[40rem] flex flex-col gap-8 bg-white mx-auto p-8 border">
                <div>
                    <Image className="rounded-full" width={70} height={70} src={companyLogo} alt="Company Logo" style={{ maxWidth: '100%' }} />
                </div>
                <div className="flex flex-col gap-5 w-full leading-relaxed">
                    {children}
                </div>
            </div>
            <div className="w-[40rem] leading-loose gap-3 items-center px-10 py-6 flex flex-col text-center mx-auto text-[#666666]">
                <span className="text-xs">Email ini ditujukan untuk <span className="text-blue-700 cursor-pointer">{customerEmail}</span></span>
                <span className="text-xs">Pastikan email kami tidak masuk dalam daftar spam Anda dengan menambahkan <span className="text-blue-700 cursor-pointer underline">{companyEmail}</span> di kontak Anda.</span>
                <span className="text-xs">Kami selalu berusaha untuk memberikan informasi yang paling akurat dan terkini. Apabila terdapat perbedaan informasi, kami sarankan untuk mengunjungi website <span className="text-blue-700 underline cursor-pointer">{companyDomain}</span> kami untuk mendapatkan informasi terbaru.</span>
            </div>
            <div className="w-[40rem] border-t gap-6 items-center px-10 py-6 flex flex-row justify-center mx-auto text-[#666666]">
                <span className="text-xs cursor-pointer">Hubungi Kami</span>
                <span className="text-xs">Syarat & Ketentuan</span>
                <span className="text-xs">Kebijakan Privasi</span>
            </div>
        </div>
    );
}

export default Layout;
