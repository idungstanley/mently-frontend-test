import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Users,
  MessageSquare,
  DollarSign,
  Gift,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";

export const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "#", active: true },
    { name: "Programs", icon: BookOpen, href: "#" },
    { name: "Activities", icon: Activity, href: "#" },
    { name: "Users", icon: Users, href: "#" },
    { name: "Forums", icon: MessageSquare, href: "#" },
    { name: "Finances", icon: DollarSign, href: "#" },
    { name: "Rewards", icon: Gift, href: "#" },
    { name: "Analytics", icon: BarChart2, href: "#", comingSoon: true },
    { name: "Settings", icon: Settings, href: "#" },
    { name: "Log Out", icon: LogOut, href: "#" },
];
  
export const programs = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      badge: "Bootcamp",
    badgeColor: "bg-purple-100 text-[#0077FF]",
      banner: "/images/banner1.png",
      description:
        "This program is a hands-on guide designed for designers who want to master user flows and confidently apply UI & UX best practices in their designs. This practical approach...",
      mentors: [
        "/images/mentor.png",
        "/images/mentor1.png",
        "/images/mentor2.png",
    ],
    role: "Mentor",
      buttonLabel: "analysis",
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      badge: "Group Call",
      badgeColor: "bg-[#D4F3D4] text-[#008000]",
      banner: "/images/banner2.png",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it in their designs. This practical approach...",
      mentors: [
        "/images/mentor.png"
      ],
      role: "Hosted By: Faith Okolo",
      buttonLabel: "analysis",
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      badge: "Group Call",
      badgeColor: "bg-[#D4F3D4] text-[#008000]",
      banner: "/images/banner2.png",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it in their designs. This practical approach...",
      mentors: [
        "/images/mentor.png",
      ],
      role: "Hosted By: Self ",
      buttonLabel: "assign mentor",
    },
];
  
export  const applications = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      status: "Product Designer",
      country: "United States",
      flag: "🇺🇸",
      date: "April 21",
    },
    {
      id: 2,
      name: "Adesii Samuel",
      email: "adesiisamuel@gmail.com",
      status: "Frontend Developer",
      badge: "New",
      badgeColor: "bg-pink-100 text-pink-800",
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      status: "Product Designer",
    },
    {
      id: 4,
      name: "Adesii Samuel",
      email: "adesiisamuel@gmail.com",
      status: "Frontend Developer",
    },
    {
      id: 5,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      status: "Product Designer",
    },
];
  
export const data = [
    { name: "Students", value: 200, color: "#62B2FD" },
    { name: "Mentors", value: 8, color: "#9BDFC4" },
    { name: "Programs", value: 22, color: "#F99BAB" },
    { name: "Others", value: 10, color: "#FFB44F" },
];
  
 export const groupCalls = [
    {
      id: 1,
      status: "ongoing",
      statusColor: "bg-green-100 text-green-800",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Oct 23, 2023",
      time: "10:00 AM",
      host: "Richard Raphael",
      hostTitle: "Principal Tech Lead",
      participants: 5,
      image: "/images/banner2.png",
    },
    {
      id: 2,
      status: "incoming",
      statusColor: "bg-blue-100 text-blue-800",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Oct 23, 2023",
      time: "10:00 AM",
      host: "Richard Raphael",
      hostTitle: "Product Manager",
      participants: 5,
      image: "/images/righthandbanner2.png",
    },
    {
      id: 3,
      status: "ongoing",
      statusColor: "bg-green-100 text-green-800",
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Oct 23, 2023",
      time: "10:00 AM",
      host: "Richard Raphael",
      hostTitle: "Senior Developer",
      participants: 5,
      image: "/images/righthandbanner3.png",
    },
];
  
export const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      role: "Product Designer",
    },
    {
      id: 2,
      name: "Adesii Samuel",
      role: "Product Designer",
    },
];
  
export const activities = [
    {
      id: 1,
      title: "KYC Verification",
      description: "50 new persons just signed up on Munity",
      time: "20 minutes ago",
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      title: "New User Sign Up!",
      description: "15 new persons just signed up on Munity",
      time: "25 minutes ago",
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      title: "Withdrawal Request",
      description: "Maxwell requested a withdrawal",
      time: "20 minutes ago",
      icon: "/placeholder.svg?height=32&width=32",
    },
  ];