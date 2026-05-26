declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
  // 추가
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
