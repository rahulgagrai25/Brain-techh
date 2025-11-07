import Image from "next/image";
import Hero2 from "./components/Hero2";
import About from "./components/About";
import Services from "./components/Services";
import Choose from "./components/Choose";
import Client from "./components/Client";
import Team from "./components/Team";
import Award from "./components/Award";

export default function Home() {
  return (
    <>
        <Hero2/>
        <About/>
        <Services/>
        <Choose/>
        <Award/>
        <Client/>
    </>
  );
}
