import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";
import Recomendations from "@/components/Recomendations";

export const metadata: Metadata = {
  title: "Рекомендации по использованию свечей | CAD",
  description:
    "Рекомендации по использованию ароматических свечей и рекомендации по технике безопасности. Памятка по свечам CAD",
  robots: {
    index: false,
  },
};

const Blog = () => {
  return (
    <main className="container main">
      <Breadcrumbs textItems={[{ text: "Рекомендации по использованию" }]} />
      <Recomendations />
    </main>
  );
};

export default Blog;
