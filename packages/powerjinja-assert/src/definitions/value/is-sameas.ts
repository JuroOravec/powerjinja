// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if first arguments references the same entity as the second argument.
 * @param {any} arg value that is being checked
 * @returns {boolean}
 * @example
 * {% set a = [] %}{% set b = [] %}
 * {{- powerjinja.assert.value.is_sameas(a, b, macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {% set a = [] %}{% set b = a %}
 * {{- powerjinja.assert.value.is_sameas(a, b, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isSameas = `
{%- macro is_sameas(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is sameas arg2 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
