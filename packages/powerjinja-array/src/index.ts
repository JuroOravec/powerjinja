import { coreDefinitions } from "powerjinja-core";

import { all } from "./definitions/all";
import { any } from "./definitions/any";

export const arrayDefinitions = coreDefinitions;

arrayDefinitions.define("powerjinja.array.all", all);
arrayDefinitions.define("powerjinja.array.any", any);
