import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import SDKCard from "./SDKCard";
import TXBuildingIcon from "./icons/TxBuilding";
import E2EEIcon from "./icons/E2EEIcon";
import BeamIcon from "./icons/BeamIcon";
import PhoenixIcon from "./icons/PhoenicIcon";

const ProductSection = () => {
  const sdks = [
    {
      name: "Transaction Building",
      description:
        "Build complex transactions in minutes, not days. Simple APIs that handle the blockchain complexity for you.",
      icon: <TXBuildingIcon />,
    },
    {
      name: "E2E Testing Framework",
      description:
        "Ship with confidence using our complete testing suite. Simulate real blockchain scenarios before deployment.",
      icon: <E2EEIcon />,
    },
    {
      name: "BEAM Virtual Machine",
      description:
        "Built on battle-tested BEAM architecture. Handle millions of concurrent transactions with 99.9% uptime guarantees.",
      icon: <BeamIcon />,
    },
    {
      name: "Phoenix LiveView Integration",
      description:
        "Build modern, real-time blockchain UIs with Phoenix LiveView. Native WebSocket support for live transaction updates.",
      icon: <PhoenixIcon />,
    },
  ];
  return (
    <div className="container mx-auto w-full px-2 pt-16">
      <div className="flex flex-col justify-center h-full z-10 ">
        <div className="flex flex-col items-center relative h-full">
          <p className="uppercase">[ Product ]</p>
          <h2 className="text-3xl md:text-5xl font-medium mt-1 md:mt-3">
            Sutra SDK
          </h2>
          <div className="text-center relative flex-1">
            <img
              src="/product-bg.png"
              alt="Product Background"
              sizes="100vw"
              className="object-contain z-0 absolute w-full h-full "
            />
            <p className="mt-4 md:mt-8 text-muted max-w-[876px] text-center text-base md:text-xl">
              A powerful Elixir SDK framework for building applications on
              Cardano.
            </p>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mt-5 md:mt-10 max-w-[793px] mx-auto">
                {sdks.map((sdk, index) => (
                  <SDKCard
                    key={index}
                    name={sdk.name}
                    description={sdk.description}
                    icon={sdk.icon}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="lg"
                className="mt-10 z-20 text-sm relative"
                asChild
              >
                <a
                  href="https://sutra.txbody.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW MORE <ArrowUpRightIcon size={"18"} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
