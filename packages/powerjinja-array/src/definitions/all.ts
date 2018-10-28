// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const all = `
{%- macro all(arg1=[], arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- falses = [] -%}
	{%- for i in arg1 -%}
		{%- if not i -%}
			{%- append i to falses -%}
		{%- endif -%}
	{%- endfor -%}
	{%- set result = falses | count == 0 -%}
	{{- handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
