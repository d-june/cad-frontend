import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/redux/slices/products/types";
import { getProductById } from "@/services/api/products";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

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
      <main className="container main">
        <ProductCard slug={slug} />
      </main>
    </>
  );
};

export default CandlePage;
