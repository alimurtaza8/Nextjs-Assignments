import Link from "next/link"
import Image from "next/image"

export default function Header(){
    return (
        <div className="bg-main flex items-center justify-between px-8 p-3">

        <div className="flex items-center gap-28 ">
            <div className="relative">
              <Image
                // src="/images/logo.png"
                src={"/images/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="w-16 h-16 top-0  bottom-[-10px]"
                >
                </Image>
           </div>

           <h1 className="text-blue-200 text-2xl font-bold">
                Tuition Free Education Program on Latest Technologies
           </h1>
           
           </div>

           <div className="flex justify-end gap-10 font-semibold text-white">
                <Link href="#">Home</Link>
                <Link href="#">Apply</Link>
                <Link href="#">Jobs</Link>
                <Link href="#">Result</Link>
                <Link href="#">Course</Link>
           </div>

        </div>
      
    )
}

