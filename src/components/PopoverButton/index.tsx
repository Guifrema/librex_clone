'use client'
import React, { useState } from 'react';
import { Button, Popover } from 'antd';

interface Props {
    title: string;
    description: string;
}
const PopoverButton = (props: Props) => {
  const {title, description} = props

  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={description}
      title={title}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type="default" style={{fontSize: "16px", color: '#283b51'}}>{title}</Button>
    </Popover>
  );
};

export default PopoverButton;