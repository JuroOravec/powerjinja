// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const minBy = `
{%- macro min_by(arg1=[], arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 | count > 0 -%}
		{%- set sorted = arg1 | sort(reverse=False, attribute=arg2)  -%}
		{%- set result = sorted[0] -%}
	{%- else -%}
		{%- set result = None -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
