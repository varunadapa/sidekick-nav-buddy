
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  ChevronDown,
  ChevronRight,
  BarChart3,
  FileBarChart,
  Settings,
  LogOut,
  User
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
    isActive: true,
  },
  {
    title: "VSP Report",
    icon: FileText,
    items: [
      { title: "Generate Report", icon: FileBarChart, url: "/vsp/generate" },
      { title: "Report History", icon: BarChart3, url: "/vsp/history" },
      { title: "Analytics", icon: BarChart3, url: "/vsp/analytics" },
    ],
  },
];

export function AppSidebar() {
  const [openItems, setOpenItems] = useState<string[]>(["VSP Report"]);

  const toggleItem = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className="w-64 bg-gradient-to-b from-yellow-600 to-yellow-700 text-white border-r-0">
      <SidebarHeader className="p-6 border-b border-yellow-500/30">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-lg">🦅</div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">TGANB</h2>
            <p className="text-yellow-200 text-sm">Administration</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-yellow-200 text-xs uppercase tracking-wider mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <Collapsible
                      open={openItems.includes(item.title)}
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between hover:bg-yellow-500/20 text-white rounded-lg">
                          <div className="flex items-center">
                            <item.icon className="mr-3 h-5 w-5" />
                            <span>{item.title}</span>
                          </div>
                          {openItems.includes(item.title) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="ml-6 mt-1 space-y-1">
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton 
                                asChild
                                className="hover:bg-yellow-500/20 text-yellow-100 rounded-md"
                              >
                                <a href={subItem.url} className="flex items-center">
                                  <subItem.icon className="mr-2 h-4 w-4" />
                                  <span className="text-sm">{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton 
                      asChild
                      className={`hover:bg-yellow-500/20 rounded-lg ${
                        item.isActive ? 'bg-yellow-500/30 text-white font-medium' : 'text-white'
                      }`}
                    >
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-yellow-500/30">
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-yellow-500/20 cursor-pointer">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-yellow-200">admin@tganb.gov</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-yellow-500/20 text-white"
            size="sm"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-red-500/20 text-white"
            size="sm"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
