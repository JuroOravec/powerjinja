import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * Returns true if object (first argument) has property with name specified by second argument.
 * @param {any} obj object that will be checked for property
 * @param {any} prop property that will be checked for existence in object
 * @returns {boolean}
 * @example
 * {%- set obj = {"a": 1} -%}
 * {%- set prop = "b" -%}
 * {{- powerjinja.assert.object.has_property(obj, prop, macros=[powerjinja.core.print]) -}}
 * // prints False
 *
 * @example
 * {%- set obj = {"a": 1} -%}
 * {%- set prop = "a" -%}
 * {{- powerjinja.assert.object.has_property(obj, prop, macros=[powerjinja.core.print]) -}}
 * // prints True
 */
export function hasProperty(config: Powerjinja["config"]) {
  return `
{%- macro has_property(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set result = [arg1][0][arg2] is defined -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
