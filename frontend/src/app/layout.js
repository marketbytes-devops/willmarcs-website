import "./globals.css";

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
  return <html lang="en">{children}</html>;
}
