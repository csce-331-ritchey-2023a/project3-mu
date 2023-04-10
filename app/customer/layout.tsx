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
    const isSand = pathname === '/customer/Sand'; 
    const isSoup = pathname === '/customer/Soup'; 
    const isSide = pathname === '/customer/Side'; 
    const isSalad = pathname === '/customer/Salad'; 

    return (
    
  <html lang="en">
   <body className="bg-yellow ">
    <div className='flex '>
        <nav className="bg-gray-800 h-screen w-1/3 flex justify-between flex-col flex-grow">
            <Link href="/customer/Sand" className="text-blue-500 text-center flex-grow:1" style={{ backgroundColor: isSand ? '#fff' : '#000' }}>
                Sandwiches
            </Link>
            <Link className="text-blue-500 text-center flex-grow" href="/customer/Soup" style={{ backgroundColor: isSoup ? '#fff' : '#000' }}>
                Soups
            </Link>
            <Link href="/customer/Salad" className="text-blue-500 text-center flex-grow:1"style={{ backgroundColor: isSalad ? '#fff' : '#000' }}>
                Salad
            </Link>
            <Link href="/customer/Side" className="text-blue-500 text-center flex-grow:1"style={{ backgroundColor: isSide ? '#fff' : '#000' }}>
                Sides
            </Link>
        </nav>
        <div>{children}</div>
    </div>
    
   </body>
  </html>
 );
}