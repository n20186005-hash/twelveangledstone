import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

export const metadata: Metadata = {
  title: "Cookie 设置 | 十二边印加石旅行指南",
  description: "管理十二边印加石旅行指南的 Cookie 偏好",
  alternates: { canonical: "/cookies", languages: {} },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
