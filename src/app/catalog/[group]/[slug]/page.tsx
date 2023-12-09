import { ProductType } from "@/app/types/types";
import ProductCard from "@/components/ProductCard";
import { getProductById } from "@/services/api/products";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

async function getData(slug: string) {
  const response = await fetch(`http://api.cadhome.ru/api/products/${slug}`);

  return response.json();
}

let product: ProductType;

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  product = await getProductById(slug);
  return {
    title: `${product.title} ${product.color.toLowerCase()}, ${
      product.volume
    } мл купить в Санкт-Петербурге | CAD`,
    description: `${product.title} ${product.color.toLowerCase()}, ${
      product.volume
    } мл -  купить ароматическую свечу в Санкт-Петербурге. Узнать цены и оформить заказ с доставкой по СПБ и по России`,
    robots: {
      index: false,
    },
  };
}

const CandlePage = async ({ params: { slug } }: Props) => {
  return (
    <>
      <main className="container">
        <ProductCard slug={slug} key={slug} />
      </main>
    </>
  );
};

export default CandlePage;
