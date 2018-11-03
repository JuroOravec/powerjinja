import { initialize as initializePowerjinjaCore } from "powerjinja-core";
import { loadModules } from "./load-modules";
import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

export function initialize(config?: Powerjinja["config"]) {
  const powerjinja = initializePowerjinjaCore(config);
  loadModules(powerjinja);
  return powerjinja;
}
