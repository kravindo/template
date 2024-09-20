import Layout from "../../components/layout"

export default function () {
    return (
        <Layout companyName="Kravindo" companyDomain="https://kravindo.com" companyEmail="hello@kravindo.com" customerEmail="talentafigan@gmail.com" companyLogo="https://kravindo.s3.ap-southeast-2.amazonaws.com/company/company.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaDmFwLXNvdXRoZWFzdC0yIkYwRAIgEuVcVLAaJN6zhxqJzId%2B04qDYp3rQ330Tyo7Ok8qeuICICLtWGh6IVpepFJIi%2BBFoJ1%2FSWvJ7KmnOrHSAJOVjmzOKuQCCHsQABoMNDYzNDcwOTU3NzcwIgzP53yhUavymnhjJHsqwQLScRTOAgsUqE4K9efAGtF%2BB4d8Zgvyi5KXyAClkuPRE0wX6W6HIreDVZl6nqyhyiMWZ2FeL6TUOtDMean9SR3Ghq0ZXUnMul9NO3QFwmkGtLGjNIrMU%2BPk%2FDWwCCV8FFXLZmCcXs35jWfQTT%2BuFoixoTLTRW196PZudmNXrcvq3%2Be3qQDP0lAJPzN6aOH5Lf7q9ZKubkTRit6%2BtXMF0uj7XhzUpTO7xkEkjxwjjHSORjuMnCIlFJAdMP5S8CpLJV1HThOfC%2FQl6LOMcObcmZ0kkBH8nMOnaa9EAv%2B62vzABtv7HDjtXu0MFGiPN%2FKP80G%2BzjwGXMh8%2F%2Ft1jZ4E0Gp2qbuIYau0oFSP1rFSt2RSVUoZU4p29iN372ZhLcywx%2B8YD9VxJ6e5zbvi7MV5dC7iwbZ2HeznSq%2BHNfoZgcmjVh0wpvi2twY6tAJjKTaT6XAk6A1S5wTZ%2FmQS065JHCq9ec2j5IZiBTKyIzTul5jvbWfSL68uVK9t5TaVObW%2BXeMm3%2BhWSb%2B%2FYJ45YwQf6ilb45VAudpG5rGJiFgzXYqFz1Frjn7X39BMDPhBCWxJXTeKjL%2Bx6FCY%2FjVFG2USiOtFChueyVIolpKvmjEXlqP%2F92AunJCN9S3EjDhQ4RZnvRslnDELK3K4x8ZSxmsZWJgv%2FUoVfejx8FiTYl25blCjV0FBrF%2B8xp2OJjlOu3PNOevcFW%2BIA4gXiOx1sx1OL1PLiuBTRTLw8JX4wdvY%2FJBe15j3%2BwoPSQE2ZIdh1beFd3wr7Ouym7kBskPQ5l%2FaUv1sD%2BBLLZNRNfnzZQTcrfXfs0z7Shh1nU%2BKVw6lq5i1bJwPfXBujh%2Fs3842ZE9cNA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240920T181737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWX2IFSTFNC3S75VD%2F20240920%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=c1bd38501375e9ff6710fec2a7aa74423e8dec7e1c78de825e3c1be3fe2facf4">
            <span className=" text-xl font-semibold">Verifikasi Email Anda</span>
            <span>Hai Figan</span>
            <span>Terimakasih sudah mendaftar di Kravindo</span>
            <span>Untuk menyelesaikan pendaftaran dan mengaktifkan akun Anda, silakan klik tombol di bawah ini:</span>
            <button className="btn-primary">Verikasi Email</button>
            <hr/>
            <span>Jika Anda tidak dapat mengeklik tombol tersebut, Anda dapat menyalin link dibawah ini dan menempelkannya ke peramban web Anda.</span>
            <span className="text-blue-700 break-words underline text-sm">https://auth.kravindo.com/verify/b337e84de8752b27eda3a12363109e7eda3a12363109e7eda3a12363109e7eda3a12363109e7eda3a12363109e</span>
            <span>Tim Support <br /> <span className="text-blue-700">Kravindo.com</span></span>
        </Layout>
    )
}