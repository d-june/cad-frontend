import Breadcrumbs from "@/components/Breadcrumbs";
import { Header } from "@/components/Header/Header";
import Products from "@/components/Products";
import { Api } from "@/services/api";
import { getAllProducts } from "@/services/api/products";
import { GetServerSideProps, Metadata, NextPage } from "next";

async function getData() {
  const response = await fetch("http://localhost:3001/api/products/");

  return response.json();
}

export const metadata: Metadata = {
  title: "Каталог ароматических свечей | CAD",
  description:
    "Купить ароматические свечи ручной работы в Санкт-Петербурге - большой выбор свечей в различных формах и ароматы на любой вкус. Посмотреть фото, узнать цены на ароматические свечи вы можете на сайте cad-candles.ru, доставка в Санкт-Петербурге и по всей России",
  robots: {
    index: false,
  },
};

const Catalog: NextPage = async () => {
  const products = await getAllProducts();

  return (
    <>
      <main className="container">
        <Breadcrumbs textItems={[{ text: "Каталог" }]} />
        <h1>Каталог ароматических свечей</h1>
        <Products products={products} />
      </main>
    </>
  );
};

export default Catalog;
