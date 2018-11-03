import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// arg1: bannerBackground; arg2: bannerBackgroundImage; arg3: bannerBackgroundColor

/**
 * @ignore
 */
export function backgroundValue(config: Powerjinja["config"]) {
  return `
{%- macro background_value(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 == 'image' or arg1 == 'img' -%}
		{%- set bg_img_val = 'url(' ~ arg2 ~ ')' -%}
		{%- set bg_size_val = 'cover' -%}
	{%- else -%}
		{%- set bg_img_val = 'none' -%}
		{%- set bg_size_val = 'inherit' -%}
	{%- endif -%}
	{{- 'background: ' ~ arg3 ~ ';' -}}
    {{- 'background-image: ' ~ bg_img_val ~ ';' -}}
	{{- powerjinja.core.handle_queue(bg_img_val, bg_size_val, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
