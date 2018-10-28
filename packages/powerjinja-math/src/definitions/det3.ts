// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const det3 = `
{%- macro det3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1[0][0] * arg1[1][1] * arg1[2][2] -%}
	{%- set result = result + arg1[0][1] * arg1[1][2] * arg1[2][0] -%}
	{%- set result = result + arg1[0][2] * arg1[1][0] * arg1[2][1] -%}
	{%- set result = result - arg1[0][2] * arg1[1][1] * arg1[2][0] -%}
	{%- set result = result - arg1[0][1] * arg1[1][0] * arg1[2][2] -%}
	{%- set result = result - arg1[0][0] * arg1[1][2] * arg1[2][1] -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
