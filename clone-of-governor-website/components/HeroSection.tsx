import Image from "next/image"

export default function HeroSection() {
    return (
        <div >
            <div className="flex h-screen p-10">
            <div className="text-center lg:text-left">
                <h1 className="text-6xl font-bold text-main">Governor Sindh</h1>
                <h2 className="text-4xl text-main">Kamran Khan Tessori</h2>
                <p className="text-4xl font-bold text-cyan-500 mt-4 w-[470px]  text-balance"> 
                    Certified Cloud
                    Applied Generative AI
                    Engineer (GenEng)
                </p>

                <p className="mt-4 text-main font-bold text-2xl">
                Earn up to $5,000 / month
                </p>

                <p className="mt-4 text-main font-bold text-2xl w-[400px]">
                Now admissions are open in Karachi
                </p>

                <div className="flex items-center gap-16 h-10 mt-8  ">
                    <button className="bg-main text-white font-bold px-8 py-2 rounded">
                       APPLY NOW
                    </button>
                    <div className="flex flex-col">
                    <p className="text-main text-2xl font-bold ">562,143</p>
                    <p className="flex flex-col text-main text-lg ">Accepted Applications</p>
                    </div>
                </div>
            </div>

            {/* Image Div */}
            <div className=" absolute w-[600px] h-[600px] right-0 top-28 flex justify-end">
                <div className="h-full w-full ">
                <Image 
                src="/images/governor-image.png"
                alt="The Background Image"
                width={1000}
                height={1000}
                className="object-cover h-full w-full "
                >

                </Image>
                </div>

                
            </div>
            
        </div>
        
        </div>
        
    )
        
}