import { instantiate } from "./instantiate";
import { loadDefinitions } from "./load-definitions";
import { Powerjinja } from "../interface/powerjinja";

export function initialize(config?: Powerjinja["config"]) {
  const powerjinja = instantiate(undefined, config);
  loadDefinitions(powerjinja);
  return powerjinja;
}