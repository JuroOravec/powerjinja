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

// Creates zero matrix of width `arg1` and height `arg2`

export function zeroMatrix(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro zero_matrix(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set m = [] -%}
	{%- for i in range(arg2) -%}
		{%- set v = [] -%}
		{%- for j in range(arg1) -%}
			{%- ${append("v", "0")} -%}
		{%- endfor -%}
		{%- ${append("m", "v")} -%}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(m, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
