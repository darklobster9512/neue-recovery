import { Header } from "@/components/Header";

const HeaderWithDarkBg = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-[hsl(214_100%_14%)] z-40" />
      <Header />
    </div>
  );
};

export { HeaderWithDarkBg };