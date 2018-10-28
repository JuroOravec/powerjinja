// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// arg1: operation; arg2: values of same unit

// Process all values (assumed to have same unit) with same operator
// Supported operators: 'add' ('+'), 'subtract' ('-'), 'multiply' ('*'), 'divide' ('/')
// In case of subtract and multiply, first value is the number to be subtracted/divided from
// Useful for setting up dynamic values in CSS media queries

// 1) gets the unit
// 2) parses the values
// 3) processes the values with the chosen operation

export const sameUnitOperation = `
{%- macro same_unit_operation(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set unit = [] -%}
	{%- set unitless_vals = [] -%}
	{%- set total = 0 -%}

	{%- if arg2 | count > 0 -%}
		{%- for char in arg2[0] -%}
			{%- if char | int('') == '' and char != '.' -%}
				{%- append char to unit -%}
			{%- endif -%}
		{%- endfor -%} 
	{%- endif -%}
	{%- set unit = unit | join('') -%}

	{%- for val in arg2 -%}
		{%- set unitless_val = [] -%}
			{%- for char in val -%}
				{%- set charAsInt = char | int('') -%}
				{%- if charAsInt != '' or char == '.' -%}
					{%- append charAsInt to unitless_val -%}
				{%- endif -%}
			{%- endfor -%}
		{%- append unitless_val | join('') | int to unitless_vals -%}
	{%- endfor -%}

	{%- if arg1 == 'multiply' or arg1 == '*' -%}
		{%- set total = 1 -%}
	{%- elif (unitless_vals | count > 0) and (arg1 in ['divide', '/', 'subtract', '-']) -%}
		{%- set total = unitless_vals[0] -%}
	{%- endif -%}
	{%- set temp_total_arr = [total] -%}

	{%- for numVal in unitless_vals -%}
		{%- if loop.first and (arg1 in ['divide', '/', 'subtract', '-']) -%}
		{%- elif arg1 == 'multiply' or arg1 == '*' -%}
			{%- append ((temp_total_arr | last) * numVal) to temp_total_arr -%}
		{%- elif arg1 == 'divide' or arg1 == '/' -%}
			{%- append ((temp_total_arr | last) / numVal) to temp_total_arr -%}
		{%- elif arg1 == 'add' or arg1 == '+' -%}
			{%- append ((temp_total_arr | last) + numVal) to temp_total_arr -%}
		{%- elif arg1 == 'subtract' or arg1 == '-' -%}
			{%- append ((temp_total_arr | last) - numVal) to temp_total_arr -%}
		{%- endif -%}
	{%- endfor -%}

	{%- set result = (temp_total_arr | last) ~ unit -%}

	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
