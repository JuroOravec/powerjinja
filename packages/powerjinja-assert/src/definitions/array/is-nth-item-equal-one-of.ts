import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { isEqualOneOf } from "../value/is-equal-one-of";

export function isNthItemEqualOneOf(config: Powerjinja["config"]) {
  return `
{%- macro is_nth_item_equal_one_of(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _is_nth_item_equal_one_of_callback(_1=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.assert.value.is_equal_one_of([arg1][0][arg3], arg2, macros=[_is_nth_item_equal_one_of_callback]) -}}
{%- endmacro -%}
`;
}
