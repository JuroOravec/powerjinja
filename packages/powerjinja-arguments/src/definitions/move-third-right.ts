// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const moveThirdRight = `
{%- macro move_third_right(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, None, arg3, arg5, macros, index) -}}
{%- endmacro -%}
`;