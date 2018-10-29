// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if value is boolean (True (or 1) or False (or 0)).
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_boolean('', macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_boolean(False, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isBoolean = `
{%- macro is_boolean(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 == True or arg1 == False -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
