import { TopMenu } from "@/components";
import { fontTitle } from "@/ui";
import clsx from "clsx";

interface Props {
    className: string
    title: string
}

export function Header({ className, title }: Props) {
    return (
        <header className={clsx(`h-[500px]  w-full bg-no-repeat bg-cover bg-center text-white `,
            className
        )}>
            <div className="max-w-[1000px] m-auto ">
                <TopMenu />
                <h2 className={`text-4xl ss:text-5xl px-2 md:text-8xl py-10 text-center font-bold italic drop-shadow-2xl ${fontTitle.className} `}>{title}</h2>

            </div>
        </header>
    )
}
