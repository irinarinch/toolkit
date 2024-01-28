import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import { FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const { fetchMovies } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;  
    value = value.replace(/[^A-Za-z 0-9]/ig, '')
    setInputValue(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchMovies(inputValue)
    setInputValue('');
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Введите название фильма" onChange={handleChange} value={inputValue}/>
        <Button type="submit" variant="outline-secondary">
          Найти
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
