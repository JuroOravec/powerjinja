import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function containsOnlyOrderedItemsTimes(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro contains_only_ordered_items_times(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if (arg1|count > 0 and arg1 | count is divisibleby(arg2|count)) and arg1|count == ((arg2 |count) * arg3) -%}
		{%- set mismatch = [] -%}
		{%- for item in arg1 -%}
			{%- set curr_ordered_item = [arg1][0][loop.index0 % arg2|count] -%}
			{%- if item != curr_ordered_item -%}
				{%- ${append("mismatch", "item")} -%}
			{%- endif -%}
		{%- endfor -%}
		{%- set result = mismatch | count == 0 -%}
	{%- else -%}
		{%- set result = False -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
