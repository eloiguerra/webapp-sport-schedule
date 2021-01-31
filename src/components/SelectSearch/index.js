import React, {useState} from 'react';
import {
  SelectBox, OptionsContainer,
  Option, SearchBox,
  SelectedContainer
} from './styles';

export default function SelectSearch({data, change, name}){
  const [values, setValues] = useState(data);
  const [toggleOptions, setToggleOptions] = useState(false);
  const [selected, setSelected] = useState(null);

  const findInSelect = e => {
    const name = e.target.value;

    if(name !== ''){
      setValues(prevValues =>
        prevValues.filter(item => item.name.includes(name))
      );
    }
    else{
      setValues(data);
    }
  }

  return (
    <SelectBox>
        <SelectedContainer
          onClick = {() => setToggleOptions(!toggleOptions)}
        >
          {selected ? selected.name : 'Selecione um esporte'}
        </SelectedContainer>
        <OptionsContainer options = {toggleOptions}>
          <SearchBox>
            <input
              type = "text"
              name = "select-search"
              placeholder = "Jogo ou esporte"
              autoComplete = "off"
              onChange = {e => findInSelect(e)}
            />
          </SearchBox>

          {values.map(item => (
            <Option
              key = {item._id}
              onClick = {() => {
                setSelected({
                  id: item._id,
                  name: item.name
                })
                setToggleOptions(false);
              }}
            >
              <input
                type = "radio"
                id = {item._id}
                name = {name}
                value = {item._id}
                onChange = {change}
              />
              <label htmlFor = {item._id}> {item.name} </label>
            </Option>
          ))}
        </OptionsContainer>
      </SelectBox>
  )
}
