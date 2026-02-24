import Image from "next/image";
import MainSlider from "./_components/MainSilder/MainSlider";
import CategorySlider from "./_components/CategorySlider/CategorySlider";
import HeroSlider from "./_components/HeroSlider/HeroSLider";
import Products from "./products/page";

export default function Home() {
  return (
    <>
      {/* <HeroSlider/> */}
      <MainSlider />
      <CategorySlider />

      <Products/>
    </>
  );
}
