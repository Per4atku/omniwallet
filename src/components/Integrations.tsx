import bitcoin from "../assets/images/btc.png";
import usd from "../assets/images/usd.png";
import tsl from "../assets/images/tsl.png";
import slv from "../assets/images/slv.png";
import oil from "../assets/images/oil.png";
import eth from "../assets/images/eth.png";
import SectionBadge from "./SectionBadge";
import IntegrationColumn from "./IntergrationsColumn";

const integrations = [
  {
    name: "Bitcon",
    icon: bitcoin,
    description: "The first cryptocurrency ever.",
  },
  {
    name: "USD",
    icon: usd,
    description: "Used in ~88% of all forex trades.",
  },
  {
    name: "Tesla Stock",
    icon: tsl,
    description: "Often seen as a symbol of innovation and volatility.",
  },
  {
    name: "Silver (XAG)",
    icon: slv,
    description:
      "Historically called “the people’s money” due to its affordability vs. gold.",
  },
  {
    name: "Oil (WTI/Brent)",
    icon: oil,
    description:
      "Crude oil prices influence global inflation more than almost any other commodity.",
  },
  {
    name: "Etherium",
    icon: eth,
    description: "Introduced smart contracts in 2015",
  },
];

export type integrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section
      id="intergrations"
      className="mt-32 flex flex-col lg:flex-row gap-8 lg:items-center"
    >
      <div className="flex flex-col gap-8 max-w-[500px]">
        <SectionBadge>Assets</SectionBadge>
        <h1 className="text-6xl font-medium lg:text-7xl">
          All assets,
          <span className="text-lime-400 ">one wallet.</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          From crypto to commodities to cash — manage everything in one place.
        </p>
      </div>

      <div className="relative h-[450px] overflow-hidden lg:h-[800px]">
        {/* градиенты сверху и снизу */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />

        <div className="grid sm:grid-cols-2 gap-4">
          <IntegrationColumn direction="up" integrations={integrations} />
          <IntegrationColumn
            direction="down"
            className="hidden sm:block"
            integrations={integrations.slice().reverse()}
          />
        </div>
      </div>
    </section>
  );
}
