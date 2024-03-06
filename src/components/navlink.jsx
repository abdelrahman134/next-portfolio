"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navlink({link}) {
    const pathname=usePathname()
  return (
    <Link className={`rounded p-2 ${pathname===link.url && "bg-black text-white"}`}href={link.url}>
        {link.title}
    </Link>
  )
}
