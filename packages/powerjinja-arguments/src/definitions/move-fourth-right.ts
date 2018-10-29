// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Moves 4th argument one position to the right.
 * @example
 * {{- powerjinja.arguments.move_fourth_right(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg1 arg2 arg3 arg4 arg4
 */
export const moveFourthRight = `
{%- macro move_fourth_right(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, None, arg4, macros, index) -}}
{%- endmacro -%}
`;
