import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-home": "linear-gradient(#00000068, #00000068), url('/IMAGE/home/home.jpg')",
        "image-consejos": "linear-gradient(#00000060, #00000060), url('https://plus.unsplash.com/premium_photo-1671496450438-6a9c90ab87a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "image-curiosidades": "linear-gradient(#00000060, #00000060), url('https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "image-enfermedades": "linear-gradient(#00000060, #00000060), url('https://images.unsplash.com/photo-1514895094592-76b5fb7667ee?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "image-home-footer": "linear-gradient(#00000055, #00000055), url('/IMAGE/random/img2.avif')"
      },
      screens: {
        "ss": "400px"
      }
    },
  },
  plugins: [],
};
export default config;
