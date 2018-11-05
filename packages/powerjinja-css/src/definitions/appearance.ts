import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function appearance(config: Powerjinja["config"]) {
  return `
{%- macro appearance(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-appearance: ' ~ arg1 ~ ';' -}}
	{{- '-moz-appearance: ' ~ arg1 ~ ';' -}}
	{{- 'appearance: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
