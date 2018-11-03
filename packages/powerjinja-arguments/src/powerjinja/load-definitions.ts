import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

import { moveFifthLeft } from '../definitions/move-fifth-left'
import { moveFifthRight } from '../definitions/move-fifth-right'
import { moveFirstLeft } from '../definitions/move-first-left'
import { moveFirstRight } from '../definitions/move-first-right'
import { moveFourthLeft } from '../definitions/move-fourth-left'
import { moveFourthRight } from '../definitions/move-fourth-right'
import { moveSecondLeft } from '../definitions/move-second-left'
import { moveSecondRight } from '../definitions/move-second-right'
import { moveThirdLeft } from '../definitions/move-third-left'
import { moveThirdRight } from '../definitions/move-third-right'
import { reverse } from '../definitions/reverse'
import { shiftLeft } from '../definitions/shift-left'
import { shiftRight } from '../definitions/shift-right'

export function loadDefinitions(powerjinja: Powerjinja) {
  powerjinja.define('powerjinja.arguments.move_fifth_left', moveFifthLeft(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_fifth_right', moveFifthRight(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_first_left', moveFirstLeft(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_first_right', moveFirstRight(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_fourth_left', moveFourthLeft(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_fourth_right', moveFourthRight(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_second_left', moveSecondLeft(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_second_right', moveSecondRight(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_third_left', moveThirdLeft(powerjinja.config));
  powerjinja.define('powerjinja.arguments.move_third_right', moveThirdRight(powerjinja.config));
  powerjinja.define('powerjinja.arguments.reverse', reverse(powerjinja.config));
  powerjinja.define('powerjinja.arguments.shift_left', shiftLeft(powerjinja.config));
  powerjinja.define('powerjinja.arguments.shift_right', shiftRight(powerjinja.config));

  return powerjinja;
}