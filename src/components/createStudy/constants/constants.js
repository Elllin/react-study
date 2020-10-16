const createStudyConstants = {
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
      '그룹을 특색 있게 나타내는 해시태그를 입력해 주세요. 설정시 검색 확률이 높아져요! 등록된 태그를 클릭하면 삭제됩니다.',
    maxLength: 20,
  },
  locationOption: [
    '서울 전체',
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  categoryOption: [
    '대입・수능',
    '취업・면접',
    '대외활동・공모전',
    '어학・회화',
    '포트폴리오',
    '고시・공무원',
    '라이프・취미',
    '프로그래밍',
    '포트폴리오',
    '기타',
  ],
};

export default createStudyConstants;
