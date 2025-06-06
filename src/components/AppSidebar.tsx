import { useState } from "react";
import { LayoutDashboard, FileText, ChevronDown, ChevronRight, BarChart3, FileBarChart, Settings, LogOut, User } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
const navigationItems = [{
  title: "Dashboard",
  icon: LayoutDashboard,
  url: "/",
  isActive: true
}, {
  title: "VSP Report",
  icon: FileText,
  items: [{
    title: "Generate Report",
    icon: FileBarChart,
    url: "/vsp/generate"
  }, {
    title: "Report History",
    icon: BarChart3,
    url: "/vsp/history"
  }, {
    title: "Analytics",
    icon: BarChart3,
    url: "/vsp/analytics"
  }]
}];
export function AppSidebar() {
  const [openItems, setOpenItems] = useState<string[]>(["VSP Report"]);
  const [activeItem, setActiveItem] = useState<string>("/");
  const toggleItem = (title: string) => {
    setOpenItems(prev => prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]);
  };
  const handleItemClick = (url: string) => {
    setActiveItem(url);
  };
  return <Sidebar className="w-64 border-r-0" style={{
    backgroundColor: '#FAE17F',
    color: '#103C42'
  }}>
      <SidebarHeader style={{
      borderColor: 'rgba(16, 60, 66, 0.2)'
    }} className="p-6 border-b bg-[#fae17f]">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
            backgroundColor: '#103C42'
          }}>
              <div className="text-white font-bold text-lg">🦅</div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold" style={{
            color: '#103C42'
          }}>TGANB</h2>
            <p className="text-sm" style={{
            color: '#103C42',
            opacity: 0.7
          }}>Administration</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4 bg-[FAE17F] bg-[#fae17f]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider mb-2" style={{
          color: '#103C42',
          opacity: 0.7
        }}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map(item => <SidebarMenuItem key={item.title}>
                  {item.items ? <Collapsible open={openItems.includes(item.title)} onOpenChange={() => toggleItem(item.title)}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between rounded-lg hover:bg-black/10" style={{
                    color: '#103C42'
                  }}>
                          <div className="flex items-center">
                            <item.icon className="mr-3 h-5 w-5" />
                            <span>{item.title}</span>
                          </div>
                          {openItems.includes(item.title) ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="ml-6 mt-1 space-y-1">
                          {item.items.map(subItem => <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild className="hover:bg-black/10 rounded-md" style={{
                        backgroundColor: activeItem === subItem.url ? '#103C42' : 'transparent',
                        color: activeItem === subItem.url ? 'white' : '#103C42',
                        opacity: activeItem === subItem.url ? 1 : 0.8
                      }}>
                                <a href={subItem.url} className="flex items-center" onClick={() => handleItemClick(subItem.url)}>
                                  <subItem.icon className="mr-2 h-4 w-4" />
                                  <span className="text-sm">{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>)}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible> : <SidebarMenuButton asChild className="hover:bg-black/10 rounded-lg" style={{
                backgroundColor: activeItem === item.url ? '#103C42' : 'transparent',
                color: activeItem === item.url ? 'white' : '#103C42'
              }}>
                      <a href={item.url} className="flex items-center" onClick={() => handleItemClick(item.url)}>
                        <item.icon className="mr-3 h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>}
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t" style={{
      borderColor: 'rgba(16, 60, 66, 0.2)'
    }}>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-black/10 cursor-pointer">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
            backgroundColor: '#103C42'
          }}>
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium" style={{
              color: '#103C42'
            }}>Admin User</p>
              <p className="text-xs" style={{
              color: '#103C42',
              opacity: 0.7
            }}>admin@tganb.gov</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start hover:bg-black/10" style={{
          color: '#103C42'
        }} size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-red-500/20" style={{
          color: '#103C42'
        }} size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>;
}