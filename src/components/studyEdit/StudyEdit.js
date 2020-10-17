import React, { useEffect, useState, useCallback, memo } from 'react';

import PropTypes from 'prop-types';
import CreateStudy from '../createStudy/CreateStudy';

function StudyEdit() {
  return <CreateStudy titleRendering={false} />;
}

export default memo(StudyEdit);
