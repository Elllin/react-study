import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateStudy from 'components/createStudy/CreateStudy';
import { fetchCreateStudy } from 'modules/createStudy';
import MailCheck from 'components/createStudy/MailCheck';
import { useEffect } from 'react';
import { resetData } from 'modules/createStudy';

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

  if (loading) return <div>로딩중</div>;
  if (error) return <div>error</div>;

  return <>{data ? <MailCheck /> : <CreateStudy onSubmit={onSubmit} />}</>;
}

export default CreateStudyContainer;
