import Footer from "@/features/footer/footer";
import NavBar from "@/features/navbar/navbar";
import { Suspense } from "react";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </div>
  );
}
