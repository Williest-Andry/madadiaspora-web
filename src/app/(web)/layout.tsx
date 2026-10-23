import Footer from "@/feature/footer/footer";
import NavBar from "@/feature/navbar/navbar";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
