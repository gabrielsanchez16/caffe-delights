import Image from "next/image";
import "./styles.css";
import BannerHome from "@/components/bannerHome/BannerHome";
import WeAreCoffeDelights from "@/components/weAreCoffeDelights/WeAreCoffeDelights";
import OurServices from "@/components/ourServices/OurServices";
import DescriptionCoffe from "@/components/descriptionCoffe/DescriptionCoffe";
import ComeUs from "@/components/comeUs/ComeUs";

export default function Home() {
  return (
    <div className="content-page-inicio">
      <BannerHome />
      <WeAreCoffeDelights />
      <OurServices />
      <DescriptionCoffe/>
      <ComeUs/>
    </div>
  );
}
