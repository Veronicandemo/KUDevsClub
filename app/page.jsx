import NavLinks from "./ui/Navlinks";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('../public/hero.jpeg')] bg-cover h-[90vh]">
        <NavLinks />
        <p className="font-black text-9xl uppercase antialiased mt-20 text-[#4BDBD0]">
          <span className="indent-[50%] inline-block ">Develop</span> <br />
          <span className="indent-[100%] inline-block mt-5">Engage</span>
          <br /> <span className="indent-[150%] inline-block mt-5">Evolve</span>
        </p>
      </div>
    </main>
  );
}
