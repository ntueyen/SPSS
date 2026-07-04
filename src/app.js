const pageData = {
  overview: {
    title: '實驗研究法常用統計分析方法',
    subtitle: '研究生 SPSS 操作步驟網站教材',
    type: 'overview',
  },
  descriptive: {
    title: '敘述統計',
    subtitle: 'Descriptive Statistics',
    purpose: '用於整理樣本資料的集中趨勢、離散情形與分布型態，通常是所有實驗資料分析的第一步。',
    timing: '適用於描述各組前測、後測、背景變項與量表得分概況，並檢查是否有極端值、輸入錯誤或分布異常。',
    assumptions: ['依研究目的選擇平均數、標準差、中位數、百分比或圖形。', '若後續要進行推論統計，應同步檢視常態性、離群值與遺漏值。'],
    steps: ['開啟資料檔，確認每一個變項的名稱、測量層級與數值標籤設定正確。', '選擇 Analyze > Descriptive Statistics > Descriptives。', '將欲分析的連續變項移到 Variable(s) 欄位。', '點選 Options，勾選 Mean、Std. deviation、Minimum、Maximum；需要時加入 Skewness 與 Kurtosis。', '按 Continue，再按 OK 產生輸出。', '在論文撰寫時，以表格呈現各組平均數與標準差，並說明樣本數。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS12Desc.jpg', caption: 'SPSS Descriptives 對話框，來源：UW–Madison SSCC。' },
    websites: [
      ['UW–Madison SSCC：Descriptives: Means and Standard Deviations', 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/spss_students2.html'],
      ['Kent State University：SPSS Tutorials', 'https://libguides.library.kent.edu/SPSS'],
      ['Laerd Statistics：SPSS Statistics Tutorials', 'https://statistics.laerd.com/spss-tutorials/'],
      ['UCLA OARC：SPSS Learning Modules', 'https://stats.oarc.ucla.edu/spss/'],
    ],
    videos: ['SPSS descriptive statistics tutorial', 'SPSS descriptives means standard deviation', 'SPSS frequencies descriptives tutorial'],
  },
  ttest: {
    title: 'T 檢定',
    subtitle: 'T Test',
    purpose: '用於比較兩個平均數是否具有統計上的顯著差異，可分為單一樣本、獨立樣本與相依樣本 T 檢定。',
    timing: '實驗研究常用於比較實驗組與控制組後測差異，或比較同一組學生前測與後測的平均數差異。',
    assumptions: ['依研究設計選擇獨立樣本或相依樣本 T 檢定。', '連續依變項宜近似常態；獨立樣本 T 檢定需檢查變異數同質性。', '若前測已存在顯著差異，宜考慮 ANCOVA，而非只比較後測。'],
    steps: ['確認分組變項已以數字或文字清楚區分兩組。', '選擇 Analyze > Compare Means > Independent-Samples T Test；若為前後測同一批受試者，改選 Paired-Samples T Test。', '將依變項移至 Test Variable(s)。', '將分組變項移至 Grouping Variable，點 Define Groups 輸入兩組代碼。', '按 Continue，再按 OK。', '先閱讀 Levene’s Test，再依 Equal variances assumed 或 not assumed 的列判讀 t、df 與 p 值。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS31Ttest.jpg', caption: 'SPSS Independent-Samples T Test 對話框，來源：UW–Madison SSCC。' },
    websites: [
      ['UW–Madison SSCC：T-tests', 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/spss_students2.html'],
      ['REStore：Comparing Means', 'https://www.restore.ac.uk/srme/www/fac/soc/wie/research-new/srme/modules/mod1/10/index.html'],
      ['Kent State University：SPSS Tutorials', 'https://libguides.library.kent.edu/SPSS'],
      ['Laerd Statistics：Independent t-test using SPSS', 'https://statistics.laerd.com/spss-tutorials/independent-t-test-using-spss-statistics.php'],
    ],
    videos: ['SPSS independent samples t test tutorial', 'SPSS paired samples t test tutorial', 'SPSS t test Levene test interpretation'],
  },
  anova: {
    title: '單因子變異數分析（ANOVA）',
    subtitle: 'One-Way Analysis of Variance',
    purpose: '用於比較三組以上平均數是否具有顯著差異，是處理單一類別自變項與連續依變項的常見方法。',
    timing: '適用於比較不同教學法、不同教材版本或不同處理組別在學習成效上的差異。',
    assumptions: ['觀察值彼此獨立。', '各組依變項近似常態。', '各組變異數具同質性；若違反，可考慮 Welch ANOVA。', '若整體 F 檢定顯著，需進一步進行事後比較。'],
    steps: ['選擇 Analyze > Compare Means > One-Way ANOVA。', '將連續依變項放入 Dependent List。', '將組別變項放入 Factor。', '點選 Options，勾選 Descriptive 與 Homogeneity of variance test。', '點選 Post Hoc，依變異數同質性選擇 Tukey、Bonferroni 或 Games-Howell。', '按 OK，依 F 值、p 值與事後比較結果判讀組間差異。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS39Anova.jpg', caption: 'SPSS ANOVA / GLM 對話框示例，來源：UW–Madison SSCC。' },
    websites: [
      ['UW–Madison SSCC：ANOVA Tables and Tests', 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/spss_students2.html'],
      ['Laerd Statistics：One-way ANOVA using SPSS', 'https://statistics.laerd.com/spss-tutorials/one-way-anova-using-spss-statistics.php'],
      ['Top Tip Bio：How to perform a one-way ANOVA in SPSS', 'https://toptipbio.com/perform-one-way-anova-spss/'],
      ['UCLA OARC：SPSS Annotated Output', 'https://stats.oarc.ucla.edu/spss/output/'],
    ],
    videos: ['SPSS one way ANOVA tutorial', 'SPSS ANOVA post hoc Tukey tutorial', 'SPSS Welch ANOVA Games Howell'],
  },
  ancova: {
    title: '共變數分析（ANCOVA）',
    subtitle: 'Analysis of Covariance',
    purpose: '在比較組別平均數時，同時控制一個或多個連續共變項，以調整組間原始差異並提高估計精確度。',
    timing: '實驗研究常用於控制前測分數、先備能力或背景能力後，比較不同教學處理對後測表現的影響。',
    assumptions: ['共變項與依變項需具線性關係。', '各組迴歸斜率需同質。', '依變項殘差宜近似常態且變異數同質。', '共變項應在處理前測得，且不應受到實驗處理影響。'],
    steps: ['選擇 Analyze > General Linear Model > Univariate。', '將後測或結果變項放入 Dependent Variable。', '將組別變項放入 Fixed Factor(s)。', '將前測或欲控制的連續變項放入 Covariate(s)。', '點選 Model，可先檢查 Factor × Covariate 交互作用以確認迴歸斜率同質性。', '點選 Options，勾選 Descriptive statistics、Estimates of effect size 與 Homogeneity tests。', '按 OK，判讀調整後平均數、組別主效果與偏 Eta 平方。'],
    screenshot: { src: 'https://statistics.laerd.com/spss-tutorials/img/a/one-way-ancova-glm-univariate-dialogue-box-v25-and-above.png', caption: 'SPSS Univariate ANCOVA 對話框，來源：Laerd Statistics。' },
    websites: [
      ['Statistics Solutions：One-Way ANCOVA', 'https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/one-way-ancova/'],
      ['Laerd Statistics：ANCOVA using SPSS', 'https://statistics.laerd.com/spss-tutorials/ancova-using-spss-statistics.php'],
      ['Wikipedia：Analysis of covariance', 'https://en.wikipedia.org/wiki/Analysis_of_covariance'],
      ['UCLA OARC：SPSS GLM resources', 'https://stats.oarc.ucla.edu/spss/'],
    ],
    videos: ['SPSS ANCOVA tutorial', 'SPSS ANCOVA covariate pretest posttest', 'SPSS test homogeneity of regression slopes ANCOVA'],
  },
  pearson: {
    title: '皮爾森相關係數',
    subtitle: 'Pearson Correlation Coefficient',
    purpose: '用於檢驗兩個連續變項之間線性關係的方向與強度，相關係數 r 介於 -1 與 1 之間。',
    timing: '適用於分析學習動機與學習成效、科技接受度與使用意願、前測與後測分數之間的線性關係。',
    assumptions: ['兩變項宜為連續變項。', '關係型態需接近線性。', '應檢查散佈圖與離群值。', '相關不代表因果，尤其不得直接解讀為實驗效果。'],
    steps: ['選擇 Analyze > Correlate > Bivariate。', '將兩個以上欲分析的連續變項移至 Variables。', '在 Correlation Coefficients 勾選 Pearson。', '依研究假設選擇 Two-tailed 或 One-tailed；通常採 Two-tailed。', '可勾選 Flag significant correlations。', '按 OK，判讀 r 值方向、效果量大小與顯著性。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS25Corr.jpg', caption: 'SPSS Bivariate Correlations 對話框，來源：UW–Madison SSCC。' },
    websites: [
      ['UW–Madison SSCC：Correlation', 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/spss_students2.html'],
      ['Laerd Statistics：Pearson correlation using SPSS', 'https://statistics.laerd.com/spss-tutorials/pearsons-product-moment-correlation-using-spss-statistics.php'],
      ['Kent State University：SPSS Tutorials', 'https://libguides.library.kent.edu/SPSS'],
      ['UCLA OARC：Correlation resources', 'https://stats.oarc.ucla.edu/spss/'],
    ],
    videos: ['SPSS Pearson correlation tutorial', 'SPSS bivariate correlation interpretation', 'SPSS scatterplot Pearson correlation'],
  },
  factor: {
    title: '因素分析',
    subtitle: 'Factor Analysis',
    purpose: '用於從多個觀察變項中萃取潛在構面，常見於量表發展、建構效度檢驗與題項縮減。',
    timing: '適用於問卷量表題項眾多，研究者希望確認題項是否可歸納為若干構面時。',
    assumptions: ['樣本數需足夠，且題項之間應有合理相關。', '需檢查 KMO 與 Bartlett 球形檢定。', '需決定萃取方法、因素數與轉軸方式。', '因素命名應回到理論與題項內容，而非只依統計結果。'],
    steps: ['選擇 Analyze > Dimension Reduction > Factor。', '將量表題項移入 Variables。', '點選 Descriptives，勾選 KMO and Bartlett’s test of sphericity。', '點選 Extraction，選擇 Principal components 或 Principal axis factoring，並勾選 Scree plot。', '點選 Rotation，依構面是否相關選擇 Varimax 或 Oblimin。', '點選 Options，設定排序與抑制低於特定門檻的負荷量，例如 .40。', '按 OK，判讀 KMO、解釋變異量、陡坡圖與轉軸後因素負荷量。'],
    screenshot: { src: 'https://www.statisticssolutions.com/wp-content/uploads/2010/12/318-e1293739743415.png', caption: 'SPSS Factor Analysis Extraction 對話框，來源：Statistics Solutions。' },
    websites: [
      ['Statistics Solutions：Factor Analysis', 'https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/factor-analysis-2/'],
      ['UCLA OARC：Factor analysis resources', 'https://stats.oarc.ucla.edu/spss/'],
      ['Laerd Statistics：Principal components analysis using SPSS', 'https://statistics.laerd.com/spss-tutorials/principal-components-analysis-pca-using-spss-statistics.php'],
      ['IBM Docs：SPSS Statistics documentation', 'https://www.ibm.com/docs/en/spss-statistics'],
    ],
    videos: ['SPSS factor analysis tutorial KMO Bartlett', 'SPSS exploratory factor analysis tutorial', 'SPSS factor analysis varimax rotation'],
  },
  manova: {
    title: '多變量變異數分析（MANOVA）',
    subtitle: 'Multivariate Analysis of Variance',
    purpose: '用於同時檢驗組別在多個相關依變項上的整體差異，可降低多次單變量檢定造成的第一類錯誤膨脹。',
    timing: '適用於實驗處理可能同時影響多個結果變項，例如學習成效、學習動機與認知負荷。',
    assumptions: ['多個依變項需具合理相關，但不宜高度共線。', '需注意多變量常態、共變異數矩陣同質性與離群值。', '若 MANOVA 顯著，應進一步檢視單變量 ANOVA 與事後比較。'],
    steps: ['選擇 Analyze > General Linear Model > Multivariate。', '將多個連續依變項移入 Dependent Variables。', '將組別變項移入 Fixed Factor(s)。', '點選 Options，勾選 Descriptive statistics、Estimates of effect size 與 Homogeneity tests。', '需要呈現組別趨勢時，點選 Plots 設定剖面圖。', '按 OK，先判讀 Pillai’s Trace、Wilks’ Lambda 等多變量檢定，再檢視各依變項的後續結果。'],
    screenshot: { src: 'https://statistics.laerd.com/spss-tutorials/img/owm/one-way-MANOVA-glm-multivariate-dialogue-box-v25-and-above.png', caption: 'SPSS Multivariate 對話框，來源：Laerd Statistics。' },
    websites: [
      ['Laerd Statistics：One-way MANOVA using SPSS', 'https://statistics.laerd.com/spss-tutorials/one-way-manova-using-spss-statistics.php'],
      ['IBM Docs：SPSS Statistics documentation', 'https://www.ibm.com/docs/en/spss-statistics'],
      ['UCLA OARC：MANOVA annotated output', 'https://stats.oarc.ucla.edu/spss/output/'],
      ['Statistics Solutions：MANOVA resources', 'https://www.statisticssolutions.com/free-resources/directory-of-statistical-analyses/manova/'],
    ],
    videos: ['SPSS MANOVA tutorial', 'SPSS multivariate analysis of variance MANOVA', 'SPSS MANOVA Wilks Lambda interpretation'],
  },
  regression: {
    title: '逐步多元迴歸',
    subtitle: 'Stepwise Multiple Regression',
    purpose: '用於在多個預測變項中，以統計準則逐步選入或移除變項，建立對依變項具有解釋力的迴歸模型。',
    timing: '適用於探索哪些學習背景、態度或行為變項能預測學習成效；但若已有明確理論模型，宜優先採階層迴歸或強迫進入法。',
    assumptions: ['依變項為連續變項。', '需檢查線性、獨立性、常態性、等變異性與多元共線性。', '逐步法容易受樣本特性影響，應避免過度解讀為理論因果模型。', '論文中需清楚說明選入與排除準則。'],
    steps: ['選擇 Analyze > Regression > Linear。', '將結果變項移入 Dependent。', '將候選預測變項移入 Independent(s)。', '在 Method 下拉選單選擇 Stepwise。', '點選 Statistics，勾選 Estimates、Model fit、Collinearity diagnostics 與 Durbin-Watson。', '點選 Plots，檢查殘差圖；需要時儲存標準化殘差。', '按 OK，依 Model Summary、ANOVA、Coefficients 與 Excluded Variables 判讀模型。'],
    screenshot: { src: 'https://dw1.s81c.com//IMWUC/MessageImages/d90825f3e18e4780993fcbdb43f8bdcf.png', caption: 'SPSS Linear Regression Method 下拉選單中的 Stepwise，來源：IBM Community。' },
    websites: [
      ['IBM Community：Stepwise regression in SPSS', 'https://community.ibm.com/community/user/discussion/spss-26-is-the-stepwise-regression-method-thats-used-for-prediction-available-in-spss'],
      ['UW–Madison SSCC：Regression', 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/spss_students2.html'],
      ['Laerd Statistics：Multiple regression using SPSS', 'https://statistics.laerd.com/spss-tutorials/multiple-regression-using-spss-statistics.php'],
      ['UCLA OARC：Regression annotated output', 'https://stats.oarc.ucla.edu/spss/output/regression-analysis/'],
    ],
    videos: ['SPSS stepwise multiple regression tutorial', 'SPSS multiple regression collinearity diagnostics', 'SPSS linear regression method stepwise'],
  },
};

const order = ['overview', 'descriptive', 'ttest', 'anova', 'ancova', 'pearson', 'factor', 'manova', 'regression'];

const summary = [
  ['敘述統計', '整理資料概況與初步檢查', '所有分析前的資料檢視、樣本特性描述。'],
  ['T 檢定', '比較兩個平均數', '兩組後測差異、同一組前後測差異。'],
  ['單因子 ANOVA', '比較三組以上平均數', '三種以上教學處理或組別比較。'],
  ['ANCOVA', '控制共變項後比較組別', '控制前測或先備能力後比較後測。'],
  ['Pearson 相關', '檢驗兩連續變項線性關係', '分析動機、態度與成效的關聯。'],
  ['因素分析', '萃取潛在構面', '量表建構、效度檢核與題項縮減。'],
  ['MANOVA', '同時比較多個依變項', '多個學習成果或心理變項整體差異。'],
  ['逐步多元迴歸', '探索預測變項組合', '找出學習成效的統計預測因子。'],
];

const labels = {
  overview: '總覽',
  descriptive: '敘述統計',
  ttest: 'T 檢定',
  anova: 'ANOVA',
  ancova: 'ANCOVA',
  pearson: 'Pearson 相關',
  factor: '因素分析',
  manova: 'MANOVA',
  regression: '逐步迴歸',
};

function youtubeLink(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function linkList(items) {
  return items.map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noreferrer">${label}</a></li>`).join('');
}

function videoList(items) {
  return items.map((query) => `<li><a href="${youtubeLink(query)}" target="_blank" rel="noreferrer">YouTube 搜尋：${query}</a></li>`).join('');
}

function renderOverview() {
  return `
    <section class="hero">
      <p class="eyebrow">研究生 SPSS 教材</p>
      <h1>實驗研究法常用統計分析方法</h1>
      <p>本網站以教育與數位學習研究常見情境為例，整理實驗研究法中的統計分析選擇邏輯，並提供 SPSS 選單式操作步驟。</p>
    </section>

    <section class="section twoCol">
      <article>
        <h2>實驗研究法的定義</h2>
        <p>實驗研究法係指研究者透過操弄自變項、控制可能干擾研究結果的外在變項，並觀察依變項變化，以檢驗處理效果或因果關係的一種量化研究方法。在教育研究中，常見作法包括將受試者分派至實驗組與控制組，或採準實驗設計比較不同教學介入對學習成效、學習動機、態度或行為表現的影響。</p>
        <p>典型實驗研究需明確界定處理條件、測量工具、資料蒐集時間點與比較基準。若無法進行隨機分派，則應在設計或統計分析階段控制前測、先備能力或背景差異，以降低替代解釋的可能性。</p>
      </article>
      <aside class="noteBox">
        <h3>分析前提醒</h3>
        <ul>
          <li>先確認研究設計，再選擇統計方法。</li>
          <li>先檢查資料品質，再判讀顯著性。</li>
          <li>報告結果時應同時呈現效果量與描述統計。</li>
          <li>統計顯著不等於教育實務上必然重要。</li>
        </ul>
      </aside>
    </section>

    <section class="section">
      <h2>統計方法摘要及使用時機</h2>
      <div class="methodGrid">
        ${summary.map(([name, brief, timing]) => `<article class="methodCard"><h3>${name}</h3><strong>${brief}</strong><p>${timing}</p></article>`).join('')}
      </div>
    </section>
  `;
}

function renderMethod(page) {
  return `
    <section class="methodHero">
      <p class="eyebrow">SPSS 操作步驟</p>
      <h1>${page.title}</h1>
      <p>${page.subtitle}</p>
    </section>

    <section class="section twoCol">
      <article class="panelText">
        <h2>方法摘要</h2>
        <p>${page.purpose}</p>
        <h3>使用時機</h3>
        <p>${page.timing}</p>
      </article>
      <aside class="noteBox">
        <h3>分析前檢核</h3>
        <ul>${page.assumptions.map((item) => `<li>${item}</li>`).join('')}</ul>
      </aside>
    </section>

    <section class="section split">
      <article>
        <h2>SPSS 操作步驟</h2>
        <ol class="steps">${page.steps.map((item) => `<li>${item}</li>`).join('')}</ol>
      </article>
      <figure class="screenshot">
        <img src="${page.screenshot.src}" alt="${page.title} 的 SPSS 操作畫面截圖" loading="lazy" />
        <figcaption>${page.screenshot.caption}</figcaption>
      </figure>
    </section>

    <section class="section references">
      <div>
        <h2>推薦參考網站</h2>
        <ul>${linkList(page.websites)}</ul>
      </div>
      <div>
        <h2>YouTube 影片參考</h2>
        <ul>${videoList(page.videos)}</ul>
      </div>
    </section>
  `;
}

function render() {
  const key = location.hash.replace('#', '') || 'overview';
  const active = pageData[key] ? key : 'overview';
  const content = active === 'overview' ? renderOverview() : renderMethod(pageData[active]);

  document.querySelector('#root').innerHTML = `
    <div class="appShell">
      <aside class="sidebar">
        <a class="brand" href="#overview">SPSS 教材</a>
        <nav>${order.map((item) => `<a class="${item === active ? 'active' : ''}" href="#${item}">${labels[item]}</a>`).join('')}</nav>
      </aside>
      <main class="content">${content}</main>
    </div>
  `;
}

window.addEventListener('hashchange', render);
render();
