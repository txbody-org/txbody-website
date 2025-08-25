import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { Button } from "../ui/button";

const ProposalSection = () => {
  const proposalData = [
    {
      name: "Sutra : Plutus blueprint Integration & Testing framework",
      description:
        "With Plutus blueprint support, users can generate datums, redeemers & script info with a single Mix task command. We'll also add support to test transactions in private networks using Yaci DevKit.",
      link: "https://projectcatalyst.io/funds/14/cardano-open-developers/sutra-plutus-blueprint-integration-and-testing-framework",
    },
    {
      name: "Sutra: Elixir SDK for Cardano",
      description:
        "Sutra SDK enables native Cardano blockchain integration for Elixir developers, providing comprehensive tooling for building real-time, concurrent, fault-tolerant dApps efficiently.",
      link: "https://projectcatalyst.io/funds/14/cardano-open-developers/sutra-elixir-sdk-for-cardano",
    },
    // {
    //   name: "Tx Explorer Lite",
    //   description: "Minimal block explorer for dApp integration",
    //   link: "#tx-explorer-lite",
    // },
    // {
    //   name: "Governance API",
    //   description: "RESTful API for governance metadata",
    //   link: "#governance-analytics",
    // },
  ];
  return (
    <div className="container mx-auto flex-1 w-full px-10 ">
      <div className="flex flex-col justify-around h-full  z-10 relative overflow-y-clip pt-10">
        <img
          src="/proposal-bg.png"
          alt="proposal Background"
          sizes="100vw"
          className="object-cover blur-[100px] -translate-y-1/2 z-0 opacity-30 absolute w-full h-full "
        />
        <div className="flex flex-col items-center relative">
          <p className="uppercase">[ PROPOSALS ]</p>
          <h2 className="text-3xl md:text-5xl font-medium mt-1 md:mt-3">
            Fund14 Proposals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#404040]/25 mt-10 md:mt-20 xl:mt-36">
          {proposalData.map((proposal, index) => (
            <ProposalCard
              key={index}
              name={proposal.name}
              link={proposal.link}
              description={proposal.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposalSection;

const ProposalCard = ({
  name,
  description,
  components,
  link,
}: {
  name: string;
  description: string;
  link: string;
  components?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 py-5 md:px-10 ">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-muted flex-1 ">{description}</p>
      <div className="flex-1 flex justify-start">
        {components ? (
          components
        ) : (
          <Button variant={"outline"} size={"lg"} className="z-20" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              READ MORE <ArrowUpRightIcon size={"18"} />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};
