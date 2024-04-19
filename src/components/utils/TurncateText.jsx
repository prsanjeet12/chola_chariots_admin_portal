import React, { useState } from 'react';
import { Button, Popover } from 'antd';

const TruncateText = ({ text, maxLength }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleClick = () => {
    setPopoverVisible(true);
  };

  return (
    <span>
      {text.split(' ').length > maxLength ? (
        <Popover
          content={text}
          visible={popoverVisible}
          trigger="click"
          onVisibleChange={setPopoverVisible}
        >
          <Button type="link" onClick={handleClick}>
            {text.split(' ').slice(0, maxLength).join(' ')}...
          </Button>
        </Popover>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};

export default TruncateText;
