// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if value is callable, e.g. a macro.
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {% macro test_macro %}{% endmacro %}
 * {{- powerjinja.assert.value.is_callable({'a': test_macro }, macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {% macro test_macro %}{% endmacro %}
 * {{- powerjinja.assert.value.is_callable(test_macro, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export const isCallable = `
{%- macro is_callable(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 is callable -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
