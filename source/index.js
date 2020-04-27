import { SVGInjector } from "@tanem/svg-injector";

window.injectSVG = function (element) {
  SVGInjector(element, {
    afterEach(error, injectedSVG) {
      if (error) throw error;
      // Display SVG After Injection
      injectedSVG.classList.remove("invisible");
    },
  });
};
