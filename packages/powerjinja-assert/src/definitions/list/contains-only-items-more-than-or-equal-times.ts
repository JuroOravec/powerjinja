// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const containsOnlyItemsMoreThanOrEqualTimes = `
{%- macro contains_only_items_more_than_or_equal_times(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set all_match = [] -%}
	{%- set correct_match = [] -%}
	{%- for item in arg2 -%}
		{%- set occr = arg1.count(item) -%}
		{%- if occr >= arg3 -%}
			{%- append occr to correct_match -%}
		{%- endif -%}
		{%- append occr to all_match -%}
	{%- endfor -%}
	{%- set result = (all_match | sum == arg1 | count and arg1|count > 0) and (correct_match | count == arg2 | count) -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;