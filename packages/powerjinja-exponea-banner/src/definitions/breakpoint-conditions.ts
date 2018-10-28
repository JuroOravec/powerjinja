// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Macro for printing breakpoint conditions
// To calculate value from multiple values, pass arr of values as breakpointValue,
// specify (or define here if new one) the name of function to process values,
// and pass any additional args that the function may need
//
// arg1: dimension; arg2: breakpointValue;
// E.g. 'height', '300px'

export const breakpointConditions = `
{%- macro breakpoint_conditions(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{{- '(-webkit-min-device-pixel-ratio: 2) and (max-' ~ arg1 ~ ': ' ~ arg2 ~ '),' -}}
	{{- '(min--moz-device-pixel-ratio: 2) and (max-' ~ arg1 ~ ': ' ~ arg2 ~ '),' -}}
	{{- '(-o-min-device-pixel-ratio: 2/1) and (max-' ~ arg1 ~ ': ' ~ arg2 ~ '),' -}}
	{{- '(min-device-pixel-ratio: 2) and (max-' ~ arg1 ~ ': ' ~ arg2 ~ '),' -}}
	{{- '(min-resolution: 192dpi) and (max-' ~ arg1 ~ ': ' ~ arg2 ~ '),' -}}
	{{- '(min-resolution: 2dppx) and (max-' ~ arg1 ~ ': ' ~ arg2 ~ '),' -}}
	{{- '(max-' ~ arg1 ~ ': ' ~ arg2 ~ ')' -}}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;