import Image from "next/image";
import { integrationsType } from "./Integrations";
import { cn } from "@/lib/utils";

const IntegrationColumn = ({
  integrations,
  className,
}: {
  integrations: integrationsType;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4 ", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="flex flex-col py-8 text-center items-center justify-center gap-4 rounded-2xl border border-stone-800 bg-stone-900"
        >
          <Image
            width={90}
            height={90}
            src={integration.icon}
            alt={integration.name}
          />
          <h3 className="text-3xl">{integration.name}</h3>
          <p className="text-muted-foreground max-w-[250px] p-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationColumn;
