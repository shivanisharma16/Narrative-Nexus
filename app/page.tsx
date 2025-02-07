import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "./_components/Hero";
import Headers from "./_components/Headers";

export default function Home() {
  return (
    <div >
      <Headers/>
       <Hero/>
    </div>
  );
}