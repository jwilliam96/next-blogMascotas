
import imageHome from "/public/IMAGE/home/home.jpg"
import { TopMenu } from '@/components'
import Image from 'next/image'

export function HomeHeader() {
    return (
        <header className=" relative flex justify-center h-[600px] w-full text-white">
            <Image
                className="object-cover hidden md:block"
                sizes="(min-width: 808px) 100vw"
                alt='un perro acostado'
                src={imageHome}
                priority
                fill
            />
            <Image
                className="object-cover w-full h-full absolute md:hidden inset-0"
                alt='un perro acostado'
                src={imageHome}
                width={320}
                height={600}
                priority
            />
            <div className="absolute inset-0 bg-black/40 z-20" />
            <div className="max-w-[1000px] m-auto absolute z-40">
                <TopMenu />
                <h1 className="text-3xl sm:text-5xl md:py-10 font-bold text-center">Un Blog sobre el cuidado y consejos para tus mascotas</h1>
                <p className="text-center text-xl mt-10">Aquí podrás encontrar curiosidades, consejos y muchas cosas más sobre tus mascotas. </p>
            </div>
        </header>
    )
}
