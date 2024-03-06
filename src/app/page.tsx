import React from "react"
import { FOLDER_CONFIG } from "@/src/config/folder"
import { Separator } from "@components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto my-10 min-h-[72.5vh] max-w-3xl space-y-8">
      <div className="space-y-8">
        {FOLDER_CONFIG.map((each, index) => (
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
