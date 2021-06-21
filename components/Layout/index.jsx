import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <div className="bg-white">
        <Header />
        <div className="container mx-auto mt-8">{children}</div>
        <Footer />
      </div>
    </>
  );
}
