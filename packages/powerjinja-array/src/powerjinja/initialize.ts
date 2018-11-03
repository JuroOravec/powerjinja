import { initialize as initializePowerjinjaCore } from 'powerjinja-core';
import { loadDefinitions } from "./load-definitions";
import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

export function initialize(config?: Powerjinja["config"]) {
  const powerjinja = initializePowerjinjaCore(config);
  loadDefinitions(powerjinja);
  return powerjinja;
}