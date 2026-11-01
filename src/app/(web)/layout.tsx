import Footer from "@/features/footer/footer";
import NavBar from "@/features/navbar/navbar";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
