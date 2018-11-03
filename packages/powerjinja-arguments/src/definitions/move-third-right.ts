import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Moves 3rd argument one position to the right.
 * @example
 * {{- powerjinja.arguments.move_third_right(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg1 arg2 arg3 arg3 arg5
 */
export function moveThirdRight(config: Powerjinja["config"]) {
  return `
{%- macro move_third_right(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, None, arg3, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
