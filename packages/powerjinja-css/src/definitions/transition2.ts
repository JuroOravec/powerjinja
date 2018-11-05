import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Set transition to multiple attributes
// arg1: array of attributes
// arg2: duration
// arg3: timing
//
// E.g. ["top", "bottom", "left"], "0.5s", "ease-in-out"
//
// To specify unique duration and timing values, include an array of [attribute, duration, timing] instead of attribute
// E.g. ["top", ["bottom", "0.1s", "ease-in"], "left"], "0.5s", "ease-in-out"

export function transition2(config: Powerjinja["config"]) {
  return `
{%- macro transition2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set prefixes = ["-webkit-", "-o-", "-moz-", ""] -%}
	{%- set defaults = ["", arg2, arg3] -%}
	{%- for prefix in prefixes -%}
		{{- prefix ~ "transition: " -}}
		{%- for attribute in arg1 -%}
			{%- if (attribute is iterable) and (attribute is not string) and (attribute is not mapping) -%}
				{%- if attribute|count == 1 -%}
					{{- attribute[0] ~ " " ~ defaults[1] ~ " " ~ defaults[2] -}}
				{%- elif attribute|count == 2 -%}
					{{- attribute[0] ~ " " ~ attribute[1] ~ " " ~ defaults[2] -}}
				{%- elif attribute|count == 3 -%}
					{{- attribute[0] ~ " " ~ attribute[1] ~ " " ~ attribute[2] -}}
				{%- endif -%}
			{%- else -%}
				{{- attribute ~ " " ~ arg2 ~ " " ~ arg3 -}}
			{%- endif -%}
			{%- if not loop.last -%}, {% endif -%}
		{%- endfor %};{% if not loop.last %}{{"\n"}}{%- endif -%}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
