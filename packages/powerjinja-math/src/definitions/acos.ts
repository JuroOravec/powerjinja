// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pi } from "./pi";

export const acos = `
{%- macro acos(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 < -1 or arg1 > 1 -%}
		{%- set result = 'nan' | float -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- else -%}
		{%- macro _acos_callback(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{%- set arg1_sq = arg1 * arg1 -%}
			{%- set result = pi/2 + (-0.939115566365855 * arg1 + 0.9217841528914573 * arg1_sq * arg1) / (1 + -1.2845906244690837 * arg1_sq + 0.295624144969963174 * arg1_sq * arg1_sq) -%}
			{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{{- powerjinja.math.pi(macros=[_acos_callback]) -}}
	{%- endif -%}
{%- endmacro -%}
`;
