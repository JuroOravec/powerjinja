import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

import { loadDefinitions as powerjinjaArgumentsLoadDefinitions } from "powerjinja-arguments/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaArrayLoadDefinitions } from "powerjinja-array/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaAssertLoadDefinitions } from "powerjinja-assert/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaBooleanLoadDefinitions } from "powerjinja-boolean/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaCoreLoadDefinitions } from "powerjinja-core/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaCssLoadDefinitions } from "powerjinja-css/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaExponeaBannerLoadDefinitions } from "powerjinja-exponea-banner/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaMathLoadDefinitions } from "powerjinja-math/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaObjectLoadDefinitions } from "powerjinja-object/lib/powerjinja/load-definitions"
import { loadDefinitions as powerjinjaStringLoadDefinitions } from "powerjinja-string/lib/powerjinja/load-definitions"

export function loadModules(powerjinja: Powerjinja){;
  powerjinjaArgumentsLoadDefinitions(powerjinja);
  powerjinjaArrayLoadDefinitions(powerjinja);
  powerjinjaAssertLoadDefinitions(powerjinja);
  powerjinjaBooleanLoadDefinitions(powerjinja);
  powerjinjaCoreLoadDefinitions(powerjinja);
  powerjinjaCssLoadDefinitions(powerjinja);
  powerjinjaExponeaBannerLoadDefinitions(powerjinja);
  powerjinjaMathLoadDefinitions(powerjinja);
  powerjinjaObjectLoadDefinitions(powerjinja);
  powerjinjaStringLoadDefinitions(powerjinja);
}