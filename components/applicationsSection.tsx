import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { applications } from "@/constants";

export default function ApplicationsSection() {

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="font-semibold text-gray-700">Applications</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-purple-700">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-2">Mentors</div>
        {applications.slice(0, 1).map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <div className="flex items-center gap-3">
              <Checkbox id={`app-${app.id}`} />
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt={app.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{app.name}</span>
                <span className="text-xs text-gray-500">{app.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-gray-500">{app.status}</span>
                {app.country && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span>{app.flag}</span>
                    <span className="text-gray-500">{app.country}</span>
                  </>
                )}
                {app.date && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">{app.date}</span>
                  </>
                )}
              </div>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs border-red-200 text-red-500 hover:bg-red-50"
                >
                  Reject
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="h-8 text-xs bg-purple-700 hover:bg-purple-800"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="text-xs text-gray-500 mt-4 mb-2">Students</div>
        {applications.slice(1).map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <div className="flex items-center gap-3">
              <Checkbox id={`app-${app.id}`} />
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt={app.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{app.name}</span>
                <span className="text-xs text-gray-500">{app.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-gray-500">{app.status}</span>
                {app.badge && (
                  <Badge className={app.badgeColor}>{app.badge}</Badge>
                )}
              </div>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs border-red-200 text-red-500 hover:bg-red-50"
                >
                  Reject
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="h-8 text-xs bg-purple-700 hover:bg-purple-800"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Last application with name overlay */}
        <div className="relative mt-2">
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center gap-3">
              <Checkbox id="app-last" />
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Maxwell Smith</span>
                <span className="text-xs text-gray-500">
                  maxwellsmith@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-gray-500">Product Designer</span>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs border-red-200 text-red-500 hover:bg-red-50"
                >
                  Reject
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="h-8 text-xs bg-purple-700 hover:bg-purple-800"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-pink-500 text-white px-3 py-1 text-sm">
            Jibola Paul
          </div>
        </div>
      </div>
    </div>
  );
}
