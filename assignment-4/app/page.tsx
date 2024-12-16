export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] gap-2 h-screen p-4 bg-white">
      <div className="col-span-1 row-span-3 bg-yellow-400 p-4 font-bold">
        Nav
      </div>

      <div className="col-span-3  bg-yellow-400 p-4  font-bold">
        Header
      </div>

      <div className="col-span-2 bg-yellow-400 p-4  font-bold">
        Article
      </div>

      <div className="col-span-1 row-span-2 bg-yellow-400 p-4  font-bold">
        Ads
      </div>

      <div className="col-span-2 bg-yellow-400 p-4  font-bold">
        Footer
      </div>
    </div>
  );
}


