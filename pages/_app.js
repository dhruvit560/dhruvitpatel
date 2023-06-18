import "@/styles/tailwind.css";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Dhruvit Patel, dhruvit patel, dhruvitpatel, dhruvit patel web designer, best web designer in kamrej, best web designer in surat, best web designer in pasodara, web designer, web developer"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
