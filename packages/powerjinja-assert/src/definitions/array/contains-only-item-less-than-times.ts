import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function containsOnlyItemLessThanTimes(config: Powerjinja["config"]) {
  return `
{%- macro contains_only_item_less_than_times(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = (arg1.count(arg2) == arg1 | count arg1|count > 0) and (arg1 | count < arg3) -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
