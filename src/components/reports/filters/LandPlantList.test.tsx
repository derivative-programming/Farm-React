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
import * as PacUserFlavorList from "../../lookups/services/PacUserFlavorList"
import * as ReportService from "../services/LandPlantList";  

// set the local storage
window.localStorage.setItem("@token", "sampleToken");
 
const mockPacUserFlavorListService =  jest.spyOn(PacUserFlavorList, "submitRequest");
 
const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance;


describe("LandPlantList Component", () => {

  beforeEach(async () => {  
      mockPacUserFlavorListService.mockResolvedValueOnce({
        data: new PacUserFlavorList.QueryResultTestInstance,
      }); 
      

    render( 
        <ReportFilterLandPlantList 
          name="testForm" 
          initialQuery={intialQuery}
          onSubmit={onSubmit} />  
    ); 

    await waitFor(() => expect(mockPacUserFlavorListService).toHaveBeenCalledTimes(1));
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
  });
 

  it("when user enter flavorCode, it set accordingly", async () => { 
    const input = screen.getByTestId("flavorCode");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "99" } });
    }); 
    expect(screen.getByTestId("flavorCode")).toHaveValue(99);
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

  it("when user enter someMinUTCDateTimeVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinUTCDateTimeVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("someMinUTCDateTimeVal")).toHaveValue("1/1/2000");
  });

  it("when user enter someMinDateVal, it set accordingly", async () => {
    const input = screen.getByTestId("someMinDateVal");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "1/1/2000" } });
    }); 
    expect(screen.getByTestId("someMinDateVal")).toHaveValue("1/1/2000");
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

  it("when user entered LandPlantList details and clicks on register button, LandPlantListUser api should be called", async () => {
   
    const flavorCode = screen.getByTestId("flavorCode");
    await act(async () => {
      await fireEvent.change(flavorCode, { target: { value: "99" } });
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
 
    const someMinUTCDateTimeValInput = screen.getByTestId("someMinUTCDateTimeVal");
    await act(async () => {
      await fireEvent.change(someMinUTCDateTimeValInput, { target: { value: "1/1/2000" } });
    });
 
    const someMinDateValInput = screen.getByTestId("someMinDateVal");
    await act(async () => {
      await fireEvent.change(someMinDateValInput, { target: { value: "1/1/2000" } });
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
  
    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit"));
    }); 
    
  });
});
