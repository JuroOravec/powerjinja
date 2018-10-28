// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { isTypeOneOf } from "../value/is-type-one-of";

export const isLastItemTypeOneOf = `
{%- macro is_last_item_type_one_of(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _is_last_item_type_callback(_1=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.assert.value.is_type_one_of(arg1|last, arg2, macros=[_is_last_item_type_callback]) -}}
{%- endmacro -%}
`;
