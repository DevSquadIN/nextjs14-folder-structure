import React from "react"
import { folderConfig } from "@/common/config/folder"
import { Separator } from "@components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto my-10 min-h-[72.5vh] max-w-3xl space-y-8">
      <div className="space-y-8">
        {folderConfig.map((each, index) =>
          each.subFolders ? (
            <React.Fragment key={index}>
              <details>
                <summary>
                  <span className="font-semibold">{each.folderName}:</span>{" "}
                  {each.desc}{" "}
                </summary>
                <div className="mt-4 space-y-8">
                  {each.subFolders.map((item, index) => (
                    <div key={index} className="ml-8 space-y-4">
                      <p>
                        <span className="font-semibold">
                          {item.folderName}:
                        </span>{" "}
                        {item.desc}{" "}
                      </p>
                      <Separator />
                    </div>
                  ))}
                </div>
              </details>
              <Separator />
            </React.Fragment>
          ) : (
            <div key={index} className="space-y-4">
              <p>
                <span className="font-semibold">{each.folderName}:</span>{" "}
                {each.desc}{" "}
              </p>
              <Separator />
            </div>
          )
        )}
      </div>
    </main>
  )
}
