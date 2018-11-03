import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pow } from "./pow";

export function rsqrt(config: Powerjinja["config"]) {
  return `
{%- macro rsqrt(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _rsqrt_callback(result=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(1/result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.pow(arg1, 0.5, macros=[_rsqrt_callback]) -}}
{%- endmacro -%}
`;
}
