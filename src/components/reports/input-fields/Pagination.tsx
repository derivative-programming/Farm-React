import React, { FC, ReactElement } from "react";
import { Form, Pagination } from "react-bootstrap";
import "../../../App.scss"; 
   
export interface ReportPaginationProps {
  name:string
  currentPage: number  
  totalItemCount: number
  pageSize: number
  currentPageItemCount: number
  onPageSizeChange(pageSize:number): void
  onPageSelection(pageNumber:number): void
  hidden?: boolean
}
   
export const ReportPagination: FC<ReportPaginationProps> = ({
  name,
  currentPage,
  totalItemCount,
  pageSize, 
  currentPageItemCount, 
  onPageSizeChange,
  onPageSelection,
  hidden = false,
}): ReactElement => {  
      
  const isHidden = () => {
    if(totalItemCount === 0 || hidden){
      return true;
    } else {
      return false;
    } 
  }

  const isFirstPageButtonHidden = () => {
    if(isHidden())
    {
      return true;
    }
    if(currentPage < 2){
      return true
    }
    return false;
  }

  const isPreviousPageButtonHidden = () => {
    if(isHidden())
    {
      return true;
    }
    if(currentPage <= 2){
      return true
    }
    return false;
  }
  
  const isNextPageButtonHidden = () => {
    if(isHidden())
    {
      return true;
    }
    if(currentPage >= (getMaxPageCount() - 1)){
      return true
    }
    return false;
  }
  
  const isLastPageButtonHidden = () => {
    if(isHidden())
    {
      return true;
    }
    if(currentPage === getMaxPageCount()){
      return true
    }
    return false;
  }
  
  const getFirstItemIndex = () => {
    if(currentPage === 1) {
      return 1;
    } else {
      return (currentPage - 1) * pageSize + 1;
    }
  };

  const getLastItemIndex = () => {
    const baseCount = (currentPage - 1) * pageSize;
    return baseCount + currentPageItemCount; 
  };

  const getMaxPageCount = () => {
    const baseCount = totalItemCount / pageSize
    if((totalItemCount % pageSize) === 0){
      return baseCount;
    } else {
      return baseCount + 1;
    }
  }
  
  const paginationId = name  + "-pageination";
  const paginationPageSizeSelectId = paginationId  + "-select-page-size";
  const paginationFirstId = paginationId  + "-first";
  const paginationPrevId = paginationId  + "-prev";
  const paginationNextId = paginationId  + "-next";
  const paginationLastId = paginationId  + "-last";
  const paginationCountDisplayId = paginationId  + "-count-display";
  
  const getAvailablePageItems = () => {
    let items: any = [];
    let start = currentPage - 2;
    if(start < 1){
      start = 1;
    }
    let end = currentPage + 2
    if(end > getMaxPageCount()){
      end = getMaxPageCount();
    }
    for (let number = start; number <= end; number++) {
      const paginationPageSelectionId = paginationId + "-select-" + number.toString();
      items.push(
        <Pagination.Item
          id={paginationPageSelectionId}
          key={number}
          active={number === currentPage}
          onClick={() => onPageSelection(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };  


  return (
    <div
      hidden={isHidden()}
      data-testid={name} className="d-flex flex-column flex-md-row w-100 align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Form.Label className="m-0 me-2" data-testid='items-per-page-label'>Items Per Page</Form.Label>
        <Form.Select
          data-testid={paginationPageSizeSelectId}
          value={pageSize}
          onChange={(e) => onPageSizeChange(parseInt(e.target.value))}
          className="w-auto"
          size="sm"
        >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Form.Select>
      </div>
      <Pagination 
        className="mt-3"
        data-testid={paginationId}
        hidden={isHidden()}>
        <Pagination.First 
          data-testid={paginationFirstId}
          hidden={isFirstPageButtonHidden()}
          onClick={() => onPageSelection(1)} />
        <Pagination.Prev 
          data-testid={paginationPrevId}
          hidden={isPreviousPageButtonHidden()} 
          onClick={() => onPageSelection(currentPage - 1)} />
        {getAvailablePageItems()}
        <Pagination.Next  
          data-testid={paginationNextId}
          hidden={isNextPageButtonHidden()} 
          onClick={() => onPageSelection(currentPage + 1)} />
        <Pagination.Last 
          data-testid={paginationLastId}
          hidden={isLastPageButtonHidden()}
          onClick={() => onPageSelection(getMaxPageCount())} /> 
      </Pagination>
      <div 
        hidden={isHidden()}
        data-testid={paginationCountDisplayId}>
        {getFirstItemIndex()}-{getLastItemIndex()} of {totalItemCount} items
      </div>
    </div>
  );
};
   