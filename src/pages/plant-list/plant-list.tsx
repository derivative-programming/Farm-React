import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import "../../App.scss";
import {
  Button,
  Table,
  Breadcrumb,
  Pagination,
  Modal,
  Form,
  Accordion,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LayoutComponent from "../../components/Layout/Layout";
import { plantsList, deletePlant, getFlavors } from "../../services/home";
import moment from "moment";
import editIcon from "./../../assets/edit.png";
import deleteIcon from "./../../assets/delete.png";
import eyeIcon from "./../../assets/eye.png";
import sortIcon from "./../../assets/sort.png";
import sortUp from "./../../assets/caret-up.png";
import sortDown from "./../../assets/caret-down.png";
import { DatePicker } from "antd";
import * as Yup from "yup";
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
  Field,
  FieldProps,
} from "formik";
import { onKeyDown } from "../../common/utilities";
import { cloneDeep, Many, orderBy, sortBy } from "lodash";

interface PlantsValue {
  flavorName: string;
  flavorCode: string;
  someTextVal: string;
  someEmailAddress: string;
  somePhoneNumber: string;
  someMoneyVal: number;
  someFloatVal: number;
  someDecimalVal: number;
  someIntVal: number;
  plantCode?: string;
  someBigIntVal: number;
  isDeleteAllowed: boolean;
  isEditAllowed: boolean;
  someBitVal: boolean;
  someDateVal: any;
  someVarCharVal: string;
  someUTCDateTimeVal: any;
  someNVarCharVal: string;
}

const PlantList: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [plantList, setPlantList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [show, setShow] = useState(false);
  const [deleteCode, setDeleteCode] = useState("");
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const initialSortConfig: any = {
    'flavorName': 'desc',
    "someTextVal": 'desc',
    "someEmailAddress": 'desc',
    "somePhoneNumber": 'desc',
    "someMoneyVal": 'desc',
    "someFloatVal": 'desc',
    "someDecimalVal": 'desc',
    "someIntVal": 'desc',
    "someBigIntVal": 'desc',
    "isDeleteAllowed": 'desc',
    "isEditAllowed": 'desc',
    "someBitVal": 'desc',
    "minimumSomeDateVal": 'desc',
    "someVarCharVal": 'desc',
    "minimumSomeUTCDateTimeVal": 'desc',
    "someNVarCharVal": 'desc'
  }

  const storageValue: any = localStorage.getItem("@sortConfig")
  const storageStore: any = storageValue ? JSON.parse(storageValue) : undefined

  const [sortConfig, setSortConfig] = useState(storageStore ? { ...initialSortConfig, [storageStore.key]: storageStore.order } : initialSortConfig);
  const initialFilterConfig: any = {
    'flavorCode': undefined,
    "someTextVal": undefined,
    "someEmailAddress": undefined,
    "somePhoneNumber": undefined,
    "someMoneyVal": undefined,
    "someFloatVal": undefined,
    "someDecimalVal": undefined,
    "someIntVal": undefined,
    "someBigIntVal": undefined,
    "isDeleteAllowed": undefined,
    "isEditAllowed": undefined,
    "someBitVal": undefined,
    "minimumSomeDateVal": undefined,
    "someVarCharVal": undefined,
    "minimumSomeUTCDateTimeVal": undefined,
    "someNVarCharVal": undefined
  }
  const initialFilterForFormik: any = {
    'flavorCode': "",
    "someTextVal": "",
    "someEmailAddress": "",
    "somePhoneNumber": "",
    "someMoneyVal": "",
    "someFloatVal": 0,
    "someDecimalVal": 0,
    "someIntVal": 0,
    "someBigIntVal": 0,
    "isDeleteAllowed": "",
    "isEditAllowed": "",
    "someBitVal": "",
    "minimumSomeDateVal": null,
    "someVarCharVal": "",
    "minimumSomeUTCDateTimeVal": null,
    "someNVarCharVal": "",
  };
  const formRef: any = useRef(null);
  const [config, setConfig] = useState({
    ItemCountPerPage: 10,
    PageNumber: 1,
    ...initialFilterConfig,
  });
  const [filterConfig, setFilterConfig] = useState(initialFilterConfig);
  const [totalItem, setTotalItem]: any = useState(0);
  const [flavorList, setFlavorList] = useState([]);

  const phoneRegex = RegExp(
    /^[0-9]{10}$/
  );
  const formatPhoneNumber = (phoneNumber: any) => {
    if (phoneNumber && phoneNumber.length === 10) {
      let cleaned = ('' + phoneNumber).replace(/\D/g, '');
      let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      } else {
        return phoneNumber
      }
    }
    return phoneNumber
  }

  const validationSchema = Yup.object().shape({
    flavorCode: Yup.string(),
    someIntVal: Yup.number(),
    someBigIntVal: Yup.number(),
    someBitVal: Yup.string(),
    isEditAllowed: Yup.string(),
    isDeleteAllowed: Yup.string(),
    someFloatVal: Yup.number(),
    someDecimalVal: Yup.number(),
    minimumSomeUTCDateTimeVal: Yup.mixed(),
    minimumSomeDateVal: Yup.mixed(),
    someMoneyVal: Yup.number(),
    someNVarCharVal: Yup.string(),
    someVarCharVal: Yup.string(),
    someTextVal: Yup.string(),
    somePhoneNumber: Yup.string(),
    someEmailAddress: Yup.string().email("Invalid email"),
  });

  const onDashboard = () => {
    navigate("/dashboard")
  }
  const sort = (key: string) => {
    let order: Many<Boolean | "desc" | "asc"> = sortConfig[key] === 'asc' ? 'desc' : 'asc'
    setPlantList(orderBy(plantList, key, order))
    setSortConfig({ ...sortConfig, [key]: order })
    localStorage.setItem("@sortConfig", JSON.stringify({
      key,
      order
    }))
  }

  const handleClose = (value: boolean) => {
    setShow(value);
    if (value) {
      console.log("deletecode==>", deleteCode);
      if (deleteCode) {
        deletePlant(deleteCode)
          .then((res) => {
            console.log(res);
            setShow(false);
            setDeleteCode("");
            if (res.data.success) {
              getPlantList();
            }
          })
          .catch((err) => {
            console.log("err -> ", err);
          });
      } else {
        for (let i = 0; i < selectedItem.length; i++) {
          deletePlant(selectedItem[i])
            .then((res) => {
              console.log(res);
              if (i === selectedItem.length - 1) {
                setDeleteCode("");
                if (res.data.success) {
                  getPlantList();
                }
                setShow(false);
              }
            })
            .catch((err) => {
              console.log("err -> ", err);
            });

        }
      }
    }
  };
  const handleShow = (item: any) => {
    console.log(item);
    if (item) {
      setDeleteCode(item["plantCode"]);
    } else {
      setDeleteCode(item)
    }
    setShow(true);
  };
  const goTo = (url: any) => {
    navigate(url);
  };

  useEffect(() => {
    getPlantList();
  }, [config]);

  useEffect(() => {
    getFlavorList();
  }, []);

  const getPlantList = async () => {
    try {
      const res = await plantsList(config);
      console.log("res -->", res);
      console.log(storageStore)
      let d: any = orderBy(res.data.items, storageStore ? storageStore.key : "flavorName", storageStore ? storageStore.order : "desc")
      setPlantList(d);
      localStorage.setItem("@sortConfig", JSON.stringify({
        key: storageStore ? storageStore.key : "flavorName",
        order: storageStore ? storageStore.order : "desc"
      }))
      setTotalPage(
        Math.ceil(res.data.recordsTotal / res.data.itemCountPerPage)
      );
      setTotalItem(res.data.recordsTotal);
    } catch (err) {
      console.log("eror", err);
    }
    // plantsList(config)
    //   .then((res) => {
    //     console.log("res -->", res);
    //     setPlantList(res.data.items);
    //     setTotalPage(
    //       Math.ceil(res.data.recordsTotal / res.data.itemCountPerPage)
    //     );
    //     setTotalItem(res.data.recordsTotal);
    //   })
    //   .catch((err) => {
    //     console.log("err -> ", err);
    //   });
  };

  let items: any = [];

  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === config["PageNumber"]}
        onClick={() => setConfig({ ...config, PageNumber: number })}
      >
        {number}
      </Pagination.Item>
    );
  }
  const getFlavorList = async () => {
    try {
      const res = await getFlavors();
      if (res?.data?.items) {
        setFlavorList(res.data.items);
      } else {
        setFlavorList([]);
      }
    } catch (err) {
      setFlavorList([]);
    }
    // getFlavors()
    //   .then((res) => {
    //     if (res?.data?.items) {
    //       setFlavorList(res.data.items);
    //     } else {
    //       setFlavorList([]);
    //     }
    //   })
    //   .catch((err) => {
    //     setFlavorList([]);
    //   });
  };
  const onEditPlant = (item: any) => {
    goTo("/update-plant/" + item["plantCode"]);
  };
  const onViewPlant = (item: any) => {
    goTo("/plant-details/" + item["plantCode"]);
  };

  const getTableStartIndex = () => {
    return (config["PageNumber"] - 1) * config["ItemCountPerPage"] + 1;
  };

  const getTableEndIndex = () => {
    const endCount = getTableStartIndex() + config["ItemCountPerPage"] - 1;
    return endCount < totalItem ? endCount : totalItem;
  };

  const onCheckChange = (event: any, item: any) => {
    let selectedItems = cloneDeep(selectedItem);
    let index = selectedItems.indexOf(item.plantCode)
    if (index === -1) {
      selectedItems.push(item.plantCode)
    }
    else {
      selectedItems.splice(index, 1)
    }
    setSelectedItem(selectedItems);
  }

  const onSelectAll = (e: any) => {
    let selectedItems = cloneDeep(selectedItem);
    for (let i = 0; i < plantList.length; i++) {
      let index = selectedItems.indexOf(plantList[i]['plantCode']);
      if (e.target.checked) {
        if (index === -1) {
          selectedItems.push(plantList[i]['plantCode']);
        }
      }
      else {
        if (index !== -1) {
          selectedItems.splice(index, 1);
        }
      }
    }
    setSelectedItem(selectedItems);
  };

  const isCheckedAll = () => {
    let flag: boolean = true;
    for (let index = 0; index < plantList.length; index++) {
      if (!selectedItem.includes(plantList[index]['plantCode'])) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  const isEmpty = (value: any) => {
    if (value === '' || value === 0 || value === null) {
      return true
    }
    return false
  }

  const handleFilter = (values: any) => {
    const keys = Object.keys(values);
    for (let i = 0; i <= keys.length; i++) {
      if (isEmpty(values[keys[i]])) {
        values[keys[i]] = undefined;
      }
    }
    setConfig({ ...config, ...values })
  }

  return (
    <LayoutComponent>
      <div className="plants-container" data-testid="plant-list">
        <div className="breadcrumb-container">
          <Breadcrumb>
            <Breadcrumb.Item onClick={onDashboard}>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active href="">
              Plants
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>Plants</h1>
        <div className="plants-list-button-header">
          <Button
            onClick={onDashboard}
            className="primary-button"
            type="submit"
          >
            Dashboard
          </Button>
          <Button
            className="primary-button"
            type="submit"
            onClick={() => goTo("/add-plant")}
          >
            Add Plant
          </Button>
        </div>
        <div className="mt-5 w-100">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter Controls</Accordion.Header>
              <Accordion.Body>
                <Formik
                  initialValues={initialFilterForFormik}
                  validationSchema={validationSchema}
                  enableReinitialize={true}
                  onSubmit={async (
                    values: any,
                    {
                      setSubmitting,
                      resetForm,
                      setErrors,
                    }: FormikHelpers<PlantsValue>
                  ) => {
                    handleFilter(values)
                  }}
                  render={({
                    handleChange,
                    handleSubmit,
                    handleReset,
                    handleBlur,
                    resetForm,
                    values,
                    errors,
                    touched,
                    validateForm,
                    setFieldValue,
                  }) => {
                    return (
                      <FormikForm ref={formRef}>
                        <Row>
                          <Col lg="4" md="6" xs="12">
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
                          <Col lg="4" md="6" xs="12">
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
                          <Col lg="4" md="6" xs="12">
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
                          <Col lg="4" md="6" xs="12">
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
                              {errors.someDecimalVal &&
                                touched.someDecimalVal ? (
                                <div className="error-message">
                                  {errors.someDecimalVal.toString()}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
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
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="someNVarCharVal"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="sfloat">
                                    <Form.Label>
                                      Some N Var Char Value
                                    </Form.Label>
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
                              {errors.someNVarCharVal &&
                                touched.someNVarCharVal ? (
                                <div className="error-message">
                                  {errors.someNVarCharVal.toString()}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
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
                              {errors.someNVarCharVal &&
                                touched.someNVarCharVal ? (
                                <div className="error-message">
                                  {errors.someNVarCharVal.toString()}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="someTextVal"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Some Text Value</Form.Label>
                                    <Form.Control
                                      data-testid="some-text-input"
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
                          <Col lg="4" md="6" xs="12">
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
                              {errors.somePhoneNumber &&
                                touched.somePhoneNumber ? (
                                <div className="error-message">
                                  {errors.somePhoneNumber.toString()}
                                </div>
                              ) : null}
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
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
                          <Col lg="4" md="6" xs="12">
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
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="someBitVal"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="someBitVal">
                                    <Form.Label>Some Bit Value</Form.Label>
                                    <Form.Select
                                      name="someBitVal"
                                      id="someBit"
                                      aria-label="Default select example"
                                      value={field.value}
                                      onChange={field.onChange}
                                    >
                                      <option></option>
                                      <option>Yes</option>
                                      <option>No</option>
                                    </Form.Select>
                                  </Form.Group>
                                )}
                              />
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="isEditAllowed"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="isEditAllowed">
                                    <Form.Label>Is Edit Allowed</Form.Label>
                                    <Form.Select
                                      name="isEditAllowed"
                                      id="isEditAllowed"
                                      aria-label="Default select example"
                                      value={field.value}
                                      onChange={field.onChange}
                                    >
                                      <option></option>
                                      <option>Yes</option>
                                      <option>No</option>
                                    </Form.Select>
                                  </Form.Group>
                                )}
                              />
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="isDeleteAllowed"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="isDeleteAllowed">
                                    <Form.Label>Is Delete Allowed</Form.Label>
                                    <Form.Select
                                      name="isDeleteAllowed"
                                      id="isDeleteAllowed"
                                      aria-label="Default select example"
                                      value={field.value}
                                      onChange={field.onChange}
                                    >
                                      <option></option>
                                      <option>Yes</option>
                                      <option>No</option>
                                    </Form.Select>
                                  </Form.Group>
                                )}
                              />
                            </div>
                          </Col>
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="minimumSomeUTCDateTimeVal"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="sfloat">
                                    <Form.Label>
                                      Some UTC DateTime Value
                                    </Form.Label>
                                    <DatePicker
                                      showTime={{ format: "hh:mm A" }}
                                      name="minimumSomeUTCDateTimeVal"
                                      data-testid="some-UTC-Date-Input"
                                      aria-label="some-UTC-Date-Input"
                                      value={
                                        field.value
                                          ? moment(
                                            field.value,
                                            "MM/DD/YYYY hh:mm A"
                                          )
                                          : moment()
                                      }
                                      onChange={(e) => {
                                        setFieldValue(
                                          "minimumSomeUTCDateTimeVal",
                                          moment(e).format("MM/DD/YYYY hh:mm A")
                                        )
                                      }}
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
                          <Col lg="4" md="6" xs="12">
                            <div className="custom-form-control">
                              <Field
                                name="minimumSomeDateVal"
                                render={({ field }: FieldProps) => (
                                  <Form.Group controlId="sfloat">
                                    <Form.Label>Some Date Value</Form.Label>
                                    <DatePicker
                                      name="minimumSomeDateVal"
                                      value={
                                        field.value
                                          ? moment(field.value, "MM/DD/YYYY")
                                          : moment()
                                      }
                                      onChange={(e) => {
                                        setFieldValue(
                                          "minimumSomeDateVal",
                                          moment(e).format("MM/DD/YYYY")
                                        )
                                      }
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
                          <Col lg="4" md="6" xs="12"></Col>
                          <Col lg="4" md="6" xs="12">
                            <div className="d-flex h-100 align-items-end justify-content-end">
                              <Button
                                className="primary-button"
                                type="reset"
                                onClick={() => resetForm() as any}
                              >
                                Reset
                              </Button>
                              <Button
                                type="submit"
                                className="primary-button ms-2"
                                data-testid="save-filter-btn"
                              >
                                Save
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </FormikForm>
                    );
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="w-100" style={{ textAlign: "left" }}>
          {selectedItem.length ? <Button className='primary-button mt-3' onClick={() => handleShow(null)} type="button">
            Delete Selected
          </Button> : null}
        </div>
        <div className="plants-list-button-body">
          <Table
            className="plants-list-table"
            striped
            bordered
            hover
            responsive
            size="xl"
          >
            <thead>
              <tr>
                <th> <Form.Check
                  inline
                  type="checkbox"
                  id="yes"
                  name="isCheck}"
                  checked={isCheckedAll()}
                  onChange={(e) => onSelectAll(e)}
                /></th>
                <th>#</th>
                <th onClick={() => sort('flavorName')}>Flavor Name <span> {storageStore.key === 'flavorName' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th>Flavor Code</th>
                <th onClick={() => sort('someTextVal')}>Text Val<span>  {storageStore.key === 'someTextVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someEmailAddress')}>Email Address<span>  {storageStore.key === 'someEmailAddress' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('somePhoneNumber')}>Phone Number<span>    {storageStore.key === 'somePhoneNumber' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someMoneyVal')}>Money Val<span>  {storageStore.key === 'someMoneyVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someFloatVal')}>Float Val<span> {storageStore.key === 'someFloatVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someDecimalVal')}>Dec Val<span> {storageStore.key === 'someDecimalVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someIntVal')}>Int Val<span>  {storageStore.key === 'someIntVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someBigIntVal')}>Big Int Val<span> {storageStore.key === 'someBigIntVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someDateVal')}>Date<span>  {storageStore.key === 'someDateVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someUTCDateTimeVal')}>UTC Date<span> {storageStore.key === 'someUTCDateTimeVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someVarCharVal')}>Var Char Val<span> {storageStore.key === 'someVarCharVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someNVarCharVal')}>N Var Char Val<span> {storageStore.key === 'someNVarCharVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th onClick={() => sort('someBitVal')}>Bit Val<span>  {storageStore.key === 'someBitVal' ? <img
                  src={storageStore.order === 'desc' ? sortUp : sortDown}
                  className="edit-icon"
                /> : null}</span></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plantList && plantList.length
                ? plantList.map((item: PlantsValue, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>
                        {item.isDeleteAllowed ?
                          <Form.Check
                            inline
                            type="checkbox"
                            id={'yes' + index}
                            name={"isCheck_" + index}
                            checked={selectedItem.indexOf(item.plantCode) !== -1}
                            onChange={(e) => onCheckChange(e, item)}
                          /> : null}
                      </td>
                      <td>
                        {index +
                          (config["PageNumber"] - 1) *
                          config["ItemCountPerPage"] +
                          1}
                      </td>
                      <td>{item.flavorName}</td>
                      <td>{item.flavorCode}</td>
                      <td>{item.someTextVal}</td>
                      <td>{item.someEmailAddress}</td>
                      <td>{formatPhoneNumber(item.somePhoneNumber)}</td>
                      <td>${item.someMoneyVal}</td>
                      <td>{item.someFloatVal}</td>
                      <td>{item.someDecimalVal}</td>
                      <td>{item.someIntVal}</td>
                      <td>{item.someBigIntVal}</td>
                      <td>{moment(item.someDateVal).format("M/D/YYYY")}</td>
                      <td>
                        {moment
                          .utc(item.someUTCDateTimeVal)
                          .format("M/D/YYYY h:m A")}
                      </td>
                      <td>{item.someVarCharVal}</td>
                      <td>{item.someNVarCharVal}</td>
                      <td>{`${item.someBitVal}`}</td>
                      <td>
                        <span className="action-buttons">
                          {item.isEditAllowed ? (
                            <img
                              src={editIcon}
                              onClick={() => onEditPlant(item)}
                              className="edit-icon"
                              data-testid="edit-btn"
                            />
                          ) : null}
                          {item.isDeleteAllowed ? (
                            <img
                              src={deleteIcon}
                              onClick={() => handleShow(item)}
                              className="edit-icon"
                              data-testid="delete-btn"
                            />
                          ) : null}
                          <img
                            src={eyeIcon}
                            onClick={() => onViewPlant(item)}
                            className="edit-icon"
                            data-testid="view-btn"
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })
                : null}
            </tbody>
          </Table>
        </div>
        <div className="d-flex w-100 align-items-center justify-content-between page-container">
          <div className="d-flex align-items-center">
            <Form.Label className="m-0 width-120">Items Per Page</Form.Label>
            <Form.Select
              value={config["ItemCountPerPage"]}
              onChange={(e) =>
                setConfig({
                  ...config,
                  ItemCountPerPage: parseInt(e.target.value),
                  PageNumber: 1,
                })
              }
              className="w-auto"
              size="sm"
            >
              <option value={1}>1</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Form.Select>
          </div>
          <Pagination>
            <Pagination.First onClick={() => setConfig({ ...config, PageNumber: 1 })} />
            <Pagination.Prev onClick={() => setConfig({ ...config, PageNumber: (config["PageNumber"] - 1 === 0 ? 1 : config["PageNumber"] - 1) })} />
            {items}
            <Pagination.Next onClick={() => setConfig({ ...config, PageNumber: config["PageNumber"] + 1 })} />
            <Pagination.Last onClick={() => setConfig({ ...config, PageNumber: totalItem })} />

            {/* 
          <Pagination.Prev />
          <Pagination.Item active>{activePage}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Next />
        */}
          </Pagination>
          <div>
            {getTableStartIndex()}-{getTableEndIndex()} of {totalItem} items
          </div>
        </div>
        <Modal
          show={show}
          onHide={() => handleClose(false)}
          data-testid="delete-dialog"
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure for deleting this plant?</Modal.Body>
          <Modal.Footer className="justify-content-sm-between">
            <Button
              variant="secondary"
              data-testid="close-dialog-btn"
              className="primary-button"
              onClick={() => handleClose(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              data-testid="delete-dialog-btn"
              className="primary-button"
              onClick={() => handleClose(true)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </LayoutComponent>
  );
};
export default PlantList;
