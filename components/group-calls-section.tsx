import { MoreHorizontal, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { groupCalls } from "@/constants";
import { LuEllipsisVertical } from "react-icons/lu";

export default function GroupCallsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-[650px]">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/images/menu.png"
            alt="Logo"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <h2 className="font-semibold text-gray-700">Group Calls</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-purple-700">
            See all
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <LuEllipsisVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="pr-4 py-4 pl-2 space-y-4 flex gap-2">
        {groupCalls.map((call) => (
          <div
            key={call.id}
            className="border rounded-lg overflow-hidden w-[240px] h-[264px] bg-[#F9F7FF]"
          >
            <div >
              <Image
                src={call.image || "/placeholder.svg"}
                alt={call.title}
                width={300}
                height={80}
                className="w-full h-20 object-cover"
              />
              
                <Badge className={call.statusColor}>{call.status}</Badge>
              
              {call.id === 1 && (
                <div className="absolute bottom-0 left-0 right-0 bg-purple-700/80 text-white p-2 text-center">
                  Richard Raphael
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-sm">
                {call.title}
              </h3>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{call.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{call.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-6 w-6 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Host"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">{call.host}</span>
                  <span className="text-xs text-gray-500">
                    {call.hostTitle}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className="h-6 w-6 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src="/placeholder.svg?height=24&width=24"
                          alt="Participant"
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    +{call.participants}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs h-8">
                    View Participants
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="text-xs h-8 bg-purple-700 hover:bg-purple-800"
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
