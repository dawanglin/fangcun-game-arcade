const categories = {
  logic: { name: '逻辑推理', symbol: '?', accent: '#c84a3a', intro: '从真假陈述到过河难题，靠线索、排除与有限步骤找到唯一答案。' },
  numbers: { name: '数字棋盘', symbol: '∑', accent: '#2f725b', intro: '在方格、算式与连接关系中找规律，适合想安静专注十分钟的时候。' },
  casual: { name: '休闲挑战', symbol: '●', accent: '#c99552', intro: '规则轻、反馈快，考验反应、规划和一点点运气。' }
};

const games = [
  { file: '2026热门小游戏精选.html', title: '2026 热门小游戏精选', cat: 'casual', glyph: '集', level: '合集', desc: '多款热门玩法的综合入口' },
  { file: '2048.html', title: '2048', cat: 'numbers', glyph: '2ⁿ', level: '中等', desc: '滑动合并数字，挑战 2048' },
  { file: '24点.html', title: '24 点', cat: 'numbers', glyph: '24', level: '中等', desc: '用四个数字和四则运算得到 24' },
  { file: '爱因斯坦斑马题.html', title: '爱因斯坦斑马题', cat: 'logic', glyph: '斑', level: '烧脑', desc: '整理多条线索，推断所有对应关系' },
  { file: '称球问题.html', title: '称球问题', cat: 'logic', glyph: '⚖', level: '烧脑', desc: '用有限次称量找出异常小球' },
  { file: '倒水问题.html', title: '倒水问题', cat: 'logic', glyph: '水', level: '中等', desc: '借助不同容量的容器量出目标水量' },
  { file: '方块消除.html', title: '方块消除', cat: 'casual', glyph: '▦', level: '轻松', desc: '安排方块，完成整行整列消除' },
  { file: '合成大西瓜.html', title: '合成大西瓜', cat: 'casual', glyph: '瓜', level: '轻松', desc: '让相同水果碰撞并不断升级' },
  { file: '河内塔.html', title: '河内塔', cat: 'logic', glyph: '塔', level: '中等', desc: '按大小规则把圆盘搬到目标柱' },
  { file: '见缝插针.html', title: '见缝插针', cat: 'casual', glyph: '✣', level: '反应', desc: '把针插入旋转圆盘且互不碰撞' },
  { file: '经典逻辑游戏合集.html', title: '经典逻辑游戏合集', cat: 'logic', glyph: '八', level: '合集', desc: '八款思维谜题的一站式合集' },
  { file: '经典谜题.html', title: '经典谜题收藏馆', cat: 'logic', glyph: '四', level: '合集', desc: '四款经典智力问题的综合入口' },
  { file: '狼羊菜过河.html', title: '狼羊菜过河', cat: 'logic', glyph: '舟', level: '入门', desc: '安排摆渡顺序，让所有成员安全过河' },
  { file: '逻辑网格.html', title: '逻辑网格', cat: 'logic', glyph: '网', level: '烧脑', desc: '在交叉表中标记排除与确定关系' },
  { file: '迷宫推理.html', title: '迷宫推理', cat: 'logic', glyph: '迷', level: '中等', desc: '观察结构，规划一条通向出口的路径' },
  { file: '骑士与骗子.html', title: '骑士与骗子', cat: 'logic', glyph: '言', level: '中等', desc: '根据永真与永假的陈述识别身份' },
  { file: '人生重开模拟器.html', title: '人生重开模拟器', cat: 'casual', glyph: '生', level: '剧情', desc: '分配属性，看看另一种人生会怎样' },
  { file: '赛博徒步-生死鳌太线.html', title: '赛博徒步：生死鳌太线', cat: 'casual', glyph: '山', level: '挑战', desc: '在高风险路线中做出关键选择' },
  { file: '三个盒子.html', title: '三个盒子', cat: 'logic', glyph: '匣', level: '入门', desc: '从错误标签中推断盒内物品' },
  { file: '扫雷.html', title: '扫雷', cat: 'numbers', glyph: '✹', level: '经典', desc: '根据数字提示找出所有地雷' },
  { file: '数独.html', title: '数独', cat: 'numbers', glyph: '九', level: '经典', desc: '让每行、每列与每宫数字不重复' },
  { file: '数和Kakuro.html', title: '数和 Kakuro', cat: 'numbers', glyph: '和', level: '烧脑', desc: '根据总和提示填写不重复数字' },
  { file: '数回.html', title: '数回', cat: 'numbers', glyph: '回', level: '烧脑', desc: '围绕数字画出一条不分叉的闭环' },
  { file: '数谜.html', title: '数谜', cat: 'numbers', glyph: '谜', level: '中等', desc: '解开数字之间隐藏的约束关系' },
  { file: '数桥.html', title: '数桥', cat: 'numbers', glyph: '桥', level: '烧脑', desc: '按数字要求连接岛屿且保持相通' },
  { file: '数织Nonogram.html', title: '数织 Nonogram', cat: 'numbers', glyph: '织', level: '中等', desc: '依据行列提示拼出隐藏像素图案' },
  { file: '数字华容道.html', title: '数字华容道', cat: 'numbers', glyph: '格', level: '经典', desc: '移动方块，把打乱的数字恢复顺序' },
  { file: '贪吃蛇.html', title: '贪吃蛇', cat: 'casual', glyph: '蛇', level: '反应', desc: '控制方向，吃得更长又别撞到自己' },
  { file: '霓虹贪吃蛇大作战.html', title: '霓虹贪吃蛇大作战', cat: 'casual', glyph: '霓', level: '挑战', desc: '在霓虹竞技场吞噬成长，冲击长度榜首' },
  { file: '羊了个羊.html', title: '羊了个羊', cat: 'casual', glyph: '羊', level: '挑战', desc: '从叠层牌面中凑齐三张完成消除' },
  { file: '真假话.html', title: '真假话', cat: 'logic', glyph: '真', level: '中等', desc: '判断陈述真假，锁定唯一答案' },
  { file: 'KenKen.html', title: 'KenKen 肯肯', cat: 'numbers', glyph: '肯', level: '烧脑', desc: '结合拉丁方与算术目标完成棋盘' },
  { file: 'Nim取子.html', title: 'Nim 取子', cat: 'logic', glyph: '石', level: '策略', desc: '计算必胜态，在最后一手取走石子' }
];

const main = document.querySelector('#main');
const searchPanel = document.querySelector('.search-panel');
const searchToggle = document.querySelector('.search-toggle');
const searchInput = document.querySelector('#game-search');
const searchResults = document.querySelector('#search-results');
const enc = encodeURIComponent;
let playerKeyHandler = null;

function gameHref(game) { return `#game=${enc(game.file)}`; }
function categoryGames(key) { return games.filter(game => game.cat === key); }
function categoryHref(key) { return `#category=${key}`; }

function gameCard(game) {
  const cat = categories[game.cat];
  return `<a class="game-card" href="${gameHref(game)}" style="--accent:${cat.accent}">
    <span class="glyph" aria-hidden="true">${game.glyph}</span><span class="level">${game.level}</span>
    <h3>${game.title}</h3><p>${game.desc}</p>
  </a>`;
}

function getRecent() {
  try { return JSON.parse(localStorage.getItem('fangcun-recent') || '[]'); } catch { return []; }
}

function saveRecent(file) {
  const recent = [file, ...getRecent().filter(item => item !== file)].slice(0, 6);
  localStorage.setItem('fangcun-recent', JSON.stringify(recent));
}

function renderHome() {
  const recent = getRecent().map(file => games.find(game => game.file === file)).filter(Boolean);
  const featuredFiles = ['经典逻辑游戏合集.html', '扫雷.html', '数独.html', '2048.html', '霓虹贪吃蛇大作战.html', '赛博徒步-生死鳌太线.html'];
  const featured = recent.length ? recent : featuredFiles.map(file => games.find(game => game.file === file)).filter(Boolean);
  const now = new Date();
  const dayIndex = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000) % games.length;
  const daily = games[dayIndex];
  const lastGame = recent[0];
  main.innerHTML = `<section class="hero">
    <div class="hero-copy"><h1>坐下来，解开一局。</h1><p>${games.length} 款中文网页游戏收进同一座小馆。无需下载，选个抽屉，打开就能玩。</p><div class="hero-actions"><a class="solid-button" href="${lastGame ? gameHref(lastGame) : gameHref(daily)}">${lastGame ? '继续上次游戏' : '开始今日一局'}</a><button class="quiet-button" type="button" data-random>随机选一款</button></div></div>
    <div class="hero-drawers">${Object.entries(categories).map(([key, cat]) => `<a class="drawer" href="${categoryHref(key)}"><span class="drawer-symbol">${cat.symbol}</span><span><strong>${cat.name}</strong><small>${cat.intro}</small></span><span class="drawer-count">${categoryGames(key).length}</span></a>`).join('')}</div>
  </section>
  <div class="score-strip" aria-label="游戏馆数据"><div><strong>${games.length}</strong><span>款完整游戏</span></div><div><strong>3</strong><span>种玩法分类</span></div><div><strong>0</strong><span>下载与注册</span></div></div>
  <div class="page-shell"><section><div class="section-heading"><div><h2>今日签</h2><p>每天从馆里抽出一款，给选择困难留条捷径。</p></div></div><article class="daily-ticket"><div class="ticket-date"><strong>${String(now.getDate()).padStart(2, '0')}</strong><span>${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}</span></div><div class="ticket-copy"><small>${categories[daily.cat].name} · ${daily.level}</small><h3>${daily.title}</h3><p>${daily.desc}</p></div><a class="ticket-stamp" href="${gameHref(daily)}">揭签开玩</a></article></section>
  <section class="section"><div class="section-heading"><div><h2>${recent.length ? '接着玩' : '从这里开始'}</h2><p>${recent.length ? '最近打开过的游戏都在这里。' : '第一次来？先从这些经典玩法里挑一款。'}</p></div><button class="quiet-button" type="button" data-open-search>查看全部 ${games.length} 款</button></div><div class="game-grid">${featured.map(gameCard).join('')}</div></section></div>`;
  document.querySelector('[data-open-search]')?.addEventListener('click', openSearch);
  document.querySelector('[data-random]')?.addEventListener('click', () => { location.hash = `game=${enc(games[Math.floor(Math.random() * games.length)].file)}`; });
}

function renderCategory(key) {
  const cat = categories[key];
  if (!cat) return renderNotFound();
  const list = categoryGames(key);
  main.innerHTML = `<div class="page-shell"><nav class="breadcrumbs" aria-label="当前位置"><a href="#home">游戏库</a><span>${cat.name}</span></nav>
    <header class="category-intro"><div><span class="category-mark">${cat.symbol} · ${list.length} 款</span><h1>${cat.name}</h1></div><p>${cat.intro}</p></header>
    <div class="category-tools"><span>选择一款，进入游戏播放页</span><button class="quiet-button" type="button" data-open-search>搜索游戏</button></div>
    <div class="game-grid">${list.map(gameCard).join('')}</div></div>`;
  document.querySelector('[data-open-search]')?.addEventListener('click', openSearch);
}

function renderGame(file) {
  const game = games.find(item => item.file === file);
  if (!game) return renderNotFound();
  const cat = categories[game.cat];
  const siblings = categoryGames(game.cat);
  const next = siblings[(siblings.indexOf(game) + 1) % siblings.length];
  saveRecent(file);
  document.title = `${game.title} · 方寸游戏馆`;
  main.innerHTML = `<div class="player-shell"><nav class="breadcrumbs" aria-label="当前位置"><a href="#home">游戏库</a><a href="${categoryHref(game.cat)}">${cat.name}</a><span>${game.title}</span></nav>
    <header class="player-bar"><div><span class="category-mark">${cat.name} · ${game.level}</span><h1>${game.title}</h1><p class="player-summary">${game.desc}</p><span class="control-state" aria-live="polite">键盘控制仅作用于当前游戏</span></div><div class="player-actions"><button class="quiet-button" type="button" data-focus>进入键盘控制</button><button class="quiet-button" type="button" data-reload>重新载入</button><button class="quiet-button" type="button" data-fullscreen>全屏游戏</button><a class="solid-button" href="${enc(game.file)}" target="_blank" rel="noopener">新窗口打开</a></div></header>
    <div class="game-frame-wrap"><div class="frame-loading">正在摆好棋盘…</div><iframe class="game-frame" title="${game.title}" src="${enc(game.file)}" allow="fullscreen" loading="eager" tabindex="0"></iframe></div><aside class="play-next"><p>同类下一款<br><strong>${next.title}</strong> · ${next.desc}</p><a class="quiet-button" href="${gameHref(next)}">换一款继续</a></aside></div>`;
  const frame = document.querySelector('.game-frame');
  const focusGame = () => frame.contentWindow?.focus();
  frame.addEventListener('load', () => { document.querySelector('.frame-loading')?.classList.add('done'); focusGame(); });
  document.querySelector('[data-focus]').addEventListener('click', focusGame);
  document.querySelector('[data-reload]').addEventListener('click', () => { document.querySelector('.frame-loading')?.classList.remove('done'); frame.src = frame.src; });
  document.querySelector('[data-fullscreen]').addEventListener('click', () => frame.requestFullscreen?.());
  playerKeyHandler = event => {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D', ' '];
    if (!keys.includes(event.key) || /INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement?.tagName || '')) return;
    event.preventDefault();
    focusGame();
    const forwarded = new KeyboardEvent('keydown', { key: event.key, code: event.code, bubbles: true, cancelable: true });
    frame.contentDocument?.dispatchEvent(forwarded);
  };
  document.addEventListener('keydown', playerKeyHandler);
}

function renderNotFound() {
  main.innerHTML = `<div class="empty-state"><h1>这一格是空的</h1><p>没有找到对应游戏，回到游戏库重新选择。</p><a class="solid-button" href="#home">回到游戏库</a></div>`;
}

function route() {
  if (playerKeyHandler) {
    document.removeEventListener('keydown', playerKeyHandler);
    playerKeyHandler = null;
  }
  const hash = location.hash.replace(/^#/, '') || 'home';
  document.title = `方寸游戏馆 · ${games.length} 款即开即玩`;
  if (hash === 'home') renderHome();
  else if (hash.startsWith('category=')) renderCategory(hash.slice(9));
  else if (hash.startsWith('game=')) renderGame(decodeURIComponent(hash.slice(5)));
  else renderNotFound();
  let activeCategory = hash.startsWith('category=') ? hash.slice(9) : null;
  if (hash.startsWith('game=')) activeCategory = games.find(game => game.file === decodeURIComponent(hash.slice(5)))?.cat;
  document.querySelectorAll('[data-nav]').forEach(link => link.classList.toggle('active', link.dataset.nav === (activeCategory || 'home')));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function openSearch() {
  searchPanel.hidden = false;
  searchToggle.setAttribute('aria-expanded', 'true');
  searchInput.focus();
  updateSearch('');
}
function closeSearch() {
  searchPanel.hidden = true;
  searchToggle.setAttribute('aria-expanded', 'false');
  searchInput.value = '';
  searchToggle.focus();
}
function updateSearch(value) {
  const needle = value.trim().toLowerCase();
  const hits = (needle ? games.filter(game => `${game.title}${game.desc}${categories[game.cat].name}`.toLowerCase().includes(needle)) : games).slice(0, 10);
  searchResults.innerHTML = hits.length ? hits.map(game => `<a href="${gameHref(game)}"><span>${game.title}</span><small>${categories[game.cat].name} · ${game.level}</small></a>`).join('') : '<p>没有找到匹配的游戏，换个关键词试试。</p>';
}

searchToggle.addEventListener('click', () => searchPanel.hidden ? openSearch() : closeSearch());
document.querySelector('.search-close').addEventListener('click', closeSearch);
searchInput.addEventListener('input', event => updateSearch(event.target.value));
searchResults.addEventListener('click', event => { if (event.target.closest('a')) closeSearch(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !searchPanel.hidden) closeSearch(); if (event.key === '/' && searchPanel.hidden && !/input|textarea/i.test(document.activeElement.tagName)) { event.preventDefault(); openSearch(); } });
window.addEventListener('hashchange', route);
route();
