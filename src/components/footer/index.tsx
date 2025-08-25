// interface FooterProps {
//   onBackToTop?: () => void;
// }

import {
  DiscordLogoIcon,
  GithubLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  const info = [
    {
      name: "GitHub",
      link: "https://github.com/txbody-org",
      icon: <GithubLogoIcon name="github" size={32} />,
    },
    {
      name: "Discord",
      link: "https://discord.gg/BpmNRaha",
      icon: <DiscordLogoIcon name="discord" size={32} />,
    },
    {
      name: "X(Twitter)",
      link: "https://x.com/txbodyio?t=1XLkk-aOY2Mf2toVcemiFw&s=09",
      icon: <TwitterLogoIcon name="twitter" size={32} />,
    },
  ];
  return (
    <div className="container mx-auto px-2 relative overflow-hidden border-t-2 border-[#404040]/25 lg:mt-32">
      {/*<div className="py-20">
        <img
          src="/txbody-website/tx-icon.png"
          alt="TxBody Logo"
          className="w-16 h-16"
        />

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
      </div>*/}
      {/* copy right */}
      <div className="flex justify-between items-end">
        <div className="py-10 text-muted space-y-5">
          <img
            src="/txbody-website/tx-icon.png"
            alt="TxBody Logo"
            className="w-16 h-16"
          />
          <div>
            <p className="text-sm">© {new Date().getFullYear()} TxBody.</p>
            <p className="mt-4">Built with ❤️ for the Elixir community.</p>
          </div>
        </div>
        <div className="flex gap-2 py-10">
          {info.map((item, index) => (
            <a
              href={item.link}
              className="text-lg flex gap-2 z-10 hover:-translate-y-1 duration-300 ease-in-out "
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <img
        src="/txbody-website/footer-bg.png"
        alt="Footer Background"
        width={1920}
        height={300}
        className="z-0 absolute -bottom-1/2 left-0 w-full h-auto object-cover object-top-left max-h-[220px]"
      />
    </div>
  );
};

export default Footer;
