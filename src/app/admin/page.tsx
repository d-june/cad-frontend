import { Metadata } from "next";
import AdminLogin from "@/components/Auth/AdminLogin";
import AdminPanel from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Админ панель | CAD",
  description: "Свечи, контейнерные свечи, свечи в банках",
  robots: {
    index: false,
  },
};

const AdminPage = () => {
  return (
    <>
      <main className="container main">
        <AdminLogin />
        <AdminPanel />
      </main>
    </>
  );
};

export default AdminPage;
