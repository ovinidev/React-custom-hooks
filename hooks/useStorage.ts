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

/**
 * Hook that return usual functions to manage the storage
 * @returns Object with functions
 */
function useStorage(): Props {

  /**
   * Function that receive a key and return its value
   * @param key Name of key
   * @returns The value associated with the key
   */
  const getItem = (key: string) => localStorage.getItem(key);

  /**
   * Function that receives a key name and the value to be stored
   * @param key Name of key
   * @param value Value to be stored
   * @returns void
   */
  const setItem = (key: string, value: string) => localStorage.setItem(key, value);

  /**
   * Function that receive a key name and deletes it along with its value
   * @param key Name of key
   * @returns void
   */
  const removeItem = (key: string) => localStorage.removeItem(key);

  /**
   * Delete all items from the storage
   * @returns void
   */
  const clear = () => localStorage.clear();

  /**
   * Returns a list of all key names
   * @returns Array of key names
   */
  const getAllKeys = () => {
    const keys: string[] = []
    for(let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i))
    }
    return keys;
  }

  /**
   * Function that receive a list of key names and returns another list of key-value pairs
   * @param keys Array of key names to get
   * @returns Array of key-value pairs 
   */
  const multiGet = (keys: string[]) => {
    const values: KeyValue[] = keys.map(key => [key, getItem(key)]);
    return values;
  }

  /**
   * Function that receive a list of key-value pairs and stores them
   * @param keyValues Array of key-value pairs
   * @returns void
   */
  const multiSet = (keyValues: KeyValue[]) => keyValues.forEach(keyValue => setItem(keyValue[0], keyValue[1]));
  
  /**
   * Function that receive a list of key names and deletes them
   * @param keys Array of key names
   * @returns void
   */
  const multiRemove = (keys: string[]) => keys.forEach(key => removeItem(key));
  
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
