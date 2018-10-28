// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const isTypeOneOf = `
{%- macro is_type_one_of(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set match = [] -%}
	{%- for type in arg2 -%}
		{%- if type == 'string' -%}
			{%- if arg1 is string -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'number' -%}
			{%- if arg1 is number -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'boolean' -%}
			{%- if arg1 == True or arg1 == False -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'undefined' -%}
			{%- if arg1 is undefined -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'null' or type == 'none' -%}
			{%- if arg1 is none -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'function' or type == 'macro' or type == 'callable' -%}
			{%- if arg1 is callable -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'list' or type == 'tuple' or type == 'array' -%}
			{%- if arg1 is iterable and arg1 is not string and arg1 is not mapping -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- elif type == 'object' or type == 'dictionary' or type == 'mapping' -%}
			{%- if arg1 is mapping -%}
				{%- append arg1 to match -%}
			{%- endif -%}
		{%- endif -%}
	{%- endfor -%}
	{%- set result = match | count > 0 -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
