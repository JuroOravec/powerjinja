// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if argument is truthy.
 * @param {any} arg value that is being checked
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_truthy([], macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_truthy([1, 2, 3], macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isTruthy = `
{%- macro is_truthy(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = not not arg1 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
