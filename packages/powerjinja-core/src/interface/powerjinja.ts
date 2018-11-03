import { DefinitionInjector } from "inject-definition/lib/interface";

export interface Powerjinja extends DefinitionInjector.IDefinitionInjector {
  compile?: DefinitionInjector.IDefinitionInjector["inject"];
  config?: {
    command?: {
      [prop: string]: (...args) => string;
    };
    delimeter?: {
      statementOpen: (...args) => string;
      statementOpenTrim: (...args) => string;
      statementOpenNoTrim: (...args) => string;
      statementClose: (...args) => string;
      statementCloseTrim: (...args) => string;
      statementCloseNoTrim: (...args) => string;
      printOpen: (...args) => string;
      printOpenTrim: (...args) => string;
      printOpenNoTrim: (...args) => string;
      printClose: (...args) => string;
      printCloseTrim: (...args) => string;
      printCloseNoTrim: (...args) => string;
      commentOpen: (...args) => string;
      commentOpenTrim: (...args) => string;
      commentOpenNoTrim: (...args) => string;
      commentClose: (...args) => string;
      commentCloseTrim: (...args) => string;
      commentCloseNoTrim: (...args) => string;
      lineStatementOpen: (...args) => string;
      lineStatementOpenTrim: (...args) => string;
      lineStatementOpenNoTrim: (...args) => string;
      lineStatementClose: (...args) => string;
      lineStatementCloseTrim: (...args) => string;
      lineStatementCloseNoTrim: (...args) => string;
    };
    tag?: {
      set: (...args) => string;
      endset: (...args) => string;
      block: (...args) => string;
      endblock: (...args) => string;
      call: (...args) => string;
      endcall: (...args) => string;
      do: (...args) => string;
      extends: (...args) => string;
      filter: (...args) => string;
      endfilter: (...args) => string;
      if: (...args) => string;
      else: (...args) => string;
      elif: (...args) => string;
      endif: (...args) => string;
      include: (...args) => string;
      import: (...args) => string;
      for: (...args) => string;
      endfor: (...args) => string;
      from: (...args) => string;
      macro: (...args) => string;
      endmacro: (...args) => string;
    };
  };
}
