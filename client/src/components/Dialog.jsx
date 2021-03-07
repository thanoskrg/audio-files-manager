import React from 'react';
import { node, string, func, number } from 'prop-types';
import Modal from 'react-modal';
import Button from './Button';

const Dialog = ({
  children,
  width,
  height,
  title,
  cancelText,
  submitText,
  onCancel,
  onSubmit,
}) => {
  return (
    <Modal
      isOpen
      style={{
        content : {
          top: '40%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: `${width}px`,
          minHeight: `${height}px`
        }
      }}
    >
      <h3>{title}</h3>
      <div className="flex flex-column">
        <div className="dib mt2 mb4">
          {children}
        </div>
        <div className="flex justify-end">
          <Button
            className="bg-light-gray near-black ph3 pv2 mr3"
            onClick={onCancel}
          >
            {cancelText}
          </Button>
          <Button
            className="bg-black-90 near-white ph3 pv2"
            onClick={onSubmit}
          >
            {submitText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

Dialog.propTypes = {
  children: node,
  width: number,
  height: number,
  title: string,
  cancelText: string,
  submitText: string,
  onCancel: func,
  onSubmit: func
};

Dialog.defaultProps = {
  width: 600,
  height: 200,
  cancelText: 'Cancel',
  submitText: 'Submit'
}

export default Dialog;