// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

//  <------  w  ------>
//  ^ [a1, a2, a3, ...]
//  | [b1, b2, b3, ...]
//  h [c1, c2, c3, ...]
//  | [d1, d2, d3, ...]
//  v ...
//

// Creates identity matrix of width and height `arg1`

export const identityMatrix = `
{%- macro identity_matrix(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set m = [] -%}
	{%- for i in range(arg1) -%}
		{%- set v = [] -%}
		{%- for j in range(arg1) -%}
			{%- if j == i -%}
				{%- set val = 1 -%}
			{%- else -%}
				{%- set val = 0 -%}
			{%- endif -%}
			{%- append val to v -%}
		{%- endfor -%}
		{%- append v to m -%}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(m, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
