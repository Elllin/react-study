import React from 'react';

import StudyEditContainer from 'containers/StudyEditContainer';

function StudyEditPage({ match }) {
  const id = match.params.id;
  return <StudyEditContainer editId={id} />;
}

export default StudyEditPage;
