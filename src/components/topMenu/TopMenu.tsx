"use client"

import { useParams } from "next/navigation";
import { SvgHuella, sans } from "@/ui";
import Link from "next/link";
import clsx from "clsx";


export function TopMenu() {

    const urls = ["consejos", "curiosidades", "enfermedades"]

    const params = useParams()

    return (
        <nav className="max-w-[1200px] px-4 mx-auto flex flex-col flex-wrap justify-center items-center  py-12 md:justify-between md:flex-row ">
            <Link href={"/"} className="flex items-center">
                <SvgHuella className="#B85B30" />
                <span className={`${sans.className} ml-2 text-3xl`}>Blog<span className="font-bold">Mascota</span></span>
            </Link>

            <ul className="flex gap-4 mt-4 sm:gap-6 ss:text-xl md::m-0 cursor-pointer ">
                {
                    urls.map(url => (
                        <li key={url}>
                            <Link
                                className={clsx("capitalize hover:underline", params.blog === url && "underline")}
                                href={`/${url}`}
                            >
                                {url}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
