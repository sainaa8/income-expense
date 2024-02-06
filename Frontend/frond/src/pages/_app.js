import "@/styles/globals.css";
import { Work_Sans } from "@next/font/google";
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSans.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
