import MaxWidthWrapper from "./MaxWidthWrapper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <MaxWidthWrapper
      id="home"
      maxWidth={800}
      className="flex flex-col container mx-auto mt-20 text-center items-center gap-4 md:gap-6 lg:gap-8"
    >
      <Badge className="rounded-full px-2 font-bold text-md bg-gradient-to-r from-purple-400 to-pink-400">
        ✨ $7.5M seed round raised
      </Badge>
      <h1 className="text-6xl font-medium lg:text-7xl">
        Impactful design, created effortlessly
      </h1>
      <p className="text-muted-foreground text-lg text-center px-2">
        Design tools shouldn't slow you down. Layers combines powerful features
        with an intuitive interface that keeps you in your creative flow
      </p>
      <MaxWidthWrapper
        maxWidth={600}
        className="w-full flex border rounded-full px-2 items-center"
      >
        <Input
          type={"email"}
          placeholder="Enter your email"
          className="border-none rounded-full h-16"
        />
        <Button className="flex font-bold rounded-full p-5 py-6">
          Sign Up
        </Button>
      </MaxWidthWrapper>
    </MaxWidthWrapper>
  );
};

export default Hero;
