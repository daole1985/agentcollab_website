import localFont from "next/font/local";

export const googleSans = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-google-sans",
});
