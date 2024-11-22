import FlickeringGrid from "@/components/ui/flickering-grid";

export function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <FlickeringGrid
        className="z-0 relative inset-0 [mask-image:radial-gradient(1080px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={1.0}
        flickerChance={0.6}
        height={1080}
        width={1920}
      />
    </div>
  );
}
