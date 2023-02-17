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
import PlantEdit from "./PlantEdit";
import { BrowserRouter } from "react-router-dom";
import * as homeController from "../../../../services/home";

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUserParams.mockReturnValue({}),
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

const plantEditResponse = {
  success: true,
  message: "Success.",
};

const plantsDetailResponse = {
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
      somePhoneNumber: "1231231234",
      someEmailAddress: "test@test.com",
      flavorName: "Sweet",
      flavorCode: "8ef40a16-0107-445f-95f3-9a42571e6dce",
    },
  ],
};

const plantEditDetailResponse = {
  landCode: "e911ef60-ce98-44b8-b937-3dcc8c0788fa",
  message: "Success.",
  success: true,
  validationErrors: null,
};

describe("Update Plant Component", () => {
  
  describe("Edit Plant Tests", () => {
    console.log("edit testcase started");
    const mockFlavors = jest.spyOn(homeController, "pacUserFlavorListService");
    const mockPlantUserDetailsService = jest.spyOn(homeController, "plantUserDetailsService");
    const mockPlantEditService = jest.spyOn(homeController, "plantEditService");

    beforeEach(async () => {
      mockFlavors.mockResolvedValueOnce({
        data: flavorApiResponse,
      });
      mockPlantUserDetailsService.mockResolvedValueOnce({
        data: plantsDetailResponse,
      });
      mockPlantEditService.mockResolvedValueOnce({
        data: plantEditDetailResponse,
      });
      mockUserParams.mockReturnValueOnce({
        id: "cb332b3a-d73d-4ed4-a002-65440f7cd27b",
      });
      /* tslint:disable-next-line */
      await act(() =>
        render(
          <BrowserRouter>
            <PlantEdit />
          </BrowserRouter>
        )
      );
    });

    // after cleanup when test-case execution is done
    afterEach(cleanup);

    it("renders correctly", async () => {
      expect(screen.getByText("Update Plant")).toBeInTheDocument();
    });

    it("when edit plant is opened, it plantUserDetailsService api should be called", async () => {
      await waitFor(() => expect(mockPlantUserDetailsService).toHaveBeenCalledTimes(1));
    });

    it("when user update detail of plant and clicks save button, plantEditService api should be called", async () => {
      const someEmailInput = screen.getByTestId("some-email-input");

      expect(someEmailInput).toHaveValue(
        plantsDetailResponse.items[0].someEmailAddress
      );

      await act(async () => {
        await fireEvent.change(someEmailInput, {
          target: { value: "a@a.com" },
        });
      });

      expect(someEmailInput).toHaveValue("a@a.com");

      await act(async () => {
        await fireEvent.click(screen.getAllByTestId("save-btn")[0]);
      });

      await waitFor(() =>
        expect(mockPlantUserDetailsService).toHaveBeenCalledTimes(1)
      );
    });
  });
});
