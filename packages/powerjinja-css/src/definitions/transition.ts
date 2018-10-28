// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export const transition = `
{%- macro transition(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-transition: ' ~ arg1 ~ ';' -}}
	{{- '-o-transition: ' ~ arg1 ~ ';' -}}
	{{- '-moz-transition: ' ~ arg1 ~ ';' -}}
	{{- 'transition: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;