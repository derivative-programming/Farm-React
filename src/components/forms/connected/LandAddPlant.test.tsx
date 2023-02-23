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
import FormConnectedLandAddPlant from "./LandAddPlant"; 
import { BrowserRouter } from "react-router-dom"; 
import * as FormService from "../services/LandAddPlant";
import * as PacUserFlavorList from "../../lookups/services/PacUserFlavorList"

// set the local storage
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUserParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000",}),
}));

const mockFormInitService = jest.spyOn(FormService, "initForm");
const mockFormSubmitService =  jest.spyOn(FormService, "submitForm");
const mockPacUserFlavorListService =  jest.spyOn(PacUserFlavorList, "submitRequest");

let formSubmitResponse = new FormService.SubmitResultInstance;
const formInitResponse = new FormService.InitResultInstance;


describe("LandAddPlant Component", () => {

  beforeEach(async () => { 
      mockFormInitService.mockResolvedValueOnce({
        data: new FormService.InitResultInstance,
      });
      
      mockPacUserFlavorListService.mockResolvedValueOnce({
        data: new PacUserFlavorList.QueryResultTestInstance,
      }); 
      

    render(
      <BrowserRouter>
        <FormConnectedLandAddPlant name="testForm" />
      </BrowserRouter>
    ); 

    await waitFor(() => expect(mockPacUserFlavorListService).toHaveBeenCalledTimes(1));
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const initTest = async () => {
  }

  it("renders correctly", async () => { 
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("headerErrors")).toBeInTheDocument();
    expect(screen.getByTestId("flavorCode")).toBeInTheDocument();
    expect(screen.getByTestId("otherFlavor")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal")).toBeInTheDocument();
    expect(screen.getByTestId("someUTCDateTimeVal")).toBeInTheDocument();
    expect(screen.getByTestId("someDateVal")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress")).toBeInTheDocument();
    expect(screen.getByTestId("sampleImageUploadFile")).toBeInTheDocument();

    
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
    
    expect(screen.getByText("Add Plant Title Text")).toBeInTheDocument();
    expect(screen.getByText("Add plant intro text.")).toBeInTheDocument();
    expect(screen.getByText("Add plant form footer text")).toBeInTheDocument();
    
    await waitFor(() => expect(mockFormInitService).toHaveBeenCalledTimes(1));
  });

  it("when user enter otherFlavor, it set accordingly", async () => {
    await waitFor(() => expect(mockPacUserFlavorListService).toHaveBeenCalledTimes(1));

    const input = screen.getByTestId("otherFlavor");
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("otherFlavor")).toHaveValue("sample data");
  });

  it("when user enter someIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someIntVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someIntVal")).toHaveValue(99);
  });

  it("when user enter someBigIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someBigIntVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someBigIntVal")).toHaveValue(99);
  });

  it("when user enter someBitVal, it set accordingly", async () => {
    const input = screen.getByTestId("someBitVal");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("someBitVal")).toBeChecked();
  });

  it("when user enter isEditAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isEditAllowed");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("isEditAllowed")).toBeChecked();
  });

  it("when user enter isDeleteAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isDeleteAllowed");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("isDeleteAllowed")).toBeChecked();
  });

  it("when user enter someFloatVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFloatVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someFloatVal")).toHaveValue(1);
  });

  it("when user enter someDecimalVal, it set accordingly", async () => {
    const input = screen.getByTestId("someDecimalVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someDecimalVal")).toHaveValue(1);
  });

  it("when user enter someUTCDateTimeVal, it set accordingly", async () => {
    const input = screen.getByTestId("someUTCDateTimeVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("someUTCDateTimeVal")).toHaveValue("1/1/2000");
  });

  it("when user enter someDateVal, it set accordingly", async () => {
    const input = screen.getByTestId("someDateVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("someDateVal")).toHaveValue("1/1/2000");
  });

  it("when user enter someMoneyVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMoneyVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someMoneyVal")).toHaveValue(1);
  });

  it("when user enter someNVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someNVarCharVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someNVarCharVal")).toHaveValue("sample data");
  });

  it("when user enter someVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someVarCharVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someVarCharVal")).toHaveValue("sample data");
  });

  it("when user enter someTextVal, it set accordingly", async () => {
    const input = screen.getByTestId("someTextVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someTextVal")).toHaveValue("sample data");
  });

  it("when user enter somePhoneNumber, it set accordingly", async () => {
    const input = screen.getByTestId("somePhoneNumber");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("somePhoneNumber")).toHaveValue("sample data");
  });

  it("when user enter someEmailAddress, it set accordingly", async () => {
    const input = screen.getByTestId("someEmailAddress");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someEmailAddress")).toHaveValue("sample data");
  });

  it("when user enter sampleImageUploadFile, it set accordingly", async () => {
    const input = screen.getByTestId("sampleImageUploadFile");
    await act(async () => {
     // await fireEvent.change(input, { target: { value: "1" } });
    }); 
  //  expect(screen.getByTestId("sampleImageUploadFile")).toHaveValue(1);
  });



  it("when user entered LandAddPlant details and clicks on register button, LandAddPlantUser api should be called", async () => {
    mockFormSubmitService.mockResolvedValueOnce({
      data: formSubmitResponse,
    }); 
   
    const otherFlavorInput = screen.getByTestId("otherFlavor");
    await act(async () => {
      await fireEvent.change(otherFlavorInput, { target: { value: "Test@123" } });
    });
 
    const someIntValInput = screen.getByTestId("someIntVal");
    await act(async () => {
      await fireEvent.change(someIntValInput, { target: { value: "99" } });
    });
 
    const someBigIntValInput = screen.getByTestId("someBigIntVal");
    await act(async () => {
      await fireEvent.change(someBigIntValInput, { target: { value: "99" } });
    });
 
    const someBitValInput = screen.getByTestId("someBitVal");
    await act(async () => {
      await fireEvent.change(someBitValInput, { target: { checked: true } });
    });
 
    const isEditAllowedInput = screen.getByTestId("isEditAllowed");
    await act(async () => {
      await fireEvent.change(isEditAllowedInput, { target: { checked: true } });
    });
 
    const isDeleteAllowedInput = screen.getByTestId("isDeleteAllowed");
    await act(async () => {
      await fireEvent.change(isDeleteAllowedInput, { target: { checked: true } });
    });
 
    const someFloatValInput = screen.getByTestId("someFloatVal");
    await act(async () => {
      await fireEvent.change(someFloatValInput, { target: { value: "99" } });
    });
 
    const someDecimalValInput = screen.getByTestId("someDecimalVal");
    await act(async () => {
      await fireEvent.change(someDecimalValInput, { target: { value: "99" } });
    });
 
    const someUTCDateTimeValInput = screen.getByTestId("someUTCDateTimeVal");
    await act(async () => {
      await fireEvent.change(someUTCDateTimeValInput, { target: { value: "1/1/2000" } });
    });
 
    const someDateValInput = screen.getByTestId("someDateVal");
    await act(async () => {
      await fireEvent.change(someDateValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMoneyValInput = screen.getByTestId("someMoneyVal");
    await act(async () => {
      await fireEvent.change(someMoneyValInput, { target: { value: "99" } });
    });
 
    const someNVarCharValInput = screen.getByTestId("someNVarCharVal");
    await act(async () => {
      await fireEvent.change(someNVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someVarCharValInput = screen.getByTestId("someVarCharVal");
    await act(async () => {
      await fireEvent.change(someVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someTextValInput = screen.getByTestId("someTextVal");
    await act(async () => {
      await fireEvent.change(someTextValInput, { target: { value: "Sample Data" } });
    });
 
    const somePhoneNumberInput = screen.getByTestId("somePhoneNumber");
    await act(async () => {
      await fireEvent.change(somePhoneNumberInput, { target: { value: "Sample Data" } });
    });
 
    const someEmailAddressInput = screen.getByTestId("someEmailAddress");
    await act(async () => {
      await fireEvent.change(someEmailAddressInput, { target: { value: "Sample Data" } });
    });
 
    const sampleImageUploadFileInput = screen.getByTestId("sampleImageUploadFile");
    await act(async () => {
    //  await fireEvent.change(sampleImageUploadFileInput, { target: { value: "Sample Data" } });
    });

    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit-button"));
    });

    await waitFor(() => expect(mockFormSubmitService).toHaveBeenCalledTimes(1));
  });
});
