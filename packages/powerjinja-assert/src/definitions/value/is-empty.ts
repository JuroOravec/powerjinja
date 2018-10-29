// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if iterable has no items. Either an array with zero length or object with no properties.
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {% set test_arr = [1, 2, 3] %}
 * {{- powerjinja.assert.value.is_empty(test_arr , macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {% set test_arr = [1, 2, 3] %}
 * {{- powerjinja.assert.value.is_empty(test_arr , macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isEmpty = `
{%- macro is_empty(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = (arg1 is iterable) and (arg1 | count == 0) -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
