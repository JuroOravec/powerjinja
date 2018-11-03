import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function isSquareMatrix(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro is_square_matrix(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set is_arr = arg1 is iterable and arg1 is not string and arg1 is not mapping -%}
	{%- if is_arr -%}
		{%- set non_arrs = [] -%}
		{%- set width = arg1 | count -%}
		{%- for item in arg1 -%}
			{%- if (not (item is iterable and item is not string and item is not mapping)) or (item | count != width) -%}
				{%- ${append("non_arrs", "item")} -%}
			{%- endif -%}
		{%- endfor -%}
		{%- set result = non_arrs | count == 0 -%}
	{%- else -%}
		{% set result = is_arr %}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
