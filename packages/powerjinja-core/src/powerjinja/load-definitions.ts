import { Powerjinja } from "../interface/powerjinja";

import { handleQueue } from '../definitions/handle-queue'

export function loadDefinitions(powerjinja: Powerjinja) {
  powerjinja.define('powerjinja.core.handle_queue', handleQueue(powerjinja.config));

  return powerjinja;
}