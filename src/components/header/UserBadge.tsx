import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

export type BadgeMenuItem = {
  label: string;
  onClick: () => void;
};

interface UserBadgeProps {
  username: string;
  menuItems: BadgeMenuItem[];
}


function UserBadge({ username, menuItems }: UserBadgeProps) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Dropdown align="end" show={show} onClick={handleToggle}>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>{username}</Tooltip>}
      >
        <div
          style={{
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: '50%',
            padding: '10px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PersonCircle size={20} color="black" />
        </div>
      </OverlayTrigger>

      <Dropdown.Menu>
        {menuItems.map((item, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => {
              setShow(false); // Close the dropdown after click
              item.onClick(); // Execute the provided function
            }}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

// Define PropTypes for runtime validation
UserBadge.propTypes = {
  username: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default UserBadge;
