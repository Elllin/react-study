import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateStudy from 'components/createStudy/CreateStudy';
import { fetchCreateStudy } from 'modules/createStudy';
import MailCheck from 'components/createStudy/MailCheck';

function CreateStudyContainer() {
  const { data, loading, error } = useSelector((state) => state.createStudy.createStudy);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(fetchCreateStudy(JSON.stringify(data)));
  };

  if (loading) return <div>로딩중</div>;
  if (error) return <div>error</div>;

  return <>{data ? <MailCheck /> : <CreateStudy onSubmit={onSubmit} />}</>;
}

export default CreateStudyContainer;
