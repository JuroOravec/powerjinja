import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Shifts all arguments one position to the left.
 * @example
 * {{- powerjinja.arguments.shift_left(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg2 arg3 arg4 arg5 arg1
 */
export function shiftLeft(config: Powerjinja["config"]) {
  return `
{%- macro shift_left(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg2, arg3, arg4, arg5, arg1, macros, index) -}}
{%- endmacro -%}
`;
}
