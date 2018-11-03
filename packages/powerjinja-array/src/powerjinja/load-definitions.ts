import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

import { all } from '../definitions/all'
import { any } from '../definitions/any'
import { forEach } from '../definitions/for-each'
import { map } from '../definitions/map'

export function loadDefinitions(powerjinja: Powerjinja) {
  powerjinja.define('powerjinja.array.all', all(powerjinja.config));
  powerjinja.define('powerjinja.array.any', any(powerjinja.config));
  powerjinja.define('powerjinja.array.for_each', forEach(powerjinja.config));
  powerjinja.define('powerjinja.array.map', map(powerjinja.config));

  return powerjinja;
}