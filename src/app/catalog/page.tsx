import Breadcrumbs from "@/components/Breadcrumbs";
import Products from "@/components/Products";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Каталог ароматических свечей | CAD",
  description:
    "Купить ароматические свечи ручной работы в Санкт-Петербурге - большой выбор свечей в различных формах и ароматы на любой вкус. Посмотреть фото, узнать цены на ароматические свечи вы можете на сайте cad-candles.ru, доставка в Санкт-Петербурге и по всей России",
  robots: {
    index: false,
  },
};

const Catalog: NextPage = async () => {
  return (
    <>
      <main className="container main">
        <Breadcrumbs textItems={[{ text: "Каталог" }]} />
        <h1>Каталог ароматических свечей</h1>
        <Products />
      </main>
    </>
  );
};

export default Catalog;
