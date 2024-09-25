import App from "./App";
import "./global.css";
import ReactDOM from "react-dom/client";

export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: "linkedin-extension",
      position: "inline",
      onMount: (container) => {
        const app = document.createElement("div");
        container.append(app);
        const root = ReactDOM.createRoot(app);
        root.render(<App />);
        return { root, app };
      },
      onRemove: (props) => {
        props?.root?.unmount();
        props?.app?.remove();
      },
    });
    ui.mount();
  },
});
