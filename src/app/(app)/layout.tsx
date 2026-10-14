import TopAppBar from "@/feature/top-app-bar/top-app-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-primary font-poppins h-screen w-full">
      <TopAppBar />

      <div className="w-full pl-[390px]">{children}</div>
    </div>
  );
}
