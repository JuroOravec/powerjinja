import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if first arguments is the type that is described by the second argument.
 * @param {any} arg value that is being checked
 * @param {string} type can be one of 'string' | 'number' | 'boolean' | 'undefined' | 'none' (or 'null') | 'macro' (or 'callable' or 'function') | 'list' (or 'array' or 'tuple') | 'object' (or 'dictionary' or 'mapping')
 * @returns {boolean}
 * @example
 * {{- powerjinja.assert.value.is_type([], 'object', macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {{- powerjinja.assert.value.is_type([], 'array', macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export function isType(config: Powerjinja["config"]) {
  return `
{%- macro is_type(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg2 == 'string' -%}
		{%- set result = arg1 is string -%}
	{%- elif arg2 == 'number' -%}
		{%- set result = arg1 is number -%}
	{%- elif arg2 == 'boolean' -%}
		{%- set result = arg1 == True or arg1 == False -%}
	{%- elif arg2 == 'undefined' -%}
		{%- set result = arg1 is undefined -%}
	{%- elif arg2 == 'null' or arg2 == 'none' -%}
		{%- set result = arg1 is none -%}
	{%- elif arg2 == 'function' or arg2 == 'macro' or arg2 == 'callable' -%}
		{%- set result = arg1 is callable -%}
	{%- elif arg2 == 'list' or arg2 == 'tuple' or arg2 == 'array' -%}
		{%- set result = arg1 is iterable and arg1 is not string and arg1 is not mapping -%}
	{%- elif arg2 == 'object' or arg2 == 'dictionary' or arg2 == 'mapping' -%}
		{%- set result = arg1 is mapping -%}
	{%- else -%}
		{%- set result = False -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
