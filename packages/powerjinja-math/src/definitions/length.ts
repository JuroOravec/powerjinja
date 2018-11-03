import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { sqrt } from "./sqrt";

// Required functionalities:
// - append statement
// - sum filter

export function length(config: Powerjinja["config"]) {
  return `
{%- macro length(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _length_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(res, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- set sqs = [] -%}
	{%- for val in arg1 -%}
		{%- append val * val to sqs -%}
	{%- endfor -%}
	{%- set sqs_sum = sqs | sum -%}
	{{- powerjinja.math.sqrt(sqs_sum, macros=[_length_callback]) -}}
{%- endmacro -%}
`;
}
