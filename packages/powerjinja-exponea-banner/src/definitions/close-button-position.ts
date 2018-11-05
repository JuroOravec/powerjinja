import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * @ignore
 */
export function closeButtonPosition(config: Powerjinja["config"]) {
  return `
{%- macro close_button_position(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 != "left" and arg1 != "right" -%}
		{%- set result = "left" if arg2 == "right" else "right" -%}
	{%- else -%}
		{%- set result = arg1 -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
