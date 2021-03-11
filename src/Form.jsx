import { MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import options from './options.json';

const Form = () => {
  const [text, setText] = useState('');
  const [operatingSystem, setOperatingSystem] = useState(null);

  // const [osOptions] = useState(() => {
  //   //do something here
  //   return [1, 2, 4];
  // });

  // const [osOptions, setOsOptions] = useState([]);
  // useEffect(() => {
  //   // parse file and set up Options
  //   const options = () => {

  //   };

  //   setOsOptions(options);
  // }, []);

  return (
    <div>
      <Select>
        {options.os.map((o) => {
          return (
            <MenuItem key={o} value={o}>
              {o}
            </MenuItem>
          );
        })}
      </Select>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(text);
        }}
      >
        Make yml
      </button>
    </div>
  );
};

export default Form;
