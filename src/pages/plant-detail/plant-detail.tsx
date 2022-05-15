import React, { FC, ReactElement, useState, useEffect } from 'react';
import '../../App.scss';
import { Button, Breadcrumb, ListGroup, Row, Col } from "react-bootstrap";
import LayoutComponent from '../../components/Layout/Layout';
import { useNavigate, useParams } from "react-router-dom";
import { plantsDetail } from "../../services/home";
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
const PlantDetail: FC = (): ReactElement => {
    const navigate = useNavigate();

    const [params, setParams] = useState(useParams());
    const [plantDetail, setPlantDetail] = useState<Partial<PlantsValue>>({});

    const goTo = (url: any) => {
        navigate(url);
    };
    useEffect(() => {
        if (params && params["id"]) {
            getPlantDetails(params['id']);
        }
    }, []);

    const getPlantDetails = async (id: string) => {
        try {
            const res = await plantsDetail(id);
            console.log("res plant Detail-->", res);
            setPlantDetail(res.data.items[0])
        } catch (err) {
            console.log("err -> ", err);
        }
    };
    return (
        <LayoutComponent>
            <div className="plant-detail-container" data-testid="plant-detail">
                <div className="breadcrumb-container">
                    <Breadcrumb>
                        <Breadcrumb.Item onClick={() => goTo('/')}>Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => goTo('/plant-list')}>
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
                    <Button onClick={() => goTo('/plant-list')} className='primary-button' data-testid="plant-btn" type="submit">
                        Plants
                    </Button>
                    <Button onClick={() => goTo('/add-plant/' + params["id"])} className='primary-button' type="button">
                        Edit
                    </Button>
                </div>
                <div className='list-container'>
                    <ListGroup as="ol">
                        <Row>
                            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Flavor Name</div>
                                        {plantDetail['flavorName']}
                                    </div>

                                </ListGroup.Item>
                            </Col>
                            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Flavor Code</div>
                                        {plantDetail['flavorCode']}
                                    </div>

                                </ListGroup.Item>
                            </Col>
                            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Is Delete Allowed</div>
                                        {plantDetail['isDeleteAllowed'] ? 'True' : 'False'}
                                    </div>

                                </ListGroup.Item>
                            </Col>              <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Is Edit Allowed</div>
                                        {plantDetail['isEditAllowed'] ? 'True' : 'False'}
                                    </div>

                                </ListGroup.Item>
                            </Col>               <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Plant Code</div>
                                        {plantDetail['plantCode']}
                                    </div>

                                </ListGroup.Item>
                            </Col>            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Big Int Value</div>
                                        {plantDetail['someBigIntVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>           <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Bit Value</div>
                                        {plantDetail['someBitVal'] ? 'True' : 'False'}
                                    </div>

                                </ListGroup.Item>
                            </Col>          <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Date Val</div>
                                        {moment(plantDetail['someDateVal']).format("M/D/YYYY")}
                                    </div>

                                </ListGroup.Item>
                            </Col>           <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some UTC Date Time Val</div>
                                        {moment.utc(plantDetail['someUTCDateTimeVal']).format("M/D/YYYY h:m A")}
                                    </div>

                                </ListGroup.Item>
                            </Col>           <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Decimal Val</div>
                                        {plantDetail['someDecimalVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>           <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Email Address</div>
                                        {plantDetail['someEmailAddress']}
                                    </div>

                                </ListGroup.Item>
                            </Col>          <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Phone Number</div>
                                        {plantDetail['somePhoneNumber']}
                                    </div>

                                </ListGroup.Item>
                            </Col>            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Float Val</div>
                                        {plantDetail['someFloatVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>                <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Int Val</div>
                                        {plantDetail['someIntVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Money Val</div>
                                        {plantDetail['someMoneyVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>          <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Text Val</div>
                                        {plantDetail['someTextVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>           <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some Var Char Val</div>
                                        {plantDetail['someVarCharVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>            <Col lg="6" md="6" xs="12">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Some N Var Char Val</div>
                                        {plantDetail['someNVarCharVal']}
                                    </div>

                                </ListGroup.Item>
                            </Col>
                        </Row>
                    </ListGroup>
                </div>
            </div>
        </LayoutComponent>
    )
}
export default PlantDetail;