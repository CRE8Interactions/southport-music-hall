'use client'

import { useEffect } from 'react';
import { Inter, DM_Sans } from 'next/font/google'
import Script from 'next/script';

import { Navigation, Footer } from '@/components'

import '@/scss/main.scss';

// define google fonts 
const inter = Inter({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
})

const dm_sans = DM_Sans({
    weight: ['700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

export default function RootLayout({ children }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <html lang="en">
            <meta property="og:site_name" content="Southport Hall | Live Music and Event Venue" />
            <meta property="og:title" content="New Orleans Live Music &amp; Party Hall | Southport Hall" />
            <meta property="og:url" content="https://southporthall.com" />
            <meta property="og:site_name" content="Southport Hall" />
            <meta property="og:description" content="UPCOMING SHOWS WEDDINGS - PRIVATE PARTIES - LIVE ENTERTAINMENT Southport is located in Old Jefferson bounded roughly by Jefferson Highway on the north, the Mississippi River on the south, the Orleans-Jefferson parish line on the east and Dakin Street on the west. Southport" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="New Orleans Live Music &amp; Party Hall | Southport Hall" />
            <meta property="og:image" content="https://southport.nyc3.cdn.digitaloceanspaces.com/southport-logo.png" />
            <body>
                <style jsx global>{`
                :root {
                    --inter-font: ${inter.style.fontFamily};
                    --dmSans-font: ${dm_sans.style.fontFamily};
                }
            `}</style>

                <div className="gradient">
                    <Navigation />
                    <main className='container'>
                        {children}
                    </main>
                </div>
                <Footer />
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '842729400339292');
                    fbq('track', 'PageView');
                    `,
                    }}
                />
            </body>
        </html>
    )
}
