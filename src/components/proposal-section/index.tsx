import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { Button } from "../ui/button";
import SutraSDKDialog from "./sutra-sdk-dialog";

const ProposalSection = () => {
  const proposalData = [
    {
      name: "Sutra SDK",
      description: "Lightweight governance tooling for Cardano",
      link: "#sutra-sdk",
      components: <SutraSDKDialog />,
    },
    {
      name: "On-chain Voting UI Kit",
      description: "Reusable components for voting dashboards",
      link: "#voting-ui-kit",
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
      <div className="flex flex-col justify-center h-full  z-10 relative overflow-y-clip pt-10">
        <img
          src="/txbody-website/proposal-bg.png"
          alt="proposal Background"
          sizes="100vw"
          className="object-cover blur-[100px]  -translate-y-1/2 z-0 opacity-30 absolute w-full h-full "
        />
        <div className="flex flex-col items-center relative">
          <p className="uppercase">[ PROPOSALS ]</p>
          <h2 className="text-3xl md:text-5xl font-medium mt-1 md:mt-3">
            Fund14 Proposals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#404040]/25 mt-10">
          {proposalData.map((proposal, index) => (
            <ProposalCard
              key={index}
              name={proposal.name}
              description={proposal.description}
              components={proposal.components}
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
}: {
  name: string;
  description: string;
  components?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-between py-5 md:px-10 ">
      <h3 className="text-xl font-semibold flex-1">{name}</h3>
      <p className="text-muted flex-1 ">{description}</p>
      <div className="flex-1 flex justify-end">
        {components ? (
          components
        ) : (
          <Button variant={"outline"} size={"lg"} className="z-20">
            READ MORE <ArrowUpRightIcon size={"18"} />
          </Button>
        )}
      </div>
    </div>
  );
};
