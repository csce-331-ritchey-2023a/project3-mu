// /app/layout.tsx
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Providers from '@/components/Providers';
import CartBtn from '@/components/CartBtn';
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
    
    <div className='flex bg-primary'>
            <Providers>
            <Link className="text-right " href={"/cart"}>
                <CartBtn />
            </Link>
                {/* {children} */}
            </Providers>

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
        <main><Providers>{children}</Providers>     </main>
        
    </div>

    </body>
  </html>
 );
}