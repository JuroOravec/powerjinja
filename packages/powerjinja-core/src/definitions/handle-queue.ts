export const handleQueue = `
{%- macro handle_queue(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if macros | count > 0 and macros | count > index -%}
	    {{- [macros][0][index](arg1, arg2, arg3, arg4, arg5, macros, index + 1) -}}
	{%- endif -%}
{%- endmacro -%}
`;
