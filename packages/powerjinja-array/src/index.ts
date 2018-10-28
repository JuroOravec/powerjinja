import { powerjinjaCore } from "powerjinja-core";

import { all } from "./definitions/all";
import { any } from "./definitions/any";

export const powerjinjaArray = powerjinjaCore;

powerjinjaArray.define("powerjinja.array.all", all);
powerjinjaArray.define("powerjinja.array.any", any);
