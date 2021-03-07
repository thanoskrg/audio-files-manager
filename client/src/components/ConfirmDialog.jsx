import React from 'react';
import { node, string, func } from 'prop-types';
import Dialog from './Dialog';

const ConfirmDialog = ({
  children,
  title,
  confirmText,
  onCancel,
  onConfirm
}) => {
  return (
    <Dialog
      width={600}
      height={200}
      title={title}
      cancelText="Cancel"
      submitText={confirmText}
      onCancel={onCancel}
      onSubmit={onConfirm}
    >
      {children}
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  children: node,
  title: string,
  confirmText: string,
  onCancel: func,
  onConfirm: func
};

export default ConfirmDialog;