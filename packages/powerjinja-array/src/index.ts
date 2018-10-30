import { powerjinjaCore } from "powerjinja-core";

import { all } from './definitions/all'
import { any } from './definitions/any'
import { forEach } from './definitions/for-each'
import { map } from './definitions/map'

export const powerjinjaArray = powerjinjaCore;

powerjinjaArray.define('powerjinja.array.all', all);
powerjinjaArray.define('powerjinja.array.any', any);
powerjinjaArray.define('powerjinja.array.for_each', forEach);
powerjinjaArray.define('powerjinja.array.map', map);