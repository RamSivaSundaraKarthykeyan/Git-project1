import Image from "next/image";
import LandHead from "./(components)/LandHead";

export default function Home() {
  return (
    <div className="h-screen bg-custom-background bg-cover bg-center">
      <LandHead />
    </div>
  );
}
