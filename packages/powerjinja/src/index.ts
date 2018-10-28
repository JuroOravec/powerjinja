import { createInstance } from "powerjinja-core/lib/create-instance";

import { powerjinjaArguments } from "powerjinja-arguments";
import { powerjinjaArray } from "powerjinja-array";
import { powerjinjaAssert } from "powerjinja-assert";
import { powerjinjaBoolean } from "powerjinja-boolean";
import { powerjinjaCore } from "powerjinja-core";
import { powerjinjaCss } from "powerjinja-css";
import { powerjinjaExponeaBanner } from "powerjinja-exponea-banner";
import { powerjinjaMath } from "powerjinja-math";
import { powerjinjaObject } from "powerjinja-object";
import { powerjinjaString } from "powerjinja-string";

const definitions = [
  powerjinjaArguments,
  powerjinjaArray,
  powerjinjaAssert,
  powerjinjaBoolean,
  powerjinjaCore,
  powerjinjaCss,
  powerjinjaExponeaBanner,
  powerjinjaMath,
  powerjinjaObject,
  powerjinjaString
];

const definitionsObject = Object.assign(
  {},
  ...definitions.map(def => def.getAll({ select: "all", type: "full" }))
);

export const powerjinja = createInstance(definitionsObject);
