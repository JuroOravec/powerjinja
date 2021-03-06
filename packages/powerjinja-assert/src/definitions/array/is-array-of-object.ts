import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { isObject } from "../value/is-object";

export function isArrayOfObject(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro is_array_of_object(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set errs = [] -%}
	{%- macro _is_array_of_object_cb(_1=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- if _1 -%}
			{%- ${append("errs", "_1")} -%}
		{%- endif -%}
	{%- endmacro -%}
	{%- for item in arg1 -%}
		{{- powerjinja.assert.value.is_object(item, macros=[_is_array_of_object_cb]) -}}
	{%- endfor -%}
	{%- set result = errs |count == 0 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
