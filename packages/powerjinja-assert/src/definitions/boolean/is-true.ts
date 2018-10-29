// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if value is True (or 1).
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.boolean.is_true('hello', macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.boolean.is_true(True, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isTrue = `
{%- macro is_true(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 == True -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
