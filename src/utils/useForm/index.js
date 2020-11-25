import {useState} from 'react';

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  return [
    values,
    (key, params) => {
      if (key === 'reset') {
        return setValues(initialState);
      }
      return setValues({...values, [key]: params});
    },
  ];
};
