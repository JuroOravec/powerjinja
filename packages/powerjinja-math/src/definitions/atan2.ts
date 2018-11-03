import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { atan } from "./atan";
import { pi } from "./pi";

export function atan2(config: Powerjinja["config"]) {
  return `
{%- macro atan2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg2 > 0 -%}
		{{- powerjinja.math.atan(arg1 / arg2, macros=[_atan2_callback]) -}}
	{%- elif (arg2 < 0) and (arg1 >= 0) -%}
		{%- macro _atan2_callback2(res=None, pi=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(pi - res, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{%- macro _atan2_callback1(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.math.atan(arg1 / arg2, pi, macros=[_atan2_callback2]) -}}
		{%- endmacro -%}
		{{- powerjinja.math.pi(macros=[_atan2_callback1]) -}}
	{%- elif (arg2 < 0) and (arg1 < 0) -%}
		{%- macro _atan2_callback2(res=None, pi=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(pi - res, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{%- macro _atan2_callback1(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.math.atan(arg1 / arg2, pi, macros=[_atan2_callback2]) -}}
		{%- endmacro -%}
		{{- powerjinja.math.pi(macros=[_atan2_callback1]) -}}
	{%- elif (arg2 == 0) and (arg1 > 0) -%}
		{%- macro _atan2_callback1(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(pi / 2, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{{- powerjinja.math.pi(macros=[_atan2_callback1]) -}}
	{%- elif (arg2 == 0) and (arg1 > 0) -%}
		{%- macro _atan2_callback1(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(pi / -2, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{{- powerjinja.math.pi(macros=[_atan2_callback1]) -}}
	{%- else -%}
		{{- powerjinja.core.handle_queue(0, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endif -%}
{%- endmacro -%}
`;
}
