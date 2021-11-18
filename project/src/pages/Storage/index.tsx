import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useStorage, getKeyValue } from '../../hooks/useStorage';

import { Container, Content } from './styles';

export default function Storage() {
  const [pairs, setPairs] = useState<getKeyValue[]>();
  const [addKey, setAddKey] = useState<string>('');
  const [addValue, setAddValue] = useState<string>('');
  const [removeKey, setRemoveKey] = useState<string>('');
  const { getAllKeys, multiGet, setItem, removeItem, clear } = useStorage();

  function refreshKeys() {
    const keys = getAllKeys();
    setPairs(multiGet(keys))
  }

  useEffect(() => {
    refreshKeys();
  }, [])

  function addItem(key: string | undefined, value: any) {
    if (!key) alert('Digite uma chave válida')
    else {
      setItem(key, value);
      setAddValue('');
      setAddKey('');
      refreshKeys();
    }
  }

  function deleteItem(key: string | undefined) {
    if (!key) alert('Digite uma chave válida')
    else {
      removeItem(key);
      setRemoveKey('');
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
          <p key={pair[0]}><strong key={`s${pair[0]}`}>{pair[0]}</strong>: {pair[1]}</p>
        )
      })}
      <br />
      <Button
        text="Limpar tudo"
        color="#B91646"
        onClick={() => clearAll()}
      />

      <br />
      <br />
      <Content>
        <h2>Adicionar chave</h2>

        <Input
          type="text"
          value={addKey}
          placeholder="Chave"
          onChange={e => setAddKey(e.target.value)} />
        <Input
          type="text"
          value={addValue}
          placeholder="Valor"
          onChange={e => setAddValue(e.target.value)} />

        <Button
          text="Adicionar"
          color="#34BE82"
          onClick={() => addItem(addKey, addValue)}
        />
      </Content>
      <br />
      <br />
      <Content>

        <h2>Remover chave</h2>
        <Input
          type="text"
          placeholder="Chave"
          value={removeKey}
          onChange={e => setRemoveKey(e.target.value)}
        />

        <Button
          text="Remover"
          color="#FF6D6D"
          onClick={() => deleteItem(removeKey)}
        />

      </Content>

    </Container>
  );
};