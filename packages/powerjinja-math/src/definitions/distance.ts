import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { sqrt } from "./sqrt";

// Required functionalities:
// - append statement
// - sum filter

export function distance(config: Powerjinja["config"]) {
  const append = config.command.append;
return `
{%- macro distance(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _distance_callback(res=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(res, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{%- if arg2 | count > arg1 | count -%}
		{%- set d = arg2 | count -%}
	{%- else -%}
		{%- set d = arg1 | count -%}
	{%- endif -%}
	{%- set dif_sqs = [] -%}
	{%- for i in range(d) -%}
		{%- if [arg1][0][i] is defined -%}
			{%- set p1_val = [arg1][0][i] -%}
		{%- else -%}
			{%- set p1_val = 0 -%}
		{%- endif -%}
		{%- if [arg2][0][i] is defined -%}
			{%- set p2_val = [arg2][0][i] -%}
		{%- else -%}
			{%- set p2_val = 0 -%}
		{%- endif -%}
		{%- set dif = p2_val - p1_val -%}
		{%- set dif_sq = dif * dif -%}
		{%- ${append("dif_sqs", "dif_sq")} -%}
	{%- endfor -%}
	{%- set dif_sqs_sum = dif_sqs | sum -%}
	{{- powerjinja.math.sqrt(dif_sqs_sum, macros=[_distance_callback]) -}}
{%- endmacro -%}
`;
}
