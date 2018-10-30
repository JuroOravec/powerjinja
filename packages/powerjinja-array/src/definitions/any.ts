// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if any of the items in an iterable is truthy.
 * @param {iterable} list any iterable
 * @returns {boolean}
 * @example
 * {{- powerjinja.array.any([1, '', [], {}], macros=[powerjinja.core.print]) -}}
 * // prints True
 *
 * @example
 * {{- powerjinja.array.any([0, '', [], {}], macros=[powerjinja.core.print]) -}}
 * // prints False
 */
export const any = `
{%- macro any(arg1=[], arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set trues = [] -%}
	{%- for i in arg1 -%}
		{%- if not i -%}
			{%- append i to trues -%}
		{%- endif -%}
	{%- endfor -%}
	{%- set result = trues | count > 0 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
