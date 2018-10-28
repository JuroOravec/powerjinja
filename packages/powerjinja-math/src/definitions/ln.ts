// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

/**
 * This log supports numbers up to 4294967296 (2^32)
 *
 * if/elif generated with:
 *
 * var joined = '';
 * for(i = 1;i < 33; i++){
 *   joined += `{%elif arg1<` + Math.pow(2, i) + '%}{%set n='+ (i-1)+ '%}{%set d=' + Math.pow(2, i-1) + '%}\n';
 * }
 * joined += '{%endif%}';
 * console.log(joined)
 */

export const ln = `
{%- macro ln(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%-if arg1<2%}{%-set n=0%}{%-set d=1%}
	{%-elif arg1<4%}{%-set n=1%}{%-set d=2%}
	{%-elif arg1<8%}{%-set n=2%}{%-set d=4%}
	{%-elif arg1<16%}{%-set n=3%}{%-set d=8%}
	{%-elif arg1<32%}{%-set n=4%}{%-set d=16%}
	{%-elif arg1<64%}{%-set n=5%}{%-set d=32%}
	{%-elif arg1<128%}{%-set n=6%}{%-set d=64%}
	{%-elif arg1<256%}{%-set n=7%}{%-set d=128%}
	{%-elif arg1<512%}{%-set n=8%}{%-set d=256%}
	{%-elif arg1<1024%}{%-set n=9%}{%-set d=512%}
	{%-elif arg1<2048%}{%-set n=10%}{%-set d=1024%}
	{%-elif arg1<4096%}{%-set n=11%}{%-set d=2048%}
	{%-elif arg1<8192%}{%-set n=12%}{%-set d=4096%}
	{%-elif arg1<16384%}{%-set n=13%}{%-set d=8192%}
	{%-elif arg1<32768%}{%-set n=14%}{%-set d=16384%}
	{%-elif arg1<65536%}{%-set n=15%}{%-set d=32768%}
	{%-elif arg1<131072%}{%-set n=16%}{%-set d=65536%}
	{%-elif arg1<262144%}{%-set n=17%}{%-set d=131072%}
	{%-elif arg1<524288%}{%-set n=18%}{%-set d=262144%}
	{%-elif arg1<1048576%}{%-set n=19%}{%-set d=524288%}
	{%-elif arg1<2097152%}{%-set n=20%}{%-set d=1048576%}
	{%-elif arg1<4194304%}{%-set n=21%}{%-set d=2097152%}
	{%-elif arg1<8388608%}{%-set n=22%}{%-set d=4194304%}
	{%-elif arg1<16777216%}{%-set n=23%}{%-set d=8388608%}
	{%-elif arg1<33554432%}{%-set n=24%}{%-set d=16777216%}
	{%-elif arg1<67108864%}{%-set n=25%}{%-set d=33554432%}
	{%-elif arg1<134217728%}{%-set n=26%}{%-set d=67108864%}
	{%-elif arg1<268435456%}{%-set n=27%}{%-set d=134217728%}
	{%-elif arg1<536870912%}{%-set n=28%}{%-set d=268435456%}
	{%-elif arg1<1073741824%}{%-set n=29%}{%-set d=536870912%}
	{%-elif arg1<2147483648%}{%-set n=30%}{%-set d=1073741824%}
	{%-elif arg1<4294967296%}{%-set n=31%}{%-set d=2147483648%}
	{%-endif%}

	{%- if arg1 > 0 %}
		{%- set norm = arg1 / d %}
		{%- set result = 0.44717955 - 0.056570851 * norm %}
		{%- set result = -1.4699568 + result * norm %}
		{%- set result = 2.8212026 + result * norm %}
		{%- set result = -1.7417939 + result * norm + n * 0.69314718 %}
	{%- elif arg1 == 0 %}
		{%- result = '-inf' | float %}
	{%- else %}
		{%- result = 'nan' | float %}
	{%- endif %}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
