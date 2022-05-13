/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import PlantList from "./plant-list";
import { BrowserRouter } from "react-router-dom";
import * as homeController from "../../services/home";

const mockedUsedNavigate = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const flavorApiResponse = {
  pageNumber: 1,
  items: [
    {
      flavorCode: "79d0572f-3a77-4a32-ae12-065bc9226bbf",
      description: "Unknown",
      displayOrder: 1,
      isActive: true,
      lookupEnumName: "Unknown",
      name: "",
    },
    {
      flavorCode: "8ef40a16-0107-445f-95f3-9a42571e6dce",
      description: "Sweet",
      displayOrder: 2,
      isActive: true,
      lookupEnumName: "Sweet",
      name: "Sweet",
    },
    {
      flavorCode: "3c168950-4aa1-458b-9b8f-b8a0c86ad5f8",
      description: "Sour",
      displayOrder: 3,
      isActive: true,
      lookupEnumName: "Sour",
      name: "Sour",
    },
    {
      flavorCode: "33333333-3333-3333-3333-333333333333",
      description: "Other",
      displayOrder: 4,
      isActive: true,
      lookupEnumName: "Other",
      name: "Other",
    },
  ],
  itemCountPerPage: 10,
  orderByColumnName: "",
  orderByDescending: false,
  success: true,
  recordsTotal: 4,
  recordsFiltered: 4,
  message: "Success.",
  appVersion: "1.0.0.0",
  request: {
    flavorCode: "00000000-0000-0000-0000-000000000000",
    pageNumber: 1,
    itemCountPerPage: 10,
    orderByColumnName: "",
    orderByDescending: false,
    forceErrorMessage: null,
  },
};

const plantListResponse = {
  pageNumber: 1,
  items: [
    {
      plantCode: "cb332b3a-d73d-4ed4-a002-65440f7cd27b",
      someIntVal: -78005491,
      someBigIntVal: 39103456,
      someBitVal: false,
      isEditAllowed: true,
      isDeleteAllowed: true,
      someFloatVal: 1.01,
      someDecimalVal: 1.020079,
      someUTCDateTimeVal: "2021-04-10T15:58:43",
      someDateVal: "2021-04-10T00:00:00",
      someMoneyVal: 3.01,
      someNVarCharVal: "non exercitation consectetur Excepteur",
      someVarCharVal: "c",
      someTextVal: "laborum ipsum quis",
      somePhoneNumber: "1231234",
      someEmailAddress: "test@test.com",
      flavorName: "Sweet",
      flavorCode: "8ef40a16-0107-445f-95f3-9a42571e6dce",
    },
    {
      plantCode: "54a145c6-41b5-4303-af10-df2d9ebda8cd",
      someIntVal: -1,
      someBigIntVal: 39103456,
      someBitVal: false,
      isEditAllowed: true,
      isDeleteAllowed: true,
      someFloatVal: 1.01,
      someDecimalVal: 1.02,
      someUTCDateTimeVal: "2021-04-10T15:58:43",
      someDateVal: "2021-04-10T00:00:00",
      someMoneyVal: 3.01,
      someNVarCharVal: "non exercitation consectetur Excepteur",
      someVarCharVal: "c",
      someTextVal: "laborum ipsum quis ea",
      somePhoneNumber: "1231234",
      someEmailAddress: "test@test.com",
      flavorName: "Sweet",
      flavorCode: "8ef40a16-0107-445f-95f3-9a42571e6dce",
    },
  ],
  itemCountPerPage: 10,
  orderByColumnName: "",
  orderByDescending: false,
  success: true,
  recordsTotal: 7,
  recordsFiltered: 7,
  message: "Success.",
  appVersion: "1.0.0.0",
  request: {
    someIntVal: 0,
    someBigIntVal: 0,
    someBitVal: false,
    isEditAllowed: false,
    isDeleteAllowed: false,
    someFloatVal: 0,
    someDecimalVal: 0,
    minimumSomeUTCDateTimeVal: "0001-01-01T00:00:00",
    minimumSomeDateVal: "0001-01-01T00:00:00",
    someMoneyVal: 0,
    someNVarCharVal: null,
    someVarCharVal: null,
    someTextVal: null,
    somePhoneNumber: null,
    someEmailAddress: null,
    flavorCode: "00000000-0000-0000-0000-000000000000",
    plantCode: "00000000-0000-0000-0000-000000000000",
    pageNumber: 1,
    itemCountPerPage: 10,
    orderByColumnName: "",
    orderByDescending: false,
    forceErrorMessage: null,
  },
};

const deletePlantResponse = {
  success: true,
  message: "Success.",
};

describe("Plant List Component", () => {
  const mockFlavors = jest.spyOn(homeController, "getFlavors");
  const mockPlantList = jest.spyOn(homeController, "plantsList");
  const mockDeletePlant = jest.spyOn(homeController, "deletePlant");
  // render the login component
  beforeEach(async () => {
    mockFlavors.mockResolvedValueOnce({
      data: flavorApiResponse,
    });
    mockPlantList.mockResolvedValueOnce({
      data: plantListResponse,
    });
    await act(() =>
      render(
        <BrowserRouter>
          <PlantList />
        </BrowserRouter>
      )
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("plant-list")).toBeInTheDocument();
  });

  it("when component is loaded getFlavors and plantsList api should be called", async () => {
    await waitFor(() => expect(mockFlavors).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockPlantList).toHaveBeenCalledTimes(1));
  });

  it("data loaded correctly, it based on api response", async () => {
    const tableRow = screen.getAllByRole("row");
    await act(() =>
      expect(tableRow.length).toBe(plantListResponse.items.length + 1)
    );
  });

  it("when user clicks on edit button, it redirect to the update-plant URL", async () => {
    await act(async () => {
      await fireEvent.click(screen.getAllByTestId("edit-btn")[0]);
    });
    await waitFor(() =>
      expect(mockedUsedNavigate).toHaveBeenCalledWith(
        `/update-plant/${plantListResponse.items[0].plantCode}`
      )
    );
  });

  it("when user clicks on delete button, it opened delete dialog in UI", async () => {
    await act(async () => {
      await fireEvent.click(screen.getAllByTestId("delete-btn")[0]);
    });

    expect(screen.getByTestId("delete-dialog")).toBeInTheDocument();
  });

  it("when user clicks close button, it closed the delete dialog in UI", async () => {
    await act(async () => {
      await fireEvent.click(screen.getAllByTestId("delete-btn")[0]);
    });

    expect(screen.getByTestId("delete-dialog")).toBeInTheDocument();

    await act(async () => {
      await fireEvent.click(screen.getByTestId("close-dialog-btn"));
    });

    await waitFor(() => expect(screen.queryByTestId("delete-dialog")).not.toBeInTheDocument());
  });

  it("when user clicks the delete option in Delete dialog, it deletePlant api should be called", async () => {
    mockDeletePlant.mockResolvedValueOnce({
      data: deletePlantResponse,
    });
    await act(async () => {
      await fireEvent.click(screen.getAllByTestId("delete-btn")[0]);
    });

    expect(screen.getByTestId("delete-dialog")).toBeInTheDocument();

    await act(async () => {
      await fireEvent.click(screen.getByTestId("delete-dialog-btn"));
    });

    await waitFor(() => expect(mockDeletePlant).toHaveBeenCalledTimes(1));
  });

  it("when user clicks on view button, it redirect to the plant-details URL", async () => {
    await act(async () => {
      await fireEvent.click(screen.getAllByTestId("view-btn")[0]);
    });
    await waitFor(() =>
      expect(mockedUsedNavigate).toHaveBeenCalledWith(
        `/plant-details/${plantListResponse.items[0].plantCode}`
      )
    );
  });

  it("when user filter data using phone number, plantsList api should be called", async () => {
    mockPlantList.mockResolvedValueOnce({
      data: plantListResponse,
    });
    const phoneNumberInput = screen.getByTestId("some-phone-input");
    await act(async () => {
      await fireEvent.change(phoneNumberInput, { target: { value: 9112312322 } });
    });

    expect(Number(phoneNumberInput.value)).toEqual(9112312322);

    await act(async () => {
      await fireEvent.click(screen.getByTestId("save-filter-btn"));
    });

    await waitFor(() => expect(mockPlantList).toHaveBeenCalledTimes(2));
  });
});
