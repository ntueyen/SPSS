const items = [
  { label: '數位學習', value: 84 },
  { label: '資訊教育', value: 76 },
  { label: '科技素養', value: 68 },
  { label: '教學實踐', value: 91 },
];

let dark = false;
let score = 72;
let selected = '教學實踐';

const root = document.querySelector('#root');

function getInterpretation(value) {
  if (value >= 80) return '高度準備';
  if (value >= 60) return '穩定發展';
  return '需要支持';
}

function render() {
  const activeItem = items.find((item) => item.label === selected) ?? items[0];
  root.innerHTML = `
    <main class="app ${dark ? 'app-dark' : ''}">
      <section class="workspace">
        <header class="topbar">
          <div>
            <p class="eyebrow">Vercel 互動測試</p>
            <h1>SPSS Interactive Demo</h1>
          </div>
          <button class="iconButton" type="button" data-action="theme" aria-label="切換主題">
            ${dark ? 'Sun' : 'Moon'}
          </button>
        </header>

        <section class="panel heroPanel">
          <div>
            <div class="status">
              <span aria-hidden="true">OK</span>
              <span>互動狀態正常</span>
            </div>
            <h2>研究與教學資料互動展示</h2>
            <p>
              這個頁面用於確認 GitHub 專案與 Vercel 部署流程是否可運作，並檢查使用者在瀏覽器中的互動是否能即時更新。
            </p>
          </div>

          <div class="scoreBox" aria-live="polite">
            <span class="scoreLabel">目前指標</span>
            <strong>${score}</strong>
            <span>${getInterpretation(score)}</span>
          </div>
        </section>

        <section class="grid">
          <div class="panel controls">
            <div class="panelTitle">
              <span aria-hidden="true">Chart</span>
              <h3>指標調整</h3>
            </div>
            <div class="stepper">
              <button type="button" data-action="decrease" aria-label="降低分數">-</button>
              <input type="range" min="0" max="100" value="${score}" data-action="range" aria-label="調整分數" />
              <button type="button" data-action="increase" aria-label="提高分數">+</button>
            </div>
            <button class="secondary" type="button" data-action="reset">
              <span aria-hidden="true">Reset</span>
              重設指標
            </button>
          </div>

          <div class="panel chart">
            <h3>主題資料</h3>
            <div class="bars">
              ${items
                .map(
                  (item) => `
                    <button type="button" class="bar ${item.label === selected ? 'active' : ''}" data-select="${item.label}">
                      <span>${item.label}</span>
                      <i style="width: ${item.value}%"></i>
                      <b>${item.value}</b>
                    </button>
                  `,
                )
                .join('')}
            </div>
          </div>

          <div class="panel summary">
            <h3>${activeItem.label}</h3>
            <p>目前選取主題的示範指標為 ${activeItem.value}，可用來確認點選、狀態更新與畫面重新渲染是否正常。</p>
          </div>
        </section>
      </section>
    </main>
  `;
}

root.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const action = button.dataset.action;
  if (action === 'theme') dark = !dark;
  if (action === 'decrease') score = Math.max(0, score - 5);
  if (action === 'increase') score = Math.min(100, score + 5);
  if (action === 'reset') score = 72;
  if (button.dataset.select) selected = button.dataset.select;

  render();
});

root.addEventListener('input', (event) => {
  if (event.target.dataset.action !== 'range') return;
  score = Number(event.target.value);
  render();
});

render();
