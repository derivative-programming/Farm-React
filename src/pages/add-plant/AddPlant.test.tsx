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
import AddPlant from "./add-plant";
import { BrowserRouter } from "react-router-dom";
import * as homeController from "../../services/home";

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

const addPlantResponse = {
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
      somePhoneNumber: "(123) 123 1234",
      someEmailAddress: "test@test.com",
      flavorName: "Sweet",
      flavorCode: "8ef40a16-0107-445f-95f3-9a42571e6dce",
    },
  ],
};

const updatePlantDetailResponse = {
  landCode: "e911ef60-ce98-44b8-b937-3dcc8c0788fa",
  message: "Success.",
  success: true,
  validationErrors: null,
};

describe("Add Plant Component", () => {
  describe("Add Plant Tests", () => {
    const mockFlavors = jest.spyOn(homeController, "getFlavors");
    const mockAddPlant = jest.spyOn(homeController, "addPlantApi");

    // render the login component
    beforeEach(async () => {
      mockFlavors.mockResolvedValueOnce({
        data: flavorApiResponse,
      });
      /* tslint:disable-next-line */
      await act(() =>
        render(
          <BrowserRouter>
            <AddPlant />
          </BrowserRouter>
        )
      );
    });

    // after cleanup when test-case execution is done
    afterEach(cleanup);

    it("renders correctly", async () => {
      expect(screen.getByText("Add Plant")).toBeInTheDocument();
    });

    it("when user select flavorCode in UI, it set accordingly", async () => {
      const dropdown = screen.getByTestId(
        "flavor-code-select"
      ) as HTMLSelectElement;
      expect(dropdown.value).toEqual("Select Flavor");
      await act(async () => {
        await fireEvent.change(dropdown, {
          target: { value: flavorApiResponse.items[2].flavorCode },
        });
      });
      expect(dropdown.value).toEqual(flavorApiResponse.items[2].flavorCode);
    });

    it("when user select other option in flavor, other flavor option is visible", async () => {
      const dropdown = screen.getByTestId(
        "flavor-code-select"
      ) as HTMLSelectElement;
      expect(dropdown.value).toEqual("Select Flavor");
      await act(async () => {
        await fireEvent.change(dropdown, {
          target: { value: flavorApiResponse.items[3].flavorCode },
        });
      });
      expect(dropdown.value).toEqual(flavorApiResponse.items[3].flavorCode);
      expect(screen.getByText("Other Flavor")).toBeInTheDocument();
    });

    it("when user entered in 'Some Int Value field', it set accordingly in textbox", async () => {
      const input = screen.getByTestId("some-int-value-input");
      await act(async () => {
        await fireEvent.change(input, { target: { value: "123" } });
      });

      expect(screen.getByTestId("some-int-value-input")).toHaveValue(
        Number("123")
      );
    });

    it("when user select is Edit Allowed option, it set accordingly in UI", async () => {
      const radio = screen.getAllByLabelText("Yes")[0];
      fireEvent.change(radio, { target: { value: "No" } });
      expect(radio.value).toBe("No");
    });

    it("when user entered 'Some Text Value', it set accordingly in UI", async () => {
      const inputText = screen.getByRole("textbox", {
        name: "Some Text Value",
      });

      await act(async () => {
        await fireEvent.change(inputText, { target: { value: "test" } });
      });

      expect(inputText).toHaveValue("test");
    });

    it("when user checked 'Some Bit Value', it set accordingly in UI", async () => {
      const checkboxInput = screen.getByRole("checkbox", {
        name: "Some Bit Value",
      });

      await act(async () => {
        fireEvent.click(checkboxInput);
      });

      expect(checkboxInput.checked).toEqual(true);
    });

    it("when user clicks on cancel button, it redirect the plant-list page", async () => {
      await act(async () => {
        fireEvent.click(screen.getByTestId("cancel-btn"));
      });

      expect(mockedUsedNavigate).toHaveBeenCalledWith("/plant-list");
    });

    it("when user fill detail of add plant and clicks on save button, addPlantApi api should be called", async () => {
      mockAddPlant.mockResolvedValueOnce({
        data: addPlantResponse,
      });

      const dropdown = screen.getByTestId(
        "flavor-code-select"
      ) as HTMLSelectElement;

      await act(async () => {
        await fireEvent.change(dropdown, {
          target: { value: flavorApiResponse.items[2].flavorCode },
        });
      });

      const sFloatInput = screen.getByTestId("some-float-input");
      await act(async () => {
        await fireEvent.change(sFloatInput, { target: { value: "123" } });
      });

      expect(sFloatInput).toHaveValue(Number("123"));

      const sDecimalInput = screen.getByTestId("some-decimal-input");
      await act(async () => {
        await fireEvent.change(sDecimalInput, { target: { value: "456" } });
      });

      expect(sDecimalInput).toHaveValue(Number("456"));

      const sNVarInput = screen.getByTestId("some-n-var-input");
      await act(async () => {
        await fireEvent.change(sNVarInput, { target: { value: "test123" } });
      });

      expect(sNVarInput).toHaveValue("test123");

      const sVarCharInput = screen.getByTestId("some-var-char-value-input");
      await act(async () => {
        await fireEvent.change(sVarCharInput, { target: { value: "test456" } });
      });

      expect(sVarCharInput).toHaveValue("test456");

      const phoneNumberInput = screen.getByTestId("some-phone-input");
      await act(async () => {
        await fireEvent.change(phoneNumberInput, {
          target: { value: "(123) 123 1234" },
        });
      });

      expect(phoneNumberInput.value).toEqual("(123) 123 1234");

      const someEmailInput = screen.getByTestId("some-email-input");
      await act(async () => {
        await fireEvent.change(someEmailInput, {
          target: { value: "a@a.com" },
        });
      });

      expect(someEmailInput).toHaveValue("a@a.com");

      const someMoneyInput = screen.getByTestId("some-money-input");
      await act(async () => {
        await fireEvent.change(someMoneyInput, { target: { value: 123.12 } });
      });

      expect(Number(someMoneyInput.value)).toEqual(123.12);

      const textValue = "this is simple description";
      const someTextInput = screen.getByTestId("some-text-input");
      await act(async () => {
        await fireEvent.change(someTextInput, { target: { value: textValue } });
      });

      expect(someTextInput).toHaveValue(textValue);

      await act(async () => {
        await fireEvent.click(screen.getByTestId("save-btn"));
      });

      await waitFor(() => expect(mockAddPlant).toHaveBeenCalledTimes(1));
    });
  });
  describe("Edit Plant Tests", () => {
    console.log("edit testcase started");
    const mockFlavors = jest.spyOn(homeController, "getFlavors");
    const mockPlantDetail = jest.spyOn(homeController, "plantsDetail");
    const mockUpdatePlantDetail = jest.spyOn(homeController, "updatePlantApi");

    // render the login component
    beforeEach(async () => {
      mockFlavors.mockResolvedValueOnce({
        data: flavorApiResponse,
      });
      mockPlantDetail.mockResolvedValueOnce({
        data: plantsDetailResponse,
      });
      mockUpdatePlantDetail.mockResolvedValueOnce({
        data: updatePlantDetailResponse,
      });
      mockUserParams.mockReturnValueOnce({
        id: "cb332b3a-d73d-4ed4-a002-65440f7cd27b",
      });
      /* tslint:disable-next-line */
      await act(() =>
        render(
          <BrowserRouter>
            <AddPlant />
          </BrowserRouter>
        )
      );
    });

    // after cleanup when test-case execution is done
    afterEach(cleanup);

    it("renders correctly", async () => {
      expect(screen.getByText("Update Plant")).toBeInTheDocument();
    });

    it("when edit plant is opened, it plantsDetail api should be called", async () => {
      await waitFor(() => expect(mockPlantDetail).toHaveBeenCalledTimes(1));
    });

    it("when user update detail of plant and clicks save button, updatePlantApi api should be called", async () => {
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
        expect(mockUpdatePlantDetail).toHaveBeenCalledTimes(1)
      );
    });
  });
});
