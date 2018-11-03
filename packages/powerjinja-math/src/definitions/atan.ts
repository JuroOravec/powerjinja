import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pi } from "./pi";

export function atan(config: Powerjinja["config"]) {
  return `
{%- macro atan(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _atan_callback(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set abs_val = arg1 | abs -%}
		{%- set result = pi / 4 * arg1 - arg1 * (abs_val - 1) * (0.2447 + 0.0663 * abs_val) -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.pi(macros=[_atan_callback]) -}}
{%- endmacro -%}
`;
}
