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
import LandAddPlant from "./LandAddPlant";
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

const landAddPlantResponse = {
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
 

describe("Add Plant Component", () => {
  describe("Add Plant Tests", () => {
    const mockFlavors = jest.spyOn(homeController, "pacUserFlavorListService");
    const mockLandAddPlant = jest.spyOn(homeController, "landAddPlantService");

    beforeEach(async () => {
      mockFlavors.mockResolvedValueOnce({
        data: flavorApiResponse,
      });
      /* tslint:disable-next-line */
      await act(() =>
        render(
          <BrowserRouter>
            <LandAddPlant />
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
    });

    it("when user select other option in flavor, other flavor option is visible", async () => {
      const dropdown = screen.getByTestId(
        "flavor-code-select"
      ) as HTMLSelectElement;
      expect(dropdown.value).toEqual("Select Flavor");
      await act(async () => {
        await fireEvent.change(dropdown, {
          target: { value: flavorApiResponse.items[0].flavorCode },
        });
      });
      expect(dropdown.value).toEqual(flavorApiResponse.items[0].flavorCode);
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

    it("when user clicks on cancel button, it redirect the land-plant-list page", async () => {
      await act(async () => {
        fireEvent.click(screen.getByTestId("cancel-btn"));
      });

      expect(mockedUsedNavigate).toHaveBeenCalledWith("/land-plant-list");
    });

    it("when user fill detail of add plant and clicks on save button, landAddPlantService api should be called", async () => {
      mockLandAddPlant.mockResolvedValueOnce({
        data: landAddPlantResponse,
      });

      const dropdown = screen.getByTestId(
        "flavor-code-select"
      ) as HTMLSelectElement;

      await act(async () => {
        await fireEvent.change(dropdown, {
          target: { value: flavorApiResponse.items[0].flavorCode },
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
          target: { value: "1231231234" },
        });
      });

      expect(phoneNumberInput.value).toEqual("1231231234");

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

      await waitFor(() => expect(mockLandAddPlant).toHaveBeenCalledTimes(1));
    });
  }); 
});
