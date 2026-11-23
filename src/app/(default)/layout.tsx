import type { Metadata } from "next";
import Document, { viewport as siteViewport } from "../document";
import { siteUrl } from "../site-url";

export const metadata: Metadata = { metadataBase: new URL(siteUrl) };
export const viewport = siteViewport;

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <Document lang="zh">{children}</Document>;
}
