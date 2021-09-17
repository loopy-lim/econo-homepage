function AboutComponent() {
  return (
    <div>
{ /*첫 보이는 화면*/ }
<section id="banner">
  <div className="content">
    <header>
      <h2>ECONOVATION</h2>
      <p>
        에코노베이션은 코딩을 하고싶은 누구에게나<br />
        즐겁게 그리고 함께 개발하는 공간이 되는 것을 꿈꿉니다.
      </p>
    </header>
    <span className="image"><img height="100%" src="/images/logo.png" alt="" /></span>
  </div>
  <a href="#video" className="goto-next scrolly">Next</a>
</section>

<section id="video">
  <video width="100%" autoplay controls muted loop src="/assets/video/econo2020-1.mp4"></video>
</section>
{ /*첫번째 문구*/ }
<section id="one" className="spotlight style1 bottom">
  <span className="image fit main"><img src="./images/econo-main1.jpg" alt="" /></span>
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-4 col-12-medium">
          <header>
            <h2>에코노베이션 <br />당신을 초대합니다</h2>
            <p>
              에코노베이션은 개발에 열정이 있는 사람이라면 전공에 관계없이 누구나 지원 가능합니다.
            </p>
          </header>
        </div>
        <div className="col-4 col-12-medium">
          <p>
            단순히 프로그래밍 지식에만 치중하지 않고 다양한 지식을 서로 공유하여 융합형인재로 거듭날
            수 있습니다. 어플 , 웹 , 게임 , IoT, AI 등 IT 와 관련된 다양한 프로젝트 동아리
            회원들은 학기가 시작 되면 팀을 모아 프로젝트를 진행합니다.
          </p>
        </div>
        <div className="col-4 col-12-medium">
          <p>
            멘토 멘티가 함께 한 주에 한 번씩 만나 주간 미팅을 진행합니다. 멘토들의 깊은 피드백과
            팀원들 간의 의견을 공유할 수 있습니다. 관심 분야가 같은 동아리 부원들과 스터디를 진행 할
            수 있습니다. Spring, 알고리즘 , React 스터디 등 다양한 스터디들이 준비되어 있습니다
          </p>
        </div>
      </div>
    </div>
  </div>
  <a href="#two" className="goto-next scrolly">Next</a>
</section>

{ /*두번째 문구*/ }
<section id="two" className="spotlight style2 right">
  <span className="image fit main"><img src="images/econo-main2.jpg" alt="" /></span>
  <div className="content">
    <header>
      <h2>CNU IT FRONTIER INCUBATING PROJECT</h2>
      <p>
        에코노베이션은 매주 스터디와 프로젝트를 통해 게임/웹/모바일/IoT 등 다양한 주제를 연구하고
        개발합니다. 무엇이든 자유롭게 고안하고 만들어 볼 수 있는 즐거운 공간으로 에코노베이션은
        누구에게나 열려있습니다.
      </p>
    </header>

    <ul className="actions">
      <li>
        <a href="https://www.youtube.com/channel/UCepdmgc4w5EQIc1J0lqXVtA" className="button"
          >YouTube 페이지 방문하기</a
        >
      </li>
    </ul>
  </div>
  <a href="#three" className="goto-next scrolly">Next</a>
</section>

{ /*세번째 문구*/ }
<section id="three" className="spotlight style3 left">
  <span className="image fit main bottom"><img src="images/에코노intro2.png" alt="" /></span>
  <div className="content">
    <header>
      <h2>ECONO CURRICULUM</h2>
      <p>
        에코노베이션은 팀을 구성하여 방학을 포함한 한 학기동안 스터디와 프로젝트를 진행하고, 매주
        진행하는 세미나를 통해 서로 정보를 공유하고 아이디어를 내어 공모전에 도전합니다.
      </p>
    </header>
  </div>
  <a href="#four" className="goto-next scrolly">Next</a>
</section>

{ /*네번째 문구*/ }
<section id="four" className="wrapper style1 special fade-up">
  <div className="container">
    <header className="major">
      <h2>신입회원 선발 기준</h2>
    </header>
    <div className="box alt">
      <div className="row gtr-uniform">
        <section className="col-4 col-6-medium col-12-xsmall">
          <span className="icon solid alt major fa-fire"></span>
          <h3>열정</h3>
          <p>배움과 성장을 끊임없이 추구하는 사람</p>
        </section>
        <section className="col-4 col-6-medium col-12-xsmall">
          <span className="icon solid alt major fa-handshake"></span>
          <h3>협업</h3>
          <p>
            혼자가 아닌 팀의 소중함과 시너지를 이해하는 사람
          </p>
        </section>
        <section className="col-4 col-6-medium col-12-xsmall">
          <span className="icon solid alt major fa-smile"></span>
          <h3>성실</h3>
          <p>
            계획 뿐만 아니라 의미 있는 결실을 이끌어 낼 수 있는 사람
          </p>
        </section>
      </div>
    </div>
  </div>
</section>

{ /*다섯번째 문구*/ }
<section id="five" className="wrapper style2 special fade">
  <div className="container">
    <h2>수상 경력</h2>
    <header className="prize-left" className="chaning-text">
      <h2>~ 2018년</h2>
            <p></p>
            <p>2018 KOMIPO(중부발전) 정보 전략실 모바일 서비스 공모전 '우수상'</p>
            <p>2018 빛가람 에너지벨리 소프트웨어 작품경진대회 '장려상'</p>
            <p>2018 빛가람 에너지벨리 소프트웨어 작품경진대회 '장려상'</p>
            <p>2018 광주공공데이터를 이용한 창업공모전 '제품 및 서비스상'</p>
            <p>2018 GIST 창의융합경진대회 '융합기술원장상'</p>
            <p>2018 한국전력공사 일렉스톤 경진대회 해커톤 '장려상'</p>
            <p>2018 전남대학교 창업아이템 경진대회 '우수상'</p>
            <p>2018 광주글로벌게임센터 인디스타즈 '최우수상'</p>
            <p>2018 광주글로벌게임센터 인디스타즈 '우수상'</p>
            <p>2017 전남대학교 공부일촌 알고리즘 스터디 '협동상'</p>
            <p>2017 전남대학교 아이디어 리얼라이즈 공모전 '산학협력단장상'</p>
            <p>2017 빛가람에너지밸리 소프트웨어 작품 경진대회 '장려상'</p>
            <p>2017 광주글로벌게임센터 인디스타즈 '우수상'</p>
            <p>2017 대구글로벌 게임컨퍼런스 '우수상'</p>
            <p>한국스마트미디어학회 '우수상'</p>
    </header>
    <header className="prize-right">
      <h2>2019년</h2>
      <p></p>
      <p>2019 광주글로벌게임센터 인디스타즈 '최우수상'</p>
      <p>2019 광주글로벌게임센터 인디스타즈 '우수상'</p>
      <p>제 11회 소외된 90%를 위한 창의설계 경진대회 '대상'</p>
      <p>2019 ICT 융합 졸업작품 공모전 '챌린지 상'</p>
      <p>2019 광주광역시 공공데이터 활용 창업경진대회 '우수상'</p>
      <p>2019 뉴스빅데이터 해커톤 본선대회</p>
      <p>제 1회 전남대학교 AI_BigData 이노베이션 해커톤 '대상'</p>
      <p>제 1회 전남대학교 AI_BigData 이노베이션 해커톤 '닷넷소프트상'</p>
      <p>PBL기반 빅데이터분석 전문가과정 '최우수상'</p>
      <p>2019 GIGDC 게임제작 경진대회 '대상'</p>
      <p>2019 소프트웨어 개발보안 경진대회 '장려상'</p>
      <p>2019 BIC 부산 인디커넥트 '베스트 아트상'</p>
      <p>제 3회 KETI 모비우스 2.0 IoT 서비스 개발자 대회 '최우수상'</p>
      <p>2019 빛가람 에너지 밸리 소프트웨어 작품 경진대회 '장려상'</p>
      <p>2019 희망이음 경진대회 '동상'</p>
    </header>
  </div>
  <div className="container">
    <header className="prize-left">
      <h2>2020년</h2>
      <p></p>
      <p>제 2회 전남대학교 이노베이션 해커톤 대회 '대상', '금상', '은상', 'KT특별상'</p>
      <p>제 6회 Creative Space G A.I & IoT 해커톤 '대상(광주과학기술원 과학기술응용연구단장상)'</p>
      <p>네이버 커넥트재단 부스트코스 SW교육 '최우수동아리상'</p>
      <p>제 8회 글로벌 캡스톤 디자인 경진대회 '장려상'</p>
      <p>인공지능(AI) 문제해결 아이디어 공모전 '장려상'</p>
      <p>2020 오픈소스 컨트리뷰톤 '장려상'</p>
      <p>제 5회 광주글로벌게임센터 인디스타즈 '우수상'</p>
      <p>제 4회 정부혁신제안 끝장개발대회 '인기상'</p>
      <p>제 1회 오아시스 해커톤 '오아시스 특별상'</p>
      <p>광주 인공지능사관학교 '최우수상', '우수상'</p>
      <p>광주 인공지능사관학교 해커톤 '최우수상'</p>
      <p>2020 홀트아동복지회 미혼한부모가정 인식개선 공무전 '최우수상'</p>
      <p>전남대학교 LINK+ 페스티벌 CNU-창업옥션 '동상'</p>
      <p>한국장학재단 모의피칭 발표 '장려상'</p>
    </header>
    <header className="prize-right"></header>
  </div>
  <footer className="major">
    <ul className="actions special">
      <li><a href="/portfolio-2021-summer" className="button">포트폴리오 보기</a></li>
    </ul>
  </footer>
</section>

      </div>
  );
}

export default AboutComponent;