type KeyValue = [key: string, value: string];

interface Props  {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  getAllKeys: () => string[];
  multiGet: (value: string[]) => KeyValue[];
  multiSet: (keyValues: KeyValue[]) => void;
  multiRemove: (value: string[]) => void;
};

function useStorage(): Props {
  const getItem = (key: string) => localStorage.getItem(key);

  const setItem = (key: string, value: string) => localStorage.setItem(key, value);

  const removeItem = (key: string) => localStorage.removeItem(key);

  const clear = () => localStorage.clear();

  const getAllKeys = () => {
    const keys = []
    for(let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i))
    }
    return keys;
  }

  const multiGet = (keys: string[]) => {
    const values: KeyValue[] = keys.map(key => [key, getItem(key)]);
    return values;
  }

  const multiSet = (keyValues: KeyValue[]) => {
    keyValues.map(keyValue => setItem(keyValue[0], keyValue[1]));
  }

  const multiRemove = (keys: string[]) => {
    keys.map(key => removeItem(key));
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
    getAllKeys,
    multiGet,
    multiSet,
    multiRemove,
  }

}

export { useStorage };
