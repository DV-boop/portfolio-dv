import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D. Harsh — DevOps Engineer",
  description:
    "I’m D. Harsh, a DevOps Engineer passionate about building reliable, scalable systems using automation, CI/CD pipelines, and Kubernetes. I thrive on delivering efficient infrastructure and deploying seamless software solutions.",
  keywords: [
    "devops",
    "aws",
    "terraform",
    "kubernetes",
    "ci/cd",
    "docker",
    "creative developer",
    "infrastructure as code",
    "portfolio",
    "cloud engineer",
    "software engineer",
    "SRE",
    "India",
    "DevOps Engineer",
  ],
  openGraph: {
    title: "D. Harsh — DevOps Engineer",
    description:
      "DevOps Engineer focused on scalable cloud infrastructure, CI/CD automation, and Kubernetes. Passionate about building systems that empower software delivery.",
    url: "#", // Apna domain yahan dalein
    siteName: "D. Harsh Portfolio",
    images: [
      {
        url: "#", // Image name updated here
        width: 800,
        height: 800,
        alt: "D. Harsh — DevOps Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D. Harsh — DevOps Engineer",
    description:
      "DevOps Engineer focused on CI/CD, Terraform, Kubernetes, and Cloud Infrastructure. Turning ideas into scalable cloud solutions.",
    creator: "@dvharsh9", // Aapka Twitter handle agar ho to
    images: ["#"], // Image name updated here
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <ViewProvider>
          <Header />
          {children}
        </ViewProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
