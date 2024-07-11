import Image from "next/image";
import Logo from "../public/logo-2.svg";
import LandingImg from "../public/main-2.png";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image
          src={Logo}
          width={80}
          height={80}
          alt={"logo"}
        />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 flex lg:grid-cols-[1fr, 600px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            <span className="text-primary">effortlessly</span> job management
          </h1>
          <p className="leading-loose mx-w-md mt-4">
            Take control of your job search with our easy-to-use app that helps you manage applications, track progress,a nd stay organized every step of the way.
          </p>
          <Button className="mt-4" asChild>
            <Link href={"/add-job"}>Get Started</Link>
          </Button>
        </div>
        <Image className="hidden lg:block"
          src={LandingImg} 
          width={700}
          alt="Landing Image"
        />
      </section>
    </main>
  );
}
