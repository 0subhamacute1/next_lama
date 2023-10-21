import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="bodyContainer">
          <Header />
          <div style={{ margin: "10px" }}> {children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
