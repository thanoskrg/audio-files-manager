import React, { useState } from 'react';
import { PageTitle } from '../../components/layout';
import AudioPlayer from './AudioPlayer';
import FilesList from './FilesList';

const SoundFilesPage = () => {
  const [selectedAudio, setSelectedAudio] = useState();
  return (
    <>
      <PageTitle title="Sound Files Management" />
      <AudioPlayer file={selectedAudio} />
      <FilesList onPlayAudio={setSelectedAudio} />
    </>
  );
};

export default SoundFilesPage;