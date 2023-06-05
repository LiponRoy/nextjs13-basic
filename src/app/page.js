import Image from 'next/image'
import House from './house/page';

export default function Home() {
  return (
    <div className=' h-screen w-full flex justify-center items-center bg-slate-400'>
      <House></House>
    </div>
   
  )
}
