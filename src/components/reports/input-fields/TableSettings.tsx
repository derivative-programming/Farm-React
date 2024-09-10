import React from 'react';
import { Dropdown, ButtonGroup, Form, Button } from 'react-bootstrap';
import { Gear } from 'react-bootstrap-icons';

export interface TableColumn {
  header: string;
  isVisible: boolean;
  isPreferenceVisible: boolean;
}

export interface TableSettingsProps {
  columns: Record<string, TableColumn>;
  onToggleColumn: (colName: string) => void;
  onSetAllColumnsVisibility: (visibility: boolean) => void; // New function to set all columns visibility
  name: string;
}

export const TableSettings: React.FC<TableSettingsProps> = ({ columns, onToggleColumn, onSetAllColumnsVisibility, name }) => {
  const columnKeys = Object.keys(columns);

  return (
    <Dropdown as={ButtonGroup} className="mb-3">
      <Dropdown.Toggle  
        variant="link"
        style={{ backgroundColor: 'white'}} // White background with border
        data-testid={`${name}-dropdown`}>
        <Gear color="black" />
      </Dropdown.Toggle>
      <Dropdown.Menu 
        data-testid={`${name}-menu`}
        style={{ minWidth: '300px', whiteSpace: 'nowrap' }} 
      >
        {/* Check All and Uncheck All buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <Button size="sm" onClick={() => onSetAllColumnsVisibility(true)} data-testid={`${name}-check-all`}>
            Check All
          </Button>
          <Button size="sm" onClick={() => onSetAllColumnsVisibility(false)} data-testid={`${name}-uncheck-all`}>
            Uncheck All
          </Button>
        </div>

        <Dropdown.Divider />

        {columnKeys
          .filter(colKey => columns[colKey].isVisible)
          .map((colKey) => (
          <div key={colKey} style={{ marginLeft: '10px' }}>
            <Form.Check
              type="checkbox"
              id={`${name}-checkbox-${colKey}`}
              label={columns[colKey].header}
              checked={columns[colKey].isPreferenceVisible}
              onChange={() => onToggleColumn(colKey)}
              data-testid={`${name}-checkbox-${colKey}`}
            />
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};