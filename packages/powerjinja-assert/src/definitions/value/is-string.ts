// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if argument is a string.
 * @param {any} arg value that is being checked
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_string(['a', 'b', 'c'], macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_string('abc', macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isString = `
{%- macro is_string(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is string -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
