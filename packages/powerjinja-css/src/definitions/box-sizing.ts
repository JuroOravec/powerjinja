import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function boxSizing(config: Powerjinja["config"]) {
  return `
{%- macro box_sizing(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- "-webkit-box-sizing: " ~ arg1 ~ ";" -}}
	{{- "-moz-box-sizing: " ~ arg1 ~ ";" -}}
	{{- "box-sizing: " ~ arg1 ~ ";" -}}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
