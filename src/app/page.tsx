import type { Metadata } from "next";

import AboutCandles from "@/components/AboutCandles";
import AboutUs from "@/components/AboutUs";
import Advantages from "@/components/Advantages";
import Slider from "@/components/Slider/Slider";
import Products from "@/components/Products";
import { getAllProducts } from "@/services/api/products";

export const metadata: Metadata = {
  title: "Ароматические свечи ручной работы в Санкт-Петербурге | CAD",
  description:
    "Свечи ручной работы бренда CAD из натурального соевого воска, домашняя мастерская в Санкт-Петербурге. Делаем уникальные ароматические свечи, здесь вы можете выбрать понравившуюся свечу и оформить заказ на сайте.",
  robots: {
    index: false,
  },
};

const Home = async () => {
  const products = await getAllProducts();
  return (
    <main>
      <Slider />
      <h1>Ароматические свечи ручной работы</h1>
      <Products top products={products} />
      <AboutUs />
      <Advantages />
      <AboutCandles />
    </main>
  );
};

export default Home;
