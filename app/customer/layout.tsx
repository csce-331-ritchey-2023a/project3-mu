// /app/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode,
})
{
    const pathname = usePathname();
    //console.log(pathname + "\n")
    return (
    
  <html lang="en">
    <body>
    <div className='flex bg-primary'>
        <nav className="bg-secondary h-screen w-1/3 flex flex-col justify-center container ">
            <Link href="/customer/Sand" className={`flex items-center justify-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-full font-bold text-center flex-grow w-full ${pathname ==  '/customer/Sand'? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Sandwiches
            </Link>
            <Link href="/customer/Soup" className={`flex items-center justify-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-full font-bold text-center flex-grow w-full ${pathname == '/customer/Soup' ? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Soups
            </Link>
            <Link href="/customer/Salad" className={`flex items-center justify-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-full font-bold text-center flex-grow w-full ${pathname == '/customer/Salad' ? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Salad
            </Link>
            <Link href="/customer/Side" className={`flex items-center justify-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-full font-bold text-center flex-grow w-full ${pathname == '/customer/Side' ? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Sides
            </Link>
        </nav>
        <main>{children}</main>
    </div>
    </body>
  </html>
 );
}