import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-4">
      <h1 className="pb-3 text-sm font-bold text-gray-700">
        Resources/Credits
      </h1>
      <div className="space-y-1 *:ml-4 *:block *:text-xs *:font-semibold *:text-gray-600">
        <Link
          href="https://blog.dennisokeeffe.com/blog/2021-12-06-nextjs-enterprise-project-structure"
          rel="noopener noreferrer"
        >
          <p className="flex items-start gap-0.5">
            1. Next.js Enterprise Project Structure.{" "}
            <ExternalLinkIcon className="size-3 text-gray-800 " />
          </p>
        </Link>
        <Link
          href="https://josemukorivo.com/blog/how-i-approach-and-structure-enterprise-frontend-applications-after-4-years-of-using-nextjs-2f5"
          rel="noopener noreferrer"
        >
          <p className="flex items-start gap-0.5">
            2. How I approach and structure enterprise frontend applications
            after 4 years of using NextJS.
            <ExternalLinkIcon className="size-3 text-gray-800 " />
          </p>
        </Link>
      </div>
    </footer>
  )
}
