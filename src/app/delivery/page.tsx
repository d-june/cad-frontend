import Breadcrumbs from "@/components/Breadcrumbs";
import DeliveryAndPayment from "@/components/DeliveryAndPayment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка и оплата | Ароматические свечи CAD",
  description:
    "Информация об оплате и доставке вашего заказа, все способы оплаты и информация о курьерских службах, с которыми мы работаем",
  robots: {
    index: false,
  },
};

const DeliveryAndPaymentPage = () => {
  return (
    <main className="container">
      <Breadcrumbs textItems={[{ text: "Доставка и оплата" }]} />
      <DeliveryAndPayment />
    </main>
  );
};

export default DeliveryAndPaymentPage;
