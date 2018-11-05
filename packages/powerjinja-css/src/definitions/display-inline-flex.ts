import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// arg1: flexGrowValue, arg2: flexShrinkValue, arg3: flexBasisValue

export function displayInlineFlex(config: Powerjinja["config"]) {
  return `
{%- macro display_inline_flex(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- 'display: -webkit-inline-box;' -}}
	{{- 'display: -webkit-inline-flex;' -}}
	{{- 'display: -moz-inline-box;' -}}
	{{- 'display: -ms-inline-flexbox;' -}}
	{{- 'display: inline-flex;' -}}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
