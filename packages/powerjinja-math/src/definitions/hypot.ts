import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { sqrt } from "./sqrt";

export function hypot(config: Powerjinja["config"]) {
  return `
{%- macro hypot(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _hypot_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(res, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- set sqs_sum = arg1 * arg1 + arg2 * arg2 -%}
	{{- powerjinja.math.sqrt(sqs_sum, macros=[_hypot_callback]) -}}
{%- endmacro -%}
`;
}
