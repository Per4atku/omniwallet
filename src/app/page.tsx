import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import LogoTicker from "@/components/LogoTicker";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";

export default function Main() {
  return (
    <MaxWidthWrapper>
      <Navbar /> <Hero /> <LogoTicker /> <Introduction />
    </MaxWidthWrapper>
  );
}
