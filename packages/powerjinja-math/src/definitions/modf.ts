// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { frac } from "./frac";
import { trunc } from "./trunc";

export const modf = `
{%- macro modf(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _modf_callback2(int_part=None, frac_part=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(int_part, frac_part, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- macro _modf_callback1(frac_part=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.math.trunc(arg1, frac_part, macros=[_modf_callback2]) -}}
	{%- endmacro -%}
	{{- powerjinja.math.frac(arg1, macros=[_modf_callback1]) -}}
{%- endmacro -%}
`;