import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Image
        src="/vectors/wave-vector.svg"
        width={500}
        height={100}
        alt="Description"
        priority={true}
        className="w-full"
      />
      <Footer />
    </div>
  );
}
