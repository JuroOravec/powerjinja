import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Evaluate horizontal (left/right/center) positions

// arg1: horizontal position attribute name
// arg2: banner width
// arg3: banner horizontal offset from edges
//
// e.g.
// arg1: "left";
// arg2: "300px";
// arg3: "20px";

// Returns object with data on horizontal position:
// {
// 	 "pos": string // horizontal position attribute name
//   "pos_opp": string // complementary horizontal position attribute name
//   "size": string // banner size in horizontal dimension (width)
//   "offset": string // banner horizontal offset from edges
//   "translation": string // value for transform CSS property that will translate the banner in horizontal dimension
// }

/**
 * @ignore
 */
export function processHorizontalPosition(config: Powerjinja["config"]) {
  return `
{%- macro process_horizontal_position(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set position_map = {"left": "right", "right": "left"} -%}
	{%- if arg1 == "center" -%}
		{%- set pos_horizontal = "left" -%}
		{%- set pos_horizontal_opp =  [position_map][0][pos_horizontal] -%}
		{%- set offset_horizontal = "50% - ( " ~  arg2 ~ " / 2 ) " -%}
	{%- else -%}
		{%- set pos_horizontal = arg1 -%}
		{%- set pos_horizontal_opp = [position_map][0][arg1] -%}
		{%- set offset_horizontal = arg3 -%}
	{%- endif -%}
	{%- set result = {"pos": pos_horizontal, "pos_opp": pos_horizontal_opp, "size": arg2, "offset": offset_horizontal, "translation": "" } -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
}
