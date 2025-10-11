// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { Inter } from "next/font/google";
// import { setRequestLocale } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { CartProvider } from "use-shopping-cart";

// // // Import Local Components
// import "./global.css";
// import { ThemeProvider } from "../components/theme-provider";
// import { Navbar } from "../components/TopNavigation/Navbar";
// import { routing } from "@/i18n/routing";

// const inter = Inter({ subsets: ["latin"] });

// // Stripe key
// const stripeKey = process.env.STRIPE_SECRET as string;

// // const metadata: Metadata = {
// //   title: title,
// // };
// // return(
// //   metadata
// // )
// // }

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   // Ensure that the incoming `locale` is valid
//   if (!routing.locales.includes(locale as any)) {
//     notFound();
//   }

//   // Enable static rendering
//   setRequestLocale(locale);

//   const messages = await getMessages();

//   return (
//     <html lang={locale} suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <NextIntlClientProvider messages={messages}>
//             {/*Cart Provider */}
//             <CartProvider
//               cartMode="checkout-session"
//               currency="USD"
//               shouldPersist={false}
//               stripe={stripeKey}
//               loading={<p aria-live="polite">Loading redux-persist...</p>}
//             >
//               <Navbar locale={locale} />
//               {children}
//             </CartProvider>
//           </NextIntlClientProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
