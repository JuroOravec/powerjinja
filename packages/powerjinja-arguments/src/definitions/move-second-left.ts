// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const moveSecondLeft = `
{%- macro move_second_left(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(arg2, None, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
