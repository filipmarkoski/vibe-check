import { cn } from "~/lib/utils"
import { ReactNode } from "react"
import Image from "next/image"

type Props = {
  imageUrl: string
  caption: ReactNode
  className?: string
}

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-4 border-black bg-main font-base shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300",
        className,
      )}
    >
      <div className="relative w-full aspect-4/3">
        <Image className="object-cover" src={imageUrl} alt="Product image" fill />
      </div>
      <figcaption className="border-t-4 text-main-foreground border-black p-4 bg-white">
        {caption}
      </figcaption>
    </figure>
  )
}
