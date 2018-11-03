import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if 1st argument is equal to the 2nd argument.
 * @param {any} arg1 first value that is being compared
 * @param {any} arg2 second value that is being compared
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_equal(1, '1' ,macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_equal(1, 1, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export function isEqual(config: Powerjinja["config"]) {
  return `
{%- macro is_equal(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 == arg2 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
