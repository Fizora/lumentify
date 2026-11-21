import { C, Container } from "@/components/ui/Swiss";

const Skathes = () => (
  <div
    aria-hidden="true"
    className="hidden border-y md:block"
    style={{ borderColor: C.RULE, backgroundColor: C.BG }}
  >
    <Container
      className="h-14"
      style={
        {
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent 0,
            transparent 11px,
            ${C.RULE} 11px,
            ${C.RULE} 12px
          )`,
        }
      }
    />
  </div>
);

export default Skathes;
