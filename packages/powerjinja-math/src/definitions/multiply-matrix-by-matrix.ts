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

export function multiplyMatrixByMatrix(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro multiply_matrix_by_matrix(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set h_m1 = arg1 | count -%}
	{%- set w_m1 = arg1[0] | count -%}
	{%- set w_m2 = arg1[0] | count -%}
	{%- set m = [] -%}
	{%- for i_m1 in range(h_m1) -%}
		{%- set v = [] -%}
		{%- for j_m2 in range(w_m2) -%}
			{%- set sums = [] -%}
			{%- for j_m1 in range(w_m1) -%}
				{%- set val_m1 = [arg1][0][i_m1][j_m1] -%}
				{%- set val_m2 = [arg2][0][j_m1][j_m2] -%}
				{%- set val = val_m1 * val_m2 -%}
				{%- ${append("sums", "val")} -%}
			{%- endfor -%}
			{%- append sums | sum to v -%}
		{%- endfor -%}
		{%- ${append("m", "v")} -%}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(m, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
