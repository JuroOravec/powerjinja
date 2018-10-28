// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const isType = `
{%- macro is_type(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg2 == 'string' -%}
		{%- set result = arg1 is string -%}
	{%- elif arg2 == 'number' -%}
		{%- set result = arg1 is number -%}
	{%- elif arg2 == 'boolean' -%}
		{%- set result = arg1 == True or arg1 == False -%}
	{%- elif arg2 == 'undefined' -%}
		{%- set result = arg1 is undefined -%}
	{%- elif arg2 == 'null' or arg2 == 'none' -%}
		{%- set result = arg1 is none -%}
	{%- elif arg2 == 'function' or arg2 == 'macro' or arg2 == 'callable' -%}
		{%- set result = arg1 is callable -%}
	{%- elif arg2 == 'list' or arg2 == 'tuple' or arg2 == 'array' -%}
		{%- set result = arg1 is iterable and arg1 is not string and arg1 is not mapping -%}
	{%- elif arg2 == 'object' or arg2 == 'dictionary' or arg2 == 'mapping' -%}
		{%- set result = arg1 is mapping -%}
	{%- else -%}
		{%- set result = False -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
