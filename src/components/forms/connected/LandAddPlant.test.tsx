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
import * as InitFormService from "../services/init/LandAddPlantInitObjWF";
import * as requestFlavorCodeService from "../../lookups/services/PacUserFlavorList"


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
const mockRequestFlavorCodeService =  jest.spyOn(requestFlavorCodeService, "submitRequest");

let formSubmitResponse = new FormService.SubmitResultInstance();
const formInitResponse = new InitFormService.InitResultInstance();


describe("LandAddPlant Component", () => {

  beforeEach(async () => { 
      mockFormInitService.mockResolvedValueOnce({
        data: new InitFormService.InitResultInstance(),
      });
      
      mockRequestFlavorCodeService.mockResolvedValueOnce({
        data: new requestFlavorCodeService.QueryResultTestInstance(),
      }); 
      

    render(
      <BrowserRouter>
        <FormConnectedLandAddPlant name="testForm" showProcessingAnimationOnInit={false} />
      </BrowserRouter>
    ); 

    await waitFor(() => expect(mockRequestFlavorCodeService).toHaveBeenCalledTimes(1));
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const initTest = async () => {
  }

  it("renders correctly", async () => { 
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("headerErrors")).toBeInTheDocument();
    expect(screen.getByTestId("requestFlavorCode")).toBeInTheDocument();
    expect(screen.getByTestId("requestOtherFlavor")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeBigIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeBitVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestIsEditAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("requestIsDeleteAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeFloatVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeDecimalVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeUTCDateTimeVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeDateVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeMoneyVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeNVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeTextVal")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomePhoneNumber")).toBeInTheDocument();
    expect(screen.getByTestId("requestSomeEmailAddress")).toBeInTheDocument();
    expect(screen.getByTestId("requestSampleImageUploadFile")).toBeInTheDocument();

    
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
    
    if("Add Plant Title Text".length > 0){ 
      expect(screen.getByTestId("page-title-text")).toBeInTheDocument();
    }
    if("Add plant intro text.".length > 0){ 
      expect(screen.getByTestId("page-intro-text")).toBeInTheDocument();
    }
    if("Add plant form footer text".length > 0){ 
      expect(screen.getByTestId("page-footer-text")).toBeInTheDocument();
    }
    
    await waitFor(() => expect(mockFormInitService).toHaveBeenCalledTimes(1)); 
  });


  it("when user enter requestFlavorCode, it set accordingly", async () => {   

    const input = screen.getByTestId("requestFlavorCode");
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    await act(async () => {
      await fireEvent.change(input, { target: { value: "00000000-0000-0000-0000-000000000000" } });
    }); 
    expect(screen.getByTestId("requestFlavorCode")).toHaveValue("Please Select One");
  });


  it("when user enter requestOtherFlavor, it set accordingly", async () => {   

    const input = screen.getByTestId("requestOtherFlavor");
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("requestOtherFlavor")).toHaveValue("sample data");
  });

  it("when user enter requestSomeIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("requestSomeIntVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("requestSomeIntVal")).toHaveValue(99);
  });

  it("when user enter requestSomeBigIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("requestSomeBigIntVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("requestSomeBigIntVal")).toHaveValue(99);
  });

  it("when user enter requestSomeBitVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeBitVal");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("requestSomeBitVal")).toBeChecked();
  });

  it("when user enter requestIsEditAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("requestIsEditAllowed");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("requestIsEditAllowed")).toBeChecked();
  });

  it("when user enter requestIsDeleteAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("requestIsDeleteAllowed");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("requestIsDeleteAllowed")).toBeChecked();
  });

  it("when user enter requestSomeFloatVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeFloatVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("requestSomeFloatVal")).toHaveValue(1);
  });

  it("when user enter requestSomeDecimalVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeDecimalVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("requestSomeDecimalVal")).toHaveValue(1);
  });

  it("when user enter requestSomeUTCDateTimeVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeUTCDateTimeVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("requestSomeUTCDateTimeVal")).toHaveValue("1/1/2000");
  });

  it("when user enter requestSomeDateVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeDateVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("requestSomeDateVal")).toHaveValue("1/1/2000");
  });

  it("when user enter requestSomeMoneyVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeMoneyVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("requestSomeMoneyVal")).toHaveValue(1);
  });

  it("when user enter requestSomeNVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeNVarCharVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("requestSomeNVarCharVal")).toHaveValue("sample data");
  });

  it("when user enter requestSomeVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeVarCharVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("requestSomeVarCharVal")).toHaveValue("sample data");
  });

  it("when user enter requestSomeTextVal, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeTextVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("requestSomeTextVal")).toHaveValue("sample data");
  });

  it("when user enter requestSomePhoneNumber, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomePhoneNumber");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("requestSomePhoneNumber")).toHaveValue("sample data");
  });

  it("when user enter requestSomeEmailAddress, it set accordingly", async () => {
    const input = screen.getByTestId("requestSomeEmailAddress");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("requestSomeEmailAddress")).toHaveValue("sample data");
  });

  it("when user enter requestSampleImageUploadFile, it set accordingly", async () => {
    const input = screen.getByTestId("requestSampleImageUploadFile");
    await act(async () => {
     // await fireEvent.change(input, { target: { value: "1" } });
    }); 
  //  expect(screen.getByTestId("requestSampleImageUploadFile")).toHaveValue(1);
  });



  it("when user entered LandAddPlant details and clicks on register button, LandAddPlantUser api should be called", async () => {
    mockFormSubmitService.mockResolvedValueOnce({
      data: formSubmitResponse,
    }); 
   
    const requestFlavorCodeInput = screen.getByTestId("requestFlavorCode");
    await act(async () => {
        await fireEvent.change(requestFlavorCodeInput, { target: { value: "Test@123" } });
    }); 
 
   
    const requestOtherFlavorInput = screen.getByTestId("requestOtherFlavor");
    await act(async () => {
      await fireEvent.change(requestOtherFlavorInput, { target: { value: "Test@123" } });
    });
 
    const requestSomeIntValInput = screen.getByTestId("requestSomeIntVal");
    await act(async () => {
      await fireEvent.change(requestSomeIntValInput, { target: { value: "99" } });
    });
 
    const requestSomeBigIntValInput = screen.getByTestId("requestSomeBigIntVal");
    await act(async () => {
      await fireEvent.change(requestSomeBigIntValInput, { target: { value: "99" } });
    });
 
    const requestSomeBitValInput = screen.getByTestId("requestSomeBitVal");
    await act(async () => {
      await fireEvent.change(requestSomeBitValInput, { target: { checked: true } });
    });
 
    const requestIsEditAllowedInput = screen.getByTestId("requestIsEditAllowed");
    await act(async () => {
      await fireEvent.change(requestIsEditAllowedInput, { target: { checked: true } });
    });
 
    const requestIsDeleteAllowedInput = screen.getByTestId("requestIsDeleteAllowed");
    await act(async () => {
      await fireEvent.change(requestIsDeleteAllowedInput, { target: { checked: true } });
    });
 
    const requestSomeFloatValInput = screen.getByTestId("requestSomeFloatVal");
    await act(async () => {
      await fireEvent.change(requestSomeFloatValInput, { target: { value: "99" } });
    });
 
    const requestSomeDecimalValInput = screen.getByTestId("requestSomeDecimalVal");
    await act(async () => {
      await fireEvent.change(requestSomeDecimalValInput, { target: { value: "99" } });
    });
 
    const requestSomeUTCDateTimeValInput = screen.getByTestId("requestSomeUTCDateTimeVal");
    await act(async () => {
      await fireEvent.change(requestSomeUTCDateTimeValInput, { target: { value: "1/1/2000" } });
    });
 
    const requestSomeDateValInput = screen.getByTestId("requestSomeDateVal");
    await act(async () => {
      await fireEvent.change(requestSomeDateValInput, { target: { value: "1/1/2000" } });
    });
 
    const requestSomeMoneyValInput = screen.getByTestId("requestSomeMoneyVal");
    await act(async () => {
      await fireEvent.change(requestSomeMoneyValInput, { target: { value: "99" } });
    });
 
    const requestSomeNVarCharValInput = screen.getByTestId("requestSomeNVarCharVal");
    await act(async () => {
      await fireEvent.change(requestSomeNVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const requestSomeVarCharValInput = screen.getByTestId("requestSomeVarCharVal");
    await act(async () => {
      await fireEvent.change(requestSomeVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const requestSomeTextValInput = screen.getByTestId("requestSomeTextVal");
    await act(async () => {
      await fireEvent.change(requestSomeTextValInput, { target: { value: "Sample Data" } });
    });
 
    const requestSomePhoneNumberInput = screen.getByTestId("requestSomePhoneNumber");
    await act(async () => {
      await fireEvent.change(requestSomePhoneNumberInput, { target: { value: "Sample Data" } });
    });
 
    const requestSomeEmailAddressInput = screen.getByTestId("requestSomeEmailAddress");
    await act(async () => {
      await fireEvent.change(requestSomeEmailAddressInput, { target: { value: "Sample Data" } });
    });
 
    const requestSampleImageUploadFileInput = screen.getByTestId("requestSampleImageUploadFile");
    await act(async () => {
    //  await fireEvent.change(requestSampleImageUploadFileInput, { target: { value: "Sample Data" } });
    });

    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit-button"));
    });

    await waitFor(() => expect(mockFormSubmitService).toHaveBeenCalledTimes(1));
  });
});
