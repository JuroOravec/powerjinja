// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const boxShadow = `
{%- macro box_shadow(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-box-shadow: ' ~ arg1 ~ ';' -}}
	{{- '-moz-box-shadow: ' ~ arg1 ~ ';' -}}
	{{- 'box-shadow: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;