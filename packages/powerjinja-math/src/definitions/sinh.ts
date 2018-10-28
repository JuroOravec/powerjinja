// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { exp } from "./exp";

export const sinh = `
{%- macro sinh(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _sinh_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set result = (res - 1 / res) / 2 -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.exp(arg1, macros=[_sinh_callback]) -}}
{%- endmacro -%}
`;
