import Image from "next/image";
export default function Home() {
    return (
      <div>
        <nav>
            <div className="bg-gray-300 min-h-16 p-4">
            </div>
        </nav>

        {/* Hero Section */}
        {/* <div className="flex p-20 "> */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-10 lg:p-20 gap-6 lg:gap-16">
            <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Welcome To Our Website</h1>
                <p className="text-3xl mt-4 w-[470px]  text-balance"> 
                Lorem Ipsum is simply dummy text of     
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry&apos;s 
                standard
                </p>

                <div className="h-10 mt-4">
                    <button className="bg-black text-white px-6 py-2">
                        Contact US
                    </button>
                </div>
            </div>

            {/* Image Div */}
            <div className="bg-slate-400 w-[400px] h-[340px] absolute right-16 top-28">
                <Image 
                src="/images/background-image.jpeg"
                alt="The Background Image"
                width={400}
                height={400}
                className="object-cover h-full w-full"
                >

                </Image>

                
            </div>
            
        </div>
        
      </div>
    );
  } 