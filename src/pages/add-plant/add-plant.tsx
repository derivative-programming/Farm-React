import React, { FC, ReactElement, useEffect, useState } from "react";
import "../../App.scss";
import {
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import LayoutComponent from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  addPlantApi,
  getFlavors,
  updatePlantApi,
  plantsDetail,
} from "../../services/home";
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
  Field,
  FieldProps,
} from "formik";
import moment from "moment";
import { DatePicker } from "antd";
import * as Yup from "yup";
import { onKeyDown } from "../../common/utilities";

interface PlantValue {
  flavorCode: any;
  otherFlavor?: string;
  someIntVal: number;
  someBigIntVal: number;
  someBitVal: boolean;
  isEditAllowed: boolean;
  isDeleteAllowed: boolean;
  someFloatVal: string;
  someDecimalVal: string;
  someUTCDateTimeVal: any;
  someDateVal: any;
  someMoneyVal: string;
  someNVarCharVal: string;
  someVarCharVal: string;
  someTextVal: string;
  somePhoneNumber: string;
  someEmailAddress: string;
  sampleImageUploadFile?: any;
}

interface PlantValueError {
  flavorCode?: string;
  otherFlavor?: string;
  someIntVal?: string;
  someBigIntVal?: string;
  someBitVal?: string;
  isEditAllowed?: string;
  isDeleteAllowed?: string;
  someFloatVal?: string;
  someDecimalVal?: string;
  someUTCDateTimeVal?: string;
  someDateVal?: string;
  someMoneyVal?: string;
  someNVarCharVal?: string;
  someVarCharVal?: string;
  someTextVal?: string;
  somePhoneNumber?: string;
  someEmailAddress?: string;
  sampleImageUploadFile?: string;
}

const AddPlant: FC = (): ReactElement => {
  const navigate = useNavigate();

  const [flavorList, setFlavorList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [params, setParams] = useState(useParams());
  const initialValues: PlantValue = {
    flavorCode: "",
    otherFlavor: "",
    someIntVal: 0,
    someBigIntVal: 0,
    someBitVal: false,
    isEditAllowed: false,
    isDeleteAllowed: false,
    someFloatVal: "",
    someDecimalVal: "",
    someUTCDateTimeVal: moment(),
    someDateVal: moment(),
    someMoneyVal: "",
    someNVarCharVal: "",
    someVarCharVal: "",
    someTextVal: "",
    somePhoneNumber: "",
    someEmailAddress: "",
    sampleImageUploadFile: "",
  };
  const [plantDetail, setPlantDetail] = useState(initialValues);

  const getInitialValues = () => {
    if (params && params["id"] && plantDetail) {
      console.log(plantDetail);
      const test: PlantValue = {
        flavorCode: plantDetail["flavorCode"],
        otherFlavor: plantDetail["otherFlavor"],
        someIntVal: plantDetail["someIntVal"],
        someBigIntVal: plantDetail["someBigIntVal"],
        someBitVal: plantDetail["someBitVal"],
        isEditAllowed: plantDetail["isEditAllowed"],
        isDeleteAllowed: plantDetail["isDeleteAllowed"],
        someFloatVal: plantDetail["someFloatVal"],
        someDecimalVal: plantDetail["someDecimalVal"],
        someUTCDateTimeVal: moment(plantDetail["someUTCDateTimeVal"]),
        someDateVal: moment(plantDetail["someDateVal"]),
        someMoneyVal: plantDetail["someMoneyVal"],
        someNVarCharVal: plantDetail["someNVarCharVal"],
        someVarCharVal: plantDetail["someVarCharVal"],
        someTextVal: plantDetail["someTextVal"],
        somePhoneNumber: plantDetail["somePhoneNumber"],
        someEmailAddress: plantDetail["someEmailAddress"],
        sampleImageUploadFile: plantDetail["sampleImageUploadFile"],
      };
      return test;
    } else {
      return initialValues;
    }
  };

  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const validationSchema = Yup.object().shape({
    flavorCode: Yup.string().required("Please select flavor"),
    someIntVal: Yup.number().required("Some Int Value is required"),
    someBigIntVal: Yup.number().required("Some Big Int Value is required"),
    someBitVal: Yup.boolean().required("Please check Some Bit Value"),
    isEditAllowed: Yup.boolean().required("Please select Is Edit Allowed"),
    isDeleteAllowed: Yup.boolean().required("Please select Is Delete Allowed"),
    someFloatVal: Yup.number().required("Some Float Value is required"),
    someDecimalVal: Yup.number().required("Some Decimal Value is required"),
    someUTCDateTimeVal: Yup.mixed().required(
      "Some UTC DateTime Value is required"
    ),
    someDateVal: Yup.mixed().required("Some Date Value is required"),
    someMoneyVal: Yup.number().required("Some Money Value is required"),
    someNVarCharVal: Yup.string().required("Some N Var Char Value is required"),
    someVarCharVal: Yup.string().required("Some Var Char Value is required"),
    someTextVal: Yup.string().required("Some Text Value is required"),
    somePhoneNumber: Yup.string()
      .matches(phoneRegex, "Invalid phone")
      .required("Some Phone Number is required"),
    // otherFlavor: Yup.string().required("Required"),
    someEmailAddress: Yup.string()
      .email("Invalid email")
      .required("Some Email Address is required"),
  });

  const goTo = (url: any) => {
    navigate(url);
  };

  useEffect(() => {
    getFlavorList();
    if (params && params["id"]) {
      setLoading(true);
      getPlantDetails(params["id"]);
    }
  }, []);

  const getPlantDetails = async (id: string) => {
    try {
      const res = await plantsDetail(id);
      console.log("res  plant Detail-->", res);
      setPlantDetail(res.data.items[0]);
      setLoading(false);
    } catch (err) {
      console.log("err -> ", err);
    }
  };

  const getFlavorList = async () => {
    try {
      const res = await getFlavors();
      if (res?.data?.items) {
        setFlavorList(res.data.items);
      } else {
        setFlavorList([]);
      }
    } catch (error) {
      setFlavorList([]);
    }
  };

  const getBase64 = (file: any) => {
    return new Promise((resolve) => {
      let baseURL: any = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const addPlant = (data: any) => {
    console.log(data);
    console.log(params);

    if (params && params["id"]) {
      updatePlantApi(data, params["id"])
        .then((res: any) => {
          console.log(res);
          if (res && res["data"] && res["data"]["success"]) {
            goTo("/plant-list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addPlantApi(data)
        .then((res: any) => {
          if (res && res["data"] && res["data"]["success"]) {
            goTo("/plant-list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onSubmitButtonClick = (values: PlantValue) => {
    console.log(values);

    let data: any = {};
    data["flavorCode"] = values["flavorCode"];
    data["isDeleteAllowed"] = values["isDeleteAllowed"];
    data["isEditAllowed"] = values["isEditAllowed"];
    if (data["otherFlavor"]) data["otherFlavor"] = values["otherFlavor"];
    data["someBigIntVal"] = values["someBigIntVal"];
    data["someBitVal"] = values["someBitVal"];
    data["someDateVal"] = moment(values["someDateVal"])
      .format("YYYY-MM-DDThh:mm:ss")
      .toString();
    data["someUTCDateTimeVal"] = moment(values["someUTCDateTimeVal"])
      .format("YYYY-MM-DDTHH:mm:ss")
      .toString();
    data["someDecimalVal"] = values["someDecimalVal"];
    data["someEmailAddress"] = values["someEmailAddress"];
    data["someFloatVal"] = values["someFloatVal"];
    data["someIntVal"] = values["someIntVal"];
    data["someMoneyVal"] = values["someMoneyVal"];
    data["someNVarCharVal"] = values["someNVarCharVal"];
    data["somePhoneNumber"] = values["somePhoneNumber"];
    data["someTextVal"] = values["someTextVal"];
    data["someVarCharVal"] = values["someVarCharVal"];
    if (
      values["sampleImageUploadFile"] &&
      values["sampleImageUploadFile"]["files"] &&
      values["sampleImageUploadFile"]["files"].length
    ) {
      getBase64(values["sampleImageUploadFile"]["files"][0])
        .then((result) => {
          data["sampleImageUploadFile"] = result;
          addPlant(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addPlant(data);
    }
  };

  const getFlavorItem = (flavorCode: any) => {
    let index = flavorList.findIndex((f) => f["flavorCode"] === flavorCode);
    if (index !== -1) {
      return flavorList[index];
    } else {
      return { name: "" };
    }
  };

  return (
    <LayoutComponent>
      <div className="add-plant-container" data-testid="add-plant-container">
        <Card>
          <h1>{params && params["id"] ? "Update Plant" : "Add Plant"}</h1>
          {!isLoading || !(params && params["id"]) ? (
            <Formik
              initialValues={getInitialValues()}
              validationSchema={validationSchema}
              onSubmit={async (
                values: PlantValue,
                {
                  setSubmitting,
                  resetForm,
                  setErrors,
                }: FormikHelpers<PlantValue>
              ) => {
                onSubmitButtonClick(values);
              }}
              render={({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                errors,
                touched,
                validateForm,
                setFieldValue,
              }) => {
                console.log(errors);

                return (
                  <FormikForm>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="flavorCode"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="flavorCode">
                                <Form.Label>Flavor</Form.Label>
                                <Form.Select
                                  name="flavorCode"
                                  data-testid="flavor-code-select"
                                  aria-label="Default select example"
                                  value={field.value}
                                  onChange={field.onChange}
                                >
                                  <option>Select Flavor</option>
                                  {flavorList.map((flavor, index) => {
                                    return (
                                      <option
                                        data-testid="select-option"
                                        key={index}
                                        value={flavor["flavorCode"]}
                                      >
                                        {flavor["name"]}
                                      </option>
                                    );
                                  })}
                                </Form.Select>
                              </Form.Group>
                            )}
                          />
                          {errors.flavorCode && touched.flavorCode ? (
                            <div className="error-message">
                              {errors.flavorCode.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      {values["flavorCode"] &&
                        getFlavorItem(values["flavorCode"])["name"] ===
                        "Other" ? (
                        <Col lg="6" md="6" xs="12">
                          <div className="custom-form-control">
                            <Field
                              name="otherFlavor"
                              render={({ field }: FieldProps) => (
                                <Form.Group controlId="oflavor">
                                  <Form.Label>Other Flavor</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="otherFlavor"
                                    value={field.value}
                                    onChange={field.onChange}
                                  />
                                </Form.Group>
                              )}
                            />
                            {errors.otherFlavor && touched.otherFlavor ? (
                              <div className="error-message">
                                {errors.otherFlavor.toString()}
                              </div>
                            ) : null}
                          </div>
                        </Col>
                      ) : null}
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someIntVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sint">
                                <Form.Label>Some Int Value</Form.Label>
                                <Form.Control
                                  data-testid="some-int-value-input"
                                  type="number"
                                  name="someIntVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onKeyDown={onKeyDown}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someIntVal && touched.someIntVal ? (
                            <div className="error-message">
                              {errors.someIntVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someBigIntVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sbint">
                                <Form.Label>Some Big Int Value</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="someBigIntVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onKeyDown={onKeyDown}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someBigIntVal && touched.someBigIntVal ? (
                            <div className="error-message">
                              {errors.someBigIntVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="isEditAllowed"
                            render={({ field }: FieldProps) => {
                              return (
                                <Form.Group
                                  className="d-flex mb-1 mt-2"
                                  controlId="isEditAllowed"
                                >
                                  <Form.Label>Is Edit Allowed</Form.Label>
                                  <Form.Check
                                    inline
                                    label="Yes"
                                    type="radio"
                                    id="yes"
                                    name="isEditAllowed"
                                    checked={field.value}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "isEditAllowed",
                                        e.target.checked
                                      )
                                    }
                                  />
                                  <Form.Check
                                    inline
                                    label="No"
                                    type="radio"
                                    id="no"
                                    name="isEditAllowed"
                                    checked={!field.value}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "isEditAllowed",
                                        !e.target.checked
                                      )
                                    }
                                  />
                                </Form.Group>
                              );
                            }}
                          />
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="isDeleteAllowed"
                            render={({ field }: FieldProps) => (
                              <Form.Group
                                className="d-flex mb-1 mt-2"
                                controlId="isDeleteAllowed"
                              >
                                <Form.Label>Is Delete Allowed</Form.Label>
                                <Form.Check
                                  inline
                                  label="Yes"
                                  name="isDeleteAllowed"
                                  type="radio"
                                  checked={field.value}
                                  id="dyes"
                                  onChange={(e) =>
                                    setFieldValue(
                                      "isDeleteAllowed",
                                      e.target.checked
                                    )
                                  }
                                />
                                <Form.Check
                                  inline
                                  label="No"
                                  name="isDeleteAllowed"
                                  type="radio"
                                  checked={!field.value}
                                  id="dno"
                                  onChange={(e) =>
                                    setFieldValue(
                                      "isDeleteAllowed",
                                      !e.target.checked
                                    )
                                  }
                                />
                              </Form.Group>
                            )}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someFloatVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sfloat">
                                <Form.Label>Some Float Value</Form.Label>
                                <Form.Control
                                  type="number"
                                  data-testid="some-float-input"
                                  name="someFloatVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onKeyDown={onKeyDown}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someFloatVal && touched.someFloatVal ? (
                            <div className="error-message">
                              {errors.someFloatVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someDecimalVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sdeci">
                                <Form.Label>Some Decimal Value</Form.Label>
                                <Form.Control
                                  type="number"
                                  data-testid="some-decimal-input"
                                  name="someDecimalVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                  onKeyDown={onKeyDown}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someDecimalVal && touched.someDecimalVal ? (
                            <div className="error-message">
                              {errors.someDecimalVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someUTCDateTimeVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sfloat">
                                <Form.Label>Some UTC DateTime Value</Form.Label>
                                <DatePicker
                                  showTime={{ format: "hh:mm A" }}
                                  name="someUTCDateTimeVal"
                                  data-testid="some-UTC-Date-Input"
                                  aria-label="some-UTC-Date-Input"
                                  value={moment(
                                    field.value,
                                    "M/D/YYYY h:m A"
                                  )}
                                  onChange={(e) =>
                                    setFieldValue(
                                      "someUTCDateTimeVal",
                                      moment(e).format("M/D/YYYY h:m A")
                                    )
                                  }
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someUTCDateTimeVal &&
                            touched.someUTCDateTimeVal ? (
                            <div className="error-message">
                              {errors.someUTCDateTimeVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someDateVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sfloat">
                                <Form.Label>Some Date Value</Form.Label>
                                <DatePicker
                                  name="someDateVal"
                                  value={moment(field.value, "M/D/YYYY")}
                                  onChange={(e) =>
                                    setFieldValue(
                                      "someDateVal",
                                      moment(e).format("M/D/YYYY")
                                    )
                                  }
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someDateVal && touched.someDateVal ? (
                            <div className="error-message">
                              {errors.someDateVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someNVarCharVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sfloat">
                                <Form.Label>Some N Var Char Value</Form.Label>
                                <Form.Control
                                  type="text"
                                  data-testid="some-n-var-input"
                                  name="someNVarCharVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someNVarCharVal && touched.someNVarCharVal ? (
                            <div className="error-message">
                              {errors.someNVarCharVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someVarCharVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sdeci">
                                <Form.Label>Some Var Char Value</Form.Label>
                                <Form.Control
                                  type="text"
                                  data-testid="some-var-char-value-input"
                                  name="someVarCharVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someNVarCharVal && touched.someNVarCharVal ? (
                            <div className="error-message">
                              {errors.someNVarCharVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="somePhoneNumber"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sfloat">
                                <Form.Label>Some Phone Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  data-testid="some-phone-input"
                                  name="somePhoneNumber"
                                  value={field.value}
                                  onBlur={field.onBlur}
                                  onChange={field.onChange}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.somePhoneNumber && touched.somePhoneNumber ? (
                            <div className="error-message">
                              {errors.somePhoneNumber.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someEmailAddress"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="sdeci">
                                <Form.Label>Some Email Address</Form.Label>
                                <Form.Control
                                  type="text"
                                  data-testid="some-email-input"
                                  name="someEmailAddress"
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someEmailAddress &&
                            touched.someEmailAddress ? (
                            <div className="error-message">
                              {errors.someEmailAddress.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someMoneyVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="amount">
                                <Form.Label>Some Money Value</Form.Label>
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormControl
                                    className="mb-0"
                                    data-testid="some-money-input"
                                    aria-label="Amount (to the nearest dollar)"
                                    type="number"
                                    name="someMoneyVal"
                                    value={field.value}
                                    onChange={field.onChange}
                                    onKeyDown={onKeyDown}
                                  />
                                </InputGroup>
                              </Form.Group>
                            )}
                          />
                          {errors.someMoneyVal && touched.someMoneyVal ? (
                            <div className="error-message">
                              {errors.someMoneyVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="sampleImageUploadFile"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="formFile">
                                <Form.Label>Sample Image Upload</Form.Label>
                                <Form.Control
                                  type="file"
                                  name="sampleImageUploadFile"
                                  onChange={(e) =>
                                    setFieldValue(
                                      "sampleImageUploadFile",
                                      e?.nativeEvent?.target
                                    )
                                  }
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.sampleImageUploadFile &&
                            touched.sampleImageUploadFile ? (
                            <div className="error-message">
                              {errors.sampleImageUploadFile.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="custom-form-control">
                          <Field
                            name="someTextVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Some Text Value</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  data-testid="some-text-input"
                                  rows={3}
                                  type="text"
                                  name="someTextVal"
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someTextVal && touched.someTextVal ? (
                            <div className="error-message">
                              {errors.someTextVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" md="6" xs="12">
                        <div className="custom-form-control">
                          <Field
                            name="someBitVal"
                            render={({ field }: FieldProps) => (
                              <Form.Group
                                className="d-flex mb-1 mt-1"
                                controlId="sbValue"
                              >
                                <Form.Check
                                  type="checkbox"
                                  id="someBit"
                                  name="someBitVal"
                                  checked={field.value}
                                  onChange={(e) => {
                                    console.log("someButVal is called");
                                    setFieldValue(
                                      "someBitVal",
                                      e.target.checked
                                    );
                                  }}
                                  label="Some Bit Value"
                                />
                              </Form.Group>
                            )}
                          />
                          {errors.someBitVal && touched.someBitVal ? (
                            <div className="error-message">
                              {errors.someBitVal.toString()}
                            </div>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs="12">
                        <div className="d-flex btn-container">
                          <Button type="submit" data-testid="save-btn">
                            Save
                          </Button>
                          <Button
                            variant="secondary"
                            data-testid="cancel-btn"
                            onClick={() => goTo("/plant-list")}
                          >
                            Cancel
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </FormikForm>
                );
              }}
            />
          ) : null}
        </Card>
      </div>
    </LayoutComponent>
  );
};
export default AddPlant;
