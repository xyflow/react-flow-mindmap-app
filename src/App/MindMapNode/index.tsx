import { useLayoutEffect, useEffect, useRef } from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react';

import useStore from '../store';
import DragIcon from './DragIcon';
import { type MindMapNode } from '../types';

function MindMapNode({ id, data }: NodeProps<MindMapNode>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 1);
  }, []);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${data.label.length * 8}px`;
    }
  }, [data.label.length]);

  return (
    <>
      <div className="inputWrapper">
        <div className="dragHandle">
          <DragIcon />
        </div>
        <input
          value={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          className="input nodrag"
          ref={inputRef}
        />
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Top} />
    </>
  );
}

export default MindMapNode;
