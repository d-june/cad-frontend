import About from "@/components/About";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас - информация о бренде свечей CAD",
  description:
    "Информация о бренде ароматических свечей CAD, история создания мастерской, подробно об ароматических свечах, сделанных своими руками и их преимуществах",
};

const AboutPage = () => {
  return (
    <>
      <main className="container main">
        <Breadcrumbs textItems={[{ text: "О нас" }]} />
        <About />
      </main>
    </>
  );
};

export default AboutPage;
