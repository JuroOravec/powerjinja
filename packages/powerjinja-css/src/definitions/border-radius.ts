// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const borderRadius = `
{%- macro border_radius(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-border-radius: ' ~ arg1 ~ ';' -}}
	{{- '-moz-border-radius: ' ~ arg1 ~ ';' -}}
	{{- 'border-radius: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;