// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if value is undefined.
 * @param {any} arg any
 * @returns {boolean}
 *
 * @example
 * {% set test_obj = {a: 1} %}
 * {{- powerjinja.assert.value.is_undefined(test_obj.a , macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {% set test_obj = {} %}
 * {{- powerjinja.assert.value.is_undefined(test_obj.a , macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isUndefined = `
{%- macro is_undefined(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is undefined -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
