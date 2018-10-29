// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if argument is iterable. That can be any list, string or an object.
 * @param {any} arg value that is being checked
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_iterable(0, macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_iterable([], macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isIterable = `
{%- macro is_iterable(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is iterable -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
