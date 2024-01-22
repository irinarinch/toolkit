import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";

const Search = () => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit");
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control placeholder="Введите название фильма" />
        <Button type="submit" variant="outline-secondary">
          Найти
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
