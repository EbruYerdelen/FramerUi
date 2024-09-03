import React from "react";

type SVGProps = React.SVGAttributes<SVGSVGElement>;
type DivProps = React.HTMLAttributes<HTMLDivElement>;

interface SVGComponentProps extends DivProps {
  src: string;
  svgProps?: SVGProps;
}

const AwardsDivSvg: React.FC<SVGComponentProps> = ({
  src,
  svgProps,
  style,
  ...divProps
}) => {
  const [svgContent, setSvgContent] = React.useState<string>("");

  React.useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((setText) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(setText, "image/svg+xml");
        const svgElement = svgDoc.documentElement;
        setSvgContent(svgElement.innerHTML);
      })
      .catch((error) => console.error("Error loading SVG:", error));
  }, [src]);

  return (
    <div
      {...divProps}
      style={{
        ...style,
        width: "100%",
        overflowX: "hidden", // This will hide overflowed content
      }}
    >
      <svg
        {...svgProps}
        style={{
          ...svgProps?.style,
          width: "100%", // Full width
          height: "400px", // Fixed height
          minWidth: "1000px", // Ensures the SVG doesn't shrink below its original width
        }}
        preserveAspectRatio="xMinYMin slice" // This will maintain aspect ratio and slice overflow
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};

export default AwardsDivSvg;
