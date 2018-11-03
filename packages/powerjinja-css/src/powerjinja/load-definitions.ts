import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

import { alignSelf } from '../definitions/align-self'
import { appearance } from '../definitions/appearance'
import { backgroundSize } from '../definitions/background-size'
import { borderRadius } from '../definitions/border-radius'
import { boxShadow } from '../definitions/box-shadow'
import { boxSizing } from '../definitions/box-sizing'
import { displayFlex } from '../definitions/display-flex'
import { displayInlineFlex } from '../definitions/display-inline-flex'
import { flexDirection } from '../definitions/flex-direction'
import { flexWrap } from '../definitions/flex-wrap'
import { flex } from '../definitions/flex'
import { justifyContent } from '../definitions/justify-content'
import { transform } from '../definitions/transform'
import { transition } from '../definitions/transition'
import { transition2 } from '../definitions/transition2'

export function loadDefinitions(powerjinja: Powerjinja) {
  powerjinja.define('powerjinja.css.align_self', alignSelf(powerjinja.config));
  powerjinja.define('powerjinja.css.appearance', appearance(powerjinja.config));
  powerjinja.define('powerjinja.css.background_size', backgroundSize(powerjinja.config));
  powerjinja.define('powerjinja.css.border_radius', borderRadius(powerjinja.config));
  powerjinja.define('powerjinja.css.box_shadow', boxShadow(powerjinja.config));
  powerjinja.define('powerjinja.css.box_sizing', boxSizing(powerjinja.config));
  powerjinja.define('powerjinja.css.display_flex', displayFlex(powerjinja.config));
  powerjinja.define('powerjinja.css.display_inline_flex', displayInlineFlex(powerjinja.config));
  powerjinja.define('powerjinja.css.flex_direction', flexDirection(powerjinja.config));
  powerjinja.define('powerjinja.css.flex_wrap', flexWrap(powerjinja.config));
  powerjinja.define('powerjinja.css.flex', flex(powerjinja.config));
  powerjinja.define('powerjinja.css.justify_content', justifyContent(powerjinja.config));
  powerjinja.define('powerjinja.css.transform', transform(powerjinja.config));
  powerjinja.define('powerjinja.css.transition', transition(powerjinja.config));
  powerjinja.define('powerjinja.css.transition2', transition2(powerjinja.config));

  return powerjinja;
}