/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import {ReportInputSelect, ReportInputSelectOption} from "./InputSelect";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const options:ReportInputSelectOption[] = [{label:"testlabel1",value:"testvalue1"},{label:"testlabel2",value:"testvalue2"}]
 
describe("ReportInputSelect Component", () => {
  // render the ReportInputSelect component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
      <ReportInputSelect label="Test Label" name="testName" options={options}/> 
      </Form>  
  )}
</Formik>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
    expect(screen.getByTestId("testName-label")).toBeInTheDocument();
    expect(screen.getByTestId("testName-field")).toBeInTheDocument();
    expect(screen.getByTestId("testName-field")).not.toHaveFocus();
    expect(screen.getByTestId("testName-field")).toBeEnabled();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("when user enter value, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName-field");
    // await act(async () => {
    //   await fireEvent.change(input, { target: { value: "test@gmail.com" } });
    // });

    // expect(screen.getByTestId("testName")).toHaveValue("test@gmail.com");
  }); 
  
  it("when user sets prop disable to true, control is disabled", async () => {
    const input = screen.getByTestId("testName-field");

    await act(async () => {
      await fireEvent.change(input, { target: { disabled: true } });
    });

    expect(screen.getByTestId("testName-field")).toBeDisabled();
  }); 

  it("when user sets prop disable to false, control is not disabled", async () => {
    const input = screen.getByTestId("testName-field");

    await act(async () => {
      await fireEvent.change(input, { target: { disabled: false } });
    });

    expect(screen.getByTestId("testName-field")).not.toBeDisabled();
  }); 
  
  it("when user sets prop autoFocus to true, control is autoFocused", async () => {
    render( 
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
      <ReportInputSelect label="Test Label" name="testName2" autoFocus={true} options={options}/> 
      </Form>  
  )}
</Formik>
    );

    const input = screen.getByTestId("testName2-field");

    await act(async () => {
      await fireEvent.change(input, { target: { autoFocus: true } });
    });

    expect(screen.getByTestId("testName2-field")).toHaveFocus();
  }); 
});
