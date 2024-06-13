import { Inter } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'] 
})
export const metadata = {
  title: "SPEED 회원가입",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body className="">{children}</body>
    </html>
  );
}
