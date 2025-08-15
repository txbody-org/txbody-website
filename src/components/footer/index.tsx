import { ArrowUpRightIcon, CaretUpIcon } from "@phosphor-icons/react";

import { Button } from "../ui/button";

interface FooterProps {
  onBackToTop?: () => void;
}

const Footer = ({ onBackToTop }: FooterProps) => {
  const info = [
    {
      name: "GitHub",
      link: "#",
    },
    {
      name: "Discord",
      link: "#",
    },
    { name: "Contact Us", link: "#" },
    { name: "X(Twitter)", link: "#" },
  ];
  return (
    <div className="container mx-auto px-2 relative overflow-hidden">
      <div className="py-20">
        <p className="uppercase">[ CONTACT ]</p>

        <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <h3 className="mt-2 text-5xl font-medium">
              Let&apos;s build together.
            </h3>
            <p className="text-muted mt-5">
              We’d love to hear from developers...
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-x-10 text-[#FAFAFA]">
            {info.map((item, index) => (
              <div className="flex justify-center" key={index}>
                <a href={item.link} className="text-lg flex gap-2" key={index}>
                  {item.name} <ArrowUpRightIcon size={"18"} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* copy right */}
      <div className="flex justify-between items-center">
        <div className="py-10 text-muted">
          <p className="text-sm">© {new Date().getFullYear()} TxBody.</p>
          <p>Built with ❤️ for the Elixir community.</p>
        </div>
        <div>
          <Button
            variant={"ghost"}
            size={"lg"}
            onClick={onBackToTop}
            className="z-10! relative"
          >
            Back to top <CaretUpIcon size={"18"} />
          </Button>
        </div>
      </div>
      <img
        src="/tx-body/footer-bg.png"
        alt="Footer Background"
        width={1920}
        height={300}
        className="z-0 absolute -bottom-1/2 left-0 w-full h-auto object-cover"
      />
    </div>
  );
};

export default Footer;
