import Providers from '@/components/Providers';
import '../globals.css';
import { store } from '@/store/store';
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <Providers>{children}</Providers>
      </html>
    )
  }