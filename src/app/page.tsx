import { ImageSeparador, HomeHeader, HomePost, Footer } from "@/components";
import { homeBlog } from "@/lib/data";
<link rel="icon" href="/IMAGE/pow.svg" sizes="any" />


export const metadata = {
  title: 'BlogMascota',
  description: 'Un Blog sobre el cuidado y consejos para tus mascotas',
};

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <HomeHeader />

      {/* POST */}
      <article className="max-w-[1000px] m-auto px-4  flex flex-col ">
        <h2 className="text-4xl font-bold py-4 mt-10">Nuestro Blog</h2>
        {
          homeBlog.map(blog => (
            <HomePost key={blog.id} data={blog} />
          ))
        }
      </article>

      {/* IMAGEN Separador  */}
      <ImageSeparador />

      <Footer className="bg-amber-100" />

    </main>
  );
}
