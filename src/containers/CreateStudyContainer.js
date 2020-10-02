import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreateStudy } from 'modules/createStudy';
import { resetData } from 'modules/createStudy';

import CreateStudy from 'components/createStudy/CreateStudy';
import Invitation from 'components/invitation/Invitation';

function CreateStudyContainer() {
  const { data, loading, error } = useSelector((state) => state.createStudy.createStudy);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(fetchCreateStudy(data));
  };

  useEffect(() => {
    return () => resetData(dispatch);
  }, [dispatch]);

  if (loading) return <CreateStudy loading={loading} onSubmit={onSubmit} />;
  if (error) return <h1 style={{ fontSize: '50px' }}>{`에러가 발생했습니다!${error}`}</h1>;

  return <CreateStudy onSubmit={onSubmit} />;
}

export default CreateStudyContainer;
