import type { Metadata } from "next";
import Header from "../../components/header";
import "./globals.scss";
import Head from 'next/head'

export const metadata: Metadata = {
  title: "MERCADO AUTOS",
  description: "Mercado autos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Head>
          <link rel="preload" href="https://mc.yandex.ru/metrika/tag.js" as="script" />
        </Head>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

        ym(97251244,"init",{
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `,
          }}
        />

        <img src="https://mc.yandex.ru/watch/97251244" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        <Header />
        {children}
      </body>
    </html>
  );
}
