import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Not-Found',
    description: 'esta ruta no contienen nada, no se encontró ',
};

export default function NotFoundPage() {
    return (
        <section className="min-h-screen bg-[#0b1727] text-white flex justify-center items-center">
            <div className="flex flex-col-reverse justify-end items-center gap-20 px-6 lg:flex-row">
                <Image src={"/notFound.svg"} width={500} height={500} alt="una ilustración" />
                <div className="lg:max-w-4xl text-center lg:text-start">
                    <h2 className="text-8xl font-bold leading-none md:text-[160px] mb-6">
                        404
                    </h2>
                    <p className="text-3xl opacity-80 md:text-5xl">
                        Page not Available!
                    </p>
                    <Link href={"/"} >
                        <button className="hover:bg-[#f9a826] bg-[#f9a826d5] px-6 py-1 mt-4 rounded-xl">
                            Regresar
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}