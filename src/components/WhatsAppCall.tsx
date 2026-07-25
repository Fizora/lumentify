import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCall = () => {
  return (
    <a
      href="https://wa.me/085235086814"
      className="z-100 fixed bottom-2 right-2 md:bottom-4 md:right-4 xl:bottom-10 xl:right-10 p-4 bg-green-500 text-white rounded-full flex items-center gap-2 font-semibold hover:scale-105 transform transition duration-300 active:scale-95"
    >
      <FaWhatsapp size={30}></FaWhatsapp>
      Contact Us
    </a>
  );
};

export default WhatsAppCall;
