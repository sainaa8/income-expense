import "@/styles/globals.css";
import { Work_Sans } from "@next/font/google";
import { Header } from "@/components/Header";
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

import AddRecordProvider from "@/components/AddRecordProvider";
import AddCatigoryProvider from "@/components/AddCatiProvider";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSans.variable}`}>
      <AddCatigoryProvider>
        <AddRecordProvider>
          <Component {...pageProps} />;
        </AddRecordProvider>
      </AddCatigoryProvider>
    </main>
  );
}
