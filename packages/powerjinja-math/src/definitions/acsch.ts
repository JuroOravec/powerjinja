// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { asinh } from "./asinh";

export const acsch = `
{%- macro acsch(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _acsch_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(res, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.asinh(1 / arg1, macros=[_acsch_callback]) -}}
{%- endmacro -%}
`;
