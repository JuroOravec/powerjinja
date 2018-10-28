// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const clamp = `
{%- macro clamp(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 < arg2 -%}
		{%- set result = arg2 -%}
	{%- elif arg1 > arg3 -%}
		{%- set result = arg3 -%}
	{%- else -%}
		{%- set result = arg1 -%}
	{%- endif -}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
