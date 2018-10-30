// Declared dependencies for housekeeping
import { handleQueue } from "powerjinja-core/lib/definitions/handle-queue";

// Checks if string is a url.
// url here is defined as anything that optionally starts with "http://" or "https://"
// and is followed by hostname, followed by nothing or "/" and then anything.
// Hostname is checked according to https://stackoverflow.com/questions/3523028/valid-characters-of-a-hostname/3523068#3523068

export const isUrl = `
{%- macro is_url(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
	{%- if arg1 is string -%}
		{%- set url = arg1.strip() -%}
		{%- if arg1.startswith('http://') -%}
			{%- set url = url.replace('http://', '') -%}
		{%- elif arg1.startswith('http://') -%}
			{%- set url = url.replace('https://', '') -%}
		{%- endif -%}
		{%- set hostname = url.split('/')[0] -%}
		{%- set hostnameLen = hostname | count -%}
		{%- set lengthOk = hostnameLen > 0 and hostnameLen <= 253 -%}
		{%- set hostnameLabels = hostname.split('.') -%}
		{%- set errs = [] -%}
		{%- set allowedChars = "abcdefghijklmnopqrstuvwxyz-01234567890" -%}
		{%- for label in hostnameLabels -%}
			{%- if errs|count == 0 -%}
				{%- if label.length < 1 or label.length > 63 -%}
					{%- append 1 to errs -%}
				{%- else -%}
					{%- for char in label -%}
						{%- if char not in allowedChars -%}
							{%- append 1 to errs -%}
						{%- endif -%}
					{%- endfor -%}
				{%- endif -%}
			{%- endif -%}
		{%- endfor -%}
		{%- set result = errs|count == 0 -%}
	{%- else -%}
		{%- set result = False -%}
	{%- endif -%}
	{{- powerjinja.core.handle_queue(result, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endmacro -%}
`;
