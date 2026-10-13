import TopAppBar from "@/feature/top-app-bar/top-app-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent text-primary font-poppins h-screen w-full">
      <TopAppBar />
      {children}
    </div>
  );
}
