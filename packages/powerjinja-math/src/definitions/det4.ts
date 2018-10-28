// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { det3 } from "./det3";

export const det4 = `
{%- macro det4(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _det4_callback4(res=None, sum=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(sum - res, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- macro _det4_callback3(res=None, sum=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set m4_v1 = [arg1[1][0], arg1[1][1], arg1[1][2]] -%}
		{%- set m4_v2 = [arg1[2][0], arg1[2][1], arg1[2][2]] -%}
		{%- set m4_v3 = [arg1[3][0], arg1[3][1], arg1[3][2]] -%}
		{%- set m4 = [m4_v1, m4_v2, m4_v3] -%}
		{{- powerjinja.math.det3(m4, sum + res, macros=[_det4_callback4]) -}}
	{%- endmacro -%}
	{%- macro _det4_callback2(res=None, sum=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set m3_v1 = [arg1[1][0], arg1[1][1], arg1[1][3]] -%}
		{%- set m3_v2 = [arg1[2][0], arg1[2][1], arg1[2][3]] -%}
		{%- set m3_v3 = [arg1[3][0], arg1[3][1], arg1[3][3]] -%}
		{%- set m3 = [m3_v1, m3_v2, m3_v3] -%}
		{{- powerjinja.math.det3(m3, sum - res, macros=[_det4_callback3]) -}}
	{%- endmacro -%}
	{%- macro _det4_callback1(res=None, sum=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set m2_v1 = [arg1[1][0], arg1[1][2], arg1[1][3]] -%}
		{%- set m2_v2 = [arg1[2][0], arg1[2][2], arg1[2][3]] -%}
		{%- set m2_v3 = [arg1[3][0], arg1[3][2], arg1[3][3]] -%}
		{%- set m2 = [m2_v1, m2_v2, m2_v3] -%}
		{{- powerjinja.math.det3(m2, sum + res, macros=[_det4_callback2]) -}}
	{%- endmacro -%}
	{%- set m1_v1 = [arg1[1][1], arg1[1][2], arg1[1][3]] -%}
	{%- set m1_v2 = [arg1[2][1], arg1[2][2], arg1[2][3]] -%}
	{%- set m1_v3 = [arg1[3][1], arg1[3][2], arg1[3][3]] -%}
	{%- set m1 = [m1_v1, m1_v2, m1_v3] -%}
	{{- powerjinja.math.det3(m1, 0, macros=[_det4_callback1]) -}}
{%- endmacro -%}
`;
