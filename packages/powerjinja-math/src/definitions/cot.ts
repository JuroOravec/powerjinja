// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { tan } from "./tan";

export const cot = `
{%- macro cot(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _cot_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set result = 1 / res -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.tan(arg1, macros=[_cot_callback]) -}}
{%- endmacro -%}
`;
