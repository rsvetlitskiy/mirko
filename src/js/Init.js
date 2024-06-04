import { DOM } from "./dom";
import { setUrls } from "./setUrls";

class Init {
  
  app = () => {
    setUrls(DOM.showcaseItem, "#works");
    setUrls(DOM.workItem, "#works");
  }
}

export default new Init();