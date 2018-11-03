import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { add } from "./add";
import { ln } from "./ln";
import { sqrt } from "./sqrt";

export function asinh(config: Powerjinja["config"]) {
  return `
{%- macro asinh(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 == '-inf' | float -%}
		{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- else -%}
		{%- macro _asinh_callback(result=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{%- set sqrtee = arg1 * arg1 + 1-%}
		{{- powerjinja.math.sqrt(sqrtee, arg1, macros=[powerjinja.math.add, powerjinja.math.ln, _asinh_callback]) -}}
	{%- endif -%}
{%- endmacro -%}
`;
}
