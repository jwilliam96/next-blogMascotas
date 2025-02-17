import { BlogID } from "@/interfaces"
import clsx from "clsx"
import Image from "next/image"

interface Props {
    data: BlogID
    className: string
    titleColor: string
}

export function CardBlog({ data, className, titleColor }: Props) {
    const { image_Url, description, title, } = data
    return (
        <article className={clsx("max-w-[370px] h-[600px] rounded-md border overflow-hidden mb-8 cursor-pointer hover:scale-105 drop-shadow-lg", className)}>
            <figure className="h-[300px]">
                <Image
                    className="object-cover object-center h-full"
                    alt="imagen de mascota"
                    src={image_Url}
                    width={368}
                    height={300}
                />
            </figure>
            <div className="px-4">
                <h3 className={clsx("text-xl text-center font-bold py-4 ", titleColor)}>{title}</h3>
                <p className="line-clamp-6 text-justify">{description}</p>
            </div>
        </article>
    )
}
