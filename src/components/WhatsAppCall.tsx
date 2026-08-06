// components/WhatsAppCall.tsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCall = () => {
  const phoneNumber = "6285235086814";

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
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        z-100 fixed bottom-2 right-2 md:bottom-4 md:right-4 xl:bottom-10 xl:right-10
        p-4
        bg-green-500 hover:bg-zinc-800
        text-white hover:text-white
        border-2 border-black
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
        hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
        rounded-full
        flex items-center gap-2
        font-bold
        transition-all duration-300
        transform active:scale-90
        hover:scale-105
      "
    >
      <FaWhatsapp size={30} />
      <span className="hidden sm:inline">Contact Us</span>
    </a>
  );
};

export default WhatsAppCall;
