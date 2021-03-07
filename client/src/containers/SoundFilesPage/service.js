import { API_URL } from '../../constants/server';

const getErrorMsg = (errorResponse, customMessage = 'Failed') => {
  const { status, statusText } = errorResponse;
  return `${statusText} (${status}): ${customMessage}.`;
}

export const fetchSoundFiles = () => {
  return new Promise(resolve => {
    const req = fetch(API_URL + '/soundFile');
    req
      .then(res => (
        res.ok ? res.json() : res
      ))
      .then(
        result => {
          const data = result.objects;
          if (data) {
            resolve({ data });
          } else if (!result.ok) {
            resolve({
              error: getErrorMsg(result, 'Failed to fetch data')
            });
          }
        },
        error => {
          resolve({ error })
        }
      );
  })
}

export const deleteSoundFile = fileId => {
  return new Promise(resolve => {
    const req = fetch(API_URL + '/soundFile/' + fileId, {
      method: 'DELETE'
    });
    req.then(res => {
      if (res.ok) {
        resolve({ success: true });
      } else {
        resolve({
          error: getErrorMsg(res, 'Failed to delete')
        });
      }
    })
  });
};

export const uploadSoundFile = file => {
  return new Promise(resolve => {
    const formData = new FormData();
    formData.append('file', file);
    fetch(API_URL + '/audio/upload', {
      method: 'POST',
      body: formData
    }).then(async res => {
      /* if uploaded successfully, save file */
      if (res.ok) {
        const { name, size, type } = await res.json();
        fetch(API_URL + '/soundFile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            size,
            type,
            uploadedBy: 'Nai Palm'
          })
        }).then(async res => {
          if (res.ok) {
            resolve({ success: true });
          } else {
            resolve({
              error: getErrorMsg(res, 'Failed to save')
            });
          }
        })
      } else {
        resolve({
          error: getErrorMsg(res, 'Failed to upload')
        });
      }
    })
  });
}