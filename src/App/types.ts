import { type Node } from '@xyflow/react';

export type NodeData = {
  label: string;
};

export type MindMapNode = Node<NodeData, 'mindmap'>;
