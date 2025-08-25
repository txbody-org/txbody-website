import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="w-full h-svh relative px-2">
      <div className="w-full aspect-[2/1] relative z-0  mx-auto max-h-1/2">
        <img
          src="/hero-bg.png"
          alt="Hero Image"
          className="absolute w-full h-full object-contain inset-0"
        />
      </div>
      <div className="absolute h-full w-full flex flex-col justify-center items-center z-10 inset-0">
        <div className="flex-1"></div>
        <div className="h-2/5 flex flex-col justify-center">
          <div>
            <h1 className="max-w-[600px] text-4xl md:text-6xl text-center font-medium">
              Building tools for a decentralized world.
            </h1>
            <p className="max-w-[600px] text-center text-xl mt-4 text-muted">
              Open-source infrastructure and developer tools for the next
              generation of blockchain applications.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="default" size="lg" className="text-sm" asChild>
              <a
                href="https://projectcatalyst.io/proposers/TxBody"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fund 14 Proposals
              </a>
            </Button>
            {/*<Button
              variant="outline"
              size="lg"
              className="text-sm flex items-center gap-2 md:gap-4 hover:bg-outline-hover"
            >
              VIEW ON GITHUB <ArrowUpRightIcon size={"18"} />
            </Button>*/}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-end pb-10 gap-5">
          {/* <p className="text-muted text-center">
            Trusted by over three million developers and teams
          </p> */}
          {/* <Marquee pauseOnHover className="[--duration:5s] gap-5"> */}
          {/* <div className="flex gap-5 opacity-25 flex-wrap justify-center">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={`${client.name} Logo`}
                width={100}
                height={50}
                className="h-8"
              />
            ))}
          </div> */}
          {/* </Marquee> */}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
