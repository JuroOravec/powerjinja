import { powerjinjaCore } from "powerjinja-core";

import { moveFifthLeft } from "./definitions/move-fifth-left";
import { moveFifthRight } from "./definitions/move-fifth-right";
import { moveFirstLeft } from "./definitions/move-first-left";
import { moveFirstRight } from "./definitions/move-first-right";
import { moveFourthLeft } from "./definitions/move-fourth-left";
import { moveFourthRight } from "./definitions/move-fourth-right";
import { moveSecondLeft } from "./definitions/move-second-left";
import { moveSecondRight } from "./definitions/move-second-right";
import { moveThirdLeft } from "./definitions/move-third-left";
import { moveThirdRight } from "./definitions/move-third-right";
import { reverse } from "./definitions/reverse";
import { shiftLeft } from "./definitions/shift-left";
import { shiftRight } from "./definitions/shift-right";

export const powerjinjaArguments = powerjinjaCore;

powerjinjaArguments.define(
  "powerjinja.arguments.move_fifth_left",
  moveFifthLeft
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_fifth_right",
  moveFifthRight
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_first_left",
  moveFirstLeft
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_first_right",
  moveFirstRight
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_fourth_left",
  moveFourthLeft
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_fourth_right",
  moveFourthRight
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_second_left",
  moveSecondLeft
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_second_right",
  moveSecondRight
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_third_left",
  moveThirdLeft
);
powerjinjaArguments.define(
  "powerjinja.arguments.move_third_right",
  moveThirdRight
);
powerjinjaArguments.define("powerjinja.arguments.reverse", reverse);
powerjinjaArguments.define("powerjinja.arguments.shift_left", shiftLeft);
powerjinjaArguments.define("powerjinja.arguments.shift_right", shiftRight);
