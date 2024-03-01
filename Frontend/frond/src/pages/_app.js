import "@/styles/globals.css";
import { Work_Sans } from "@next/font/google";
import { Header } from "@/components/Header";
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

import AddRecordProvider from "@/components/AddRecordProvider";
import AddCatigoryProvider from "@/components/AddCatiProvider";
import IncomeExpenceProvider from "@/components/ExpenceIncomeData";
import { UserProvider } from "@/components/UserProvider";
import { MapDataProvider } from "@/components/MapDataProvider";
// import { InExProvider } from "@/components/inExProvider";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSans.variable}`}>
      {/* <InExProvider> */}
      <UserProvider>
        <MapDataProvider>
          <IncomeExpenceProvider>
            <AddCatigoryProvider>
              <AddRecordProvider>
                <Component {...pageProps} />;
              </AddRecordProvider>
            </AddCatigoryProvider>
          </IncomeExpenceProvider>
        </MapDataProvider>
      </UserProvider>
      {/* </InExProvider> */}
    </main>
  );
}
