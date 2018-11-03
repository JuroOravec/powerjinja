import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { exp } from "./exp";
import { ln } from "./ln";
import { multiply } from "./multiply";

export function pow(config: Powerjinja["config"]) {
  return `
{%- macro pow(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg2 == 0 or (arg2 < 0 and (arg1 == 0 or arg1 ==1 or arg1 == -1)) %}
		{%- if arg2 == 0 -%}
			{%- set result = 1 -%}
		{%- elif arg1 == 0 %}
			{%- set result = 'inf' | float %}
		{%- elif arg1 == 1 %}
			{%- set result = 1 %}
		{%- else %}
			{%- set result = -1 if arg2 is odd else 1 %}
		{%- endif %}
		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{% else %}
		{%- macro _pow_callback(_1=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
			{{- powerjinja.core.handle_queue(_1, arg2, arg3, arg4, arg5, macros, index) -}}
		{%- endmacro -%}
		{{- powerjinja.math.ln(arg1, arg2, macros=[powerjinja.math.multiply, powerjinja.math.exp, _pow_callback]) -}}
	{% endif %}
{%- endmacro -%}
`;
}
