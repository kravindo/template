import Layout from "../../components/layout"

export default function () {
    return (
        <Layout companyName="Kravindo" companyDomain="https://kravindo.com" companyEmail="hello@kravindo.com" customerEmail="talentafigan@gmail.com" companyLogo="https://kravindo.s3.ap-southeast-2.amazonaws.com/company/company.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaDmFwLXNvdXRoZWFzdC0yIkYwRAIgEuVcVLAaJN6zhxqJzId%2B04qDYp3rQ330Tyo7Ok8qeuICICLtWGh6IVpepFJIi%2BBFoJ1%2FSWvJ7KmnOrHSAJOVjmzOKuQCCHsQABoMNDYzNDcwOTU3NzcwIgzP53yhUavymnhjJHsqwQLScRTOAgsUqE4K9efAGtF%2BB4d8Zgvyi5KXyAClkuPRE0wX6W6HIreDVZl6nqyhyiMWZ2FeL6TUOtDMean9SR3Ghq0ZXUnMul9NO3QFwmkGtLGjNIrMU%2BPk%2FDWwCCV8FFXLZmCcXs35jWfQTT%2BuFoixoTLTRW196PZudmNXrcvq3%2Be3qQDP0lAJPzN6aOH5Lf7q9ZKubkTRit6%2BtXMF0uj7XhzUpTO7xkEkjxwjjHSORjuMnCIlFJAdMP5S8CpLJV1HThOfC%2FQl6LOMcObcmZ0kkBH8nMOnaa9EAv%2B62vzABtv7HDjtXu0MFGiPN%2FKP80G%2BzjwGXMh8%2F%2Ft1jZ4E0Gp2qbuIYau0oFSP1rFSt2RSVUoZU4p29iN372ZhLcywx%2B8YD9VxJ6e5zbvi7MV5dC7iwbZ2HeznSq%2BHNfoZgcmjVh0wpvi2twY6tAJjKTaT6XAk6A1S5wTZ%2FmQS065JHCq9ec2j5IZiBTKyIzTul5jvbWfSL68uVK9t5TaVObW%2BXeMm3%2BhWSb%2B%2FYJ45YwQf6ilb45VAudpG5rGJiFgzXYqFz1Frjn7X39BMDPhBCWxJXTeKjL%2Bx6FCY%2FjVFG2USiOtFChueyVIolpKvmjEXlqP%2F92AunJCN9S3EjDhQ4RZnvRslnDELK3K4x8ZSxmsZWJgv%2FUoVfejx8FiTYl25blCjV0FBrF%2B8xp2OJjlOu3PNOevcFW%2BIA4gXiOx1sx1OL1PLiuBTRTLw8JX4wdvY%2FJBe15j3%2BwoPSQE2ZIdh1beFd3wr7Ouym7kBskPQ5l%2FaUv1sD%2BBLLZNRNfnzZQTcrfXfs0z7Shh1nU%2BKVw6lq5i1bJwPfXBujh%2Fs3842ZE9cNA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240920T181737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWX2IFSTFNC3S75VD%2F20240920%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=c1bd38501375e9ff6710fec2a7aa74423e8dec7e1c78de825e3c1be3fe2facf4">
            <span className="text-xl font-semibold">Pembayaran Pesanan INV1394303939 Telah Diterima</span>
            <span>Hai Figan</span>
            <span>Pembayaran terverifikasi dan pesanan Anda kini sedang dipersiapkan untuk pengiriman</span>
            <div className="grid grid-cols-2 gap-3 border border-black p-3">
                <div className="flex flex-col gap-3">
                    <span>Total bayar</span>
                    <span>Metode pembayaran</span>
                    <span>Tanggal bayar</span>
                </div>
                <div className="flex flex-col gap-3 font-semibold">
                    <span>Rp.159.000</span>
                    <span>Bank Transfer (BCA)</span>
                    <span>29-01-2024</span>
                </div>
            </div>
            <span>Kami akan mengirimkan pemberitahuan mengenai konfirmasi pengiriman yang akan menyertakan informasi pelacakan setelah pesanan Anda dikirim.</span>
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
                                <img src="https://kravindo.s3.ap-southeast-2.amazonaws.com/product/AIR%2BJORDAN%2B1%2BLOW.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaDmFwLXNvdXRoZWFzdC0yIkYwRAIgEuVcVLAaJN6zhxqJzId%2B04qDYp3rQ330Tyo7Ok8qeuICICLtWGh6IVpepFJIi%2BBFoJ1%2FSWvJ7KmnOrHSAJOVjmzOKuQCCHsQABoMNDYzNDcwOTU3NzcwIgzP53yhUavymnhjJHsqwQLScRTOAgsUqE4K9efAGtF%2BB4d8Zgvyi5KXyAClkuPRE0wX6W6HIreDVZl6nqyhyiMWZ2FeL6TUOtDMean9SR3Ghq0ZXUnMul9NO3QFwmkGtLGjNIrMU%2BPk%2FDWwCCV8FFXLZmCcXs35jWfQTT%2BuFoixoTLTRW196PZudmNXrcvq3%2Be3qQDP0lAJPzN6aOH5Lf7q9ZKubkTRit6%2BtXMF0uj7XhzUpTO7xkEkjxwjjHSORjuMnCIlFJAdMP5S8CpLJV1HThOfC%2FQl6LOMcObcmZ0kkBH8nMOnaa9EAv%2B62vzABtv7HDjtXu0MFGiPN%2FKP80G%2BzjwGXMh8%2F%2Ft1jZ4E0Gp2qbuIYau0oFSP1rFSt2RSVUoZU4p29iN372ZhLcywx%2B8YD9VxJ6e5zbvi7MV5dC7iwbZ2HeznSq%2BHNfoZgcmjVh0wpvi2twY6tAJjKTaT6XAk6A1S5wTZ%2FmQS065JHCq9ec2j5IZiBTKyIzTul5jvbWfSL68uVK9t5TaVObW%2BXeMm3%2BhWSb%2B%2FYJ45YwQf6ilb45VAudpG5rGJiFgzXYqFz1Frjn7X39BMDPhBCWxJXTeKjL%2Bx6FCY%2FjVFG2USiOtFChueyVIolpKvmjEXlqP%2F92AunJCN9S3EjDhQ4RZnvRslnDELK3K4x8ZSxmsZWJgv%2FUoVfejx8FiTYl25blCjV0FBrF%2B8xp2OJjlOu3PNOevcFW%2BIA4gXiOx1sx1OL1PLiuBTRTLw8JX4wdvY%2FJBe15j3%2BwoPSQE2ZIdh1beFd3wr7Ouym7kBskPQ5l%2FaUv1sD%2BBLLZNRNfnzZQTcrfXfs0z7Shh1nU%2BKVw6lq5i1bJwPfXBujh%2Fs3842ZE9cNA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240920T182232Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWX2IFSTFNC3S75VD%2F20240920%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=a23ca2d7ff8e1dcb61b4a359728abb6d73efbd30b07be98e86aa690ae8e1d12f" alt="Product" className="w-12 h-12 mr-2" />
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
        </Layout>
    )
}