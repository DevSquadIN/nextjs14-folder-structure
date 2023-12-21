import Image from "next/image"
import Link from "next/link"
import { FolderTreeIcon } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b py-4">
      <FolderTreeIcon className="h-12 w-12 text-indigo-800" />
      <Link
        href={"https://github.com/DevSquadIN/nextjs14-folder-structure"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src={"/github.svg"} width={24} height={24} alt="GitHub Logo" />
      </Link>
    </header>
  )
}
