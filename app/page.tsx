import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ForEmployers = dynamic(() => import("@/components/ForEmployers"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ForCandidates = dynamic(() => import("@/components/ForCandidates"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CompatibilityScore = dynamic(() => import("@/components/CompatibilityScore"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Security = dynamic(() => import("@/components/Security"), {
  loading: () => <div className="min-h-[300px]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="min-h-[200px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <HowItWorks />
      <ForEmployers />
      <ForCandidates />
      <CompatibilityScore />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
