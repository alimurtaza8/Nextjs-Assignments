import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className = "w-full">

      {/* Header Section */}
      {/* <div className="flex bg-custom-blue h-[92px] w-[1440px] absolute">
        <div className=" w-full">
          <div className="flex w-[191px] h-[34px] flex-grow-0">
  
              <span className="text-white font-bold w-[144px] h-[34px] m-4 text-lg left-[35px] top-0 absolute">whitepace</span>
              <Image
              src="/images/Vector.png"
              alt="Vector"
              height={50}
              width={50}
              className="w-[24px] h-[20px] m-5">          
              </Image>
          </div>

          <div className="flex flex-direction-row justify-center gap-4 text-white top-[22px] left-[600px] absolute" >
            
            <Link href="#">Products</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Pricing</Link>
            
          </div>

          <div className="flex justify-end gap-4 top-[15px] right-[100px] absolute">
            <button className="bg-yellow-100 text-custom-blue px-5 w-[126px] h-[50px] rounded-lg">
              Login
            </button>
            <button className="bg-blue-400 text-white text-sm px-8 w-[190px] h-[50px] rounded-lg">
              Try WhiteSpace Free
            </button>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}

      {/* <div className="bg-white flex flex-direction items-center p-[100px] w-[1440px] h-[656.39px] top-[92px] absolute  "> */}
          
        {/* <div className="grid grid-cols-3 gap-6 h-[calc(100vh-88px)]">
          <div className=" bg-white"> Hello</div>
          <div className=" bg-white">Hi</div>

        </div> */}

        {/* Header */}

        <div className="grid grid-cols-2 bg-custom-blue gap-6 h-[calc(100vh-88px)]">
        <div className="col-span-3  ">
          <div className=" w-full">
          <div className="flex w-[191px] h-[34px] flex-grow-0">
  
              <span className="text-white font-bold w-[144px] h-[34px] m-4 text-lg left-[35px] top-0 absolute">whitepace</span>
              <Image
              src="/images/Vector.png"
              alt="Vector"
              height={50}
              width={50}
              className="w-[24px] h-[20px] m-5">          
              </Image>
          </div>

          <div className="flex flex-direction-row justify-center gap-4 text-white top-[22px] left-[600px] absolute" >
            
            <Link href="#">Products</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Pricing</Link>
            
          </div>

          <div className="flex justify-end gap-4 top-[15px] right-[40px] absolute">
            <button className="bg-yellow-100 text-custom-blue px-5 w-[126px] h-[50px] rounded-lg">
              Login
            </button>
            <button className="bg-blue-400 text-white text-sm px-8 w-[190px] h-[50px] rounded-lg">
              Try WhiteSpace Free
            </button>
          </div>
        </div>
    </div>
    {/* <div className="col-span-8">
      <Image
      src="/images/Hero-section.png"
      alt="Hero Section"
      width={2000}
      height={1000}>

      </Image>
    </div> */}

    {/* Hero Section */}

    <div className="mt-[100px] col-span-1 row-span-3 left-[200px] m-3">
      <h1 className="text-5xl font-bold text-white p-2 mt-4">
        Get More Done with whitepace
      </h1>
      <p className="text-white m-4">
        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
      </p>
      <button className="bg-blue-400 text-white  text-sm px-4  w-[180px] h-[50px]  rounded-lg m-3">
        Try WhiteSpace Free
      </button>
    </div>

    <div className="mt-[80px] col-span-1 row-span-3 bg-blue-200 right-[200px] m-3">
      </div>


      {/* Project Management Code */}

      </div>

      <div className="grid grid-cols-2 bg-white gap-6 h-[calc(100vh-88px)]">
      <div className="mt-[100px] col-span-1 row-span-3 left-[200px] m-3">
      <h1 className="text-5xl font-bold text-black p-2 mt-4 w-[100px]">
        Project Management
        
      </h1>
      <Image
        src="/images/v-1.png"
        alt="Image"
        height={50}
        width={50}
        className="w-[350px] h-[20px]">

        </Image>
      <p className="text-black m-4 right-[100px[">
      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
      </p>
      <button className="bg-blue-400 text-white  text-sm px-4  w-[150px] h-[50px]  rounded-lg m-3">
        Get Started
      </button>
    </div>

    <div className="mt-[80px] col-span-1 row-span-3 bg-blue-200 h-[350px] right-[10px] left-96 m-4">
      </div>

      </div>
      


      {/* Work Together */}

      <div className="grid grid-cols-2 bg-white gap-6 h-[calc(100vh-88px)]">
        <div className="mt-[80px] col-span-1 row-span-3 bg-white right-[10px] left-96 m-4">
          <Image
          src="/images/Screen-shout.png"
          alt="Images"
          height={500}
          width={450}
          className="rounded-lg ">

          </Image>
        </div>

        <div className="mt-[100px] col-span-1 row-span-3 left-[200px] m-3">
      <h1 className="text-5xl font-bold text-black p-2 mt-4 w-[350px]">
      Work together
        
      </h1>

      <div className="flex justify-center top-[15px] right-[40px] ">
      <Image
        src="/images/v-1.png"
        alt="Image"
        height={50}
        width={50}
        className="flex justify-end w-[150px] h-[20px]">

        </Image>
        </div>

      <p className="text-black m-4 right-[100px[">
      With whitepace, share your notes with your colleagues and collaborate on them.
      You can also publish a note to the internet and share the URL with others.

      </p>
      <button className="bg-blue-400 text-white  text-sm px-4  w-[150px] h-[50px]  rounded-lg m-3">
        Try it now
      </button>
      </div>
      </div>


      {/* Use as Extension Part */}



      <div className="grid grid-cols-2 bg-custom-blue gap-6 h-[calc(100vh-88px)]">
      <div className="mt-[180px] col-span-1 row-span-3 left-[200px] m-8">
      <h1 className="text-5xl font-bold text-white p-2 mt-4 w-[400px]">
      Use as Extension
        
      </h1>
      <Image
        src="/images/v-1.png"
        alt="Image"
        height={50}
        width={50}
        className="w-[350px] h-[20px]">

        </Image>
      <p className="text-white m-1 w-[500px] right-[100px]">
      Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
      </p>
      <button className="bg-blue-400 text-white  text-sm px-4  w-[150px] h-[50px]  rounded-lg m-3">
        Let&apos;s Go
      </button>
    </div>

    <div className="mt-[140px] col-span-1 row-span-3 w-[570px] bg-blue-200 h-[350px] right-[10px] left-96 m-4">
      </div>

      </div>


      {/* Needs Section */}



      <div className="grid grid-cols-2 bg-white gap-6 h-[calc(100vh-88px)]">

      <div className="mt-[140px] col-span-1 row-span-3 w-[570px] bg-blue-200 h-[400px] right-[10px] left-96 m-4">
      </div>

      <div className="mt-[180px] col-span-1 row-span-3 left-[200px] m-8">
      <h1 className="text-5xl font-bold text-black p-2 mt-4 w-[400px]">
      Customise it to your needs
        
      </h1>
      <Image
        src="/images/v-1.png"
        alt="Image"
        height={350}
        width={300}
        className="rounded-lg">

        </Image>
      <p className="text-back m-1 w-[500px] right-[100px]">
      Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
      </p>
      <button className="mt-8 bg-blue-400 text-white  text-sm px-4  w-[150px] h-[50px]  rounded-lg m-2">
        Let&apos;s Go
      </button>
    </div>
      </div>




      {/* Pricing Section */}

      <section className="bg-white py-16 px-4">
     
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black">
          Choose Your Plan
        </h1>
        <p className="text-black mt-4 max-w-2xl mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg shadow-sm bg-white p-6 md:p-8 ">
          <h3 className="text-lg font-semibold text-gray-800">Free</h3>
          <p className="text-4xl font-bold mt-4">$0</p>
          <p className="text-gray-500 mt-2">Capture ideas and find them quickly</p>
          <ul className="text-sm text-gray-600 mt-6 space-y-4">
            <li>✔ Sync unlimited devices</li>
            <li>✔ 10 GB monthly uploads</li>
            <li>✔ 200 MB max. note size</li>
            <li>✔ Customize Home dashboard and access extra widgets</li>
            <li>✔ Connect primary Google Calendar account</li>
            <li>✔ Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="mt-6 bg-white border-2 border-yellow-400 font-medium py-2 px-4 rounded-md hover:bg-yellow-600">
            Get Started
          </button>
        </div>

        <div className="border rounded-lg shadow-lg bg-custom-blue text-white p-6 md:p-8 ">
          <h3 className="text-lg font-semibold">Personal</h3>
          <p className="text-4xl font-bold mt-4">$11.99</p>
          <p className="mt-2">Keep home and family on track</p>
          <ul className="text-sm mt-6 space-y-4">
            <li>✔ Sync unlimited devices</li>
            <li>✔ 10 GB monthly uploads</li>
            <li>✔ 200 MB max. note size</li>
            <li>✔ Customize Home dashboard and access extra widgets</li>
            <li>✔ Connect primary Google Calendar account</li>
            <li>✔ Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white text-font-medium py-2 px-4 rounded-md hover:bg-gray-100">
            Get Started
          </button>
        </div>
        <div className="border rounded-lg shadow-sm bg-white p-6 md:p-8 ">
          <h3 className="text-lg font-semibold text-gray-800">Organization</h3>
          <p className="text-4xl font-bold mt-4">$49.99</p>
          <p className="text-gray-500 mt-2">Capture ideas and find them quickly</p>
          <ul className="text-sm text-gray-600 mt-6 space-y-4">
            <li>✔ Sync unlimited devices</li>
            <li>✔ 10 GB monthly uploads</li>
            <li>✔ 200 MB max. note size</li>
            <li>✔ Customize Home dashboard and access extra widgets</li>
            <li>✔ Connect primary Google Calendar account</li>
            <li>✔ Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="mt-6 bg-white border-2 border-yellow-400  text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>
    </section>

      {/* < SectionOne /> */}

      <section className="bg-custom-blue text-white py-16 px-6">
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Your work, <span className="relative">
            everywhere you are
            <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 -z-10"></span>
          </span>
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Access your notes from your computer, phone or tablet by synchronizing with various services, 
          including whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, 
          Android, and iOS. A terminal app is also available!
        </p>

      
        <div className="mt-8">
          <a
            href="#"
            className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-200 inline-flex items-center"
          >
            Try Taskey →
          </a>
        </div>
      </div>
    </section>


      {/* <SectionTwo /> */}

      <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
      
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            100% 
              your data
              
             
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The app is open source and your notes are saved to an open format,
            so you&apos;ll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no one but yourself can
            access them.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-200 inline-flex items-center"
            >
              Read more →
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
          src="/images/Image-1.png"
          alt="text"
          width={550}
          height={450}
          className="rounded-lg">
          </Image>

        </div>
      </div>
    </section>

    {/* Our Responsers */}
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-6xl font-bold">
          Our 
            Sponsors
          
        </h2>

        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/images/Apple.png"
              alt="Apple"
              className="w-24  md:w-22 h-24"
            />
          </div>

          
          <div className="flex justify-center">
            <img
              src="/images/Microsoft.png"
              alt="Microsoft"
              className="w-24 md:w-32"
            />
          </div>

         
          <div className="flex justify-center">
            <img
              src="/images/Slack.png"
              alt="Slack"
              className="w-24 md:w-32"
            />
          </div>

          
          <div className="flex justify-center">
            <img
              src="/images/Google.png"
              alt="Google"
              className="w-24 md:w-32"
            />
          </div>
        </div>
      </div>
    </section>


   


     
    <section className="bg-custom-blue py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

      <div className="relative">
          <Image
          src="/images/work-1.png"
          alt="text"
          width={550}
          height={450}
          className="rounded-lg">
          </Image>

        </div>
      
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
          Work with Your Favorite Apps Using whitepace
              
             
          </h2>
          <p className="mt-6 text-white text-lg leading-relaxed">
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-200 inline-flex items-center"
            >
              Read more →
            </a>
          </div>
        </div>

        
      </div>
    </section>

     {/* Client Section */}
     <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-6xl font-bold mb-12">
          What Our Clients 
            Says
            
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-custom-blue text-6xl">“</div>
            </div>
            <p className="text-gray-600 mb-4">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <hr className="my-4" />
            <div className="flex items-center">
              <img
                src="/images/client-0.png"
                alt="Oberon Shaw"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Oberon Shaw, MCH</h3>
                <p className="text-gray-500 text-sm">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-400 shadow-md rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-custom-blue text-6xl">“</div>
            </div>
            <p className="text-white mb-4">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <hr className="my-4" />
            <div className="flex items-center">
              <img
                src="/images/client-1.png"
                alt="Oberon Shaw"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Oberon Shaw, MCH</h3>
                <p className="text-white text-sm">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-400 shadow-md rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-cutom-blue text-6xl">“</div>
            </div>
            <p className="text-white mb-4">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <hr className="my-4" />
            <div className="flex items-center">
              <img
                src="/images/client-2.png"
                alt="Oberon Shaw"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Oberon Shaw, MCH</h3>
                <p className="text-white text-sm">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        </div>
      </div>
    </section>



    {/* Try Today */}

    <section className="bg-custom-blue text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-6xl font-bold">
          Try Whitepace <span className="block">today</span>
        </h2>
        
        
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Get started for free. <br />
          Add your whole team as your needs grow.
        </p>
        
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-md shadow-lg transition duration-200 inline-flex items-center">
            Try Taskey free →
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-300">
          On a big team? <a href="#" className="underline hover:text-gray-100">Contact sales</a>
        </p>
        
        <div className="mt-8 flex justify-center gap-6">
          <Image
          src="/images/p-1.png"
          alt="text"
          width={100}
          height={100}>

          </Image>
        
        </div>
      </div>
    </section>
      

    <footer className="bg-custom-blue text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">whitepace</h2>
          <p className="text-sm">
            whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Overview</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Customer stories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides & tutorials</a></li>
            <li><a href="#" className="hover:underline">Help center</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Media kit</a></li>
          </ul>
        </div>

        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold mb-3">Try It Today</h3>
          <p className="text-sm mb-4">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start today →</a>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">English</a>
            <a href="#" className="hover:underline">Terms & privacy</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Status</a>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-2">©2021 Whitepace LLC.</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:underline"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:underline"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    

    
      
    </div>
  )
    
}





 

