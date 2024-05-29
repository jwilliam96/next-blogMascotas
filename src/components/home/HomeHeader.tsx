
import { TopMenu } from '@/components'

export function HomeHeader() {
    return (
        <header className="h-[600px] w-full bg-image-home bg-no-repeat bg-cover bg-center text-white">
            <div className="max-w-[1000px] m-auto ">
                <TopMenu />
                <h1 className="text-3xl sm:text-5xl md:py-10 font-bold text-center">Un Blog sobre el cuidado y consejos para tus mascotas</h1>
                <p className="text-center text-xl mt-10">Aquí podrás encontrar curiosidades, consejos y muchas cosas más sobre tus mascotas. </p>
            </div>
        </header>
    )
}
