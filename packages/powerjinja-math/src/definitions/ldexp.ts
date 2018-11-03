import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pow } from "./pow";

export function ldexp(config: Powerjinja["config"]) {
  return `
{%- macro ldexp(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _ldexp_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{% set result = arg1 * res %}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.pow(2, arg2, macros=[_ldexp_callback]) -}}
{%- endmacro -%}
`;
}
