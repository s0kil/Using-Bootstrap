import { SVGInjector } from "@tanem/svg-injector";

// UGH...
window.injectSVG = function (element) {
  SVGInjector(element);
};
