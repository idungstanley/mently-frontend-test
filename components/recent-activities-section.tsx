import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { activities } from "@/constants";

export default function RecentActivitiesSection() {

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden scrollbar-hide">
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
          <h2 className="font-semibold text-gray-700">Recent Activities</h2>
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

      <div className="p-4 space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
              <Image
                src={activity.icon || "/placeholder.svg"}
                alt={activity.title}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{activity.title}</span>
              <span className="text-xs text-gray-600">
                {activity.description}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
