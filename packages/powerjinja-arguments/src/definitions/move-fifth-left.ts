// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Moves 5th argument one position to the left.
 * @example
 * {{- powerjinja.arguments.move_fifth_left(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg1 arg2 arg3 arg5 arg5
 */
export const moveFifthLeft = `
{%- macro move_fifth_left(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg5, arg5, macros, index) -}}
{%- endmacro -%}
`;
