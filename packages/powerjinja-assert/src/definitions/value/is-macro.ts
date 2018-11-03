import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Alias for is_callable. Returns true if value is callable, e.g. a macro.
 * @param {any} arg any
 * @returns {boolean}
 * @example
 * {% macro test_macro %}{% endmacro %}
 * {{- powerjinja.assert.value.is_macro({'a': test_macro }, macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {% macro test_macro %}{% endmacro %}
 * {{- powerjinja.assert.value.is_macro(test_macro, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export function isMacro(config: Powerjinja["config"]) {
  return `
{%- macro is_macro(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _is_macro_cb(_1, _2, _3, _4, _5, _6, _7) -%}
		{%- set result = _1 -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.assert.value.is_callable(arg1, macros=[_is_macro_cb]) -}}
{%- endmacro -%}
`;
}
