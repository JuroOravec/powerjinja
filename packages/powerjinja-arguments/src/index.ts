import {coreDefinitions} from 'powerjinja-core';

import {moveFifthLeft} from './definitions/move-fifth-left'
import {moveFifthRight} from './definitions/move-fifth-right'
import {moveFourthLeft} from './definitions/move-fourth-left'
import {moveFourthRight} from './definitions/move-fourth-right'
import {moveThirdLeft} from './definitions/move-third-left'
import {moveThirdRight} from './definitions/move-third-right'
import {moveSecondLeft} from './definitions/move-second-left'
import {moveSecondRight} from './definitions/move-second-right'
import {moveFirstLeft} from './definitions/move-first-left'
import {moveFirstRight} from './definitions/move-first-right'
import {reverse} from './definitions/reverse'
import {shiftLeft} from './definitions/shift-left'
import {shiftRight} from './definitions/shift-right'

export const argumentsDefinitions = coreDefinitions;

argumentsDefinitions.define('powerjinja.arguments.move_fifth_left', moveFifthLeft);
argumentsDefinitions.define('powerjinja.arguments.move_fifth_right', moveFifthRight);
argumentsDefinitions.define('powerjinja.arguments.move_fourth_left', moveFourthLeft);
argumentsDefinitions.define('powerjinja.arguments.move_fourth_right', moveFourthRight);
argumentsDefinitions.define('powerjinja.arguments.move_third_left', moveThirdLeft);
argumentsDefinitions.define('powerjinja.arguments.move_third_right', moveThirdRight);
argumentsDefinitions.define('powerjinja.arguments.move_second_left', moveSecondLeft);
argumentsDefinitions.define('powerjinja.arguments.move_second_right', moveSecondRight);
argumentsDefinitions.define('powerjinja.arguments.move_first_left', moveFirstLeft);
argumentsDefinitions.define('powerjinja.arguments.move_first_right', moveFirstRight);
argumentsDefinitions.define('powerjinja.arguments.reverse', reverse);
argumentsDefinitions.define('powerjinja.arguments.shift_left', shiftLeft);
argumentsDefinitions.define('powerjinja.arguments.shift_right', shiftRight);

console.log('powerjinja.arguments.reverse')