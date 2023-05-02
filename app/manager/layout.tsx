
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary">
          {children}
      </body>
    </html>
  )
}