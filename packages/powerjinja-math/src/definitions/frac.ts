import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function frac(config: Powerjinja["config"]) {
  return `
{%- macro frac(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set val = -1 * arg1 if arg1 < 0 else arg1 -%}
	{%- set result = val - (val | round(method='floor')) -%}
	{%- set result = -1 * result if arg1 < 0 else result -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
