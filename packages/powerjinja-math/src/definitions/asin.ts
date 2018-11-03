import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function asin(config: Powerjinja["config"]) {
  return `
{%- macro asin(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 < -1 or arg1 > 1 -%}
		{%- set result = 'nan' | float -%}
	{%- else -%}
		{%- set arg1_sq = arg1 * arg1 -%}
		{%- set result = -1 * ((-0.939115566365855 * arg1 + 0.9217841528914573 * arg1_sq * arg1) / (1 + -1.2845906244690837 * arg1_sq + 0.295624144969963174 * arg1_sq * arg1_sq)) -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
