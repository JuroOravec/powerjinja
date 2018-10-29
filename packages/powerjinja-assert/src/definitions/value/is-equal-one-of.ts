// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if 1st argument is equal to one of the items of the 2nd argument.
 * @param {any} arg value that is being compared
 * @param {iterable} list list of value that arg is compared against.
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_equal_one_of(1 , ['1', '2', '3'],macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_equal_one_of(1 , [1, 2, 3],macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isEqualOneOf = `
{%- macro is_equal_one_of(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set match = [] -%}
	{%- for item in arg2 -%}
		{%- if item == arg1 -%}
			{%- append item to match -%}
		{%- endif -%}
	{%- endfor -%}
	{%- set result = match | count > 0 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
