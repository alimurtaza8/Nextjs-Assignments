export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4 p-4 bg-black h-screen">
      <div className="col-span-4 row-span-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-center text-white font-bold flex items-center justify-center">
        Header
      </div>

      <div className="col-span-1 row-span-4 bg-gradient-to-b from-teal-400 to-cyan-500 text-center text-white font-bold flex items-center justify-center">
        Sidebar
      </div>

      <div className="col-span-3 row-span-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-center text-white font-bold flex items-center justify-center">
        Content-1
      </div>

      <div className="col-span-2 row-span-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-center text-white font-bold flex items-center justify-center">
        Content-2
      </div>

      <div className="col-span-1 row-span-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-center text-white font-bold flex items-center justify-center">
        Content-3
      </div>

      <div className="col-span-4 row-span-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-center text-white font-bold flex items-center justify-center">
        Footer
      </div>
    </div>
  );
}
