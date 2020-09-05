import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreateStudy } from 'modules/createStudy';
import { resetData } from 'modules/createStudy';

import CreateStudy from 'components/createStudy/CreateStudy';
import MailCheck from 'components/createStudy/MailCheck';
import ErrorPage from './common/ErrorPage';

function CreateStudyContainer() {
  const { data, loading, error } = useSelector((state) => {
    console.log(state.createStudy.createStudy);
    return state.createStudy.createStudy;
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    const strData = JSON.stringify(data);
    dispatch(fetchCreateStudy(strData));
  };

  useEffect(() => {
    return () => resetData(dispatch);
  }, [dispatch]);

  if (loading) return <CreateStudy loading={loading} onSubmit={onSubmit} />;
  if (error) return <ErrorPage />;

  return <>{data ? <MailCheck /> : <CreateStudy onSubmit={onSubmit} />}</>;
}

export default CreateStudyContainer;
