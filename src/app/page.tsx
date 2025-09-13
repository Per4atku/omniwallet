import CTA from "@/components/CTA";
import Faqs from "@/components/Faqs";

import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Introduction from "@/components/Introduction";
import LogoTicker from "@/components/LogoTicker";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";

export default function Main() {
  return (
    <MaxWidthWrapper maxWidth={1200}>
      <Navbar /> <Hero /> <LogoTicker />
      <Introduction /> <Integrations />
      <Faqs /> <CTA />
    </MaxWidthWrapper>
  );
}
