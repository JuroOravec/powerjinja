import {init} from 'inject-definition'

import { minifier } from "./config/minifier";
import { variableNameRetriever } from "./config/variable-name-retriever";
import { variableNameReplacer } from "./config/variable-name-replacer";
import { declarationFormatter } from "./config/declaration-formatter";

import {handleQueue } from './definitions/handle-queue';

export const coreDefinitions = init({
  minifier,
  variableNameReplacer,
  variableNameRetriever,
  declarationFormatter
});

coreDefinitions.define('powerjinja.core.handle_queue', handleQueue);