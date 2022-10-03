import { useState, useCallback, useReducer } from "react";
import reducer from "./useReducer";
import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  TextContainer,
  TextStyle,
  Heading,
  Checkbox,
  Stack,
  RadioButton,
  Button,
  Modal,
} from "@shopify/polaris";

const File = () => {
  const initialState = {
    title: "",
    description: "",
    handlingTime: "",
    sku: "",
    barcode: "",
    amazon: "",
    imageSelection: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value, identifier) => {
    console.log(value);
    dispatch({
      type: "add",
      payload: {
        val: value,
        field: identifier,
      },
    });
  };

  const [checked, setChecked] = useState(false);
  const handleChangeChecked = useCallback(
    (newChecked) => setChecked(newChecked),

    []
  );

  const [value, setValue] = useState("disabled");

  const handleChangeRadio = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );

  const [active, setActive] = useState(false);
  const open = useCallback(() => setActive(!active), [active]);
  const activator = (
    <Button primary onClick={open}>
      Save Changes
    </Button>
  );
  console.log(state);
  return (
    <Page>
      <Layout>
        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="Title">Title</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(value) => {
                  handleChange(value, "title");
                }}
                autoComplete="off"
                value={state.title}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="Description">Description</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(value) => {
                  handleChange(value, "description");
                }}
                autoComplete="off"
                value={state.description}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="HandlingTime">Handling Time</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(value) => {
                  handleChange(value, "handlingTime");
                }}
                autoComplete="off"
                value={state.handlingTime}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="sku">Amazon Parent SKU</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(value) => {
                  handleChange(value, "sku");
                }}
                autoComplete="off"
                value={state.sku}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="barcode">Barcode/GTIN Exemption</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <Checkbox
                label="Basic checkbox"
                checked={state.barcode}
                onChange={(value) => {
                  handleChange(value, "barcode");
                }}
                autoComplete="off"
                // value={state.barcode}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="amazon">Add Amazon Category</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                onChange={(value) => {
                  handleChange(value, "amazon");
                }}
                autoComplete="off"
                value={state.amazon}
              />
            </FormLayout>
          </Card>
        </Layout.Section>

        <Layout.Section oneThird>
          <div style={{ marginTop: "var(--p-space-5)" }}>
            <TextContainer>
              <Heading id="imageSelection">Image Selection</Heading>
              <p>
                <TextStyle variation="subdued">
                  Shopify and your customers will use this information to
                  contact you.
                </TextStyle>
              </p>
            </TextContainer>
          </div>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <Stack vertical>
                <RadioButton
                  label="Accounts are disabled"
                  // checked={state.imageSelection}
                  id="disabled"
                  name="accounts"
                  onChange={() =>
                    handleChange("Accounts are disabled", "imageSelection")
                  }
                  // onChange={handleChangeRadio}
                />
                <RadioButton
                  label="Accounts are optional"
                  id="optional"
                  name="accounts"
                  // checked={state.imageSelection}

                  onChange={() =>
                    handleChange("Accounts are optional", "imageSelection")
                  }
                  // onChange={handleChangeRadio}
                />
              </Stack>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>

      <div style={{ height: "500px" }}>
        <Modal
          activator={activator}
          open={active}
          onClose={open}
          title="Form Data"
        >
          <Modal.Section>
            <TextContainer>
              <div>Title: {state.title}</div>
              <div>Description: {state.description}</div>
              <div>handling Time: {state.handlingTime}</div>
              {state.barcode ? (
                <div>Barcode: 'True'</div>
              ) : (
                <div>Barcode : 'False'</div>
              )}
              <div>SKU: {state.sku}</div>
              <div>Amazon: {state.amazon}</div>
              <div>Image Selection : {state.imageSelection}</div>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </div>
    </Page>
  );
};

export default File;
