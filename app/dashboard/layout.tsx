import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Grid,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: Grid,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/40">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <BookOpen className="w-6 h-6" />
              <span>EduGenius</span>
            </div>
          </div>
          <nav className="flex-1 p-4">
            <ul className="grid gap-2">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground rounded-lg hover:bg-muted"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
