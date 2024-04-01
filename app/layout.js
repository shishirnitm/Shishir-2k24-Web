import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
export const metadata = {
  title: "Shishir",
  description: "Developed by the Web Dev Team at NITM (2023)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[url('../public/texture.png')] bg-[#FDF6E9]">
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
