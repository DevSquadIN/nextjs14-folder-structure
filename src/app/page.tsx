import React from "react"
import { Separator } from "@components/ui/separator"

import { folderConfig } from "@/config/folder"

export default function Home() {
  return (
    <main className="mx-auto my-10 min-h-[72.5vh] max-w-3xl space-y-8">
      <div className="space-y-8">
        {folderConfig.map((each, index) => (
          <div key={index} className="space-y-4">
            <p>
              <span className="font-semibold">{each.folderName}:</span>{" "}
              {each.desc}{" "}
            </p>
            <Separator />
          </div>
        ))}
      </div>
    </main>
  )
}
