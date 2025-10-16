import { Open_Sans, Philosopher } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  alternates: {
    canonical: "https://wilmarcs.com/csr-videos-wilmarcs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="tawk-to" strategy="beforeInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68f07ed4fb4ca2194c823f9b/1j7lmurnl';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </head>
      <body className={`${openSans.variable} ${philosopher.variable}`}>
        {children}
      </body>
    </html>
  );
}
