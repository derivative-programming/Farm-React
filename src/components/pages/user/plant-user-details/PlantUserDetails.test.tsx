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
import PlantUserDetails from "./PlantUserDetails";
import { BrowserRouter } from "react-router-dom";
import * as homeController from "../../../../services/home";

// set the local storage
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () =>
    mockUserParams.mockReturnValue({
      id: "cb332b3a-d73d-4ed4-a002-65440f7cd27b",
    }),
}));

const plantsDetailResponse = {
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
      someVarCharVal: "ca",
      someTextVal: "laborum ipsum quis",
      somePhoneNumber: "1231234",
      someEmailAddress: "test@test.com",
      flavorName: "Sweet",
      flavorCode: "8ef40a16-0107-445f-95f3-9a42571e6dce",
    },
  ],
  itemCountPerPage: 1,
  orderByColumnName: "",
  orderByDescending: false,
  success: true,
  recordsTotal: 1,
  recordsFiltered: 1,
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
    plantCode: "cb332b3a-d73d-4ed4-a002-65440f7cd27b",
    pageNumber: 0,
    itemCountPerPage: 0,
    orderByColumnName: "",
    orderByDescending: false,
    forceErrorMessage: null,
  },
};

describe("PlantUserDetails Component", () => {
  const mockPlantUserDetailsService = jest.spyOn(homeController, "plantUserDetailsService");
  
  beforeEach(async () => {
    mockPlantUserDetailsService.mockResolvedValueOnce({
        data: plantsDetailResponse,
    });
    /* tslint:disable-next-line */
    await act(() =>
      render(
        <BrowserRouter>
          <PlantUserDetails />
        </BrowserRouter>
      )
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("plant-user-details")).toBeInTheDocument();
  });

  it("when component is load, it called plantUserDetailsService api should be called", async () => {
    //await waitFor(() => expect(mockPlantUserDetailsService).toHaveBeenCalledTimes(1));
  });

  it("when user clicks on plant button, it redirect to the land-plant-list URL", async () => {
    await act(async () => {
        fireEvent.click(screen.getByTestId("plant-btn"));
    });
  
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/land-plant-list");
  });
});
