import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function round(config: Powerjinja["config"]) {
  return `
{%- macro round(arg1=None, arg2=0, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = arg1 | round(arg2, 'common') -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
