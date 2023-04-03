import './globals.css';

export const metadata = {
  title: 'Houston Street Subs PoS',
  description: 'Team Mu Project 3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-yellow">{children}</body>
    </html>
  )
}
