import { Footer, TopMenu } from "@/components";
import { notFound } from "next/navigation";
import { blogItems } from "@/lib/data";
import { Params } from "@/interfaces";
import Image from "next/image";
import clsx from "clsx";


// export const metadata = {
//     title: 'BlogMascota',
//     description: 'Un Blog sobre el cuidado y consejos para tus mascotas',
// };

export async function generateMetadata({ params }: Params) {
    const data = blogItems[params.blog]

    if (data.length === 0) {
        notFound()
    }
    return {
        title: params.blog.toLocaleUpperCase()
    }

}

export default function BlogIdPage({ params }: Params) {

    const blogs = blogItems[params.blog].filter(blog => blog.id === String(params.id))

    if (blogs.length == 0) {
        notFound()
    }

    const data: any = blogs[0]

    const blogById = [
        { title: "titleOne", textOne: "oneText", textTwo: "oneTextTwo" },
        { title: "titleTwo", textOne: "twoText", textTwo: "twoTextTwo" },
        { title: "titleThree", textOne: "threeText", textTwo: "threeTextTwo" },
        { title: "titleFour", textOne: "fourText", textTwo: "fourTextTwo" },
    ]

    return (
        <div>
            <div className={clsx("mb-8 text-white",
                params.blog === "consejos" && "bg-sky-900",
                params.blog === "curiosidades" && "bg-green-900",
                params.blog === "enfermedades" && "bg-amber-900",
            )}>
                <TopMenu />
            </div>
            <div className="max-w-[1200px] px-4 mx-auto mb-8">
                <figure className="h-[500px] relative">
                    <Image
                        src={data.image_Url}
                        width={945}
                        height={359}
                        alt="Imagen de mascota"
                        className="w-full h-full object-cover"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#00000088] text-white px-8 py-3">
                        <span>{params.blog}</span>
                        <h2 className="uppercase text-xl">{data.title}</h2>
                    </div>
                </figure>

                <p className="text-center italic py-4">{data.blogById?.description}
                    <br /> <br />
                    {data.blogById?.descriptionTwo}
                </p>

                {
                    blogById.map(text => (
                        <div key={text.title}>
                            <h3 className={clsx("text-4xl font-bold my-6",
                                params.blog === "consejos" && "text-sky-700",
                                params.blog === "curiosidades" && "text-green-700",
                                params.blog === "enfermedades" && "text-amber-700",
                            )}>{data.blogById[text.title]}</h3>
                            <p className="text-justify">{data.blogById[text.textOne]}</p>
                            <br />
                            <p className="text-justify">{data.blogById[text.textTwo]}</p>
                        </div>
                    ))
                }

            </div>

            <Footer className={clsx(
                params.blog === "consejos" && "bg-sky-100",
                params.blog === "curiosidades" && "bg-green-100",
                params.blog === "enfermedades" && "bg-amber-100",
            )} />
        </div>
    );
}