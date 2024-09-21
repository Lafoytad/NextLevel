import HeroSection from "@/app/components/organisms/hero-section/hero-section";
import RevenueVsUserSatisfaction from "@/app/components/organisms/revenue-vs-user-satisfaction/revenue-vs-user-satisfaction";
import OurMonetizationPartners from "@/app/components/organisms/our-monetization-partners/our-monetization-partners";
import DetailedReports from "@/app/components/organisms/detailed-reports/detailed-reports";
import ContactForm from "@/app/components/organisms/contact-form/contact-form";
import style from "./simple-corporate-site.module.scss";

export default function SimpleCorporateSite() {
  return (
    <div className={style.background}>
      <HeroSection />
      <RevenueVsUserSatisfaction />
      <OurMonetizationPartners />
      <DetailedReports />
      <ContactForm />
    </div>
  );
}
