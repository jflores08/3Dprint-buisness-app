
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';


// // Import Local Components
import "./global.css";
import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/TopNavigation/Navbar";
import {routing} from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });


 




// const metadata: Metadata = {
//   title: title,
// };
// return(
//   metadata
// )
// }



export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
  }) {



      // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }


  // Enable static rendering
  setRequestLocale(locale);


  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar locale={locale} />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
