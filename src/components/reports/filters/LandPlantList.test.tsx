
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ReportFilterLandPlantList from "./LandPlantList";  
import * as flavorFilterCodeService from "../../lookups/services/Flavor"
import * as ReportService from "../services/LandPlantList";  
import "fake-indexeddb/auto";
 
window.localStorage.setItem("@token", "sampleToken");
 
const mockFlavorFilterCodeService =  jest.spyOn(flavorFilterCodeService, "submitRequest");
 
const onSubmit = jest.fn();
const onFilerReset = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();


describe("LandPlantList Component", () => {

  beforeEach(async () => {  
    mockFlavorFilterCodeService.mockResolvedValue({
        data: new flavorFilterCodeService.QueryResultTestInstance(),
      }); 
      

      await act(async () => {
        render( 
            <ReportFilterLandPlantList 
              name="testForm" 
              initialQuery={intialQuery}
              onSubmit={onSubmit} 
              onReset={onFilerReset}
              />  
        ); 
      });

    await waitFor(() => expect(mockFlavorFilterCodeService).toHaveBeenCalled());
  });

  // after cleanup when test-case execution is done
  

  const initTest = async () => {
  }

  it("renders correctly", async () => { 
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
//endset
    expect(screen.getByTestId("flavorFilterCode")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterBigIntVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterBitVal")).toBeInTheDocument();
    expect(screen.getByTestId("isFilterEditAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("isFilterDeleteAllowed")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterFloatVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterDecimalVal")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterMoneyVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterNVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterVarCharVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterTextVal")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterPhoneNumber")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterEmailAddress")).toBeInTheDocument(); 
    expect(screen.getByTestId("someFilterUniqueIdentifier")).toBeInTheDocument(); 
//endset
    
    expect(screen.getByTestId("flavorFilterCode-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterIntVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterBigIntVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterBitVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("isFilterEditAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("isFilterDeleteAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterFloatVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterDecimalVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterMoneyVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterNVarCharVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterVarCharVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterTextVal-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterPhoneNumber-label")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterEmailAddress-label")).toBeInTheDocument(); 
    expect(screen.getByTestId("someFilterUniqueIdentifier-label")).toBeInTheDocument(); 
//endset
    
    expect(screen.getByTestId("flavorFilterCode-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterIntVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterBigIntVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterBitVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("isFilterEditAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("isFilterDeleteAllowed-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterFloatVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterDecimalVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMinUTCDateTimeVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someMinDateVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterMoneyVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterNVarCharVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterVarCharVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterTextVal-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterPhoneNumber-field")).toBeInTheDocument();
    expect(screen.getByTestId("someFilterEmailAddress-field")).toBeInTheDocument(); 
    expect(screen.getByTestId("someFilterUniqueIdentifier-field")).toBeInTheDocument(); 
//endset
  });
 

//endset
  it("when user enter flavorFilterCode, it set accordingly", async () => { 
    const input = screen.getByTestId("flavorFilterCode-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "00000000-0000-0000-0000-000000000000" } });
    }); 
    expect(screen.getByTestId("flavorFilterCode-field")).toHaveTextContent("");
  });
  it("when user enter someFilterIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someFilterIntVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someFilterIntVal-field")).toHaveValue(99);
  });

  it("when user enter someFilterBigIntVal, it set accordingly", async () => { 
    const input = screen.getByTestId("someFilterBigIntVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("someFilterBigIntVal-field")).toHaveValue(99);
  });

  it("when user enter someFilterBitVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterBitVal-field"); 
    await act(async () => {
      fireEvent.click(screen.getByTestId("someFilterBitVal-field"));
    }); 
    expect(screen.getByTestId("someFilterBitVal-field")).toBeChecked();
  });

  it("when user enter isFilterEditAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isFilterEditAllowed-field");
    await act(async () => {
      fireEvent.click(screen.getByTestId("isFilterEditAllowed-field"));
    }); 
    expect(screen.getByTestId("isFilterEditAllowed-field")).toBeChecked();
  });

  it("when user enter isFilterDeleteAllowed, it set accordingly", async () => {
    const input = screen.getByTestId("isFilterDeleteAllowed-field");
    await act(async () => {
      fireEvent.click(screen.getByTestId("isFilterDeleteAllowed-field"));
    }); 
    expect(screen.getByTestId("isFilterDeleteAllowed-field")).toBeChecked();
  });

  it("when user enter someFilterFloatVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterFloatVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someFilterFloatVal-field")).toHaveValue(1);
  });

  it("when user enter someFilterDecimalVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterDecimalVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someFilterDecimalVal-field")).toHaveValue(1);
  });

  it("when user enter someMinUTCDateTimeVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinUTCDateTimeVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    //expect(screen.getByTestId("someMinUTCDateTimeVal-field")).toHaveValue("1/1/2000");
  });

  it("when user enter someMinDateVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinDateVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
   // expect(screen.getByTestId("someMinDateVal-field")).toHaveValue("1/1/2000");
  });

  it("when user enter someFilterMoneyVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterMoneyVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "1" } });
    }); 
    expect(screen.getByTestId("someFilterMoneyVal-field")).toHaveValue(1);
  });

  it("when user enter someFilterNVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterNVarCharVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someFilterNVarCharVal-field")).toHaveValue("sample data");
  });

  it("when user enter someFilterVarCharVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterVarCharVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someFilterVarCharVal-field")).toHaveValue("sample data");
  });

  it("when user enter someFilterTextVal, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterTextVal-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someFilterTextVal-field")).toHaveValue("sample data");
  });

  it("when user enter someFilterPhoneNumber, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterPhoneNumber-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someFilterPhoneNumber-field")).toHaveValue("sample data");
  });

  it("when user enter someFilterEmailAddress, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterEmailAddress-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someFilterEmailAddress-field")).toHaveValue("sample data");
  }); 
  it("when user enter someFilterUniqueIdentifier, it set accordingly", async () => {
    const input = screen.getByTestId("someFilterUniqueIdentifier-field");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    }); 
    expect(screen.getByTestId("someFilterUniqueIdentifier-field")).toHaveValue("sample data");
  }); 
//endset

  it("when user entered LandPlantList details and clicks on register button, LandPlantListUser api should be called", async () => {
   
//endset
    const flavorFilterCode = screen.getByTestId("flavorFilterCode-field");
    await act(async () => {
      fireEvent.change(flavorFilterCode, { target: { value: "99" } });
    });

    const someFilterIntValInput = screen.getByTestId("someFilterIntVal-field");
    await act(async () => {
      fireEvent.change(someFilterIntValInput, { target: { value: "99" } });
    });
 
    const someFilterBigIntValInput = screen.getByTestId("someFilterBigIntVal-field");
    await act(async () => {
      fireEvent.change(someFilterBigIntValInput, { target: { value: "99" } });
    });
 
    const someFilterBitValInput = screen.getByTestId("someFilterBitVal-field");
    await act(async () => {
      fireEvent.change(someFilterBitValInput, { target: { checked: true } });
    });
 
    const isFilterEditAllowedInput = screen.getByTestId("isFilterEditAllowed-field");
    await act(async () => {
      fireEvent.change(isFilterEditAllowedInput, { target: { checked: true } });
    });
 
    const isFilterDeleteAllowedInput = screen.getByTestId("isFilterDeleteAllowed-field");
    await act(async () => {
      fireEvent.change(isFilterDeleteAllowedInput, { target: { checked: true } });
    });
 
    const someFilterFloatValInput = screen.getByTestId("someFilterFloatVal-field");
    await act(async () => {
      fireEvent.change(someFilterFloatValInput, { target: { value: "99" } });
    });
 
    const someFilterDecimalValInput = screen.getByTestId("someFilterDecimalVal-field");
    await act(async () => {
      fireEvent.change(someFilterDecimalValInput, { target: { value: "99" } });
    });
 
    const someMinUTCDateTimeValInput = screen.getByTestId("someMinUTCDateTimeVal-field");
    await act(async () => {
      fireEvent.change(someMinUTCDateTimeValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMinDateValInput = screen.getByTestId("someMinDateVal-field");
    await act(async () => {
      fireEvent.change(someMinDateValInput, { target: { value: "1/1/2000" } });
    });
 
    const someFilterMoneyValInput = screen.getByTestId("someFilterMoneyVal-field");
    await act(async () => {
      fireEvent.change(someFilterMoneyValInput, { target: { value: "99" } });
    });
 
    const someFilterNVarCharValInput = screen.getByTestId("someFilterNVarCharVal-field");
    await act(async () => {
      fireEvent.change(someFilterNVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someFilterVarCharValInput = screen.getByTestId("someFilterVarCharVal-field");
    await act(async () => {
      fireEvent.change(someFilterVarCharValInput, { target: { value: "Sample Data" } });
    });
 
    const someFilterTextValInput = screen.getByTestId("someFilterTextVal-field");
    await act(async () => {
      fireEvent.change(someFilterTextValInput, { target: { value: "Sample Data" } });
    });
 
    const someFilterPhoneNumberInput = screen.getByTestId("someFilterPhoneNumber-field");
    await act(async () => {
      fireEvent.change(someFilterPhoneNumberInput, { target: { value: "Sample Data" } });
    });
 
    const someFilterEmailAddressInput = screen.getByTestId("someFilterEmailAddress-field");
    await act(async () => {
      fireEvent.change(someFilterEmailAddressInput, { target: { value: "Sample Data" } });
    });
 
    const someFilterUniqueIdentifierInput = screen.getByTestId("someFilterUniqueIdentifier-field");
    await act(async () => {
      fireEvent.change(someFilterUniqueIdentifierInput, { target: { value: "Sample Data" } });
    });
//endset
  
    await act(async () => {
      fireEvent.click(screen.getByTestId("submit-button"));
    }); 
    
  });
});
