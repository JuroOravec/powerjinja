// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { ln } from "./ln";

// log(base, num)

export const log = `
{%- macro log(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if (arg1 == 'nan' | float) or (arg1 == 1) or (arg1 <= 0) or (arg1 == 'inf' | float) or (arg1 == '-inf' | float) or (arg2 == 'nan' | float) or (arg2 < 0 or arg2 == '-inf' | float) or (arg2 == 1) -%}
		{%- if arg2 == 1 -%}
			{%- set result = 0 -%}
		{%- else -%}
			{%- set result = 'nan' | float -%}
		{%- endif -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- else -%}
		{%- macro _log_callback2(ln_arg2=None, ln_arg1=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{%- set result = ln_arg2 / ln_arg1 -%}
			{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{%- macro _log_callback1(ln_arg1=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.math.ln(arg2, ln_arg1, macros=[_log_callback2]) -}}
		{%- endmacro -%}
		{{- powerjinja.math.ln(arg1, macros=[_log_callback1]) -}}
	{%- endif -%}
{%- endmacro -%}
`;
