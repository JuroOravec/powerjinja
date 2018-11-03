import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// arg1: flexGrowValue, arg2: flexShrinkValue, arg3: flexBasisValue

export function flex(config: Powerjinja["config"]) {
  return `
{%- macro flex(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '-webkit-box-flex: ' ~ arg1 ~ ';' -}}
	{{- '-webkit-flex: ' ~ arg1 ~ ' ' ~ arg2 ~ ' ' ~ arg3 ~ ';' -}}
	{{- '-moz-box-flex: ' ~ arg1 ~ ';' -}}
	{{- '-ms-flex: ' ~ arg1 ~ ' ' ~ arg2 ~ ' ' ~ arg3 ~ ';' -}}
	{{- 'flex: ' ~ arg1 ~ ' ' ~ arg2 ~ ' ' ~ arg3 ~ ';' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}