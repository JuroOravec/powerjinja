// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Evaluate vertical (left/right/center) positions

// arg1: vertical position attribute name
// arg2: banner height
// arg3: banner vertical offset from edges
// arg4: isFitContent (allows banner height to grow with content if true
//
// e.g.
// arg1: 'top';
// arg2: '300px';
// arg3: '20px';
// arg4: True

// Returns object with data on vertical position:
// {
// 	 "pos": string // vertical position attribute name
//   "pos_opp": string // complementary vertical position attribute name
//   "size": string // banner size in vertical dimension (height)
//   "offset": string // banner vertical offset from edges
//   "translation": string // value for transform CSS property that will translate the banner in vertical dimension
// }

export const processVerticalPosition = `
{%- macro process_vertical_position(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- set position_map = {'top': 'bottom', 'bottom': 'top'} -%}
	{%- if arg1 == 'top' or arg1 == 'bottom' -%}
		{%- set pos_vertical = arg1 -%}
		{%- set pos_vertical_opp = position_map[pos_vertical] -%}
		{%- set translation_vertical = '0%' -%}
		{%- set offset_vertical = arg3 -%}
	{%- elif arg1 == 'center' -%}
		{%- set pos_vertical = 'top' -%}
		{%- set pos_vertical_opp = position_map[pos_vertical] -%}
		{%- if arg4 == 'true' or arg4 == True -%}
			{%- set offset_vertical = '50%' %}
			{%- set translation_vertical = '-50%' -%}
		{%- else -%}
			{%- set offset_vertical = '50% - ( ' ~  arg2 ~ ' / 2 ) ' -%}
			{%- set translation_vertical = '0%' -%}
		{%- endif %}
	{%- endif %}
	{%- set result = {"pos": pos_vertical, "pos_opp": pos_vertical_opp, "size": arg2, "offset": offset_vertical, "translation": translation_vertical} -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
