import { useEffect, useState } from 'react';
import { useStorage, getKeyValue } from '../../hooks/useStorage';

import { Container, Content } from './styles';

export default function Storage() {
  const [pairs, setPairs] = useState<getKeyValue[]>();
  const [addKey, setAddKey] = useState<string>();
  const [addValue, setAddValue] = useState<string>();
  const [removeKey, setRemoveKey] = useState<string>();
  const { getAllKeys, multiGet, setItem, removeItem, clear } = useStorage();
  
  function refreshKeys() {
    const keys = getAllKeys();
    setPairs(multiGet(keys))
  }

  useEffect(() => {
    refreshKeys();
  }, [pairs])

  function addItem(key: string | undefined, value: any) {
    if (!key) alert('Digite uma chave válida')
    else {
      setItem(key, value);
      setAddValue('');
      refreshKeys();
    }
  }

  function deleteItem(key: string | undefined) {
    if (!key) alert('Digite uma chave válida')
    else {
      removeItem(key);
      refreshKeys();
    }
  }

  function clearAll() {
    clear();
    refreshKeys();
  }

  return (
    <Container>
      <h1>Storage atual</h1>

      {pairs && pairs.map(pair => {
        return (
          <p><strong>{pair[0]}</strong> : {pair[1]}</p>
        )
      })}
      <br/>
      <br/>
      <h1>Adicionar chave</h1>

      <input
        type="text"
        id="addKey"
        placeholder="Chave"
        onChange={e => setAddKey(e.target.value)} />
      <input
        type="text"
        id="addValue"
        placeholder="Valor"
        onChange={e => setAddValue(e.target.value)} />

      <button onClick={() => addItem(addKey, addValue)}>Add</button>
      <br/>
      <br/>

      <h1>Remover chave</h1>
      <input
        type="text"
        id="removeKey"
        placeholder="Chave"
        onChange={e => setRemoveKey(e.target.value)} />

      <button onClick={() => deleteItem(removeKey)}>Remover</button>
      <br/>
      <br/>
      
      <h1>Limpar tudo</h1>
      <button onClick={() => clearAll()}>Limpar tudo</button>
    </Container>
  );
};