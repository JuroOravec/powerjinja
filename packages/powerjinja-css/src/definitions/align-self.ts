import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function alignSelf(config: Powerjinja["config"]) {
  return `
{%- macro align_self(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-align-self: ' ~ arg1 ~ ';' -}}
	{{- '-ms-flex-item-align: ' ~ arg1 ~ ';' -}}
	{{- 'align-self: ' ~ arg1 ~ ';' -}}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
