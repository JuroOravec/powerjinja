import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Maps each item in array (first argument) to the result of a macro (second argument) executed with that item.
 * Note that mapping macro must implement following structure:
 * {%- macro my_macro(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
 * 	 // My mapping logic here...
 *   {{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
 * {%- endmacro -%}
 * @param {iterable} list any iterable whose values will be passed to the macro
 * @param {callable} macro macro that is executed with values from the list
 * @returns {array} array of mapped values
 * @example
 * {%- macro format_greeting(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
 * 	 {%- set greeting = "Hello" ~ arg1 ~ "!\n" -%}
 *   {{- powerjinja.core.handle_queue(greeting, arg2, arg3, arg4, arg5, macros, index) -}}
 * {%- endmacro -%}
 * {{- powerjinja.array.for_each(["Anna", "Bob", "Claude"], format_greeting, macros=[powerjinja.core.print]) -}}
 * // prints:
 * // Hello Anna!
 * // Hello Bob!
 * // Hello Claude!
 */
export function map(config: Powerjinja["config"]) {
  const append = config.command.append;
  return `
{%- macro map(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set mapped_values = [] -%}
	{%- macro _map_cb(_1=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- ${append("mapped_values", "_1")} -%}
	{%- endmacro -%}
	{%- for i in arg1 -%}
		{{- arg2(i, loop.index0, arg1, macros=[_map_cb]) -}}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(mapped_values, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
