import type { Metadata } from "next";
import HomeContent from "./components/HomeContent";

export const metadata: Metadata = {
  title: "AI Strategy & Growth Leader | Executive AI Portfolio",
  description:
    "Senior AI Strategy & Enterprise Growth Leader with McKinsey, SaaS, and Fortune 500 experience in AI transformation, GTM strategy, and revenue growth.",
  keywords:
    "AI strategy, enterprise sales, McKinsey, GTM strategy, AI transformation, SaaS leadership, corporate strategy",
  openGraph: {
    title: "AI Strategy & Growth Leader Portfolio",
    description:
      "Executive AI & enterprise growth leader portfolio showcasing AI transformation and business impact.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}