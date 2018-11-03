import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

export function cross(config: Powerjinja["config"]) {
  return `
{%- macro cross(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set i = arg1[1] * arg2[2] - arg1[2] * arg2[1] -%}
	{%- set j = arg1[2] * arg2[0] - arg1[0] * arg2[2] -%}
	{%- set k = arg1[0] * arg2[1] - arg1[1] * arg2[0] -%}
	{%- set result = [i, j, k] -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
