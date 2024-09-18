import Layout from "../../components/layout"

export default function () {
    return (
        <Layout companyName="Kravindo" companyDomain="https://kravindo.com" companyEmail="hello@kravindo.com" customerEmail="talentafigan@gmail.com" companyLogo="https://kravindo.s3.ap-southeast-2.amazonaws.com/company/company.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAPVc7Xp2hNJ5cnvQYgM56CDyma3KgbASGFjawm9igU6NAiA7Sw4tU%2F7aPU8hMU7eY8AW4QQvXEb5E58Y3Mio76x3qSrkAghDEAAaDDQ2MzQ3MDk1Nzc3MCIM%2BY4pUxkM3AQh4t61KsEC3TVj%2FhEpMOW8QXCix04YHBIr3CtMtem%2BzHL%2FXb9f6mMa7PK566%2BBK6liogvpnM7xYy8djIqj7IdaAke6tmvJMuXesIPbBJbWL7%2BrysmTZnB7Q0Lbj50Ale0DTvxKs6TuhoyoGrip5RTW1qWyYzPdS3874K%2BOLmcqAyQ5hlwxPwCySv9s%2Fwb2Ic%2FhukLcpi3rEjGfWK7jE%2Buf2Y1WEipqaz14eu7SZOn%2FunFvNmHRFpjD58k6R85V9LBOT%2BNiQn2GesTKD5bA%2FnHLtlscd2TA2UvegGO8Q0antiNuLw4xJZq3YKSNhTigbi%2FQHfNGcSvt3Wm7sAYaxbAyS3Oy0mTAvgraS9kLiiWdWf1hAttHjoKZJtCq%2BAIgGiyEzWB3prlIhsURXrpeV3N3iZ4O8BvrdTbhbXzFx1NlUraoE1vJ9BzbMLzGqrcGOrMC5pBnAT7JYd29vjmPxLrqgbbRHymZciQR3InX7YP%2F3OCdRXa6zDbKOO4S0%2BNOFg4fPb6xFrcbeoXODpUqNKK3CU4nxiw5Lk01IyDf4WwX3haeCaQf%2F3BIedO8n7VeygDBh0x2jZ3HWE57oRK81euLztpf5t8ApiIEndKP%2FWN5437E6s%2BAy8msBWXmDizK1rz2HopgvwK4VosCa6ieqUem%2BDfpZ0A2F4fk%2FtHRbYYcLWV8GkuwkBDb7zhpYrpJ6OeB1mVZQ4l0076JiZb%2BzBBuC7OREE9RtUwRXXKAhI45QhQnop7nlCA%2F1aIPtzfSqE4jmx5bdgtYz1hVaQ70lOxvMgXyQqGs6TEg%2FThwiz9tSEAnwfl6tOX9rbSGq1ndxuxpieIfii8RmtD31ByBbe3v%2F3VsJA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T095425Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWX2IFSTFGIW6Z2FM%2F20240918%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=2efacfce6af94cb27ef2e9c77035767e4dd6bc5604e231259462aac4b457bc21">
            <span className="text-xl font-semibold">Maaf, kami harus membatalkan pesanan INV1394303939</span>
            <span>Hai Figan</span>
            <span>Sudah lebih dari 24 jam kami tidak menerima pembayaran. Dengan berat hati, kami harus membatalkan pesanan Anda.</span>
            <div className="grid grid-cols-2 gap-3 border border-black p-3">
                <div className="flex flex-col gap-3">
                    <span>No. Invoice</span>
                    <span>Total Pesanan</span>
                    <span>Tanggal Pembatalan</span>
                </div>
                <div className="flex flex-col gap-3 font-semibold">
                    <span>INV1394303939</span>
                    <span>Rp.159.000</span>
                    <span>29-01-2024</span>
                </div>
            </div>
            <span className="text-sm italic leading-relaxed">Apabila Anda menerima email ini namun pembayaran telah Anda lakukan, mohon hubungi tim kami <span className="text-blue-700">support@kravindo.com</span> dengan melampirkan bukti pembayaran dan nomor pesanan.</span>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">Produk</th>
                        <th className="p-2 text-center">Jumlah</th>
                        <th className="p-2 text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">
                            <div className="flex gap-2 items-center">
                                <img src="https://kravindo.s3.ap-southeast-2.amazonaws.com/product/AIR%2BJORDAN%2B1%2BLOW.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAPVc7Xp2hNJ5cnvQYgM56CDyma3KgbASGFjawm9igU6NAiA7Sw4tU%2F7aPU8hMU7eY8AW4QQvXEb5E58Y3Mio76x3qSrkAghDEAAaDDQ2MzQ3MDk1Nzc3MCIM%2BY4pUxkM3AQh4t61KsEC3TVj%2FhEpMOW8QXCix04YHBIr3CtMtem%2BzHL%2FXb9f6mMa7PK566%2BBK6liogvpnM7xYy8djIqj7IdaAke6tmvJMuXesIPbBJbWL7%2BrysmTZnB7Q0Lbj50Ale0DTvxKs6TuhoyoGrip5RTW1qWyYzPdS3874K%2BOLmcqAyQ5hlwxPwCySv9s%2Fwb2Ic%2FhukLcpi3rEjGfWK7jE%2Buf2Y1WEipqaz14eu7SZOn%2FunFvNmHRFpjD58k6R85V9LBOT%2BNiQn2GesTKD5bA%2FnHLtlscd2TA2UvegGO8Q0antiNuLw4xJZq3YKSNhTigbi%2FQHfNGcSvt3Wm7sAYaxbAyS3Oy0mTAvgraS9kLiiWdWf1hAttHjoKZJtCq%2BAIgGiyEzWB3prlIhsURXrpeV3N3iZ4O8BvrdTbhbXzFx1NlUraoE1vJ9BzbMLzGqrcGOrMC5pBnAT7JYd29vjmPxLrqgbbRHymZciQR3InX7YP%2F3OCdRXa6zDbKOO4S0%2BNOFg4fPb6xFrcbeoXODpUqNKK3CU4nxiw5Lk01IyDf4WwX3haeCaQf%2F3BIedO8n7VeygDBh0x2jZ3HWE57oRK81euLztpf5t8ApiIEndKP%2FWN5437E6s%2BAy8msBWXmDizK1rz2HopgvwK4VosCa6ieqUem%2BDfpZ0A2F4fk%2FtHRbYYcLWV8GkuwkBDb7zhpYrpJ6OeB1mVZQ4l0076JiZb%2BzBBuC7OREE9RtUwRXXKAhI45QhQnop7nlCA%2F1aIPtzfSqE4jmx5bdgtYz1hVaQ70lOxvMgXyQqGs6TEg%2FThwiz9tSEAnwfl6tOX9rbSGq1ndxuxpieIfii8RmtD31ByBbe3v%2F3VsJA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T164446Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWX2IFSTFGIW6Z2FM%2F20240918%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=8b54abdc577a532f928376ef2fd7a4d5818fa2c7b4c7ff39334cb9cef23eb367" alt="Product" className="w-12 h-12 mr-2" />
                                <span className="text-sm">Air Jordan 1 Low - Hitam/Merah - 41</span>
                            </div>
                        </td>
                        <td className="p-2 text-center">1</td>
                        <td className="p-2 text-right">Rp.150.000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bg-gray-100">
                        <td colSpan="2" className="p-2 text-right font-semibold">Biaya Pengiriman:</td>
                        <td className="p-2 text-right">Rp.9.000</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td colSpan="2" className="p-2 text-right font-semibold">Total:</td>
                        <td className="p-2 text-right font-bold">Rp.159.000</td>
                    </tr>
                </tfoot>
            </table>
            <div className="flex flex-col gap-1">
                <span className="font-semibold">Alamat Pengiriman</span>
                <div className="flex flex-col text-sm">
                    <span>Figan</span>
                    <span>Perum graha bringin mas jalan selatan dalam 1 no 31 RT 10 RW 11, Ngaliyan Kota Semarang Jawa Tengah - 50187</span>
                    <span>085641462576</span>
                </div>
            </div>
            <span>Tim Support <br /> <span className="text-blue-700">Kravindo.com</span></span>
        </Layout>
    )
}