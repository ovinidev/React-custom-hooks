export type getKeyValue = [string, string | null];
export type setKeyValue = [string, string];

interface Props {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  getAllKeys: () => (string)[];
  multiGet: (values: string[]) => getKeyValue[];
  multiSet: (keyValues: setKeyValue[]) => void;
  multiRemove: (value: string[]) => void;
};

function useStorage(): Props {
  const getItem = (key: string) => localStorage.getItem(key);

  const setItem =
    (key: string, value: string) => localStorage.setItem(key, value);

  const removeItem = (key: string) => localStorage.removeItem(key);

  const clear = () => localStorage.clear();

  const getAllKeys = () => {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) keys.push(key);
    }
    return keys;
  };

  const multiGet = (keys: string[]) => {
    const values: getKeyValue[] = keys.map((key) => [key, getItem(key)]);
    return values;
  };

  const multiSet = (keyValues: setKeyValue[]) => {
    keyValues.map((keyValue) => setItem(keyValue[0], keyValue[1]));
  };

  const multiRemove = (keys: string[]) => {
    keys.map((key) => removeItem(key));
  };

  return {
    getItem,
    setItem,
    removeItem,
    clear,
    getAllKeys,
    multiGet,
    multiSet,
    multiRemove,
  };
}

export {useStorage};
