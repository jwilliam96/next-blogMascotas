import { TopMenu } from "@/components";
import { fontTitle } from "@/ui";
import Image from "next/image";
import clsx from "clsx";

interface Props {
    searchParams: string
    title: string
}

export function Header({ title, searchParams }: Props) {


    return (
        <header className={clsx(`flex justify-center relative h-[500px] w-full text-white`)}>
            <Image
                alt="imagen de un perro"
                src={`/IMAGE/post/${searchParams}.avif`}
                className="object-cover"
                priority
                fill
            />
            <div className="absolute z-20 bg-black/30 inset-0" />

            <div className="max-w-[1000px] w-full m-auto absolute z-30">
                <TopMenu />
                <h2
                    className={`text-4xl ss:text-5xl px-2 md:text-8xl py-10 text-center font-bold italic drop-shadow-2xl ${fontTitle.className} `}
                >
                    {title}
                </h2>

            </div>
        </header>
    )
}
