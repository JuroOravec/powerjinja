import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function transform(config: Powerjinja["config"]) {
  return `
{%- macro transform(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-transform: ' ~ arg1 ~ ';' -}}
	{{- '-moz-transform: ' ~ arg1 ~ ';' -}}
	{{- '-ms-transform: ' ~ arg1 ~ ';' -}}
	{{- '-o-transform: ' ~ arg1 ~ ';' -}}
	{{- 'transform: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
