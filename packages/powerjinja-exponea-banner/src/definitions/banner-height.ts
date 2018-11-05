import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { attributeWithCalc } from "./attribute-with-calc";

// arg1: isFitContent; arg2: height; arg3: offset

/**
 *
 * @ignore
 */
export function bannerHeight(config: Powerjinja["config"]) {
  return `
{%- macro banner_height(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 == "true" or arg1 == True %}
		{{- "max-height: -webkit-fit-content;" -}}
		{{- "max-height: -moz-fit-content;" -}}
		{{- "max-height: fit-content;" -}}
		{{- "height: -webkit-fit-content;" -}}
		{{- "height: -moz-fit-content;" -}}
		{{- "height: fit-content;" -}}
	{%- else %}
		{{- "max-height: " ~ arg2 ~ ";" -}}
		{{- powerjinja.exponea_banner.attribute_with_calc("height", "100% - (2 * " ~ arg3 ~ ")" ) -}}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
