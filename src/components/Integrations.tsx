import figmaIcon from "../assets/images/figma-logo.svg";
import notionIcon from "../assets/images/notion-logo.svg";
import slackIcon from "../assets/images/slack-logo.svg";
import relumeIcon from "../assets/images/relume-logo.svg";
import framerIcon from "../assets/images/framer-logo.svg";
import githubIcon from "../assets/images/github-logo.svg";
import SectionBadge from "./SectionBadge";
import IntegrationColumn from "./IntergrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type integrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="mt-32 flex flex-col lg:flex-row gap-8 lg:items-center">
      <div className="flex flex-col gap-8 max-w-[500px]">
        <SectionBadge>Integrations</SectionBadge>
        <h1 className="text-6xl font-medium lg:text-7xl">
          Plays well with <span className="text-lime-400 ">others</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Layers seamlessly connects with your favorite tools, making it easy to
          plug into any workflow and collaborate across platforms.
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
            className="hidden sm:flex"
            integrations={integrations.slice().reverse()}
          />
        </div>
      </div>
    </section>
  );
}
