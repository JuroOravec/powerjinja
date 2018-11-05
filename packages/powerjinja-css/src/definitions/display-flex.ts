import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// arg1: flexGrowValue, arg2: flexShrinkValue, arg3: flexBasisValue

export function displayFlex(config: Powerjinja["config"]) {
  return `
{%- macro display_flex(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- "display: -webkit-flex;" -}}
	{{- "display: -moz-flex;" -}}
	{{- "display: -ms-flexbox;" -}}
	{{- "display: -o-flex;" -}}
	{{- "display: flex;" -}}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
