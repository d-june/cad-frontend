import Breadcrumbs from "@/components/Breadcrumbs";
import { Header } from "@/components/Header/Header";
import QuestionsList from "@/components/QuestionsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вопросы и ответы | Ароматические свечи CAD",
  description:
    "Вопросы об ароматических свечах и ответы на них. FAQ с самыми распространенными вопросами",
  robots: {
    index: false,
  },
};

const Questions = () => {
  return (
    <main className="container main">
      <Breadcrumbs textItems={[{ text: "Вопросы и ответы" }]} />

      <QuestionsList />
    </main>
  );
};

export default Questions;
