// components/WhatsAppCall.tsx
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCall = () => {
  const phoneNumber = "6285235086814";

  // Pesan template yang lebih rinci untuk information gathering
  const message = `
Halo, saya tertarik untuk memesan jasa pembuatan website untuk bisnis home services saya.

Berikut detail kebutuhan saya:

1. *Nama Usaha*: 
2. *Jenis Layanan* (misal: Plumbing, HVAC, Listrik, Kebersihan, dll.): 
3. *Lokasi / Wilayah Operasional*: 
4. *Tujuan Website* (centang yang sesuai):
   - [ ] Informasi perusahaan / profil
   - [ ] Pemesanan jasa online
   - [ ] Galeri portofolio / proyek
   - [ ] Testimoni pelanggan
   - [ ] Integrasi WhatsApp / kontak
   - [ ] Pembayaran online (jika ada)
   - [ ] Lainnya: ...

5. *Fitur Utama yang Diinginkan*:
   - Landing page yang menarik
   - Halaman layanan (deskripsi setiap layanan)
   - Sistem booking / jadwal
   - Halaman tentang kami
   - Blog / artikel (jika perlu)
   - Lainnya: ...

6. *Desain & Gaya*:
   - Warna favorit: 
   - Contoh website yang saya sukai (URL): 
   - Apakah perlu desain custom atau pakai template? 

7. *Anggaran yang Disediakan*: 
8. *Timeline / Deadline*: 

Terima kasih, saya tunggu balasannya.
`;

  const encodedMessage = encodeURIComponent(message.trim());

  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="z-100 fixed bottom-2 right-2 md:bottom-4 md:right-4 xl:bottom-10 xl:right-10 p-4 bg-green-500 text-white rounded-full flex items-center gap-2 font-semibold hover:scale-105 transform transition duration-300 active:scale-95 shadow-lg"
    >
      <FaWhatsapp size={30} />
      <span className="hidden md:block">Contact Us</span>
    </Link>
  );
};

export default WhatsAppCall;
