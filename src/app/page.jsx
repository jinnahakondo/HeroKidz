import Banner from "@/components/home/Banner";
import Image from "next/image";
import Products from "./products/page";
import AllProducts from "@/components/home/AllProducts";

export default async function Home() {
  return (
    <section className="space-y-20">
      <Banner />
      <div>
        <h2 className="text-center text-2xl lg:text-4xt mb-10 font-bold">Our Products</h2>
        <AllProducts />
      </div>
    </section>
  );
}
