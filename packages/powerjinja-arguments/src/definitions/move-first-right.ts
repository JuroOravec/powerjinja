// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const moveFirstRight = `
{%- macro move_first_right(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(None, arg1, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
