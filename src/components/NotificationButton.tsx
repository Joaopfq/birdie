"use client"

import { BellIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useNotificationContext } from "@/context/NotificationContext"


export function NotificationButton() {

  const { unreadCount } = useNotificationContext();

  console.log(unreadCount)

  return (
    <Button variant="ghost" className="flex items-center gap-2" asChild>
      <Link href="/notifications">
        <BellIcon className="w-4 h-4" />
        <span className="hidden lg:inline">Notifications</span>
        {unreadCount > 0 && (
          <Badge className="h-5 px-2 text-xs font-semibold rounded-full">
            {unreadCount > 9 ? "9+" : unreadCount}
          </Badge>
        )}
      </Link>
    </Button>
  )
}
