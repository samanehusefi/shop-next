import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main className="min-h-[calc(100vh-200px)]">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default SiteLayout;