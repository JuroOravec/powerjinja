import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function backgroundSize(config: Powerjinja["config"]) {
  return `
{%- macro background_size(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-background-size: ' ~ arg1 ~ ';' -}}
	{{- '-moz-background-size: ' ~ arg1 ~ ';' -}}
	{{- '-ms-background-size: ' ~ arg1 ~ ';' -}}
	{{- '-o-background-size: ' ~ arg1 ~ ';' -}}
	{{- 'background-size: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}