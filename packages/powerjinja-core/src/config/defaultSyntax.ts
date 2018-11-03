import { Powerjinja } from "../interface/powerjinja";

export function defaultSyntax(): Powerjinja["config"] {
  return {
    get delimeter() {
      return {
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
      };
    },
    get tag() {
      return {
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
      };
    },
    get command() {
      return {
        append: (list, item) => `${this.tag.do()} ${list}.append(${item})`
      };
    }
  };
}
