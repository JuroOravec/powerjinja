// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Reverses argument order.
 * @example
 * {{- powerjinja.arguments.reverse(arg1, arg2, arg3, arg4, arg5, macros=[powerjinja.core.print]) -}}
 * // prints arg5 arg4 arg3 arg2 arg1
 */
export const reverse = `
{%- macro reverse(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg5, arg4, arg3, arg2, arg1, macros, index) -}}
{%- endmacro -%}
`;
