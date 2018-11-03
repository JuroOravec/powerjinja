import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * @ignore
 */
export function shadowValue(config: Powerjinja["config"]) {
  return `
{%- macro shadow_value(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 == 'true' or arg1 == True  -%}
		{%- set result = '0px 0px 10px 0px rgba(0,0,0,0.5)' -%}
	{%- else -%}
		{%- set result = 'none' -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
