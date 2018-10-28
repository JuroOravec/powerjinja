import { coreDefinitions } from "powerjinja-core";

import { definition } from "./definitions/path-to-definition";

export const argumentsDefinitions = coreDefinitions;

argumentsDefinitions.define("powerjinja.arguments.definition_name", definition);
