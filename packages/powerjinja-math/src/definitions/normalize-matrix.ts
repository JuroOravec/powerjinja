import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { length } from "./length";

// Required functionalities:
// - append statement
// - sum filter

export function normalizeMatrix(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro normalize_matrix(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _normalize_callback(mag=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set result = [] -%}
		{%- for i in arg1 -%}
			{%- set res = i / mag -%}
			{%- ${append("result", "res")} -%}
		{%- endfor -%}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.length(arg1, macros=[_normalize_callback]) -}}
{%- endmacro -%}
`;
}
