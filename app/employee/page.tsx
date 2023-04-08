import Image from 'next/image'
import { use } from "react"
import { Inter } from 'next/font/google'
import React from "react";


const inter = Inter({ subsets: ['latin'] })


const BlueButton = ({ text }: { text: string }) => (
    <button className="block w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
      {text}
    </button>
  );
  
  const ButtonList = ({ numButtons }: {numButtons:number}) => {
    const buttons = [];
    for (let i = 0; i < numButtons; i++) {
      buttons.push(<BlueButton key={i} text={`Button ${i + 1}`} />);
    }
    return <div className="flex flex-col">{buttons}</div>;
  };
  
async function getName(){
    const res = await fetch(`${process.env.BASE_URL}/api/getName`, {cache: "no-store"})
    if(!res.ok){
      console.log("result + ", res)
    }
    return await(res).json()
  }

export default function Customer(){
    //call & retrieve data from getName 
    //const names = use(getName())
    
    //const nameData = names.map(name => name[1])
    
    return(
        <div className="p-4">
      <ButtonList numButtons={5} />
        </div>
    )
}