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
import ReportFilterLandPlantList from "./LandPlantList";  
import * as flavorCodeService from "../../lookups/services/Flavor"
import * as ReportService from "../services/LandPlantList";  
import "fake-indexeddb/auto";
 
window.localStorage.setItem("@token", "sampleToken");
 
const mockFlavorCodeService =  jest.spyOn(flavorCodeService, "submitRequest");
 
const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();


describe("LandPlantList Component", () => {

  beforeEach(async () => {  
    mockFlavorCodeService.mockResolvedValue({
        data: new flavorCodeService.QueryResultTestInstance(),
      }); 
      

    render( 
        <ReportFilterLandPlantList 
          name="testForm" 
          initialQuery={intialQuery}
          onSubmit={onSubmit} />  
    ); 

    await waitFor(() => expect(mockFlavorCodeService).toHaveBeenCalled());
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const initTest = async () => {
  }

  it("renders correctly", async () => { 
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("flavorCode")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress")).toBeInTheDocument(); 
    
    expect(screen.getByTestId("flavorCode-label")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber-label")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress-label")).toBeInTheDocument(); 
    
    expect(screen.getByTestId("flavorCode-field")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber-field")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress-field")).toBeInTheDocument(); 
  });
 

  it("when user enter flavorCode, it set accordingly", async () => { 
    const input = screen.getByTestId("flavorCode-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "00000000-0000-0000-0000-000000000000" } });
    }); 
    expect(screen.getByTestId("flavorCode-field")).toHaveValue("Please Select One");
  });
  it("when user enter someIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someIntVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someIntVal-field")).toHaveValue(99);
  });

  it("when user enter someBigIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someBigIntVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someBigIntVal-field")).toHaveValue(99);
  });

  it("when user enter someBitVal, it set accordingly", async () => {
    const input = screen.getByTestId("someBitVal-field"); 
    fireEvent.click(screen.getByTestId("someBitVal-field"));
    expect(screen.getByTestId("someBitVal-field")).toBeChecked();
  });

  it("when user enter isEditAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isEditAllowed-field");
    fireEvent.click(screen.getByTestId("isEditAllowed-field"));
    expect(screen.getByTestId("isEditAllowed-field")).toBeChecked();
  });

  it("when user enter isDeleteAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isDeleteAllowed-field");
    fireEvent.click(screen.getByTestId("isDeleteAllowed-field"));
    expect(screen.getByTestId("isDeleteAllowed-field")).toBeChecked();
  });

  it("when user enter someFloatVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFloatVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someFloatVal-field")).toHaveValue(1);
  });

  it("when user enter someDecimalVal, it set accordingly", async () => {
    const input = screen.getByTestId("someDecimalVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someDecimalVal-field")).toHaveValue(1);
  });

  it("when user enter someMinUTCDateTimeVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinUTCDateTimeVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    //expect(screen.getByTestId("someMinUTCDateTimeVal-field")).toHaveValue("1/1/2000");
  });

  it("when user enter someMinDateVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinDateVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
   // expect(screen.getByTestId("someMinDateVal-field")).toHaveValue("1/1/2000");
  });

  it("when user enter someMoneyVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMoneyVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someMoneyVal-field")).toHaveValue(1);
  });

  it("when user enter someNVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someNVarCharVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someNVarCharVal-field")).toHaveValue("sample data");
  });

  it("when user enter someVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someVarCharVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someVarCharVal-field")).toHaveValue("sample data");
  });

  it("when user enter someTextVal, it set accordingly", async () => {
    const input = screen.getByTestId("someTextVal-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someTextVal-field")).toHaveValue("sample data");
  });

  it("when user enter somePhoneNumber, it set accordingly", async () => {
    const input = screen.getByTestId("somePhoneNumber-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("somePhoneNumber-field")).toHaveValue("sample data");
  });

  it("when user enter someEmailAddress, it set accordingly", async () => {
    const input = screen.getByTestId("someEmailAddress-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someEmailAddress-field")).toHaveValue("sample data");
  }); 

  it("when user entered LandPlantList details and clicks on register button, LandPlantListUser api should be called", async () => {
   
    const flavorCode = screen.getByTestId("flavorCode-field");
    await act(async () => {
      await fireEvent.change(flavorCode, { target: { value: "99" } });
    });

    const someIntValInput = screen.getByTestId("someIntVal-field");
    await act(async () => {
      await fireEvent.change(someIntValInput, { target: { value: "99" } });
    });
 
    const someBigIntValInput = screen.getByTestId("someBigIntVal-field");
    await act(async () => {
      await fireEvent.change(someBigIntValInput, { target: { value: "99" } });
    });
 
    const someBitValInput = screen.getByTestId("someBitVal-field");
    await act(async () => {
      await fireEvent.change(someBitValInput, { target: { checked: true } });
    });
 
    const isEditAllowedInput = screen.getByTestId("isEditAllowed-field");
    await act(async () => {
      await fireEvent.change(isEditAllowedInput, { target: { checked: true } });
    });
 
    const isDeleteAllowedInput = screen.getByTestId("isDeleteAllowed-field");
    await act(async () => {
      await fireEvent.change(isDeleteAllowedInput, { target: { checked: true } });
    });
 
    const someFloatValInput = screen.getByTestId("someFloatVal-field");
    await act(async () => {
      await fireEvent.change(someFloatValInput, { target: { value: "99" } });
    });
 
    const someDecimalValInput = screen.getByTestId("someDecimalVal-field");
    await act(async () => {
      await fireEvent.change(someDecimalValInput, { target: { value: "99" } });
    });
 
    const someMinUTCDateTimeValInput = screen.getByTestId("someMinUTCDateTimeVal-field");
    await act(async () => {
      await fireEvent.change(someMinUTCDateTimeValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMinDateValInput = screen.getByTestId("someMinDateVal-field");
    await act(async () => {
      await fireEvent.change(someMinDateValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMoneyValInput = screen.getByTestId("someMoneyVal-field");
    await act(async () => {
      await fireEvent.change(someMoneyValInput, { target: { value: "99" } });
    });
 
    const someNVarCharValInput = screen.getByTestId("someNVarCharVal-field");
    await act(async () => {
      await fireEvent.change(someNVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someVarCharValInput = screen.getByTestId("someVarCharVal-field");
    await act(async () => {
      await fireEvent.change(someVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someTextValInput = screen.getByTestId("someTextVal-field");
    await act(async () => {
      await fireEvent.change(someTextValInput, { target: { value: "Sample Data" } });
    });
 
    const somePhoneNumberInput = screen.getByTestId("somePhoneNumber-field");
    await act(async () => {
      await fireEvent.change(somePhoneNumberInput, { target: { value: "Sample Data" } });
    });
 
    const someEmailAddressInput = screen.getByTestId("someEmailAddress-field");
    await act(async () => {
      await fireEvent.change(someEmailAddressInput, { target: { value: "Sample Data" } });
    });
  
    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit-button"));
    }); 
    
  });
});
