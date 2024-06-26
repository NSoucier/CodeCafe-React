import { React, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./NewItemForm.css";

function NewItemForm({ addMenuItem }) {
  const { type } = useParams();
  const history = useHistory();
  const initialState = { name: "", description: "", recipe: "", serve: "" };
  const [formData, setFormData] = useState(initialState);

  // handles display of user input on form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  // handles submission of form, adding item to API and resets form
  const handleClick = (evt) => {
    evt.preventDefault();
    // add data to api
    addMenuItem(formData, type);
    setFormData(initialState)
    history.push(`/${type.toLowerCase()}s`);
  };

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a new {type.toLowerCase()} to the menu!
          </CardTitle>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
                className="formInput"
                id="name"
                name="name"
                value={formData.name} 
                onChange={handleChange}
                placeholder="What is it called?" />
              <Label>Description</Label>
              <Input
                className="formInput"
                id="description"
                name="description"
                value={formData.description} 
                onChange={handleChange}
                placeholder="How would you describe it?"
              />
              <Label>Recipe</Label>
              <Input 
                className="formInput"
                id="recipe"
                name="recipe"
                value={formData.recipe} 
                onChange={handleChange}
                placeholder="How is it made?" />
              <Label>Serve</Label>
              <Input
                className="formInput"
                id="serve"
                name="serve"
                value={formData.serve} 
                onChange={handleChange}
                placeholder="How is it served?" />
            </FormGroup>
          </Form>
          <Button className="addItem" onClick={handleClick}>
            Add {type.toLowerCase()}
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItemForm;
