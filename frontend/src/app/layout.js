import { Open_Sans, Philosopher } from "next/font/google";
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
  title: "Wilmarcs",
  description: "Welcome to Wilmarcs — your trusted platform.",
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
      <body className={`${openSans.variable} ${philosopher.variable}`}>
        {children}
      </body>
    </html>
  );
}
