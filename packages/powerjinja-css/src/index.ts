import { coreDefinitions } from "powerjinja-core";

import { alignSelf } from "./definitions/align-self";
import { appearance } from "./definitions/appearance";
import { backgroundSize } from "./definitions/background-size";
import { borderRadius } from "./definitions/border-radius";
import { boxShadow } from "./definitions/box-shadow";
import { boxSizing } from "./definitions/box-sizing";
import { displayFlex } from "./definitions/display-flex";
import { displayInlineFlex } from "./definitions/display-inline-flex";
import { flexDirection } from "./definitions/flex-direction";
import { flexWrap } from "./definitions/flex-wrap";
import { flex } from "./definitions/flex";
import { justifyContent } from "./definitions/justify-content";
import { transform } from "./definitions/transform";
import { transition } from "./definitions/transition";
import { transition2 } from "./definitions/transition2";

export const cssDefinitions = coreDefinitions;

cssDefinitions.define("powerjinja.css.align_self", alignSelf);
cssDefinitions.define("powerjinja.css.appearance", appearance);
cssDefinitions.define("powerjinja.css.background_size", backgroundSize);
cssDefinitions.define("powerjinja.css.border_radius", borderRadius);
cssDefinitions.define("powerjinja.css.box_shadow", boxShadow);
cssDefinitions.define("powerjinja.css.box_sizing", boxSizing);
cssDefinitions.define("powerjinja.css.display_flex", displayFlex);
cssDefinitions.define("powerjinja.css.display_inline_flex", displayInlineFlex);
cssDefinitions.define("powerjinja.css.flex_direction", flexDirection);
cssDefinitions.define("powerjinja.css.flex_wrap", flexWrap);
cssDefinitions.define("powerjinja.css.flex", flex);
cssDefinitions.define("powerjinja.css.justify_content", justifyContent);
cssDefinitions.define("powerjinja.css.transform", transform);
cssDefinitions.define("powerjinja.css.transition", transition);
cssDefinitions.define("powerjinja.css.transition2", transition2);
