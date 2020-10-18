import React, { useEffect, useState, useCallback, memo } from 'react';

import PropTypes from 'prop-types';
import CreateStudy from '../createStudy/CreateStudy';

function StudyEdit({ data, duplication, onSubmit, loading }) {
  const { Category, Location, Tags, deposit, description, study_end, study_start, title } =
    data || {};

  let detailValue = getData();

  function getData() {
    if (!data) return;
    return {
      category: Category.name,
      location: Location.name,
      tags: Tags,
      deposit,
      title,
      description,
      duration: { startDate: study_start, endDate: study_end },
    };
  }

  return (
    <CreateStudy
      loading={loading}
      titleRendering={false}
      detailValue={detailValue}
      duplication={duplication}
      onSubmit={onSubmit}
    />
  );
}

export default memo(StudyEdit);
