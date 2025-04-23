"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { navItems } from "@/constants";
import Image from "next/image";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[230px] bg-[#340260] text-[#C2C2C2] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Close button - mobile only */}
          <div className="lg:hidden absolute right-4 top-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-white hover:bg-purple-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo */}
          <div className="flex items-center px-6 py-6">
            <div className="flex items-center gap-2 justify-between w-full">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full w-[116px] h-[27px]"
              />
              <Image
                src="/images/collapse.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full size-6"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-3 text-sm font-medium rounded-lg",
                  item.active
                    ? "bg-white text-purple-900"
                    : "text-white hover:bg-purple-800"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
                {item.comingSoon && (
                  <span className="ml-auto text-xs bg-purple-800 text-white px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-[var(--color-sidebar-border)]">
            <div className="bg-[var(--color-sidebar-accent)] rounded-lg p-4 text-sm">
              <p>Got some questions, enquiries or need help?</p>
              <Button
                variant="link"
                className="text-[var(--color-sidebar-foreground)] p-0 h-auto mt-1 text-sm"
              >
                Visit Mighty Help Desk Here
              </Button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm">Switch to Classic Mode</span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
