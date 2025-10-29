
import About from "./components/About";
import Choose from "./components/Choose";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Hero2/>
        <About/>
        <Services/>
        <Choose/>
        <Client/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
