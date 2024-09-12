/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState, useEffect } from "react";
import { Col, ListGroup, Row, Spinner } from "react-bootstrap";
import * as PlantUserDetailsReportService from "../../services/PlantUserDetails"; 
import * as AsyncServices from "../../../services"; // NOSONAR
import * as ReportColumnDisplay from "./columns";
import { TableSettings } from "../../input-fields";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";  
import { v4 as uuidv4 } from "uuid";

export interface ReportDetailThreeColPlantUserDetailsProps {
    name: string
    item: PlantUserDetailsReportService.QueryResultItem
    onNavigateTo(url: string): void
    onRefreshRequest(): void
    showProcessing?: boolean;
}
export const ReportDetailThreeColPlantUserDetails: FC<ReportDetailThreeColPlantUserDetailsProps> = ({
    name,
    item,
    onNavigateTo,
    onRefreshRequest,
    showProcessing = false,
}): ReactElement => { 
    const { logClick } = useAnalyticsDB();  // NOSONAR
    const defaultColumnSettings = {
  //endset 
        flavorName: {
            header: 'Flavor Name',
            isVisible: true,
            isPreferenceVisible: true,
        },
        otherFlavor: {
            header: 'Other Flavor',
            isVisible: true,
            isPreferenceVisible: true,
        },
        isDeleteAllowed: {
            header: 'Is Delete Allowed',
            isVisible: true,
            isPreferenceVisible: true,
        },
        isEditAllowed: {
            header: 'Is Edit Allowed',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someBigIntVal: {
            header: 'Some Big Int Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someBitVal: {
            header: 'Some Bit Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someDateVal: {
            header: 'Some Date Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someUTCDateTimeVal: {
            header: 'Some UTC Date Time Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someDecimalVal: {
            header: 'Some Decimal Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someEmailAddress: {
            header: 'Some Email Address',
            isVisible: true,
            isPreferenceVisible: true,
        },
        somePhoneNumber: {
            header: 'Some Phone Number',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someFloatVal: {
            header: 'Some Float Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someIntVal: {
            header: 'Some Int Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someMoneyVal: {
            header: 'Some Money Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someTextVal: {
            header: 'Some Text Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someVarCharVal: {
            header: 'Some Var Char Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someNVarCharVal: {
            header: 'Some N Var Char Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someUniqueidentifierVal: {
            header: 'Some Uniqueidentifier Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        phoneNumConditionalOnIsEditable: {
            header: 'Conditional Column',
            isVisible: true,
            isPreferenceVisible: true, // Assume user wants it visible in preferences
        },
        nVarCharAsUrl: {
            header: 'N Var Char As Url',
            isVisible: true,
            isPreferenceVisible: true,
        },
        isImageUrlAvailable: {
            header: 'N Var Char As Url', // Duplicate label - make sure it's intentional
            isVisible: false,
            isPreferenceVisible: false,
        },
        someImageUrlVal: {
            header: 'Some Image Url Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        someConditionalImageUrlVal: {
            header: 'Some Conditional Image Url Val',
            isVisible: true,
            isPreferenceVisible: true,
        },
        updateButtonTextLinkPlantCode: {
            header: '',
            isVisible: false,
            isPreferenceVisible: true,
        },
        backToDashboardLinkTacCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
        randomPropertyUpdatesLinkPlantCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
        testFileDownloadLinkPacCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
        testConditionalAsyncFileDownloadLinkPacCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
        testAsyncFlowReqLinkPacCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
        testConditionalAsyncFlowReqLinkPacCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
        conditionalBtnExampleLinkTacCode: {
            header: '',
            isVisible: true,
            isPreferenceVisible: true,
        },
  //endset
    };
    const [columns, setColumns] = useState(defaultColumnSettings);
    const componentName = "ReportDetailThreeColPlantUserDetails";
    
    useEffect(() => {
        const storedData = localStorage.getItem('landPlantListHiddenColumns');
        if(storedData){
        const storedHiddenColumns = JSON.parse(storedData) || [];
        setColumns(prevColumns => {
            const updatedColumns = { ...prevColumns };
            storedHiddenColumns.forEach(colKey => {
            if (updatedColumns[colKey]) {
                updatedColumns[colKey].isPreferenceVisible = false;
            }
            });
            return updatedColumns;
        });
        }
    }, []);

    useEffect(() => {
        const hiddenColumns = Object.keys(columns).filter(
        colKey => !columns[colKey].isPreferenceVisible
        );
        localStorage.setItem('landPlantListHiddenColumns', JSON.stringify(hiddenColumns));
    }, [columns]);

    const handleColumnVisibility = (colName: string) => {
        logClick(componentName,"handleColumnVisibility",colName);
        
        setColumns(prevColumns => ({
        ...prevColumns,
        [colName]: {
            ...prevColumns[colName],
            isPreferenceVisible: !prevColumns[colName].isPreferenceVisible
        }
        }));
    };

    const handleSetAllColumnsVisibility = (visibility: boolean) => {
        logClick(componentName,"handleSetAllColumnsVisibility",visibility.toString());
        const updatedColumns = { ...columns };
        Object.keys(updatedColumns).forEach(colKey => {
        if (updatedColumns[colKey].isVisible) {
            updatedColumns[colKey].isPreferenceVisible = visibility;
        }
        });
        setColumns(updatedColumns);
    };
    
    return (
        <div data-testid={name} className='mt-3 w-100 ReportThreeColumnView'> 
        { showProcessing ? 
            <Row>
                <Col  lg="12" md="12" xs="12">
                <div className="text-center  bg-secondary bg-opacity-25">
                      <Spinner animation="border" className="mt-2 mb-2" />
                  </div>
                </Col>
            </Row>
            : 
            <>
            <Row><Col  lg="9" md="9" xs="12">
                <ListGroup as="ol"> 
                    <Row>
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                            label="Flavor Name"
                            value={item.flavorName}
                            isVisible={true}
                            isPreferenceVisible={columns["flavorName"].isPreferenceVisible}
                        />
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="otherFlavor"
                            label="Other Flavor"
                            value={item.otherFlavor}
                            isVisible={true}
                            isPreferenceVisible={columns["otherFlavor"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                            label="Is Delete Allowed"
                            isChecked={item.isDeleteAllowed}
                            isVisible={true}
                            isPreferenceVisible={columns["isDeleteAllowed"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                            label="Is Edit Allowed"
                            isChecked={item.isEditAllowed}
                            isVisible={true}
                            isPreferenceVisible={columns["isEditAllowed"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                            label="Some Big Int Val"
                            value={item.someBigIntVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someBigIntVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                            label="Some Bit Val"
                            isChecked={item.someBitVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someBitVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                            label="Some Date Val"
                            value={item.someDateVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someDateVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                            label="Some UTC Date Time Val"
                            value={item.someUTCDateTimeVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someUTCDateTimeVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                            label="Some Decimal Val"
                            value={item.someDecimalVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someDecimalVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                            label="Some Email Address"
                            value={item.someEmailAddress}
                            isVisible={true}
                            isPreferenceVisible={columns["someEmailAddress"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                            label="Some Phone Number"
                            value={item.somePhoneNumber}
                            isVisible={true}
                            isPreferenceVisible={columns["somePhoneNumber"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                            label="Some Float Val"
                            value={item.someFloatVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someFloatVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                            label="Some Int Val"
                            value={item.someIntVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someIntVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                            label="Some Money Val"
                            value={item.someMoneyVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someMoneyVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                            label="Some Text Val"
                            value={item.someTextVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someTextVal"].isPreferenceVisible}
                        />
 
                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                            label="Some Var Char Val"
                            value={item.someVarCharVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someVarCharVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                            label="Some N Var Char Val"
                            value={item.someNVarCharVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someNVarCharVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayText forColumn="someUniqueidentifierVal"
                            label="Some Uniqueidentifier Val"
                            value={item.someUniqueidentifierVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someUniqueidentifierVal"].isPreferenceVisible}
                        />

                        <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="phoneNumConditionalOnIsEditable"
                            label="Conditional Column"
                            value={item.phoneNumConditionalOnIsEditable}
                            conditionallyVisible={item.isEditAllowed}
                            isVisible={true}
                            isPreferenceVisible={columns["phoneNumConditionalOnIsEditable"].isPreferenceVisible}
                        />
                        
                        <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharAsUrl"
                            label="N Var Char As Url"
                            value={item.nVarCharAsUrl}
                            linkText="Click Here"
                            isVisible={true}
                            isPreferenceVisible={columns["nVarCharAsUrl"].isPreferenceVisible}
                        />

 
                        <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isImageUrlAvailable"
                            label="N Var Char As Url"
                            isChecked={item.isImageUrlAvailable}
                            isVisible={false}
                            isPreferenceVisible={columns["isImageUrlAvailable"].isPreferenceVisible}
                        />
      
                        <ReportColumnDisplay.ReportColumnDisplayImageUrl forColumn="someImageUrlVal"
                            label="Some Image Url Val"
                            value={item.someImageUrlVal}
                            isVisible={true}
                            isPreferenceVisible={columns["someImageUrlVal"].isPreferenceVisible}
                        />
      
                        <ReportColumnDisplay.ReportColumnDisplayImageUrl forColumn="someConditionalImageUrlVal"
                            label="Some Conditional Image Url Val"
                            value={item.someConditionalImageUrlVal}
                            isVisible={true}
                            conditionallyVisible={item.isImageUrlAvailable} 
                            isPreferenceVisible={columns["someConditionalImageUrlVal"].isPreferenceVisible}
                        />

                    </Row>
                </ListGroup>
            </Col>
            <Col>  

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateButtonTextLinkPlantCode"
                    buttonText="Update Button Text"
                    isButtonCallToAction={true}
                    isVisible={false}
                    isPreferenceVisible={columns["updateButtonTextLinkPlantCode"].isPreferenceVisible}
                    onClick={() => {
                        logClick(componentName,"updateButtonTextLinkPlantCode","");
                        onNavigateTo("/plant-user-details/" + item.updateButtonTextLinkPlantCode);
                    }}
                />
                
                {/*//flavorName*/}
                {/*//isDeleteAllowed*/}
                {/*//isEditAllowed*/}
                {/*//otherFlavor*/}
                {/*//someBigIntVal*/}
                {/*//someBitVal*/}
                {/*//someDateVal*/}
                {/*//someDecimalVal*/}
                {/*//someEmailAddress*/}
                {/*//someFloatVal*/}
                {/*//someIntVal*/}
                {/*//someMoneyVal*/}
                {/*//someNVarCharVal*/}
                {/*//somePhoneNumber*/}
                {/*//someTextVal*/}
                {/*//someUniqueidentifierVal*/}
                {/*//someUTCDateTimeVal*/}
                {/*//someVarCharVal*/} 
                {/*//PhoneNumConditionalOnIsEditable*/} 
                {/*//NVarCharAsUrl*/} 
                {/*//someConditionalImageUrlVal*/} 
                {/*//someImageUrlVal*/} 
                {/*//isImageUrlAvailable*/} 
                {/*//DeleteAsyncButtonLinkPlantCode*/} 

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="backToDashboardLinkTacCode"
                    buttonText="Back To Dashboard"
                    isButtonCallToAction={true}
                    isVisible={true}
                    isPreferenceVisible={columns["backToDashboardLinkTacCode"].isPreferenceVisible}
                    onClick={() => {
                        logClick(componentName,"backToDashboardLinkTacCode","");
                        onNavigateTo("/tac-farm-dashboard/" + item.backToDashboardLinkTacCode)
                    }}
                />



                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="randomPropertyUpdatesLinkPlantCode"
                    buttonText="Random Property Updates"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isPreferenceVisible={columns["randomPropertyUpdatesLinkPlantCode"].isPreferenceVisible}
                    onClick={() =>{
                        logClick(componentName,"randomPropertyUpdatesLinkPlantCode","");
                        const data: AsyncServices.PlantUserPropertyRandomUpdateRequest = {};
                        AsyncServices.PlantUserPropertyRandomUpdateSubmitRequest(data, item.randomPropertyUpdatesLinkPlantCode)
                            .then(() => onRefreshRequest())
                    } }
                /> 
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testFileDownloadLinkPacCode"
                    buttonText="Test File Download"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isPreferenceVisible={columns["testFileDownloadLinkPacCode"].isPreferenceVisible}
                    onClick={() =>{
                        logClick(componentName,"testFileDownloadLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFileDownloadRequest = {};
                        AsyncServices.PacUserTestAsyncFileDownloadSubmitRequest(data, item.testFileDownloadLinkPacCode)
                            .then((response) => {
                                const contentDisposition = response.headers['content-disposition'];
                                let filename = uuidv4() + '.csv';

                                if (contentDisposition) {
                                    // Attempt to extract the filename*= value first, then fallback to filename=
                                    const filenameMatch = contentDisposition.match(/filename\*?=['"]?([^;'"]+)/);
                                    if (filenameMatch && filenameMatch[1]) {
                                        filename = decodeURIComponent(filenameMatch[1].replace(/UTF-8''/, ''));
                                    }
                                }

                                // Get the content type or default to "text/csv"
                                const contentType = response.headers['content-type'] || 'text/csv';

                                const blob = new Blob([response.data], { type: contentType });
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', filename);
                                document.body.appendChild(link);
                                link.click();
                            })
                            .then(() => onRefreshRequest())
                    } }
                />
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testConditionalAsyncFileDownloadLinkPacCode"
                    buttonText="Test Conditional Async File Download"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isPreferenceVisible={columns["testConditionalAsyncFileDownloadLinkPacCode"].isPreferenceVisible}
                    conditionallyVisible={item.isEditAllowed}
                    onClick={() =>{
                        logClick(componentName,"testConditionalAsyncFileDownloadLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFileDownloadRequest = {};
                        AsyncServices.PacUserTestAsyncFileDownloadSubmitRequest(data, item.testConditionalAsyncFileDownloadLinkPacCode)
                            .then((response) => {
                                const contentDisposition = response.headers['content-disposition'];
                                let filename = uuidv4() + '.csv';

                                if (contentDisposition) {
                                    // Attempt to extract the filename*= value first, then fallback to filename=
                                    const filenameMatch = contentDisposition.match(/filename\*?=['"]?([^;'"]+)/);
                                    if (filenameMatch && filenameMatch[1]) {
                                        filename = decodeURIComponent(filenameMatch[1].replace(/UTF-8''/, ''));
                                    }
                                }

                                // Get the content type or default to "text/csv"
                                const contentType = response.headers['content-type'] || 'text/csv';

                                const blob = new Blob([response.data], { type: contentType });
                                const url = URL.createObjectURL(blob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', filename);
                                document.body.appendChild(link);
                                link.click();
                            })
                            .then(() => onRefreshRequest())
                    } }
                />
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testAsyncFlowReqLinkPacCode"
                    buttonText="Test Async Flow Req"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isPreferenceVisible={columns["testAsyncFlowReqLinkPacCode"].isPreferenceVisible}
                    onClick={() =>{
                        logClick(componentName,"testAsyncFlowReqLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFlowReqRequest = {};
                        AsyncServices.PacUserTestAsyncFlowReqSubmitRequest(data, item.testAsyncFlowReqLinkPacCode)
                            .then(() => onRefreshRequest())
                    } }
                />
                
                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testConditionalAsyncFlowReqLinkPacCode"
                    buttonText="Test Conditional Async Flow Req"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isPreferenceVisible={columns["testConditionalAsyncFlowReqLinkPacCode"].isPreferenceVisible}
                    conditionallyVisible={item.isEditAllowed}
                    onClick={() =>{
                        logClick(componentName,"testConditionalAsyncFlowReqLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFlowReqRequest = {};
                        AsyncServices.PacUserTestAsyncFlowReqSubmitRequest(data, item.testConditionalAsyncFlowReqLinkPacCode)
                            .then(() => onRefreshRequest())
                    } }
                />

                <ReportColumnDisplay.ReportColumnDisplayButton forColumn="conditionalBtnExampleLinkTacCode"
                    buttonText="Conditional Btn Example"
                    isButtonCallToAction={true}
                    isVisible={true}
                    isPreferenceVisible={columns["conditionalBtnExampleLinkTacCode"].isPreferenceVisible}
                    conditionallyVisible={item.isEditAllowed}
                    onClick={() => {
                        logClick(componentName,"conditionalBtnExampleLinkTacCode","");
                        onNavigateTo("/tac-farm-dashboard/" + item.conditionalBtnExampleLinkTacCode)
                    }}
                />

            </Col>
        </Row>
        <Row>
            <Col xs="auto">  
                <TableSettings 
                    name="TableSettingsPlantUserDetails"
                    columns={columns}
                    onToggleColumn={handleColumnVisibility} 
                    onSetAllColumnsVisibility={handleSetAllColumnsVisibility}
                /> 
            </Col>
        </Row>
        </>
        }
        </div>
    );
}; 
