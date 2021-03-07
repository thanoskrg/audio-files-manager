import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import WaveSurfer from 'wavesurfer.js';
import { BASE_URL } from '../../constants/server';

const AudioPlayer = ({ file }) => {
  const [audio, setAudio] = useState();
  useEffect(() => {
    setAudio(WaveSurfer.create({ container: '#waveform' }));
  }, []);
  useEffect(() => {
    audio && audio.on('ready', () => audio.play());
  }, [audio])
  useEffect(() => {
    if (file) {
      audio.empty();
      audio.load(`${BASE_URL}/api/audio/${file.id}`);
    }
  }, [audio, file])
  return (
    <div className={classnames('mb3', { 'dn': !file })}>
      {file && <h3 className="green">{file.name}</h3>}
      <div id="waveform" />
    </div>
  )
};

export default AudioPlayer;