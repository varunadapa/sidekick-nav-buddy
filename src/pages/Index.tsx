
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-white border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Welcome</h3>
                <p className="text-gray-600">Your administrative dashboard is ready.</p>
              </div>
              <div className="aspect-video rounded-xl bg-white border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Reports</h3>
                <p className="text-gray-600">Access your VSP reports and analytics.</p>
              </div>
              <div className="aspect-video rounded-xl bg-white border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                <p className="text-gray-600">Manage your system configuration.</p>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
