import dCharacter from 'assets/images/main/D.png';
import oCharacter from 'assets/images/main/O.png';
import iCharacter from 'assets/images/main/I.png';
import tCharacter from 'assets/images/main/T.png';

export const introduce = {
  title: 'ABOUT DO IT. DO IT SERVICE',
  introduce:
    '기존 스터디그룹과는 다른, 스터디 효과를 능률적으로 높힐 수 있는 두잇두잇을 소개할게요 :)',
};

export const introduceItem = [
  {
    title: '나와 맞는 스터디 그룹원',
    introduce:
      '스터디 그룹의 참석률, 대화 데이터를 통해 그룹 성향을 미리 파악하여 나에게 적합한 스터디그룹을 찾을 수 있어요.',
    width: '26.5rem',
    images: {
      image: dCharacter,
      alt: 'D 캐릭터',
      width: '4.8rem',
    },
  },
  {
    title: '스터디그룹 매니저, 슬랙봇',
    introduce:
      '슬랙봇이 공지, 참석자 리스트업, 패널티 DM 등 다양한 기능을 제공하여 스터디장의 부담을 줄여줘요.',
    width: '24.3rem',
    images: {
      image: oCharacter,
      alt: 'O 캐릭터',
      width: '6.5rem',
    },
  },
  {
    title: '효율적인 관리 시스템',
    introduce:
      '미팅 참석여부 투표, 구글 캘린더 연동 일정관리로 효율적이고 확실하게 관리를 도와줘요.',
    width: '23.6rem',
    images: {
      image: iCharacter,
      alt: 'I 캐릭터',
      width: '3rem',
    },
  },
  {
    title: '리마인드 기능',
    introduce:
      '특정 메시지를 정해진 시간에 리마인드 공지를 해줘서 착오나 깜빡 할 일을 최소화해줘요.',
    width: '24.3rem',
    images: {
      image: tCharacter,
      alt: 'T 캐릭터',
      width: '5.2rem',
    },
  },
];
