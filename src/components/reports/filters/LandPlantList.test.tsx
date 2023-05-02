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
import * as flavorCodeService from "../../lookups/services/PacUserFlavorList"
import * as ReportService from "../services/LandPlantList";  
import "fake-indexeddb/auto";
 
window.localStorage.setItem("@token", "sampleToken");
 
const mockFlavorCodeService =  jest.spyOn(flavorCodeService, "submitRequest");
 
const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();


describe("LandPlantList Component", () => {

  beforeEach(async () => {  
    mockFlavorCodeService.mockResolvedValueOnce({
        data: new flavorCodeService.QueryResultTestInstance(),
      }); 
      

    render( 
        <ReportFilterLandPlantList 
          name="testForm" 
          initialQuery={intialQuery}
          onSubmit={onSubmit} />  
    ); 

    await waitFor(() => expect(mockFlavorCodeService).toHaveBeenCalledTimes(1));
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const initTest = async () => {
  }

  it("renders correctly", async () => { 
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("flavorCode-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed-filter")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal-filter")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber-filter")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress-filter")).toBeInTheDocument(); 
    
    expect(screen.getByTestId("flavorCode-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber-filter-label")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress-filter-label")).toBeInTheDocument(); 
    
    expect(screen.getByTestId("flavorCode-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someIntVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someBigIntVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someBitVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("isEditAllowed-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("isDeleteAllowed-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFloatVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someDecimalVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMoneyVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someNVarCharVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someVarCharVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someTextVal-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("somePhoneNumber-filter-field")).toBeInTheDocument();
    expect(screen.getByTestId("someEmailAddress-filter-field")).toBeInTheDocument(); 
  });
 

  it("when user enter flavorCode, it set accordingly", async () => { 
    const input = screen.getByTestId("flavorCode-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "00000000-0000-0000-0000-000000000000" } });
    }); 
    expect(screen.getByTestId("flavorCode-filter-field")).toHaveValue("Please Select One");
  });
  it("when user enter someIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someIntVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someIntVal-filter-field")).toHaveValue(99);
  });

  it("when user enter someBigIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someBigIntVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someBigIntVal-filter-field")).toHaveValue(99);
  });

  it("when user enter someBitVal, it set accordingly", async () => {
    const input = screen.getByTestId("someBitVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("someBitVal-filter-field")).toBeChecked();
  });

  it("when user enter isEditAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isEditAllowed-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("isEditAllowed-filter-field")).toBeChecked();
  });

  it("when user enter isDeleteAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isDeleteAllowed-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { checked: true } });
    }); 
    expect(screen.getByTestId("isDeleteAllowed-filter-field")).toBeChecked();
  });

  it("when user enter someFloatVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFloatVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someFloatVal-filter-field")).toHaveValue(1);
  });

  it("when user enter someDecimalVal, it set accordingly", async () => {
    const input = screen.getByTestId("someDecimalVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someDecimalVal-filter-field")).toHaveValue(1);
  });

  it("when user enter someMinUTCDateTimeVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinUTCDateTimeVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("someMinUTCDateTimeVal-filter-field")).toHaveValue("1/1/2000");
  });

  it("when user enter someMinDateVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinDateVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("someMinDateVal-filter-field")).toHaveValue("1/1/2000");
  });

  it("when user enter someMoneyVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMoneyVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someMoneyVal-filter-field")).toHaveValue(1);
  });

  it("when user enter someNVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someNVarCharVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someNVarCharVal-filter-field")).toHaveValue("sample data");
  });

  it("when user enter someVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someVarCharVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someVarCharVal-filter-field")).toHaveValue("sample data");
  });

  it("when user enter someTextVal, it set accordingly", async () => {
    const input = screen.getByTestId("someTextVal-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someTextVal-filter-field")).toHaveValue("sample data");
  });

  it("when user enter somePhoneNumber, it set accordingly", async () => {
    const input = screen.getByTestId("somePhoneNumber-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("somePhoneNumber-filter-field")).toHaveValue("sample data");
  });

  it("when user enter someEmailAddress, it set accordingly", async () => {
    const input = screen.getByTestId("someEmailAddress-filter-field");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someEmailAddress-filter-field")).toHaveValue("sample data");
  }); 

  it("when user entered LandPlantList details and clicks on register button, LandPlantListUser api should be called", async () => {
   
    const flavorCode = screen.getByTestId("flavorCode-filter-field");
    await act(async () => {
      await fireEvent.change(flavorCode, { target: { value: "99" } });
    });

    const someIntValInput = screen.getByTestId("someIntVal-filter-field");
    await act(async () => {
      await fireEvent.change(someIntValInput, { target: { value: "99" } });
    });
 
    const someBigIntValInput = screen.getByTestId("someBigIntVal-filter-field");
    await act(async () => {
      await fireEvent.change(someBigIntValInput, { target: { value: "99" } });
    });
 
    const someBitValInput = screen.getByTestId("someBitVal-filter-field");
    await act(async () => {
      await fireEvent.change(someBitValInput, { target: { checked: true } });
    });
 
    const isEditAllowedInput = screen.getByTestId("isEditAllowed-filter-field");
    await act(async () => {
      await fireEvent.change(isEditAllowedInput, { target: { checked: true } });
    });
 
    const isDeleteAllowedInput = screen.getByTestId("isDeleteAllowed-filter-field");
    await act(async () => {
      await fireEvent.change(isDeleteAllowedInput, { target: { checked: true } });
    });
 
    const someFloatValInput = screen.getByTestId("someFloatVal-filter-field");
    await act(async () => {
      await fireEvent.change(someFloatValInput, { target: { value: "99" } });
    });
 
    const someDecimalValInput = screen.getByTestId("someDecimalVal-filter-field");
    await act(async () => {
      await fireEvent.change(someDecimalValInput, { target: { value: "99" } });
    });
 
    const someMinUTCDateTimeValInput = screen.getByTestId("someMinUTCDateTimeVal-filter-field");
    await act(async () => {
      await fireEvent.change(someMinUTCDateTimeValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMinDateValInput = screen.getByTestId("someMinDateVal-filter-field");
    await act(async () => {
      await fireEvent.change(someMinDateValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMoneyValInput = screen.getByTestId("someMoneyVal-filter-field");
    await act(async () => {
      await fireEvent.change(someMoneyValInput, { target: { value: "99" } });
    });
 
    const someNVarCharValInput = screen.getByTestId("someNVarCharVal-filter-field");
    await act(async () => {
      await fireEvent.change(someNVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someVarCharValInput = screen.getByTestId("someVarCharVal-filter-field");
    await act(async () => {
      await fireEvent.change(someVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someTextValInput = screen.getByTestId("someTextVal-filter-field");
    await act(async () => {
      await fireEvent.change(someTextValInput, { target: { value: "Sample Data" } });
    });
 
    const somePhoneNumberInput = screen.getByTestId("somePhoneNumber-filter-field");
    await act(async () => {
      await fireEvent.change(somePhoneNumberInput, { target: { value: "Sample Data" } });
    });
 
    const someEmailAddressInput = screen.getByTestId("someEmailAddress-filter-field");
    await act(async () => {
      await fireEvent.change(someEmailAddressInput, { target: { value: "Sample Data" } });
    });
  
    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit-button"));
    }); 
    
  });
});
