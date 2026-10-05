"use client";

import dynamic from "next/dynamic";

const PortfolioView = dynamic(() => import("./PortfolioView"), {
  ssr: false,
});

export default function Page() {
  return <PortfolioView />;
}
