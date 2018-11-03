import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

//  <------  w  ------>
//  ^ [a1, a2, a3, ...]
//  | [b1, b2, b3, ...]
//  h [c1, c2, c3, ...]
//  | [d1, d2, d3, ...]
//  v ...
//

export function transposeMatrix(config: Powerjinja["config"]) {
  return `
{%- macro transpose_matrix(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set h = arg1 | count -%}
	{%- set w = arg1[0] | count -%}
	{%- set m = [] -%}
	{%- for i in range(w) -%}
		{%- set v = [] -%}
		{%- for j in range(h) -%}
			{%- append [arg1][0][j][i] to v -%}
		{%- endfor -%}
		{%- append v to m -%}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(m, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
