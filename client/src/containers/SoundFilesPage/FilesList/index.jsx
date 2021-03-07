import React, { useReducer, useEffect } from 'react';
import { func } from 'prop-types';
import { toast } from 'react-toastify';
import PlayIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmDialog from '../../../components/ConfirmDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableInlineButton,
  TableRow
} from '../../../components/Table';
import Toolbar from './Toolbar';
import UploadDialog from './UploadDialog';

import {
  formatDate,
  formatSizeInBytes
} from '../../../helpers/formatters';

import { fetchSoundFiles, deleteSoundFile, uploadSoundFile } from '../service';
import { reducer, actions } from '../state';

const FilesList = ({ onPlayAudio }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const loadData = () => {
    fetchSoundFiles().then(({ data, error }) => {
      if (data) {
        dispatch(actions.setData(data));
      } else if (error) {
        dispatch(actions.setError(error));
      }
    });
  }

  useEffect(() => {
    dispatch(actions.INIT);
    loadData();
  }, []);

  return (
    <>
      {/* Display Error Message */}
      {state.error && (
        <div className="dib f5 fw6 bg-red br2 pa2 mb4 near-white">
          {state.error}
        </div>
      )}

      {/* Display Data Table */}
      <TableContainer>
        <Toolbar
          onRefresh={loadData}
          onUpload={() => dispatch(actions.upload(true))}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell></TableHeaderCell>
              <TableHeaderCell>File Name</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Size</TableHeaderCell>
              <TableHeaderCell>Uploaded At</TableHeaderCell>
              <TableHeaderCell>Uploaded By</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHeader>
          {Array.isArray(state.files) && (
            <TableBody>
              {state.files.map(({ id, name, type, size, uploadedAt, uploadedBy }) => (
                <TableRow key={id}>
                  <TableCell>
                    <TableInlineButton
                      className="hover-green"
                      onClick={() => onPlayAudio({ id, name })}
                    >
                      <PlayIcon />
                    </TableInlineButton>
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>{formatSizeInBytes(size)}</TableCell>
                  <TableCell>{formatDate(uploadedAt)}</TableCell>
                  <TableCell>{uploadedBy}</TableCell>
                  <TableCell>
                    <TableInlineButton
                      className="hover-light-red"
                      onClick={() =>
                        dispatch(actions.deleteFile(id, name))
                      }
                    >
                      <DeleteIcon />
                    </TableInlineButton>
                  </TableCell>
                </TableRow>
              ))}
              {state.files?.length > 0 && (
                <TableRow>
                  <TableCell colspan={7}>
                    <span className="pa3 gray">
                      Total files: {state.files.length}
                    </span>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>

        {/* Confirmation Dialog for Delete */}
        {state.deleteFile && (
          <ConfirmDialog
            title="Confirm Delete"
            confirmText="Delete"
            onCancel={() => dispatch(actions.DELETE_CANCEL)}
            onConfirm={() => {
              deleteSoundFile(state.deleteFile.id).then(({ success, error }) => {
                if (success) {
                  toast.success(`Successfully deleted ${state.deleteFile.name}.`);
                  loadData();
                } else if (error) {
                  dispatch(actions.DELETE_CANCEL);
                  dispatch(actions.setError(error));
                }
              })
            }}
          >
            Are you sure you want to delete <b>{state.deleteFile.name}</b> ?
          </ConfirmDialog>
        )}

        {/* Upload File Dialog */}
        {state.upload && (
          <UploadDialog
            onCancel={() => dispatch(actions.upload(false))}
            onSubmit={file => {
              uploadSoundFile(file).then(({ success, error }) => {
                dispatch(actions.upload(false));
                if (success) {
                  toast.success('Successfully uploaded file!');
                  loadData();
                } else {
                  dispatch(actions.setError(error));
                }
              })
            }}
          />
        )}

        {/* Display Loading Text */}
        {state.isLoading && (
          <div className="flex justify-center pv5">
            Loading Sound Files...
          </div>
        )}

        {/* Display No-Data Text */}
        {state.isEmpty && (
          <div className="flex justify-center pv5">
            No data to display.
          </div>
        )}
      </TableContainer>
    </>
  );
};

FilesList.propTypes = {
  onPlayAudio: func
};

FilesList.defaultProps = {
  onPlayAudio: () => {}
};

export default FilesList;