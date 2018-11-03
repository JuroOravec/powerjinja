import { Powerjinja } from "../interface/powerjinja";

// {%- macro powerjinja.core.handle_queue(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
// {%- if macros | count > 0 and macros | count > index -%}
// 	    {{- [macros][0][index](arg1, arg2, arg3, arg4, arg5, macros, index + 1) -}}
// {%- endif -%}
// {%- endmacro -%}

export function handleQueue(config: Powerjinja["config"]) {
  const ifo = config.tag.if();
  const ifc = config.tag.endif();
  const mo = config.tag.macro();
  const mc = config.tag.endmacro();
  const som = config.delimeter.statementOpenTrim();
  const scm = config.delimeter.statementCloseTrim();
  const pom = config.delimeter.printOpenTrim();
  const pcm = config.delimeter.printCloseTrim();

  return `
${som} ${mo} handle_queue(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) ${scm}
	${som} ${ifo} macros | count > 0 and macros | count > index ${scm}
	    ${pom} [macros][0][index](arg1, arg2, arg3, arg4, arg5, macros, index + 1) ${pcm}
	${som} ${ifc} ${scm}
${som} ${mc} ${scm}
`;
}
