import { createInstance } from "./create-instance";

import { handleQueue } from "./definitions/handle-queue";

export const coreDefinitions = createInstance();

coreDefinitions.define("powerjinja.core.handle_queue", handleQueue);
