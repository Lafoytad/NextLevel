import style from "./hero-section.module.scss";
import MainOfferBlock from "@/app/components/molecules/main-offer-block/main-offer-block";
import RevenueSourceSelector from "@/app/components/molecules/revenue-source-selector/revenue-source-selector";

export default function HeroSection() {
  return (
    <section id="section1" className={style.section}>
      <MainOfferBlock />
      <RevenueSourceSelector />
    </section>
  );
}
