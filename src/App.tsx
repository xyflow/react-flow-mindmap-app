import { ReactFlowProvider } from 'reactflow';

import Flow from './Flow';

import './App.css';

function App() {
  return (
    <>
      <header>React Flow Mindmap</header>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </>
  );
}

export default App;
