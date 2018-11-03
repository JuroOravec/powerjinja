import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pi } from "./pi";
import { cos } from "./cos";

export function sin(config: Powerjinja["config"]) {
  return `
{%- macro sin(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _sin_callback2(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(res, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- macro _sin_callback1(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set val = (pi / 2) - arg1 -%}
		{{- powerjinja.math.cos(val, macros=[_sin_callback2]) -}}
	{%- endmacro -%}
	{{- powerjinja.math.pi(macros=[_sin_callback1]) -}}
{%- endmacro -%}
`;
}
