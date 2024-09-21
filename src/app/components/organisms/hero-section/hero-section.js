import style from "./hero-section.module.scss";
import Header from "@/app/components/molecules/header/header";
import MainOfferBlock from "@/app/components/molecules/main-offer-block/main-offer-block";
import RevenueSourceSelector from "@/app/components/molecules/revenue-source-selector/revenue-source-selector";

export default function HeroSection() {
  return (
    <section className={style.section}>
      <Header />
      <MainOfferBlock />
      <RevenueSourceSelector />
    </section>
  );
}
