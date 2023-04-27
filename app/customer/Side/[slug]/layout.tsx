import Providers from '@/components/Providers';
import '../../../globals.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <div>
          <Providers>{children}</Providers>
        </div>
     </html>
    )
  }