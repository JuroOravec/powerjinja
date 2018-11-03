import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function containsMoreThanTimes(config: Powerjinja["config"]) {
  return `
{%- macro contains_more_than_times(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set split_str = arg1 is string and arg1.split(arg2) -%}
	{%- set result = split_str | count > (1 + arg3) -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
