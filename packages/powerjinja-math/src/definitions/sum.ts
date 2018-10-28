// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const sum = `
{%- macro sum(arg1=[], arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 | count > 0 -%}
		{%- set result = arg1 | sum  -%}
	{%- else -%}
		{%- set result = None -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
