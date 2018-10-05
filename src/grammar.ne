@preprocessor typescript

Main -> Imports | XmlComponent

Blocks -> Blocks | _Block

_Block -> Statement

Imports -> Import:*

Statement -> Assignment

Assignment -> "let" __ Name __ "=" __ Exp
Import -> "use" __ Name __ "as" __ Name __ "\n" {% (d) => ({"type": "IMPORT", package: d[2], imported: d[6] }) %}


Name -> _name {% function(d) {return {'name': d[0]}; } %}

_name -> [a-zA-Z_] {% id %}
	| _name [\w_] {% function(d) {return d[0] + d[1]; } %}

Exp -> [1-9]:+

String -> Quote 

Quote -> "\"" | "'"

ParenthesExp -> "(" Exp ")"

XmlComponent -> "<" Name __ Attributes ">"

Attributes -> Attributes __ | Attribute

Attribute -> Name "=" "{" Name "}"

# Whitespace
_ -> null | _ [\s] {% () => {} %}
__ -> [\s] | __ [\s] {% () => {} %}