import moment from 'moment';
import { DATETIME_FORMAT } from '../constants/app';

export const formatDate = (isoString) => {
  return moment(isoString).format(DATETIME_FORMAT);
}

export const formatSizeInBytes = (bytes) => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const sizes = ['B', 'KB', 'MB', 'GB'];
  return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
};