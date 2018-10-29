// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Alias for is_mapping. Returns true if value is mapping, that is, the argument is an object.
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_object([1, 2, 3], macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_object({'a': test_macro }, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isObject = `
{%- macro is_object(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is mapping -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
