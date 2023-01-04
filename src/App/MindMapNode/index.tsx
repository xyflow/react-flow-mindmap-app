import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import cc from 'classcat';

import useStore from '../store';

import DragIcon from './DragIcon';

export type NodeData = {
  label: string;
};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, []);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${data.label.length * 8}px`;
    }
  }, [data.label.length]);

  return (
    <>
      <div className={cc(['inputWrapper', { inputFocused: inputFocused }])}>
        <div className="dragHandle">
          <DragIcon />
        </div>
        <input
          defaultValue={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className="input"
          ref={inputRef}
        />
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Top} />
    </>
  );
}

export default MindMapNode;
