import { Open_Sans, Philosopher } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientScripts from "@/components/ClientScripts";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-philosopher",
});

export const metadata = {
  title: "Drive Real Impact with CSR Videos | Wilmarcs Can Help You Shine",
  description:
    "Wilmarcs creates powerful CSR videos, ESG stories & annual report films to showcase your brand's impact. Connect with us today to inspire lasting change.",
  icons: {
    icon: [
      {
        url: "https://wilmarcs.com/wp-content/uploads/2024/11/Wilmarcs-Icon_Black-fotor-20241030162914-100x100.png",
        sizes: "32x32",
      },
      {
        url: "https://wilmarcs.com/wp-content/uploads/2024/11/Wilmarcs-Icon_Black-fotor-20241030162914-200x200.png",
        sizes: "192x192",
      },
    ],
    apple:
      "https://wilmarcs.com/wp-content/uploads/2024/11/Wilmarcs-Icon_Black-fotor-20241030162914-200x200.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K52F8DD4"
        />
        <Script
          id="pixel-script-poptin"
          src="https://cdn.popt.in/pixel.js?id=e3c618ea1250f"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ERHGCG9C0N"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16874818711"
        />
        <ClientScripts />
      </head>

      <body className={`${openSans.variable} ${philosopher.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K52F8DD4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
