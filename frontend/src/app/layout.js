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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K52F8DD4');
          `}
        </Script>
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
        <Script
          id="pixel-script-poptin"
          src="https://cdn.popt.in/pixel.js?id=e3c618ea1250f"
          async
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ERHGCG9C0N"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ERHGCG9C0N');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16874818711"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16874818711');
          `}
        </Script>
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
