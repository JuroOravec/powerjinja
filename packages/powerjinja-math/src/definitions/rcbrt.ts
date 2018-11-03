import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pow } from "./pow";

export function rcbrt(config: Powerjinja["config"]) {
  return `
{%- macro rcbrt(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _rcbrt_callback(result=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(1/result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.pow(arg1, 1/3, macros=[_rcbrt_callback]) -}}
{%- endmacro -%}
`;
}
