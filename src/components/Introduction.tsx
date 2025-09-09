import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionBadge from "./SectionBadge";

const Introduction = () => (
  <div className="mt-32">
    <div className="w-full flex justify-center mb-32">
      <SectionBadge>INTRODUCING LAYERS</SectionBadge>
    </div>
    <MaxWidthWrapper maxWidth={800}>
      <h2 className="text-4xl lg:text-5xl text-center font-medium">
        <span className="text-white">
          Your creative process deserves better.{" "}
        </span>
        <span className="text-muted-foreground">
          You're racing to create exceptional work, but traditional design tools
          slow you down with unnecessary complexity and steep learning curves.{" "}
        </span>
        <span className="text-lime-400 block">That's why we built Layers.</span>
      </h2>
    </MaxWidthWrapper>
  </div>
);

export default Introduction;
