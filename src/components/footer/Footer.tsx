import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { ClassProp } from "@/interfaces";
import { sans } from "@/ui";
import Link from "next/link";
import clsx from "clsx";

export function Footer({ className }: ClassProp) {
    return (
        <footer className="flex flex-col text-center">
            <div className="max-w-[1000px] mx-auto my-10 px-4">
                <h3 className="text-6xl ">Síguenos</h3>
                <p className="my-5">Sigue atento a nuestras novedades en nuestras redes sociales y este al tanto de todo sobre los cuidados de tus mascotas, recuerda, ellos también son parte de nuestra familia y debemos darles los mejores cuidados a nuestras mascotas mas fieles.</p>
                <ul className="flex gap-6 justify-center">
                    <li><FaInstagram size={30} /></li>
                    <li><FaTwitter size={30} /></li>
                    <li><FaFacebook size={30} /></li>
                    <li><FaTelegram size={30} /></li>
                </ul>
            </div>
            <div className={clsx(" flex flex-col gap-4 py-12 ", className)}>
                <Link href={"/"}>
                    <span className={`${sans.className} ml-4 text-3xl`}>Blog<span className="font-bold">Mascota </span></span>
                    <span>© 2024</span>
                </Link>
                <ul className="flex justify-center gap-4 ss:text-xl font-medium">
                    <li><Link href={"/consejos"}>Consejo</Link></li>
                    <li><Link href={"/curiosidades"}>Curiosidades</Link></li>
                    <li><Link href={"/enfermedades"}>Enfermedades</Link></li>
                </ul>
            </div>
        </footer>
    )
}
