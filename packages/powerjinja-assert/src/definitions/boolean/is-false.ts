import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if value is False (or 0).
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.boolean.is_false('', macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.boolean.is_false(False, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export function isFalse(config: Powerjinja["config"]) {
  return `
{%- macro is_false(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 == False -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
