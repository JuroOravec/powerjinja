// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Moves 5th argument one position to the right.
 * @example
 * {{- powerjinja.arguments.move_fifth_right(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg5 arg2 arg3 arg4 arg5
 */
export const moveFifthRight = `
{%- macro move_fifth_right(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg5, arg2, arg3, arg4, None, macros, index) -}}
{%- endmacro -%}
`;
