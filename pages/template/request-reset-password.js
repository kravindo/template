import Layout from "../../components/layout"

export default function () {
    return (
        <Layout companyName="Kravindo" companyDomain="https://kravindo.com" companyEmail="hello@kravindo.com" customerEmail="talentafigan@gmail.com" companyLogo="https://kravindo.s3.ap-southeast-2.amazonaws.com/company/company.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAPVc7Xp2hNJ5cnvQYgM56CDyma3KgbASGFjawm9igU6NAiA7Sw4tU%2F7aPU8hMU7eY8AW4QQvXEb5E58Y3Mio76x3qSrkAghDEAAaDDQ2MzQ3MDk1Nzc3MCIM%2BY4pUxkM3AQh4t61KsEC3TVj%2FhEpMOW8QXCix04YHBIr3CtMtem%2BzHL%2FXb9f6mMa7PK566%2BBK6liogvpnM7xYy8djIqj7IdaAke6tmvJMuXesIPbBJbWL7%2BrysmTZnB7Q0Lbj50Ale0DTvxKs6TuhoyoGrip5RTW1qWyYzPdS3874K%2BOLmcqAyQ5hlwxPwCySv9s%2Fwb2Ic%2FhukLcpi3rEjGfWK7jE%2Buf2Y1WEipqaz14eu7SZOn%2FunFvNmHRFpjD58k6R85V9LBOT%2BNiQn2GesTKD5bA%2FnHLtlscd2TA2UvegGO8Q0antiNuLw4xJZq3YKSNhTigbi%2FQHfNGcSvt3Wm7sAYaxbAyS3Oy0mTAvgraS9kLiiWdWf1hAttHjoKZJtCq%2BAIgGiyEzWB3prlIhsURXrpeV3N3iZ4O8BvrdTbhbXzFx1NlUraoE1vJ9BzbMLzGqrcGOrMC5pBnAT7JYd29vjmPxLrqgbbRHymZciQR3InX7YP%2F3OCdRXa6zDbKOO4S0%2BNOFg4fPb6xFrcbeoXODpUqNKK3CU4nxiw5Lk01IyDf4WwX3haeCaQf%2F3BIedO8n7VeygDBh0x2jZ3HWE57oRK81euLztpf5t8ApiIEndKP%2FWN5437E6s%2BAy8msBWXmDizK1rz2HopgvwK4VosCa6ieqUem%2BDfpZ0A2F4fk%2FtHRbYYcLWV8GkuwkBDb7zhpYrpJ6OeB1mVZQ4l0076JiZb%2BzBBuC7OREE9RtUwRXXKAhI45QhQnop7nlCA%2F1aIPtzfSqE4jmx5bdgtYz1hVaQ70lOxvMgXyQqGs6TEg%2FThwiz9tSEAnwfl6tOX9rbSGq1ndxuxpieIfii8RmtD31ByBbe3v%2F3VsJA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T095425Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWX2IFSTFGIW6Z2FM%2F20240918%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=2efacfce6af94cb27ef2e9c77035767e4dd6bc5604e231259462aac4b457bc21">
            <span className=" text-xl font-semibold">Reset Kata Sandi</span>
            <span>Kami telah menerima permintaan untuk mereset kata sandi Anda. Untuk mengonfirmasi permintaan ini, silakan klik tombol di bawah ini:.</span>
            <button className="btn-primary">Reset Kata Sandi</button>
            <span>Jika Anda tidak mengajukan permintaan ini, abaikan email ini dan hubungi tim dukungan kami di <span className="text-blue-700">support@kravindo.com</span>.</span>
            <span>Tim Support <br /> <span className="text-blue-700">Kravindo.com</span></span>
        </Layout>
    )
}