// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { e } from "./e";

// Required functionalities:
// - append statement
// - abs filter
// - int filter
// - last filter
// - round filter

export const exp = `
{%- macro exp(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _exp_callback(e=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set n = arg1 | abs -%}
		{%- set int_n = n | round(method="floor") | int -%}
		{%- set frac_n = n - int_n -%}
		{%- set frac_val = frac_n/10 + 1
		{%- set frac_val = frac_val * frac_n/9 + 1 -%}
		{%- set frac_val = frac_val * frac_n/8 + 1 -%}
		{%- set frac_val = frac_val * frac_n/7 + 1 -%}
		{%- set frac_val = frac_val * frac_n/6 + 1 -%}
		{%- set frac_val = frac_val * frac_n/5 + 1 -%}
		{%- set frac_val = frac_val * frac_n/4 + 1 -%}
		{%- set frac_val = frac_val * frac_n/3 + 1 -%}
		{%- set frac_val = frac_val * frac_n/2 + 1 -%}
		{%- set frac_val = frac_val * frac_n/1 + 1 -%}
		{%- set int_val = [1] -%}
		{%- for i in range(int_n) -%}
			{%- append int_val | last * e to int_val -%}
		{%- endfor -%}
		{%- set result = frac_val * int_val | last -%}
		{%- if arg1 < 0 -%}
			{%- set result = 1 / result -%}
		{%- endif -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.e(macros=[_exp_callback]) -}}
{%- endmacro -%}
`;
