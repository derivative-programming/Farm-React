import React, { FC, ReactElement, useState, useEffect } from 'react';
import '../../../../App.scss';
import { Button, Breadcrumb, ListGroup, Row, Col } from "react-bootstrap";
import LayoutComponent from '../../../../components/Layout/Layout';
import { useNavigate, useParams } from "react-router-dom";
import * as PlantUserDetailsService from "../../../../components/reports/services/PlantUserDetails";
import moment from "moment";

interface PlantsValue {
    flavorName: string;
    flavorCode: string;
    someTextVal: string;
    someEmailAddress: string;
    somePhoneNumber: string;
    someMoneyVal: number;
    someFloatVal: number;
    isDeleteAllowed: boolean;
    isEditAllowed: boolean;
    someDecimalVal: number;
    someIntVal: number;
    plantCode: string;
    someBigIntVal: number;
    someBitVal: boolean;
    someDateVal: string;
    someVarCharVal: string;
    someUTCDateTimeVal: string;
    someNVarCharVal: string;
}
const PlantUserDetails: FC = (): ReactElement => {
    const navigate = useNavigate();

    const [params, setParams] = useState(useParams());
    const [plantUserDetails, setPlantUserDetails] = useState<Partial<PlantsValue>>({});

    const goTo = (url: any) => {
        navigate(url);
    };
    useEffect(() => {
        if (params && params["id"]) {
            getPlantUserDetails(params['id']);
        }
    }, []);

    const getPlantUserDetails = async (id: string) => {
        try {
            const res = await PlantUserDetailsService.submitRequest({},id);
            console.log("res plant Detail-->", res);
            setPlantUserDetails(res.data.items[0])
        } catch (err) {
            console.log("err -> ", err);
        }
    };
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
    return (
        <div className="plant-user-details-container" data-testid="plant-user-details">
            <div className="breadcrumb-container">
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => goTo('/')}>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => goTo('/land-plant-list')}>
                        Plants
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Details
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>Plant Detail</h1>
            <h6>Details of a plant</h6>
            <div className='plants-list-button-header'>
                <Button onClick={() => goTo('/land-plant-list')} className='primary-button' data-testid="plant-btn" type="submit">
                    Plants
                </Button>

            </div>
            <div className='list-container'>
                <ListGroup as="ol">
                    <Row>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Flavor Name</div>
                                    {plantUserDetails['flavorName']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Flavor Code</div>
                                    {plantUserDetails['flavorCode']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12" className='web-edit'>
                            {plantUserDetails['isEditAllowed'] ? <Button onClick={() => goTo('/plant-edit/' + params["id"])} className='primary-button' type="button">
                                Edit
                            </Button> : null}
                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Is Delete Allowed</div>
                                    {plantUserDetails['isDeleteAllowed'] ? 'True' : 'False'}
                                </div>

                            </ListGroup.Item>
                        </Col>              <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Is Edit Allowed</div>
                                    {plantUserDetails['isEditAllowed'] ? 'True' : 'False'}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Plant Code</div>
                                    {plantUserDetails['plantCode']}
                                </div>

                            </ListGroup.Item>
                        </Col>            <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Big Int Val</div>
                                    {plantUserDetails['someBigIntVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Bit Val</div>
                                    {plantUserDetails['someBitVal'] ? 'True' : 'False'}
                                </div>

                            </ListGroup.Item>
                        </Col>          <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Date Val</div>
                                    {moment(plantUserDetails['someDateVal']).format("M/D/YYYY")}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some UTC Date Time Val</div>
                                    {moment.utc(plantUserDetails['someUTCDateTimeVal']).format("M/D/YYYY h:m A")}
                                </div>

                            </ListGroup.Item>
                        </Col>           <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Decimal Val</div>
                                    {plantUserDetails['someDecimalVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Email Address</div>
                                    {plantUserDetails['someEmailAddress']}
                                </div>

                            </ListGroup.Item>
                        </Col>          <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Phone Number</div>
                                    {formatPhoneNumber(plantUserDetails['somePhoneNumber'])}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Float Val</div>
                                    {plantUserDetails['someFloatVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>                <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Int Val</div>
                                    {plantUserDetails['someIntVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Money Val</div>
                                    ${plantUserDetails['someMoneyVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>          <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Text Val</div>
                                    {plantUserDetails['someTextVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12">

                        </Col>
                        <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some Var Char Val</div>
                                    {plantUserDetails['someVarCharVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>            <Col lg="5" md="5" xs="12">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Some N Var Char Val</div>
                                    {plantUserDetails['someNVarCharVal']}
                                </div>

                            </ListGroup.Item>
                        </Col>
                        <Col lg="2" md="2" xs="12" className='mobile-edit'>
                            {plantUserDetails['isEditAllowed'] ? <Button onClick={() => goTo('/plant-edit/' + params["id"])} className='primary-button' type="button">
                                Edit
                            </Button> : null}
                        </Col>
                    </Row>
                </ListGroup>
            </div>
        </div>
    )
}
export default PlantUserDetails;