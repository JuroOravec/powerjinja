import { createInstance } from "./create-instance";

import { handleQueue } from './definitions/handle-queue'

export const powerjinjaCore = createInstance();

powerjinjaCore.define('powerjinja.core.handle_queue', handleQueue);