/**
 * TODO: Add types for:
 *  > FILE UPLOAD
 *  > FILE PLAY
 */
const TYPES = {
  INIT:          '@/soundFiles/init',
  SET_DATA:      '@/soundFiles/setData',
  SET_ERROR:     '@/soundFiles/setError',
  DELETE:        '@/soundFiles/delete',
  DELETE_CANCEL: '@/soundFiles/deleteCancel',
  UPLOAD:        '@/soundFiles/upload'
};

export const actions = {
  INIT: {
    type: TYPES.INIT
  },
  setData: data => ({
    type: TYPES.SET_DATA,
    payload: data
  }),
  setError: error => ({
    type: TYPES.SET_ERROR,
    payload: error
  }),
  deleteFile: (id, name) => ({
    type: TYPES.DELETE,
    payload: {
      id,
      name
    }
  }),
  DELETE_CANCEL: {
    type: TYPES.DELETE_CANCEL
  },
  upload: enable => ({
    type: TYPES.UPLOAD,
    payload: enable
  })
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.INIT:
      return {
        ...state,
        isLoading: true,
        isEmpty: false,
        files: null,
        error: null
      }
    case TYPES.SET_DATA:
      return {
        ...state,
        isLoading: false,
        isEmpty: (
          !Array.isArray(payload) || payload.length === 0
        ),
        files: payload,
        error: null,
        deleteFile: null
      }
    case TYPES.SET_ERROR:
      return {
        ...state,
        error: String(payload)
      }
    case TYPES.DELETE:
      return {
        ...state,
        deleteFile: payload
      }
    case TYPES.DELETE_CANCEL:
      return {
        ...state,
        deleteFile: null
      }
    case TYPES.UPLOAD:
      return {
        ...state,
        upload: payload
      }
    default:
      return {
        ...state
      };
  }
};