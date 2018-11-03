import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { ln } from "./ln";

export function atanh(config: Powerjinja["config"]) {
  return `
{%- macro atanh(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 < -1 or arg1 > 1 -%}
		{{- powerjinja.core.handle_queue('nan' | float, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- else -%}
		{%- macro _atanh_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{%- set result = 0.5 * res -%}
			{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{%- set ratio = (1+arg1) / (1-arg1) -%}
		{{- powerjinja.math.ln(ratio, macros=[_atanh_callback]) -}}
	{%- endif -%}
{%- endmacro -%}
`;
}
