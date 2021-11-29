import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import * as env from './env';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    setLoading(true);
    const res = await fetch(env.API_URL);
    const json = await res.json();
    setList(json.list);
    setLoading(false);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>
        {loading &&
          <div className="loading">⌛ Loading tasks...</div>
        }

        {/* Add Area */}

        {!loading && list.length > 0 &&
        <>
          {list.map((item, index) => (
            <ListItem
              key={index}
              data={item}
            />
          ))}
        </>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;