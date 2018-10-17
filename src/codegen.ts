import * as binaryen from 'binaryen';
import { MainNode, ASTNode, NodeType, ExpressionNode } from './types';

export function generate(ast: MainNode) {
  const b = new binaryen.Module();

  function createOrGetFunctionType(rtn: binaryen.Type, params: binaryen.Type[]) {
    return b.addFunctionType("fntype", rtn, params);
  }

  function walkExp(_node: ExpressionNode) {

  }

  function walkAstNode(node: ASTNode) {
    switch (node.type) {
      case NodeType.Expression: {
        walkExp(node as ExpressionNode);
      }
    }
  }

  function walkMainNode(ast: MainNode) {
    ast.program.map(walkAstNode)
  }

  walkMainNode(ast);

  b.addFunction("rah", createOrGetFunctionType(binaryen.none, []), [binaryen.i32], b.block("rah2", [
    b.setLocal(2,
      b.i32.add(
        b.getLocal(0, binaryen.i32),
        b.getLocal(1, binaryen.i32)
      )
    ),
    b.return(
      b.getLocal(2, binaryen.i32)
    )
  ]));

  return b;
}
