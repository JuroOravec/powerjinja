// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const mean = `
{%- macro mean(arg1=[], arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 | count > 0 -%}
		{%- set sum = arg1 | sum  -%}
		{%- set result = sum / arg1|count -%}
	{%- else -%}
		{%- set result = None -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
