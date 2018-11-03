import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// arg1: flexGrowValue, arg2: flexShrinkValue, arg3: flexBasisValue

export function flexDirection(config: Powerjinja["config"]) {
  return `
{%- macro flex_direction(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 == 'column' or arg1 == 'column-reverse' -%}
		{%- set ori = 'vertical' -%}
	{%- elif arg1 == 'row' or arg1 == 'row-reverse' -%}
		{%- set ori = 'horizontal' -%}
	{%- else -%}
		{%- set ori = '' -%}
	{%- endif -%}

	{%- if arg1 == 'row-reverse' or arg1 == 'column-reverse' -%}
		{%- set dir = 'reverse' -%}
	{%- elif arg1 == 'row' or arg1 == 'column' -%}
		{%- set dir = 'normal' -%}
	{%- else -%}
		{%- set dir = '' -%}
	{%- endif -%}

	{{- '-webkit-box-orient: ' ~ ori ~ ';' -}}
	{{- '-webkit-box-direction: ' ~ dir ~ ';' -}}
	{{- '-webkit-flex-direction: ' ~ arg1 ~ ';' -}}
	{{- '-moz-box-orient: ' ~ ori ~ ';' -}}
	{{- '-moz-box-direction: ' ~ dir ~ ';' -}}
	{{- '-ms-flex-direction: ' ~ arg1 ~ ';' -}}
	{{- 'flex-direction: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}