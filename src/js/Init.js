import { DOM } from "./dom";
import { setUrls } from "./setUrls";
import ShowcaseNav from "./ShowcaseNav";

class Init {
  app = () => {
    setUrls(DOM.showcaseItem, "#works");
    setUrls(DOM.workItem, "#works");
  }
}

export default new Init();