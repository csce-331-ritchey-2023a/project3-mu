// /app/layout.tsx
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Providers from '@/components/Providers';
import CartBtn from '@/components/CartBtn';
import Image from 'next/image';
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
    <head />
    <body>
    <div className="banner">
        <div className="bannerLogo">
          <Image
            src="https://api.dineoncampus.com/files/images/f864520e-32e6-442e-92ab-b77a90523603.png"
            alt="Houston Street Subs Logo"
            width={80}
            height={80}
            className="logoImage"
          />
        </div>
        <h1 className="bannerTitle">Customer Dashboard</h1>
        <Providers>
            <Link className="flex justify-between" href={"/cart"}>
                <CartBtn />
            </Link>
        </Providers>
    </div>
    <div className='flex bg-primary'>

        <nav className="bg-secondary h-screen w-1/3 flex flex-col ">
            <Link href="/customer/Sand" className={`flex items-center justify-center text-bold text-4xl text-center flex-grow  ${pathname ==  '/customer/Sand'? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Sandwiches
            </Link>
            <Link href="/customer/Soup" className={`flex items-center justify-center text-bold text-4xl text-center flex-grow  ${pathname == '/customer/Soup' ? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Soups
            </Link>
            <Link href="/customer/Salad" className={`flex items-center justify-center text-bold text-4xl text-center flex-grow  ${pathname == '/customer/Salad' ? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Salad
            </Link>
            <Link href="/customer/Side" className={`flex items-center justify-center text-bold text-4xl text-center flex-grow  ${pathname == '/customer/Side' ? 'bg-primary text-black' : 'bg-secondary text-white'}`}>
                Sides
            </Link>
            
        </nav>
        <Providers>{children}</Providers>
        
    </div>

    </body>
  </html>
 );
}