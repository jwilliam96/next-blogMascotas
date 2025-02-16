
import { CardBlog, Footer, Header } from "@/components";
import { notFound } from "next/navigation";
import { blogItems } from "@/lib/data";
import { Params } from "@/interfaces";
import Link from "next/link";
import clsx from "clsx";

type Props = {
    params: { blog: string }
}

export async function generateStaticParams() {
    return [
        { blog: "consejos" },
        { blog: "curiosidades" },
        { blog: "enfermedades" }
    ]
}

export async function generateMetadata({ params }: Props) {
    const data = blogItems

    if (params.blog in data) { }
    else {
        notFound()
    }

    return {
        title: params.blog.toLocaleUpperCase()
    }

}

export default function BlogPage({ params }: Params) {

    try {
        return (
            <article>
                <Header className={clsx(
                    params.blog === "consejos" && "bg-image-consejos",
                    params.blog === "curiosidades" && "bg-image-curiosidades",
                    params.blog === "enfermedades" && "bg-image-enfermedades",
                )} title={`${params.blog.toUpperCase()}`} />

                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-4xl font-bold py-4 mt-10 capitalize"> {params.blog} </h2>
                    <div className="flex flex-wrap justify-evenly gap-4 my-10">
                        {
                            blogItems[`${params.blog}`].map(blog => (
                                <Link href={`/${params.blog}/${blog.id}`} key={blog.id}>
                                    <CardBlog
                                        data={blog}
                                        className={clsx(
                                            params.blog === "consejos" && "bg-sky-50",
                                            params.blog === "curiosidades" && "bg-green-50",
                                            params.blog === "enfermedades" && "bg-amber-50",
                                        )}
                                        titleColor={clsx(
                                            params.blog === "consejos" && "text-sky-700",
                                            params.blog === "curiosidades" && "text-green-700",
                                            params.blog === "enfermedades" && "text-amber-700",
                                        )} />
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <Footer className={clsx(
                    params.blog === "consejos" && "bg-sky-100",
                    params.blog === "curiosidades" && "bg-green-100",
                    params.blog === "enfermedades" && "bg-amber-100",
                )} />

            </article>
        );
    } catch (error) {
        notFound()
    }


}