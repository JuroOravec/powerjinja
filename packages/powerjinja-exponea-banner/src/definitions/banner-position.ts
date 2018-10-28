// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { attributeWithCalc } from "./attribute-with-calc";

// Prints 'left', 'right', 'top', 'bottom' attributes #}
// Main axis indicates the axis of slide-in animation, either vertical or horizontal #}
// First arguments hold names of position attributes, banner size along given axis, and offset from border for main axis
// Second arguments hold names of position attributes, banner size along given axis, and offset from border for secondary axis
// isFitContent allows banner height to grow with content if 'true' #}

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
//
// e.g.
// arg1: {"pos": 'top', "pos_opp": 'bottom', "size": '300px', "offset": '30px'};
// arg2: {"pos": 'left', "pos_opp": 'right', "size": 'width', "offset": '2em'};
// arg3: True

export const bannerPosition = `
{%- macro banner_position(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- for dir in [arg1, arg2] -%}
		{{- powerjinja.exponea_banner.attribute_with_calc(dir.pos, dir.size ) -}}
		{%- if (arg3 == 'true' or arg3 == True) and ( (dir.pos_opp == 'top') or (dir.pos_opp == 'bottom') ) %}
			{{- dir.pos_opp ~ ': inherit;' -}}
		{%- else %}
			{{- powerjinja.exponea_banner.attribute_with_calc(dir.pos_opp, '100% - ' ~ dir.offset ~ ' - ' ~ dir.size ) -}}
		{%- endif %}
	{%- endfor -%}
	{{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
