import { type BlogID } from "@/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: BlogID
}

export function HomePost({ data }: Props) {

    const { id, description, title, image_Url } = data

    return (
        <section className="my-10 grid md:grid-cols-2 md:gap-8">
            <Image
                className={`w-full rounded-lg h-full object-cover ${+id % 2 === 0 && "md:order-2"}`}
                src={image_Url}
                alt="un perro"
                height={300}
                width={468}
            />
            <div className={`flex flex-col ${+id % 2 === 0 && "order-1"}`}>
                <h2 className="text-3xl font-bold py-8">{title}</h2>
                <p className="grow">{description}</p>
                <Link href={`/${title.toLocaleLowerCase()}`} className="bg-amber-100 my-6 md:my-0 py-3 px-6 rounded-md text-center md:max-w-max ">Leer mas</Link>
            </div>
        </section>
    )
}
