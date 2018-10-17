import { NodeProducer, NodeType } from "./types";

export const createInteger: NodeProducer<number> = (d) => parseInt(d[0], 10);

export const createFunction = ({ identifier, body }: { identifier: any, body: any }) => ({ type: NodeType.FunctionDeclaration, identifier, body });

export const createIdentifier = ({ name }: { name: string }) => ({ type: NodeType.Identifier, name });

export const createStatement = (statement: any) => ({ type: NodeType.Statement, body: statement });
