import Link from "next/link"
import './globals.css'
export default function Home() {
  //const data = use(getItems())
  //console.log(data)
  return (
      <main className="bg-primary h-screen flex flex-col justify-center items-center">
        <nav className="flex justify-center space-x-4 mb-8">
          <Link href={"/customer"}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300 border border-white">Go To Customer
          </Link>
          <Link href={"/employee"}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300 border border-white">Go To Employee
          </Link>
          <Link href={"/manager"}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300 border border-white">Go To Manager
          </Link>
          <Link href={"/Weather"}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-300 border border-white">Go To Weather
          </Link>
        </nav>
        <div className="text-3xl font-bold text-center">
          <h1>Welcome to Houston Street Subs!</h1>
        </div>
      </main>
  )
}
