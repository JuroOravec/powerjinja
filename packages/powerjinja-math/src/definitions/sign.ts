// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const sign = `
{%- macro sign(arg1=None, arg2=0, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{% if arg1 == 'nan' | float %}
		{%- set result = arg1 -%}
	{% elif arg1 < 0 or arg1 == '-inf' | float %}
		{%- set result = -1 -%}
	{% elif arg1 > 0 or arg1 == 'inf' | float %}
		{%- set result = 1 -%}
	{%- else -%}
		{%- set result = 0 -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
