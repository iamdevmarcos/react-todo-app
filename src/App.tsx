import { useState } from 'react';
import * as C from './App.styles';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>

        {loading &&
          <div className="loading">⌛ Loading tasks...</div>
        }

        {/* Add Area */}

        {/* List Area */}
      </C.Area>
    </C.Container>
  );
}

export default App;