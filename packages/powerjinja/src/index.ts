import { coreDefinitions } from "powerjinja-core";
import { argumentsDefinitions } from "powerjinja-arguments";

const definitions = [coreDefinitions, argumentsDefinitions];
const definitionsObject = Object.assign(
  definitions.map(def => def.getAll({ select: "all", type: "full" }))
);

export const powerjinja = Object.assign;

argumentsDefinitions.define("powerjinja.arguments.definition_name", definition);
