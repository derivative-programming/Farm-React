import React, { FC, ReactElement, useContext } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { getFlavors } from "../data/Flavor";
import * as PacUserFlavorListService from "../services/PacUserFlavorList";
import {useField } from 'formik';
import { InputSelect,InputSelectOption } from "../../InputFields/InputSelect";
   
export interface SelectFlavorProps {
    name: string
    label: string
    placeholder?: string
    autoFocus?:boolean
    disabled?: boolean
  }

const SelectFlavor: FC<SelectFlavorProps> = ({
    name,
    label,
    placeholder,
    autoFocus = false,
    disabled = false,
  }): ReactElement => { 
    const [field, meta, helpers] = useField(name); 
    const  flavorList:PacUserFlavorListService.QueryResultItem[]  = getFlavors();
    const options = flavorList.map(({ flavorCode, flavorName }) => ({ label: flavorName, value:flavorCode }));

    return ( 
        <InputSelect 
            label={label} 
            name={name}
            options={options}
            />
         
    );
};
export default SelectFlavor;
