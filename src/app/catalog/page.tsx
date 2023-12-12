import Breadcrumbs from "@/components/Breadcrumbs";
import { Header } from "@/components/Header/Header";
import Products from "@/components/Products";
import { getAllProducts } from "@/services/api/products";
import { GetServerSideProps, Metadata, NextPage } from "next";

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
      <main className="container main">
        <Breadcrumbs textItems={[{ text: "Каталог" }]} />
        <h1>Каталог ароматических свечей</h1>
        {products && <Products products={products} />}
      </main>
    </>
  );
};

export default Catalog;
