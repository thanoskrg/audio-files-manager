import React, { useCallback, useState } from 'react';
import { func } from 'prop-types';
import { useDropzone } from 'react-dropzone';
import Dialog from '../../../components/Dialog';
import { formatSizeInBytes } from '../../../helpers/formatters';

const UploadDialog = ({ onCancel, onSubmit }) => {
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState();
  const onDrop = useCallback(([acceptedFile]) => {
    setFile({
      file: acceptedFile,
      name: acceptedFile.name,
      size: acceptedFile.size,
      type: acceptedFile.type
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });
  return (
    <Dialog
      title="Upload File"
      submitText={isUploading ? 'Uploading...' : 'Upload'}
      onCancel={onCancel}
      onSubmit={() => {
        if (file) {
          setIsUploading(true);
          onSubmit(file.file)
        }
      }}
    >
      <div
        className="flex items-center justify-center gray fw6"
        style={{ minHeight: 150 }}
        {...getRootProps()}
      >
        {file && (
          <div className="flex flex-column">
            <span className="mb2">
              <label className="mr2 near-black">Name:</label>
              {file.name}
            </span>
            <span className="mb2">
              <label className="mr2 near-black">Type:</label>
              {file.type}
            </span>
            <span className="mb2">
              <label className="mr2 near-black">Size:</label>
              {formatSizeInBytes(file.size)}
            </span>
          </div>
        )}
        {!file && (
          <>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here...</p> :
                <p>Drag 'n' drop a file here, or click to select one</p>
            }
          </>
        )}
      </div>
    </Dialog>
  )
};

UploadDialog.propTypes = {
  onCancel: func,
  onSubmit: func
};

export default UploadDialog;

