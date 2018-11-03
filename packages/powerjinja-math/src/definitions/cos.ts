import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";
import { pi } from "./pi";

export function cos(config: Powerjinja["config"]) {
  return `
{%- macro cos(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- macro _cos_callback(pi=None, _2=None, _3=None, _4=None, _5=None, _6=[], _7=0) -%}
		{%- set val_2pi = arg1 % (pi * 2) -%}
		{%- if val_2pi > pi -%}
			{%- set val_pi = (2 * pi) - val_2pi -%}
		{%- else -%}
			{%- set val_pi = val_2pi -%}
		{%- endif -%}

		{%- if val_pi > (pi / 2) -%}
			{%- set val_pi2 = pi - val_pi -%}
		{%- else -%}
			{%- set val_pi2 = val_pi -%}
		{%- endif -%}

		{%- set val_pi2_sq = val_pi2 * val_pi2 -%}

		{%- set result = (val_pi2_sq * -0.000000000011080716368) + 0.0000000020858327958707 -%}
		{%- set result = (val_pi2_sq * result) - 0.0000002755693576863181 -%}
		{%- set result = (val_pi2_sq * result) + 0.000024801582876042427 -%}
		{%- set result = (val_pi2_sq * result) - 0.001388888886113613522 -%}
		{%- set result = (val_pi2_sq * result) + 0.04166666666581174292 -%}
		{%- set result = (val_pi2_sq * result) - 0.4999999999998996568 -%}
		{%- set result = (val_pi2_sq * result) + 0.99999999999999806767 -%}

		{%- if (val_2pi > pi/2 and val_2pi < (3/2 * pi)) or (val_2pi < -pi/2 and val_2pi > (-3/2 * pi)) -%}
			{%- set result = -1 * result -%}
		{%- endif -%}

		{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
	{%- endmacro -%}
	{{- powerjinja.math.pi(macros=[_cos_callback]) -}}
{%- endmacro -%}
`;
}
