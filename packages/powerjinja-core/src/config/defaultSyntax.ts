import { Powerjinja } from "../interface/powerjinja";

export function defaultSyntax(): Powerjinja["config"] {
  return {
    delimeter: {
      statementOpen: () => "{%",
      statementOpenTrim: () => "{%-",
      statementOpenNoTrim: () => "{%+",
      statementClose: () => "%}",
      statementCloseTrim: () => "-%}",
      statementCloseNoTrim: () => "+%}",
      printOpen: () => "{{",
      printOpenTrim: () => "{{-",
      printOpenNoTrim: () => "{{+",
      printClose: () => "}}",
      printCloseTrim: () => "-}}",
      printCloseNoTrim: () => "+}}",
      commentOpen: () => "{#",
      commentOpenTrim: () => "{#-",
      commentOpenNoTrim: () => "{#+",
      commentClose: () => "#}",
      commentCloseTrim: () => "-#}",
      commentCloseNoTrim: () => "+#}",
      lineStatementOpen: () => "#",
      lineStatementOpenTrim: () => "#-",
      lineStatementOpenNoTrim: () => "#+",
      lineStatementClose: () => "##",
      lineStatementCloseTrim: () => "-##",
      lineStatementCloseNoTrim: () => "+##"
    },
    tag: {
      set: () => "set",
      endset: () => "endset",
      block: () => "block",
      endblock: () => "endblock",
      call: () => "call",
      endcall: () => "endcall",
      do: () => "do",
      extends: () => "extends",
      filter: () => "filter",
      endfilter: () => "endfilter",
      if: () => "if",
      else: () => "else",
      elif: () => "elif",
      endif: () => "endif",
      include: () => "include",
      import: () => "import",
      for: () => "for",
      endfor: () => "endfor",
      from: () => "from",
      macro: () => "macro",
      endmacro: () => "endmacro"
    },
    command: {
      append: (list, item) => `do ${list}.append(${item})`
    }
  };
}
