import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true iff all items in an iterable are truthy.
 * @param {iterable} list any iterable
 * @returns {boolean}
 * @example
 * {{- powerjinja.array.all([1, 'hello', [1]], macros=[powerjinja.core.print]) -}}
 * // prints True
 *
 * @example
 * {{- powerjinja.array.all([1, 'hello', [1], {}], macros=[powerjinja.core.print]) -}}
 * // prints False
 */
export function all(config: Powerjinja["config"]) {
  const append = config.command.append;
  return `
{%- macro all(arg1=[], arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set falses = [] -%}
	{%- for i in arg1 -%}
		{%- if not i -%}
			{%- ${append("falses", "i")} -%}
		{%- endif -%}
	{%- endfor -%}
	{%- set result = falses | count == 0 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
