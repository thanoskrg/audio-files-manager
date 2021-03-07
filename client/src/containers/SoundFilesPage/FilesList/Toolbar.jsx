import React from 'react';
import { func } from 'prop-types';
import UploadIcon from '@material-ui/icons/CloudUpload';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '../../../components/Button';

const Toolbar = ({ onUpload, onRefresh }) => (
  <div className="flex justify-end pa3 mb2">
    <Button
      className="bg-green near-white mr2"
      onClick={onUpload}
    >
      <UploadIcon className="mr2" /> Upload File
    </Button>
    <Button
      className="bg-black-90 near-white"
      onClick={onRefresh}
    >
      <RefreshIcon className="mr2" /> Refresh
    </Button>
  </div>
);

Toolbar.propTypes = {
  onUpload: func,
  onRefresh: func
}

export default Toolbar;