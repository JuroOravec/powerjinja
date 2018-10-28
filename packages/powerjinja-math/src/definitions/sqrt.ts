// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pow } from "./pow";

export const sqrt = `
{%- macro sqrt(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if (arg1 == 0 or arg1 == 1) or (arg1 < 0) -%}
		{%- if arg1 < 0 -%}
			{%- set result = 'nan' | float -%}
		{%- else -%}
			{%- set result = arg1 -%}
		{%- endif -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- else -%}
		{%- macro _sqrt_callback(result=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{{- powerjinja.math.pow(arg1, 0.5, macros=[_sqrt_callback]) -}}
	{%- endif -%}
{%- endmacro -%}
`;
