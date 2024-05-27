import { Inter } from "next/font/google";
import "./styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunny Side Agency",
  description: "Sunny Side Agency Landing Page",
  icons: {
    icon: "./images/icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
