import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <div className="bg-white">
        <Header />
        <div className="container mx-auto mt-8">{children}</div>
        <Footer />
      </div>
    </>
  );
}
