import localFont from "next/font/local";
import "./globals.scss";

const regularFont = localFont({
  src: "./fonts/Onest-Regular.ttf",
  variable: "--f-regular",
  weight: "400",
});

const mediumFont = localFont({
  src: "./fonts/Onest-Medium.ttf",
  variable: "--f-medium",
  weight: "500",
});

const boldFont = localFont({
  src: "./fonts/Onest-Bold.ttf",
  variable: "--f-bold",
  weight: "700",
});

export const metadata = {
  title: "NextLevel",
  description: "Упрощенная версия страницы корпоративного сайта компании",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${regularFont.variable} ${mediumFont.variable} ${boldFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
