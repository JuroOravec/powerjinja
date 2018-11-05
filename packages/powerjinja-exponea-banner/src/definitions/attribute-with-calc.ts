import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Add prefixes to the attribute that uses calc() in its value

// arg1: attribute; arg2: value
// returns an array of the values

/**
 * @ignore
 */
export function attributeWithCalc(config: Powerjinja["config"]) {
  return `
{%- macro attribute_with_calc(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set webkit = "-webkit-calc(" ~ arg2 ~ ")" -%}
	{%- set moz = "-moz-calc(" ~ arg2 ~ ")" -%}
	{%- set default = "calc(" ~ arg2 ~ ")" -%}
	{%- set result = [webkit, moz, default] -%}
	{{- arg1 ~ ": " ~  webkit ~ ";" -}}
	{{- arg1 ~ ": " ~  moz ~ ";" -}}
	{{- arg1 ~ ": " ~  default ~ ";" -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
