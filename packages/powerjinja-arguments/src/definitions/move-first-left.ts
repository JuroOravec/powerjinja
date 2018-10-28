// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const moveFirstLeft = `
{%- macro move_first_left(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- powerjinja.core.handle_queue(None, arg2, arg3, arg4, arg1, macros, index) -}}
{%- endmacro -%}
`;
