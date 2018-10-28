// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const trunc = `
{%- macro trunc(arg1=None, arg2=0, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{% if arg1 < 0 %}
		{%- set result = -1 * ((-1 * arg1) | round(method='floor')) -%}
	{%- else -%}
		{%- set result = arg1 | round(method='floor') -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
