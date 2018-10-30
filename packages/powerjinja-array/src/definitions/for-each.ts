// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * For each item in array (first argument), execute macro (second argument) with that item.
 * @param {iterable} list any iterable whose values will be passed to the macro
 * @param {callable} macro macro that is executed with values from the list
 * @example
 * {%- macro printName(name) -%}
 * 	 {{ "Hello " ~ name ~ "!\n" }}
 * {%- endmacro -%}
 * {{- powerjinja.array.for_each(["Anna", "Bob", "Claude"], printName) -}}
 * // prints:
 * // Hello Anna!
 * // Hello Bob!
 * // Hello Claude!
 */
export const forEach = `
{%- macro for_each(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- for i in arg1 -%}
		{{- arg2(i) -}}
	{%- endfor -%}
	{{- handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
