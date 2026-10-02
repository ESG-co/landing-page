import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16sm:items-start">
        {/* Cara 1: Standar Tailwind utility (-scale-x-100) */}
        <div className="group cursor-pointer">
          <img
            src="https://pixabots.com/api/pixabot/4014?animated=true"
            alt="gif"
            height={150}
            width={150}
            className="transition-transform duration-300 group-hover:-scale-x-100"
          />
        </div>

        {/* Cara 2: Arbitrary scale value (scale-x-[-1]) */}
        <div className="group cursor-pointer">
          <img
            src="https://pixabots.com/api/pixabot/2314?animated=true"
            alt="gif"
            height={150}
            width={150}
            className="transition-transform duration-300 group-hover:scale-x-[-1]"
          />
        </div>

        {/* Cara 3: 3D rotation Y-axis ([transform:rotateY(180deg)]) */}
        <div className="group cursor-pointer">
          <img
            src="https://pixabots.com/api/pixabot/1514?animated=true"
            alt="gif"
            height={150}
            width={150}
            className="transition-transform duration-300 group-hover:[transform:rotateY(180deg)]"
          />
        </div>

        {/* Cara 4: Arbitrary matrix transform ([transform:matrix(-1,0,0,1,0,0)]) */}
        <div className="group cursor-pointer">
          <img
            src="https://pixabots.com/api/pixabot/3014?animated=true"
            alt="gif"
            height={150}
            width={150}
            className="transition-transform duration-300 group-hover:[transform:matrix(-1,0,0,1,0,0)]"
          />
        </div>
      </main>
    </div>
  );
}
