import Header from "./_components/Header";
import ResizableLayout from "./_components/ResizableLayout";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />
        <ResizableLayout />
      </div>
    </div>
  );
}