// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if argument is None.
 * @param {any} arg value that is being checked
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_none(0, macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_none(None, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isNone = `
{%- macro is_none(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is none -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
