import type { Metadata } from "next";
import AffiliateClient from "./Affiliate";

export const metadata: Metadata = {
  title: "Partner Program | agentcollab",
  description: "Join our partner program and start earning commissions.",
  keywords: ["partner", "affiliate", "commission"],
  openGraph: {
    title: "Partner Program | agentcollab",
    description: "Join our partner program and start earning commissions.",
    url: "https://agentcollab.ai/partners",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Partner Program | agentcollab",
  //   description: "Join our partner program and start earning commissions.",
  // },
};

export default function Page() {
  return <AffiliateClient />;
}
