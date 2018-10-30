import { powerjinjaCore } from "powerjinja-core";

import { alignSelf } from './definitions/align-self'
import { appearance } from './definitions/appearance'
import { backgroundSize } from './definitions/background-size'
import { borderRadius } from './definitions/border-radius'
import { boxShadow } from './definitions/box-shadow'
import { boxSizing } from './definitions/box-sizing'
import { displayFlex } from './definitions/display-flex'
import { displayInlineFlex } from './definitions/display-inline-flex'
import { flexDirection } from './definitions/flex-direction'
import { flexWrap } from './definitions/flex-wrap'
import { flex } from './definitions/flex'
import { justifyContent } from './definitions/justify-content'
import { transform } from './definitions/transform'
import { transition } from './definitions/transition'
import { transition2 } from './definitions/transition2'

export const powerjinjaCss = powerjinjaCore;

powerjinjaCss.define('powerjinja.css.align_self', alignSelf);
powerjinjaCss.define('powerjinja.css.appearance', appearance);
powerjinjaCss.define('powerjinja.css.background_size', backgroundSize);
powerjinjaCss.define('powerjinja.css.border_radius', borderRadius);
powerjinjaCss.define('powerjinja.css.box_shadow', boxShadow);
powerjinjaCss.define('powerjinja.css.box_sizing', boxSizing);
powerjinjaCss.define('powerjinja.css.display_flex', displayFlex);
powerjinjaCss.define('powerjinja.css.display_inline_flex', displayInlineFlex);
powerjinjaCss.define('powerjinja.css.flex_direction', flexDirection);
powerjinjaCss.define('powerjinja.css.flex_wrap', flexWrap);
powerjinjaCss.define('powerjinja.css.flex', flex);
powerjinjaCss.define('powerjinja.css.justify_content', justifyContent);
powerjinjaCss.define('powerjinja.css.transform', transform);
powerjinjaCss.define('powerjinja.css.transition', transition);
powerjinjaCss.define('powerjinja.css.transition2', transition2);