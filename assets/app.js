const categories = {
  logic: { name: '逻辑推理', symbol: '?', accent: '#c84a3a', intro: '从真假陈述到过河难题，靠线索、排除与有限步骤找到唯一答案。' },
  numbers: { name: '数字棋盘', symbol: '∑', accent: '#2f725b', intro: '在方格、算式与连接关系中找规律，适合想安静专注十分钟的时候。' },
  casual: { name: '休闲挑战', symbol: '●', accent: '#c99552', intro: '规则轻、反馈快，考验反应、规划和一点点运气。' },
  multiplayer: { name: '多人竞技', symbol: '✦', accent: '#7c6cf2', intro: '邀请朋友进房间，或进入公开服务器，与真实玩家同场较量。' }
};

const games = [
  { file: '2026热门小游戏精选.html', title: '2026 热门小游戏精选', cat: 'casual', icon: 'collection', level: '合集', desc: '多款热门玩法的综合入口' },
  { file: '2048.html', title: '2048', cat: 'numbers', icon: 'merge', level: '中等', desc: '滑动合并数字，挑战 2048' },
  { file: '24点.html', title: '24 点', cat: 'numbers', icon: 'calculator', level: '中等', desc: '用四个数字和四则运算得到 24' },
  { file: '爱因斯坦斑马题.html', title: '爱因斯坦斑马题', cat: 'logic', icon: 'houses', level: '烧脑', desc: '整理多条线索，推断所有对应关系' },
  { file: '称球问题.html', title: '称球问题', cat: 'logic', icon: 'scale', level: '烧脑', desc: '用有限次称量找出异常小球' },
  { file: '倒水问题.html', title: '倒水问题', cat: 'logic', icon: 'cups', level: '中等', desc: '借助不同容量的容器量出目标水量' },
  { file: '方块消除.html', title: '方块消除', cat: 'casual', icon: 'blocks', level: '轻松', desc: '安排方块，完成整行整列消除' },
  { file: '合成大西瓜.html', title: '合成大西瓜', cat: 'casual', icon: 'fruit', level: '轻松', desc: '让相同水果碰撞并不断升级' },
  { file: '河内塔.html', title: '河内塔', cat: 'logic', icon: 'tower', level: '中等', desc: '按大小规则把圆盘搬到目标柱' },
  { file: '见缝插针.html', title: '见缝插针', cat: 'casual', icon: 'target', level: '反应', desc: '把针插入旋转圆盘且互不碰撞' },
  { file: '经典逻辑游戏合集.html', title: '经典逻辑游戏合集', cat: 'logic', icon: 'puzzle', level: '合集', desc: '八款思维谜题的一站式合集' },
  { file: '经典谜题.html', title: '经典谜题收藏馆', cat: 'logic', icon: 'collection', level: '合集', desc: '四款经典智力问题的综合入口' },
  { file: '狼羊菜过河.html', title: '狼羊菜过河', cat: 'logic', icon: 'boat', level: '入门', desc: '安排摆渡顺序，让所有成员安全过河' },
  { file: '逻辑网格.html', title: '逻辑网格', cat: 'logic', icon: 'grid', level: '烧脑', desc: '在交叉表中标记排除与确定关系' },
  { file: '迷宫推理.html', title: '迷宫推理', cat: 'logic', icon: 'maze', level: '中等', desc: '观察结构，规划一条通向出口的路径' },
  { file: '骑士与骗子.html', title: '骑士与骗子', cat: 'logic', icon: 'masks', level: '中等', desc: '根据永真与永假的陈述识别身份' },
  { file: '人生重开模拟器.html', title: '人生重开模拟器', cat: 'casual', icon: 'life', level: '剧情', desc: '分配属性，看看另一种人生会怎样' },
  { file: '赛博徒步-生死鳌太线.html', title: '赛博徒步：生死鳌太线', cat: 'casual', icon: 'mountain', level: '挑战', desc: '在高风险路线中做出关键选择' },
  { file: '三个盒子.html', title: '三个盒子', cat: 'logic', icon: 'boxes', level: '入门', desc: '从错误标签中推断盒内物品' },
  { file: '扫雷.html', title: '扫雷', cat: 'numbers', icon: 'mine', level: '经典', desc: '根据数字提示找出所有地雷' },
  { file: '数独.html', title: '数独', cat: 'numbers', icon: 'sudoku', level: '经典', desc: '让每行、每列与每宫数字不重复' },
  { file: '数和Kakuro.html', title: '数和 Kakuro', cat: 'numbers', icon: 'sumgrid', level: '烧脑', desc: '根据总和提示填写不重复数字' },
  { file: '数回.html', title: '数回', cat: 'numbers', icon: 'loop', level: '烧脑', desc: '围绕数字画出一条不分叉的闭环' },
  { file: '数谜.html', title: '数谜', cat: 'numbers', icon: 'nodes', level: '中等', desc: '解开数字之间隐藏的约束关系' },
  { file: '数桥.html', title: '数桥', cat: 'numbers', icon: 'bridges', level: '烧脑', desc: '按数字要求连接岛屿且保持相通' },
  { file: '数织Nonogram.html', title: '数织 Nonogram', cat: 'numbers', icon: 'pixels', level: '中等', desc: '依据行列提示拼出隐藏像素图案' },
  { file: '数字华容道.html', title: '数字华容道', cat: 'numbers', icon: 'slider', level: '经典', desc: '移动方块，把打乱的数字恢复顺序' },
  { file: '贪吃蛇.html', title: '贪吃蛇', cat: 'casual', icon: 'snake', level: '反应', desc: '控制方向，吃得更长又别撞到自己' },
  { file: '霓虹贪吃蛇大作战.html', title: '霓虹贪吃蛇大作战', cat: 'casual', icon: 'neon-snake', level: '挑战', desc: '在霓虹竞技场吞噬成长，冲击长度榜首' },
  { file: '羊了个羊.html', title: '羊了个羊', cat: 'casual', icon: 'sheep', level: '挑战', desc: '从叠层牌面中凑齐三张完成消除' },
  { file: '真假话.html', title: '真假话', cat: 'logic', icon: 'dialog', level: '中等', desc: '判断陈述真假，锁定唯一答案' },
  { file: 'KenKen.html', title: 'KenKen 肯肯', cat: 'numbers', icon: 'mathgrid', level: '烧脑', desc: '结合拉丁方与算术目标完成棋盘' },
  { file: 'Nim取子.html', title: 'Nim 取子', cat: 'logic', icon: 'stones', level: '策略', desc: '计算必胜态，在最后一手取走石子' },
  { id: 'openfront', title: 'OpenFront.io', cat: 'multiplayer', icon: 'territory', level: '在线试玩', desc: '实时领土扩张、资源争夺与联盟攻防', kind: 'external', url: 'https://openfront.io/', source: 'https://github.com/openfrontio/OpenFrontIO' },
  { id: 'blockyard', title: 'Blockyard', cat: 'multiplayer', icon: 'voxel', level: '在线试玩', desc: '浏览器 3D 竞技场、射击、载具与合作玩法', kind: 'external', url: 'https://blockyard.gg/', source: 'https://github.com/Potrock/blockyard' },
  { id: 'gamenest', title: 'GameNest', cat: 'multiplayer', icon: 'party', level: '待部署', desc: '34 款房间制棋盘、派对与实时对战游戏', kind: 'server', source: 'https://github.com/absswds/GameNest', requirement: '需要 Node.js 服务端；适合先部署独立游戏服务器，再接回方寸游戏馆。' },
  { id: 'battlebox', title: 'BattleBox', cat: 'multiplayer', icon: 'arena', level: '待部署', desc: '15 款 2–8 人快速竞技与房间对战', kind: 'server', source: 'https://github.com/assishmoncs/battlebox', requirement: '需要 Node.js、Socket.IO 与持续在线的服务端，GitHub Pages 不能单独承载。' }
];

const main = document.querySelector('#main');
const searchPanel = document.querySelector('.search-panel');
const searchToggle = document.querySelector('.search-toggle');
const searchInput = document.querySelector('#game-search');
const searchResults = document.querySelector('#search-results');
const enc = encodeURIComponent;
let playerKeyHandler = null;

function gameId(game) { return game.file || game.id; }
function gameHref(game) { return `#game=${enc(gameId(game))}`; }
function categoryGames(key) { return games.filter(game => game.cat === key); }
function categoryHref(key) { return `#category=${key}`; }
function gameIcon(game) { return `<span class="game-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="assets/game-icons.svg#${game.icon}"></use></svg></span>`; }

function gameCard(game) {
  const cat = categories[game.cat];
  return `<a class="game-card" href="${gameHref(game)}" style="--accent:${cat.accent}">
    ${gameIcon(game)}<span class="level ${game.kind === 'server' ? 'level-pending' : ''}">${game.level}</span>
    <h3>${game.title}</h3><p>${game.desc}</p>
  </a>`;
}

function getRecent() {
  try { return JSON.parse(localStorage.getItem('fangcun-recent') || '[]'); } catch { return []; }
}

function saveRecent(id) {
  const recent = [id, ...getRecent().filter(item => item !== id)].slice(0, 6);
  localStorage.setItem('fangcun-recent', JSON.stringify(recent));
}

function renderHome() {
  const recent = getRecent().map(id => games.find(game => gameId(game) === id)).filter(game => game && game.kind !== 'server');
  const featuredFiles = ['经典逻辑游戏合集.html', '扫雷.html', '数独.html', '2048.html', '霓虹贪吃蛇大作战.html', '赛博徒步-生死鳌太线.html'];
  const featured = recent.length ? recent : featuredFiles.map(file => games.find(game => game.file === file)).filter(Boolean);
  const dailyPool = games.filter(game => game.file);
  const now = new Date();
  const dayIndex = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000) % dailyPool.length;
  const daily = dailyPool[dayIndex];
  const lastGame = recent[0];
  main.innerHTML = `<section class="hero">
    <div class="hero-copy"><span class="hero-badge">网页游戏馆</span><h1>坐下来，解开一局。</h1><p>33 款本地网页游戏与 4 个多人项目收进同一座小馆。无需下载，选择分类，打开就能玩。</p><div class="hero-actions"><a class="solid-button" href="${lastGame ? gameHref(lastGame) : gameHref(daily)}">${lastGame ? '继续上次游戏' : '开始今日一局'}</a><button class="quiet-button" type="button" data-random>随机选一款</button></div></div>
    <div class="hero-drawers">${Object.entries(categories).map(([key, cat]) => `<a class="drawer" href="${categoryHref(key)}"><span class="drawer-symbol">${cat.symbol}</span><span><strong>${cat.name}</strong><small>${cat.intro}</small></span><span class="drawer-count">${categoryGames(key).length}</span></a>`).join('')}</div>
  </section>
  <div class="score-strip" aria-label="游戏馆数据"><div><strong>33</strong><span>款本地游戏</span></div><div><strong>4</strong><span>个多人项目</span></div><div><strong>4</strong><span>种玩法分类</span></div></div>
  <div class="page-shell"><section><div class="section-heading"><div><h2>今日签</h2><p>每天从馆里抽出一款，给选择困难留条捷径。</p></div></div><article class="daily-ticket"><div class="ticket-date"><strong>${String(now.getDate()).padStart(2, '0')}</strong><span>${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}</span></div><div class="ticket-copy"><small>${categories[daily.cat].name} · ${daily.level}</small><h3>${daily.title}</h3><p>${daily.desc}</p></div><a class="ticket-stamp" href="${gameHref(daily)}">揭签开玩</a></article></section>
  <section class="section"><div class="section-heading"><div><h2>${recent.length ? '接着玩' : '从这里开始'}</h2><p>${recent.length ? '最近打开过的游戏都在这里。' : '第一次来？先从这些经典玩法里挑一款。'}</p></div><button class="quiet-button" type="button" data-open-search>查看全部 ${games.length} 款</button></div><div class="game-grid">${featured.map(gameCard).join('')}</div></section></div>`;
  document.querySelector('[data-open-search]')?.addEventListener('click', openSearch);
  document.querySelector('[data-random]')?.addEventListener('click', () => { const pick = dailyPool[Math.floor(Math.random() * dailyPool.length)]; location.hash = `game=${enc(pick.file)}`; });
}

function renderCategory(key) {
  const cat = categories[key];
  if (!cat) return renderNotFound();
  const list = categoryGames(key);
  const multiplayerGuide = key === 'multiplayer' ? `<section class="integration-note"><div><span class="eyebrow">接入说明</span><h2>先玩现成项目，再接入授权目录</h2><p>“在线试玩”会打开项目自己的公开服务器；“待部署”需要持续在线的 Node.js 服务端。GamePix 与 GameDistribution 需先完成发布商登记，拿到允许使用的游戏链接后才能正式批量导入。</p></div><div class="provider-links"><a href="https://partners.gamepix.com/publishers" target="_blank" rel="noopener">GamePix 发布商入口 <span>↗</span></a><a href="https://gamedistribution.com/publishers/embedded-links/" target="_blank" rel="noopener">GameDistribution 嵌入说明 <span>↗</span></a></div></section>` : '';
  main.innerHTML = `<div class="page-shell"><nav class="breadcrumbs" aria-label="当前位置"><a href="#home">首页</a><span>${cat.name}</span></nav>
    <header class="category-intro"><div><span class="category-mark">${cat.symbol} · ${list.length} 款</span><h1>${cat.name}</h1></div><p>${cat.intro}</p></header>
    ${multiplayerGuide}
    <div class="category-tools"><span>选择一款，进入游戏播放页</span><button class="quiet-button" type="button" data-open-search>搜索游戏</button></div>
    <div class="game-grid">${list.map(gameCard).join('')}</div></div>`;
  document.querySelector('[data-open-search]')?.addEventListener('click', openSearch);
}

function renderGame(id) {
  const game = games.find(item => gameId(item) === id);
  if (!game) return renderNotFound();
  if (game.kind) return renderRemoteGame(game);
  const cat = categories[game.cat];
  const siblings = categoryGames(game.cat);
  const next = siblings[(siblings.indexOf(game) + 1) % siblings.length];
  saveRecent(id);
  document.title = `${game.title} · 方寸游戏馆`;
  main.innerHTML = `<div class="player-shell"><nav class="breadcrumbs" aria-label="当前位置"><a href="#home">首页</a><a href="${categoryHref(game.cat)}">${cat.name}</a><span>${game.title}</span></nav>
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
    event.stopPropagation();
    focusGame();
    const forwarded = new KeyboardEvent('keydown', { key: event.key, code: event.code, bubbles: true, cancelable: true });
    frame.contentDocument?.dispatchEvent(forwarded);
  };
  window.addEventListener('keydown', playerKeyHandler, { capture: true, passive: false });
}

function renderRemoteGame(game) {
  const cat = categories[game.cat];
  const isLive = game.kind === 'external';
  if (isLive) saveRecent(game.id);
  document.title = `${game.title} · 方寸游戏馆`;
  main.innerHTML = `<div class="page-shell remote-page"><nav class="breadcrumbs" aria-label="当前位置"><a href="#home">首页</a><a href="${categoryHref(game.cat)}">${cat.name}</a><span>${game.title}</span></nav>
    <section class="remote-hero" style="--accent:${cat.accent}">${gameIcon(game)}<span class="category-mark">${cat.name} · ${game.level}</span><h1>${game.title}</h1><p>${game.desc}</p>
      <div class="remote-status ${isLive ? 'is-live' : 'is-pending'}"><span></span><strong>${isLive ? '公开服务器可以直接进入' : '已纳入游戏馆，等待服务端部署'}</strong></div>
      ${game.requirement ? `<p class="remote-requirement">${game.requirement}</p>` : '<p class="remote-requirement">游戏会在新窗口打开，方向键与快捷键只会作用于游戏窗口，不会干扰方寸游戏馆。</p>'}
      <div class="remote-actions">${isLive ? `<a class="solid-button" href="${game.url}" target="_blank" rel="noopener">进入在线游戏 ↗</a>` : ''}<a class="quiet-button" href="${game.source}" target="_blank" rel="noopener">查看开源项目 ↗</a><a class="quiet-button" href="${categoryHref(game.cat)}">返回多人竞技</a></div>
    </section></div>`;
}

function renderNotFound() {
  main.innerHTML = `<div class="empty-state"><h1>这一格是空的</h1><p>没有找到对应游戏，回到首页重新选择。</p><a class="solid-button" href="#home">回到首页</a></div>`;
}

function route() {
  if (!searchPanel.hidden) closeSearch();
  if (playerKeyHandler) {
    window.removeEventListener('keydown', playerKeyHandler, { capture: true });
    playerKeyHandler = null;
  }
  const hash = location.hash.replace(/^#/, '') || 'home';
  document.title = '方寸游戏馆 · 即开即玩';
  if (hash === 'home') renderHome();
  else if (hash.startsWith('category=')) renderCategory(hash.slice(9));
  else if (hash.startsWith('game=')) renderGame(decodeURIComponent(hash.slice(5)));
  else renderNotFound();
  let activeCategory = hash.startsWith('category=') ? hash.slice(9) : null;
  if (hash.startsWith('game=')) activeCategory = games.find(game => gameId(game) === decodeURIComponent(hash.slice(5)))?.cat;
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

document.querySelectorAll('[data-game-count]').forEach(node => { node.textContent = games.length; });
