// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { tanh } from "./tanh";

export const coth = `
{%- macro coth(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _coth_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set result = 1 / res -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.tanh(arg1, macros=[_coth_callback]) -}}
{%- endmacro -%}
`;
