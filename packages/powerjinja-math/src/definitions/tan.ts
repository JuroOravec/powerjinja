import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { cos } from "./cos";
import { sin } from "./sin";

export function tan(config: Powerjinja["config"]) {
  return `
{%- macro tan(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _tan_callback2(cos_res=None, sin_res=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set result = sin_res / cos_res -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- macro _tan_callback1(sin_res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.math.cos(arg1, sin_res, macros=[_tan_callback2]) -}}
	{%- endmacro -%}
	{{- powerjinja.math.sin(arg1, macros=[_tan_callback1]) -}}
{%- endmacro -%}
`;
}
