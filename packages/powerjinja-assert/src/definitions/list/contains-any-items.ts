// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const containsAnyItems = `
{%- macro contains_any_items(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set match = [] -%}
	{%- for item in arg2 -%}
		{%- if arg1.count(item) > 0 -%}
			{%- append item to match -%}
		{%- endif -%}
	{%- endfor -%}
	{%- set result = match | count > 0 and (arg1|count > 0) -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
