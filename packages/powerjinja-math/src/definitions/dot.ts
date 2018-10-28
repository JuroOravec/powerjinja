// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Required functionalities:
// - append statement
// - sum filter

export const dot = `
{%- macro dot(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg2 | count > arg1 | count -%}
		{%- set d = arg2 | count -%}
	{%- else -%}
		{%- set d = arg1 | count -%}
	{%- endif -%}
	{%- set muls = [] -%}
	{%- for i in range(d) -%}
		{%- if [arg1][0][i] is defined -%}
			{%- set p1_val = [arg1][0][i] -%}
		{%- else -%}
			{%- set p1_val = 0 -%}
		{%- endif -%}
		{%- if [arg2][0][i] is defined -%}
			{%- set p2_val = [arg2][0][i] -%}
		{%- else -%}
			{%- set p2_val = 0 -%}
		{%- endif -%}
		{%- set mul = p2_val * p1_val -%}
		{%- append mul to muls -%}
	{%- endfor -%}
	{%- set result = muls | sum -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
