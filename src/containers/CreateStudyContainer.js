import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreateStudy, fetchDuplicationCheck } from 'modules/createStudy';
import { resetData } from 'modules/createStudy';
import debounce from 'lodash.debounce';

import CreateStudy from 'components/createStudy/CreateStudy';
import Invitation from 'components/invitation/Invitation';

function CreateStudyContainer() {
  const { loading, error } = useSelector((state) => state.createStudy.createStudy);
  const { error: duplication } = useSelector((state) => state.createStudy.duplicationCheck);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (data) => {
      dispatch(fetchCreateStudy(data));
    },
    [dispatch],
  );

  const onDuplicationCheck = debounce(
    (studyName) => dispatch(fetchDuplicationCheck(studyName)),
    500,
  );

  useEffect(() => {
    return () => resetData(dispatch);
  }, [dispatch]);

  if (loading) return <CreateStudy loading={loading} />;
  if (error) return <h1 style={{ fontSize: '50px' }}>{`에러가 발생했습니다!${error}`}</h1>;

  return (
    <CreateStudy
      onSubmit={onSubmit}
      onDuplicationCheck={onDuplicationCheck}
      duplication={duplication}
    />
  );
}

export default CreateStudyContainer;
