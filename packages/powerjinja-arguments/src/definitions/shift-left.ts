// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const shiftLeft = `
{%- macro shift_left(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg2, arg3, arg4, arg5, arg1, macros, index) -}}
{%- endmacro -%}
`;
