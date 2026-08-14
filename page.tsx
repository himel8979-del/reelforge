import Sidebar from "@/components/Sidebar";
import VideoPreview from "@/components/VideoPreview";
import Timeline from "@/components/Timeline";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-void">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <VideoPreview />
        <Timeline />
      </div>
    </div>
  );
}
