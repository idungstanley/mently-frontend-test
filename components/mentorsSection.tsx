import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { mentors } from "@/constants";

export default function MentorsSection() {
  

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
          <h2 className="font-semibold text-gray-700">Mentors</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={mentor.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{mentor.name}</span>
                <span className="text-xs text-gray-500">{mentor.role}</span>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              className="h-8 text-xs bg-purple-700 hover:bg-purple-800"
            >
              Message
            </Button>
          </div>
        ))}

        <Button
          variant="ghost"
          size="sm"
          className="w-full text-purple-700 mt-4"
        >
          See all
        </Button>
      </div>
    </div>
  );
}
