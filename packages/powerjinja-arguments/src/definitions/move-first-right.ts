import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Moves 1st argument one position to the right.
 * @example
 * {{- powerjinja.arguments.move_first_right(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg1 arg1 arg3 arg4 arg5
 */
export function moveFirstRight(config: Powerjinja["config"]) {
  return `
{%- macro move_first_right(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(None, arg1, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
