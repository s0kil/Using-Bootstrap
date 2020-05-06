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

// Responsive Image Square
window.squareImage = function (element) {
  element.style.height = `${element.offsetWidth}px`;
};

// Enable `#debug` Symbol During Development
if (process.env.NODE_ENV === "development") {
  document.addEventListener("DOMContentLoaded", () => {
    const debugSymbol = document.getElementById("debug");
    if (debugSymbol) {
      const siblings = [...debugSymbol.parentElement.children];
      siblings.forEach((sibling) => {
        if (sibling !== debugSymbol) {
          sibling.style.display = "none";
        }
      });
    }
  });
}
