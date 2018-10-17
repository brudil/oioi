export enum NodeType {
  FunctionDeclaration = 'FunctionDeclaration',
  Identifier = 'Identifier',
  Integer = 'Integer',
  Operator = 'Operator',
  Expression = 'Expression',
  Statement = 'Statement',
}

export enum OperatorType {
  Plus = '+',
  Minus = '-',
  Multiply = '*',
  Div = '/'
}

export interface SourcePosition {
  offset: number;
  lineBreaks: number;
  line: number;
  col: number;
}

export interface ProducerData extends SourcePosition {
  type: string;
  value: string;
  text: string;
  [pos: number]: any;
}

export type NodeProducer<n> = (data: ProducerData) => n;

export interface ASTNode {
  type: NodeType;
  position: SourcePosition;
}

export interface MainNode extends ASTNode {
  program: ASTNode[];
}

export interface ExpressionNode extends ASTNode {
  lhs: any;
  rhs: any;
  operator: OperatorType;
}

export type Node = ExpressionNode;
