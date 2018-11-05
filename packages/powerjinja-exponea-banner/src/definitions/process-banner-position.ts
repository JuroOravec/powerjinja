import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { processHorizontalPosition } from "./process-horizontal-position";
import { processVerticalPosition } from "./process-vertical-position";

// Process the values for position attributes based on axis of slide-in animation #}
// 1) Determine the names and values of position attributes and of offsets #}
// 2) Determine whether offset should be changed to large negative value in case of "off-screen" position
// 3) Determine which position attributes are along and perpendicular to axis of animation and call printPosition #}
// isFitContent allows banner height to grow with content if "true" #}

// arg1: [positionName, bannerSize, offset]; // vertical axis
// arg2: [positionName, bannerSize, offset]; // horizontal axis
// arg3: isFitContent // whether the banner height is set to fit content
// arg4: isInViewport // whether the banner is visible (in viewport) or hidden (outside viewport)
// arg5: bannerTransitionDirection // direction of banner slide-in animation "horizontal" or "vertical"
//
// e.g.
// arg1: ["top", "bottom", "height", "30px"];
// arg2: ["left", "right", "width", "2em"];
// arg3: True
// arg4: False
// arg5: "vertical"

// Returns:
// arg1:
//   object with data on position in the axis of slide-in animation (e.g. vertical or horizontal):
//   {
// 	   "pos": string // position attribute name
//     "pos_opp": string // complementary position attribute name
//     "size": string // banner size in dimension of given axis (e.g width or height)
//     "offset": string // banner offset from edges in dimension of given axis
//     "translation": string // value for transform CSS property that will translate the banner in dimension of given axis
//   }
// arg2:
//   object with data on position in the axis perpendicular to the axis of slide-in animation (e.g. if slide-in in vertical axis, this data is on horizontal):
//   {
// 	   "pos": string // position attribute name
//     "pos_opp": string // complementary position attribute name
//     "size": string // banner size in dimension of given axis (e.g width or height)
//     "offset": string // banner offset from edges in dimension of given axis
//     "translation": string // value for transform CSS property that will translate the banner in dimension of given axis
//   }
// arg3: isFitContent // whether the banner height is set to fit content

/**
 * @ignore
 */
export function processBannerPosition(config: Powerjinja["config"]) {
  return `
{%- macro process_banner_position(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _cb2(h_vals=None, _2=None, _3=None, _4=None, v_vals=None, _6=[], _7=0) -%}
		{{- powerjinja.css.transform("translateY('" ~ v_vals.translation ~ "')") -}}

		{%- if not arg4 and arg5 == "vertical" -%}
			{%- set v_offset = "-2 * " ~ v_vals.size -%}
			{%- set h_offset = h_vals.offset -%}
		{%- elif not arg4 and arg5 == "horizontal" -%}
			{%- set v_offset = v_vals.offset -%}
			{%- set h_offset = "-2 * " ~ h_vals.size -%}
		{%- else -%}
			{%- set v_offset = v_vals.offset -%}
			{%- set h_offset = h_vals.offset -%}
		{%- endif -%}

		{%- set v_vals = {"pos": v_vals.pos, "pos_opp": v_vals.pos_opp, "size": v_vals.size, "translation": v_vals.translation, "offset": v_offset} -%}
		{%- set h_vals = {"pos": h_vals.pos, "pos_opp": h_vals.pos_opp, "size": h_vals.size, "translation": h_vals.translation, "offset": h_offset} -%}

		{%- if arg5 == "horizontal" -%}
			{%- set main_axis_vals = h_vals -%}
			{%- set second_axis_vals = v_vals -%}
		{%- else -%}
			{%- set main_axis_vals = v_vals -%}
			{%- set second_axis_vals = h_vals -%}
		{%- endif %}

		{{- powerjinja.core.handle_queue(main_axis_vals, second_axis_vals, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}

	{%- macro _cb1(v_vals=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{{- powerjinja.core.handle_queue(arg2[0], arg2[1], arg2[2], arg3, v_vals) -}}
	{%- endmacro -%}

	{{- powerjinja.exponea_banner.process_vertical_position(arg1[0], arg1[1], arg1[2], arg3, macros=[_cb1, powerjinja.exponea_banner.process_horizontal_position, _cb2 ]) -}}
{%- endmacro -%}
`;
}
