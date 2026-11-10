/* ============ 작품 데이터 (포트폴리오.pdf 기준) ============ */
const CHAPTERS = [
  {
    no: '01', color: 'var(--c1)', title: '"말보다 강한 한 장"', desc: '이미지와 타이포로 시선을 사로잡다',
    projects: [
      { title: '나만의 PR', type: '잡지 표지 디자인', tools: ['Ai', 'Ps'], role: '개인 100%', images: [9, 11],
        overview: ["매거진 커버 형식을 선택하여 자신의 이름 'YEDAM'을 타이틀로 삼아 나만의 브랜드를 구축했다. 일러스트 감성부터 여행·뷰티·패션까지 다양한 장르를 넘나들며 각기 다른 나의 모습을 담되, 모든 커버의 중심엔 일관되게 '이예담'이라는 사람을 놓았다."] },
      { title: '이예담!', type: '명함 디자인', tools: ['Ai', 'Ps'], role: '개인 100%', images: [12, 13],
        overview: ["나를 표현하는 명함 디자인으로, 따뜻한 오렌지 컬러를 기반으로 '예담'의 'ㅇ'을 꽃 형태로 형상화해 아이덴티티를 담았습니다. 앞면은 로고 중심, 뒷면은 정보 위주로 간결하게 구성했습니다."] },
      { title: '백지전', type: '미디어출판학과 졸업전시회 포스터', tools: ['Ai'], role: '개인 100%', images: [15],
        overview: ["여백과 그림자를 활용해 '백지'라는 주제를 시각적으로 표현한 졸업전시회 포스터입니다. 절제된 타이포그래피와 모노톤 컬러를 사용해 차분하면서도 감각적인 분위기를 강조하였으며, 전시의 메시지가 직관적으로 전달될 수 있도록 구성하였습니다."] },
    ],
  },
  {
    no: '02', color: 'var(--c2)', title: '"좋은 에너지는 전염된다"', desc: '우리의 에너지는 페이지 너머로 전염된다',
    projects: [
      { title: 'HYPER', type: '잡지 편집 · 표지 / 웰니스! / 인터뷰를 시작하겠습니다.', tools: ['Id', 'Ps'], role: '개인 100%', images: [17, 18, 19],
        overview: [
          "팀 프로젝트로 진행한 패션 잡지 제작 중, 개인 디자인 시안으로 작업한 표지입니다. 장원영을 커버 모델로 기용하고 Y2K 스타일링과 블루·화이트 레이아웃, 한글·영문 혼용 타이포그래피로 트렌드 무드를 담았습니다.",
          "<b>웰니스!</b> — 여성 라이프스타일 매거진 'hyper'의 내지 작업으로, 건강한 식문화 정보를 담은 타이포그래피 지면과 자극적인 분식을 건강한 이미지로 탈피시킨 브랜드 광고 지면을 대조시켜 세련된 잡지 구성미를 완성했습니다.",
          "<b>인터뷰를 시작하겠습니다.</b> — 좌측 인터뷰 지면의 가독성 높은 그리드 설계와 우측 브랜디드 광고의 감각적인 비주얼을 통해 상업 잡지의 시각적 완성도를 높였습니다.",
        ] },
      { title: 'TLOG', type: '티로그 · 북커버 디자인', tools: ['Ai', 'Ps'], role: '개인 50%', images: [20, 21],
        overview: [
          "여행의 설렘과 감성을 담은 캐릭터 중심의 북커버 디자인으로 친근한 브랜드 아이덴티티를 표현한 작업입니다. 절제된 컬러 배치와 여백 중심의 레이아웃을 활용해 깔끔한 분위기를 유지하였으며, 감성적인 메시지가 자연스럽게 전달되도록 구성한 디자인입니다.",
          "과일 캐릭터 일러스트와 손드로잉 텍스처를 활용해 브랜드 특유의 감각적인 무드를 시각화한 디자인입니다. 표지마다 서로 다른 컬러와 그래픽 요소를 적용해 개별 콘텐츠의 개성을 강조하였으며, 굿즈형 미니북 콘셉트로 디자인 완성도를 높인 작업입니다.",
        ] },
    ],
  },
  {
    no: '03', color: 'var(--c3)', title: '"꾸미지 않아도 오래 남는 것"', desc: '다양한 기록으로 남긴 나만의 온도를 표현하다',
    projects: [
      { title: '포동이의 행복', type: '그림책 편집', tools: ['Id', 'Ai'], role: '개인 100%', images: [23, 22],
        overview: ["나눔과 우정의 가치를 따뜻하게 풀어낸 그림책으로, 캐릭터 '포동이'의 이야기를 통해 함께 나누는 행복의 의미를 전달합니다. 단순한 일상의 사건을 감정 흐름 중심으로 구성해 몰입도를 높였으며, 아기자기한 일러스트와 편집 디자인으로 동화적인 무드를 완성했습니다."] },
      { title: "예담's BUCKET CALENDAR", type: '캘린더 디자인', tools: ['Ai', 'Ps'], role: '개인 100%', images: [25, 24],
        overview: ["각 월마다 다른 버킷리스트를 제안해, 일상 속에서 목표를 세우고 기록하는 경험을 유도한 참여형 캘린더입니다. 캐릭터와 컬러를 활용해 밝고 경쾌한 무드를 더하고, 꾸준한 사용과 흥미를 높이도록 디자인했습니다."] },
      { title: '아루앤', type: '밀리의 서재 웰컴키트', tools: ['Ai', 'Ps'], role: '개인 50%', images: [27],
        overview: ["'아루' 캐릭터를 활용해 \"책 속을 순찰하는 고양이\"라는 스토리의 웰컴키트를 기획한 팀 프로젝트이며, 그중 굿즈 4종의 디자인을 직접 수행했습니다. 팀원들과의 협업 속에서 디자인 컨셉을 실물로 구현하며 실무적인 문제 해결 능력과 완성도를 높이는 데 주력한 프로젝트입니다."] },
    ],
  },
  {
    no: '04', color: 'var(--c4)', title: '"조용히, 그러나 오래 머문다"', desc: '글과 편집으로 잔잔한 여운을 남기다',
    projects: [
      { title: '피치 못할 사정', type: '북커버 편집', tools: ['Id', 'Ps'], role: '개인 100%', images: [29],
        overview: ["언어유희적 제목에서 착안한 복숭아 오브제를 감성적인 수채화 화풍으로 풀어내어, 책의 서정적인 서사를 시각화한 북커버 디자인 프로젝트입니다."] },
      { title: '우리나라 국보!', type: '내지 편집', tools: ['Id', 'Ai'], role: '개인 100%', images: [31, 30],
        overview: ["불국사의 전경을 활용한 전면 도판 배치와 직관적인 인포그래픽 디자인을 통해 경주의 역사적 가치를 시각적으로 극대화한 가이드 페이지를 제작했습니다."] },
      { title: '왕초보 단어', type: '내지 편집', tools: ['Id', 'Ai'], role: '개인 100%', images: [33],
        overview: ["친근한 캐릭터와 파스텔톤 컬러를 활용해 학습 장벽을 낮추고, 체계적인 그리드 시스템으로 복잡한 언어 결합 원리를 정돈하여 가독성을 높인 교육용 내지를 디자인했습니다."] },
    ],
  },
  {
    no: '05', color: 'var(--c5)', title: '"어디서도 본 적 없는 나의 언어"', desc: '굿즈로 확장한 나만의 시각 언어를 표현하다',
    projects: [
      { title: '궁구마, 반짝감자, 견뎌박', type: '미디어출판학과 굿즈', tools: ['Ai', 'Ps'], role: '개인 100%', images: [35, 34],
        overview: ["신입생의 호기심부터 고학년의 인내까지, 미디어출판학과 학생들의 대학 생활 서사를 '궁구마, 반짝감자, 견뎌박'이라는 유쾌한 구황작물 캐릭터로 풀어낸 굿즈 디자인 프로젝트입니다. 캐릭터의 개성과 학과 생활의 공감 요소를 담아 스티커와 북마크 굿즈를 제작했으며, 일상 속에서 자연스럽게 학과 아이덴티티를 경험할 수 있도록 디자인했습니다."] },
      { title: '토실이', type: '캘린더 굿즈', tools: ['Ai', 'Ps'], role: '개인 100%', images: [37, 36],
        overview: ["캘린더 캐릭터로 탄생한 '토실이'의 세계관을 스티커와 거울 등 다채로운 굿즈로 구현하여, 일상적인 아이템에 캐릭터만의 독창적인 감성과 따스한 아이덴티티를 투영했습니다."] },
    ],
  },
];

const TOOL_NAMES = { Ps: 'Photoshop', Ai: 'Illustrator', Id: 'InDesign' };
const img = (n) => `works-${String(n).padStart(2, '0')}.jpg`;
const toolIcons = (tools) =>
  tools.map((t) => `<span class="skill-icon sm ${t.toLowerCase()}" title="${TOOL_NAMES[t]}">${t}</span>`).join('');

/* ============ 포트폴리오 렌더링 ============ */
const chaptersEl = document.getElementById('chapters');
const chapterNav = document.querySelector('.chapter-nav');
const allProjects = [];

CHAPTERS.forEach((ch) => {
  chapterNav.insertAdjacentHTML('beforeend',
    `<a href="#chapter-${ch.no}" style="--accent:${ch.color}"><b>${ch.no}</b>${ch.title.replace(/"/g, '')}</a>`);

  const projectsHtml = ch.projects.map((p) => {
    const idx = allProjects.push({ ...p, chapter: ch }) - 1;
    return `
      <article class="project" data-reveal>
        <button class="project-media" data-open="${idx}" aria-label="${p.title} 크게 보기">
          <img src="${img(p.images[0])}" alt="${p.title} — ${p.type}" loading="lazy">
          ${p.images.length > 1 ? `<span class="media-count">+${p.images.length - 1}</span>` : ''}
        </button>
        <div class="project-info">
          <h3>${p.title}</h3>
          <p class="project-type">${p.type}</p>
          <dl class="project-table">
            <div><dt>TOOL</dt><dd class="tool-icons">${toolIcons(p.tools)}</dd></div>
            <div><dt>ROLE</dt><dd>${p.role}</dd></div>
            <div><dt>PAGE</dt><dd>${p.images.length}장</dd></div>
          </dl>
          <p class="project-overview">${p.overview[0]}</p>
          <button class="btn-more" data-open="${idx}">자세히 보기</button>
        </div>
      </article>`;
  }).join('');

  chaptersEl.insertAdjacentHTML('beforeend', `
    <section class="chapter" id="chapter-${ch.no}" style="--accent:${ch.color}">
      <header class="chapter-head" data-reveal>
        <span class="chapter-no">${ch.no}</span>
        <div>
          <h2>${ch.title}</h2>
          <p>${ch.desc}</p>
        </div>
      </header>
      ${projectsHtml}
    </section>`);
});

/* ============ 모달 ============ */
const modal = document.getElementById('modal');
const mImg = document.getElementById('modal-img');
const mCount = document.getElementById('modal-count');
let current = null;
let page = 0;
let lastFocus = null;

function showPage() {
  const n = current.images.length;
  mImg.src = img(current.images[page]);
  mImg.alt = `${current.title} ${page + 1}/${n}`;
  mCount.textContent = n > 1 ? `${page + 1} / ${n}` : '';
  modal.querySelectorAll('.modal-arrow').forEach((b) => (b.hidden = n < 2));
}

function openModal(idx) {
  current = allProjects[idx];
  page = 0;
  lastFocus = document.activeElement;
  document.getElementById('modal-chapter').textContent = `${current.chapter.no}  ${current.chapter.title}`;
  document.getElementById('modal-chapter').style.setProperty('--accent', current.chapter.color);
  document.getElementById('modal-title').textContent = current.title;
  document.getElementById('modal-type').innerHTML =
    `${current.type}<span class="tool-icons">${toolIcons(current.tools)}</span><span>${current.role}</span>`;
  document.getElementById('modal-overview').innerHTML = current.overview.map((t) => `<p>${t}</p>`).join('');
  showPage();
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  if (lastFocus) lastFocus.focus();
}

function step(d) {
  const n = current.images.length;
  page = (page + d + n) % n;
  showPage();
}

document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-open]');
  if (opener) openModal(Number(opener.dataset.open));
  if (e.target.closest('[data-close]')) closeModal();
});
modal.querySelector('.prev').addEventListener('click', () => step(-1));
modal.querySelector('.next').addEventListener('click', () => step(1));
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

/* ============ 스크롤 등장 애니메이션 ============ */
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

/* ============ 메뉴 활성화 ============ */
const navLinks = document.querySelectorAll('.gnb-menu a');
const sectionIds = ['home', 'about', 'portfolio', 'contact'];
function updateNav() {
  const y = window.scrollY + window.innerHeight * 0.35;
  let active = 'home';
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= y) active = id;
  });
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) active = 'contact';
  navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${active}`));
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
