@{%
  const lexer = require('../lexer.ts');

  const empty = () => null;

  const p = require('../producers.ts');
%}

@preprocessor typescript
@lexer lexer

Main -> Statement:+ {% d => ({ program: d }) %}

Statement -> Expression | Fn | Newlines {% d => p.createStatement(d[0]) %}

Expression -> Integer _ %OP  _ Integer {% d => ({"lhs": d[0], "rhs": d[4], "operator": d[2].value }) %}

Fn -> "fn" __ Identifier _ Block {% d => p.createFunction({ identifier: d[2], body: d[4] }) %}

Params -> null | Param | Params _ " " Param {% d => ({ "type": "params", d }) %}

Block -> %LBRACE _ Body _ %RBRACE {% d => d[2] %}

Body -> Statement:+ | null {% d => d %}

Param -> Integer

Identifier -> %Ident {% d => p.createIdentifier({ name: d[0].value}) %}

Integer -> %number {% p.createInteger %}

_N -> Newlines | _

Newlines -> %NL:+ {% empty %}

# Whitespace
_ -> null | %WS {% empty %}
__ -> %WS | __ %WS {% empty %}
