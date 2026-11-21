// components/WhatsAppCall.tsx
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { siteContent } from "@/const/data";

const WhatsAppCall = () => {
  const phoneNumber = "6285235086814";

  // Detailed message template for information gathering
  const message = `
Hello, I am interested in ordering a website for my home-service business.

Here are my project details:

1. *Business name*:
2. *Service type* (for example: plumbing, HVAC, electrical, cleaning):
3. *Operating location / service area*:
4. *Website goals* (tick all that apply):
   - [ ] Company information / profile
   - [ ] Online service booking
   - [ ] Project portfolio
   - [ ] Customer testimonials
   - [ ] WhatsApp / contact integration
   - [ ] Online payment
   - [ ] Other: ...

5. *Main features*:
   - High-converting landing page
   - Service pages
   - Booking / scheduling system
   - About page
   - Blog / articles
   - Other: ...

6. *Design and style*:
   - Preferred colours:
   - Example website (URL):
   - Custom design or template-based design?

7. *Available budget*:
8. *Timeline / deadline*:

Thank you. I look forward to your response.
`;

  const encodedMessage = encodeURIComponent(message.trim());

  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="z-100 fixed bottom-2 right-2 md:bottom-4 md:right-4 xl:bottom-10 xl:right-10 p-4 bg-green-500 text-white rounded-full flex items-center gap-2 font-medium hover:scale-105 transform transition duration-300 active:scale-95 shadow-lg"
    >
      <FaWhatsapp size={30} />
      <span className="hidden md:block">{siteContent.whatsappAction}</span>
    </Link>
  );
};

export default WhatsAppCall;
