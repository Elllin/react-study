const createStudy = {
  groupName: {
    placeholder: '주제가 잘 드러나는 이름이 좋아요.',
    helpMessage: '특수문자는 사용이 불가해요.',
    maxLength: 20,
  },
  introduction: {
    placeholder: '그룹 소개, 이 방의 규칙 등을 자유롭게 작성해주세요.',
    maxLength: 5000,
  },

  hashtag: {
    placeholder: 'ex) 열공하는그룹, 취업목표',
    helpMessage:
      '그룹 해시태그 최대 3개, #없이 내용만 입력해주세요, 엔터를 입력하여 태그를 등록하세요.',
    helpBubbleMessage:
      '그룹을 특색 있게 나타내는 해시태그를 입력 해주세요. 설정시 검색 확률이 높아져요! 등록된 태그를 클릭하면 삭제됩니다.',
    maxLength: 20,
  },
  locationOption: ['강동구', '경기 전체', '인천 전체'],
  categoryOption: ['라이프・취미', '대학생 / 취업', '공무원 / 임용'],
};

export default createStudy;
