const pageData = {
  overview: {
    title: '實驗研究法常用統計分析方法',
    subtitle: '研究生 SPSS 操作步驟網站教材',
  },
  glossary: {
    title: '名詞解釋',
    subtitle: '量化統計常見術語',
  },
  descriptive: {
    title: '敘述統計',
    subtitle: 'Descriptive Statistics',
    purpose: '用於整理樣本資料的集中趨勢、離散情形與分布型態，通常是所有實驗資料分析的第一步。本頁另補充偏態與峰度的取得方式，協助研究者檢查資料分布是否明顯偏離常態。',
    timing: '適用於描述各組前測、後測、背景變項與量表得分概況，並檢查是否有極端值、輸入錯誤或分布異常。偏態與峰度常用於常態性初步檢查，特別是在後續要進行 T 檢定、ANOVA 或迴歸分析之前。',
    assumptions: ['依研究目的選擇平均數、標準差、中位數、百分比或圖形。', '若後續要進行推論統計，應同步檢視常態性、離群值與遺漏值。', '偏態（Skewness）接近 0 代表分布較對稱；峰度（Kurtosis）接近 0 代表分布形態接近常態分布的尖峭程度。'],
    stepGroups: [
      {
        title: '方法一：取得平均數、標準差、最小值、最大值、偏態與峰度',
        steps: ['開啟資料檔，確認每一個變項的名稱、測量層級與數值標籤設定正確。', '選擇 Analyze（分析） > Descriptive Statistics（描述統計） > Descriptives（描述）。', '將欲分析的連續變項移到 Variable(s)（變數）欄位。', '點選 Options（選項），勾選 Mean（平均數）、Std. deviation（標準差）、Minimum（最小值）、Maximum（最大值）、Skewness（偏態）與 Kurtosis（峰度）。', '按 Continue（繼續），再按 OK（確定）產生輸出。', '在輸出表中檢視 Skewness（偏態）與 Kurtosis（峰度），並搭配其標準誤初步判斷分布是否明顯偏離常態。'],
      },
      {
        title: '方法二：搭配圖形檢查分布型態',
        steps: ['選擇 Analyze（分析） > Descriptive Statistics（描述統計） > Explore（探索）。', '將連續變項移到 Dependent List（依變項清單）；若需分組檢查，將組別變項放入 Factor List（因子清單）。', '點選 Plots（圖形），勾選 Histogram（直方圖）與 Normality plots with tests（常態圖與檢定）。', '按 Continue（繼續），再按 OK（確定）產生輸出。', '綜合判讀直方圖、常態 Q-Q 圖、偏態與峰度；若分布明顯偏態，可考慮資料轉換、穩健統計或非參數方法。'],
      },
    ],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS12Desc.jpg', caption: 'SPSS Descriptives 對話框，來源：UW–Madison SSCC。' },    videos: [
      { title: "一夜。統計學：敘述統計", url: "https://www.youtube.com/watch?v=k7ihFw_tiro", views: "觀看次數：133,047次", summary: "介紹敘述統計的基本概念與 SPSS 操作，適合先建立平均數、標準差與資料分布檢視的基礎。" },
      { title: "SPSS 基本操作：資料整理、描述性統計", url: "https://www.youtube.com/watch?v=3y9AuJaHP8A", views: "觀看次數：40,032次", summary: "示範資料整理與描述性統計流程，適合作為研究生初次整理問卷或實驗資料時的操作參考。" },
      { title: "【統計分析】：4 SPSS-描述性統計分析", url: "https://www.youtube.com/watch?v=woiHx5saY5g", views: "觀看次數：27,924次", summary: "以 SPSS 描述性統計分析為主軸，說明如何產生基本統計量，適合搭配論文表格整理。" },
      { title: "一夜。統計學：如何將SPSS統計輸出直接轉為APA表格", url: "https://www.youtube.com/watch?v=KSqFc5Ayx7g", views: "觀看次數：25,429次", summary: "聚焦 SPSS 輸出結果與 APA 表格轉換，適合已完成描述統計後，進一步整理論文呈現格式。" },
      { title: "虛實整合・SPSS教學（第03課）：敘述統計、次數分配與百分比、平均數與標準差、平均數的排序", url: "https://www.youtube.com/watch?v=-nZsSxb3ygA", views: "觀看次數：18,966次", summary: "涵蓋次數分配、百分比、平均數與標準差，內容完整，適合用來補強描述統計的基礎操作。" },
    ],
  },
  ttest: {
    title: 'T 檢定',
    subtitle: 'One-Sample, Paired-Samples, and Independent-Samples T Tests',
    purpose: 'T 檢定用於檢驗平均數是否與特定標準值不同，或比較兩個平均數是否具有統計上的顯著差異。依研究設計可區分為單一樣本 T 檢定、相依樣本 T 檢定與獨立樣本 T 檢定。',
    timing: '單一樣本 T 檢定適用於比較一組樣本平均數與理論值或標準值；相依樣本 T 檢定適用於同一批受試者的前後測或配對資料；獨立樣本 T 檢定適用於比較兩個彼此獨立群組的平均數，例如實驗組與控制組。',
    assumptions: ['依研究設計先判斷資料是單組、配對重複測量，或兩個獨立群組。', '依變項宜為連續變項，且各組或差異分數宜近似常態。', '獨立樣本 T 檢定需檢查變異數同質性，並依 Levene’s Test（Levene 變異數同質性檢定）結果選擇正確列判讀。', '若兩組前測已存在明顯差異，宜考慮 ANCOVA（共變數分析），而非只比較後測。'],
    stepGroups: [
      {
        title: '1. 單一樣本 T 檢定（One-Sample T Test）',
        steps: ['適用情境：檢驗某一組樣本平均數是否不同於特定標準值，例如檢驗學生平均分數是否高於量表中點或既定通過標準。', '選擇 Analyze（分析） > Compare Means（比較平均數） > One-Sample T Test（單一樣本 T 檢定）。', '將欲檢定的連續變項移到 Test Variable(s)（檢定變項）欄位。', '在 Test Value（檢定值）輸入欲比較的標準值，例如 3、60 或其他理論值。', '按 OK（確定）產生輸出，判讀 t 值、df（自由度）、Sig.（顯著性）與平均差異。'],
      },
      {
        title: '2. 相依樣本 T 檢定（Paired-Samples T Test）',
        steps: ['適用情境：比較同一批受試者在兩個時間點或兩種條件下的平均數，例如前測與後測。', '選擇 Analyze（分析） > Compare Means（比較平均數） > Paired-Samples T Test（相依樣本 T 檢定）。', '將成對變項分別放入 Paired Variables（成對變項）欄位，例如 pretest（前測）與 posttest（後測）。', '確認每一列資料代表同一位受試者，且兩個變項的配對關係正確。', '按 OK（確定）產生輸出，判讀 Paired Samples Test（相依樣本檢定）表中的 t 值、df（自由度）與 Sig.（顯著性）。'],
      },
      {
        title: '3. 獨立樣本 T 檢定（Independent-Samples T Test）',
        steps: ['適用情境：比較兩個互不重疊群組的平均數，例如實驗組與控制組、男生與女生。', '確認分組變項已以數字或文字清楚區分兩組。', '選擇 Analyze（分析） > Compare Means（比較平均數） > Independent-Samples T Test（獨立樣本 T 檢定）。', '將依變項移至 Test Variable(s)（檢定變項），將分組變項移至 Grouping Variable（分組變項）。', '點選 Define Groups（定義組別），輸入兩組代碼，例如 1 與 2。', '按 Continue（繼續），再按 OK（確定）。先閱讀 Levene’s Test（Levene 變異數同質性檢定），再依 Equal variances assumed（假設變異數相等）或 Equal variances not assumed（不假設變異數相等）列判讀 t、df 與 p 值。'],
      },
    ],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS31Ttest.jpg', caption: 'SPSS Independent-Samples T Test 對話框，來源：UW–Madison SSCC。' },    videos: [
      { title: "一夜。統計學：獨立樣本t檢定", url: "https://www.youtube.com/watch?v=lKo0fTmDyQI", views: "觀看次數：218,828次", summary: "說明獨立樣本 t 檢定的概念、適用情境與 SPSS 操作，適合比較實驗組與控制組平均數差異。" },
      { title: "【謝章升專欄】SPSS教學-獨立樣本t檢定怎麼做", url: "https://www.youtube.com/watch?v=Q4AwLOldoiY", views: "觀看次數：117,790次", summary: "以 SPSS 操作示範獨立樣本 t 檢定，適合快速掌握分組變項、檢定變項與結果判讀方式。" },
      { title: "一夜。統計學：成對樣本t檢定", url: "https://www.youtube.com/watch?v=ez80OAKxd_c", views: "觀看次數：56,574次", summary: "介紹成對樣本 t 檢定，適合前後測或同一批受試者重複測量資料的平均數比較。" },
      { title: "T檢定是什麽？五分鐘學會三大T檢定！獨立樣本T檢定、配對樣本T檢定、單樣本T檢定", url: "https://www.youtube.com/watch?v=yKC-1lYtJpY", views: "觀看次數：28,136次", summary: "用較短時間整理三類 t 檢定的差異，適合在操作 SPSS 前先確認研究設計應採用哪一種檢定。" },
      { title: "虛實整合・SPSS教學（第04課）：獨立樣本t檢定的觀念與實作、單一樣本t檢定與成對樣本t檢定的觀念介紹", url: "https://www.youtube.com/watch?v=eWN0wlaffKs", views: "觀看次數：14,682次", summary: "同時介紹獨立樣本、單一樣本與成對樣本 t 檢定，適合需要比較不同 t 檢定用途的學習者。" },
    ],
  },
  anova: {
    title: '單因子變異數分析（ANOVA）',
    subtitle: 'One-Way Analysis of Variance',
    purpose: '用於比較三組以上平均數是否具有顯著差異，是處理單一類別自變項與連續依變項的常見方法。',
    timing: '適用於比較不同教學法、不同教材版本或不同處理組別在學習成效上的差異。',
    assumptions: ['觀察值彼此獨立。', '各組依變項近似常態。', '各組變異數具同質性；若違反，可考慮 Welch ANOVA。', '若整體 F 檢定顯著，需進一步進行事後比較。'],
    steps: ['選擇 Analyze（分析） > Compare Means（比較平均數） > One-Way ANOVA（單因子變異數分析）。', '將連續依變項放入 Dependent List（依變項清單）。', '將組別變項放入 Factor（因子）。', '點選 Options（選項），勾選 Descriptive（描述統計）與 Homogeneity of variance test（變異數同質性檢定）。', '點選 Post Hoc（事後比較），依變異數同質性選擇 Tukey、Bonferroni 或 Games-Howell。', '按 OK（確定），依 F 值、p 值與事後比較結果判讀組間差異。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS39Anova.jpg', caption: 'SPSS ANOVA / GLM 對話框示例，來源：UW–Madison SSCC。' },    videos: [
      { title: "一夜。統計學：單因子變異數分析&事後檢定", url: "https://www.youtube.com/watch?v=vEIJuQTO8ys", views: "觀看次數：199,471次", summary: "介紹單因子 ANOVA 與事後檢定，適合三組以上平均數比較與 SPSS 結果判讀。" },
      { title: "【謝章升專欄】SPSS教學-單變量分析ANOVA怎麼做", url: "https://www.youtube.com/watch?v=seLlVK77PVw", views: "觀看次數：103,248次", summary: "示範 SPSS 單變量 ANOVA 操作流程，適合學習變異數分析選單設定與輸出表判讀。" },
      { title: "SPSS教學, 單因子變異數分析(1-Way ANOVA)", url: "https://www.youtube.com/watch?v=tkzbwtveit8", views: "觀看次數：74,281次", summary: "聚焦單因子變異數分析的 SPSS 實作，適合用於三組以上教學處理效果比較。" },
      { title: "一夜。統計學：如何使用SPSS進行二因子變異數分析 & 單純主要效果檢定", url: "https://www.youtube.com/watch?v=3xtVizcP7g0", views: "觀看次數：62,806次", summary: "雖以二因子分析為主，但補充變異數分析邏輯與單純主要效果，適合延伸理解 ANOVA。" },
      { title: "SPSS 19 教學: Repeated-measures One-way ANOVA 實例操作", url: "https://www.youtube.com/watch?v=LA2v_YpMD7o", views: "觀看次數：19,676次", summary: "示範重複量數單因子 ANOVA，適合前後測或多時間點資料分析時作為延伸參考。" },
    ],
  },
  ancova: {
    title: '共變數分析（ANCOVA）',
    subtitle: 'Analysis of Covariance',
    purpose: '在比較組別平均數時，同時控制一個或多個連續共變項，以調整組間原始差異並提高估計精確度。',
    timing: '實驗研究常用於控制前測分數、先備能力或背景能力後，比較不同教學處理對後測表現的影響。',
    assumptions: ['共變項與依變項需具線性關係。', '各組迴歸斜率需同質。', '依變項殘差宜近似常態且變異數同質。', '共變項應在處理前測得，且不應受到實驗處理影響。'],
    steps: ['選擇 Analyze（分析） > General Linear Model（一般線性模型） > Univariate（單變量）。', '將後測或結果變項放入 Dependent Variable（依變項）。', '將組別變項放入 Fixed Factor(s)（固定因子）。', '將前測或欲控制的連續變項放入 Covariate(s)（共變項）。', '點選 Model（模式），可先檢查 Factor（因子） × Covariate（共變項）交互作用以確認迴歸斜率同質性。', '點選 Options（選項），勾選 Descriptive statistics（描述統計）、Estimates of effect size（效果量估計）與 Homogeneity tests（同質性檢定）。', '按 OK（確定），判讀調整後平均數、組別主效果與偏 Eta 平方。'],
    screenshot: { src: 'https://statistics.laerd.com/spss-tutorials/img/a/one-way-ancova-glm-univariate-dialogue-box-v25-and-above.png', caption: 'SPSS Univariate ANCOVA 對話框，來源：Laerd Statistics。' },    videos: [
      { title: "Analysis of Covariance (ANCOVA) - SPSS (part 1)", url: "https://www.youtube.com/watch?v=_uYASFVUNpQ", views: "觀看次數：368,117次", summary: "英文教學影片，完整示範 ANCOVA 在 SPSS 中的設定流程，適合補強共變項與組別效果的操作理解。" },
      { title: "ANCOVA in SPSS", url: "https://www.youtube.com/watch?v=1nL9yTCLPRs", views: "觀看次數：152,459次", summary: "說明如何在 SPSS 執行 ANCOVA，並涵蓋迴歸斜率同質性等假設檢核，適合進階使用者參考。" },
      { title: "Pretest and Posttest Data Analysis with ANCOVA in SPSS", url: "https://www.youtube.com/watch?v=0rGevuktP64", views: "觀看次數：110,467次", summary: "以「前測－後測」資料為例說明 ANCOVA，特別適合教育實驗研究中控制前測分數的情境。" },
      { title: "SPSS 19 教學: ANCOVA 實例操作", url: "https://www.youtube.com/watch?v=ELk95ve892E", views: "觀看次數：38,480次", summary: "中文 SPSS ANCOVA 實例操作影片，適合對照本教材步驟，理解依變項、固定因子與共變項配置。" },
      { title: "CHAP15共變數分析—屏東大學陳正昌講授", url: "https://www.youtube.com/watch?v=mrboblG_8xw", views: "觀看次數：16,119次", summary: "以統計分析教材章節方式講解共變數分析，適合想理解 ANCOVA 理論背景與分析詮釋的學習者。" },
    ],
  },
  twoway: {
    title: '二因子變異數分析',
    subtitle: 'Two-Way Analysis of Variance',
    purpose: '二因子變異數分析用於同時檢驗兩個類別自變項對一個連續依變項的影響，並可檢查兩個自變項之間是否存在交互作用。',
    timing: '適用於研究者同時關心兩個因素的效果，例如教學法（傳統教學、數位教學）與性別（男、女）是否影響學習成效，以及教學法效果是否會因性別而不同。',
    assumptions: ['依變項為連續變項，兩個自變項為類別變項。', '各組觀察值彼此獨立。', '各組依變項宜近似常態，且各組變異數具同質性。', '若交互作用達顯著，應優先解釋交互作用，再進一步檢視單純主要效果。'],
    steps: ['選擇 Analyze（分析） > General Linear Model（一般線性模型） > Univariate（單變量）。', '將連續結果變項放入 Dependent Variable（依變項）。', '將兩個類別自變項放入 Fixed Factor(s)（固定因子）。', '點選 Model（模式），通常保留 Full factorial（完整因子模式），以同時估計兩個主要效果與交互作用。', '點選 Options（選項），將兩個因子與其交互作用移到 Display Means for（顯示平均數）欄位，並勾選 Descriptive statistics（描述統計）、Estimates of effect size（效果量估計）與 Homogeneity tests（同質性檢定）。', '若需要事後比較，點選 Post Hoc（事後比較），針對水準超過兩組的因子選擇 Tukey、Bonferroni 或 Games-Howell 等方法。', '按 OK（確定）產生輸出。判讀時先看 Tests of Between-Subjects Effects（受試者間效應檢定）中的交互作用；若交互作用顯著，再進一步檢視單純主要效果或分組圖形。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS39Anova.jpg', caption: 'SPSS GLM / ANOVA 對話框示例，來源：UW–Madison SSCC。' },    videos: [
      { title: "一夜。統計學：如何使用SPSS進行二因子變異數分析 & 單純主要效果檢定", url: "https://www.youtube.com/watch?v=3xtVizcP7g0", views: "觀看次數：62,806次", summary: "示範如何使用 SPSS 進行二因子變異數分析與單純主要效果檢定，最貼近本分頁操作需求。" },
      { title: "【謝章升專欄】SPSS教學-單變量分析ANOVA怎麼做", url: "https://www.youtube.com/watch?v=seLlVK77PVw", views: "觀看次數：103,248次", summary: "介紹 SPSS 單變量 ANOVA 操作，可作為理解 GLM Univariate 選單與因子設定的基礎。" },
      { title: "變異數分析（ANOVA）是什麽？七分鐘帶你掌握各類變異數分析基礎！", url: "https://www.youtube.com/watch?v=BDDyuahrN2s", views: "觀看次數：18,836次", summary: "整理單向、兩因素與重複量數變異數分析的概念，適合在操作前釐清不同 ANOVA 類型。" },
      { title: "【統計分析】：10 SPSS ANOVA檢定分析", url: "https://www.youtube.com/watch?v=hTnq2j7bwBk", views: "觀看次數：17,882次", summary: "以 SPSS ANOVA 檢定分析為主，適合補充變異數分析輸出結果與基本判讀方式。" },
      { title: "SPSS (變異數分析概念講解及1-Way MANOVA分析操作演練及判讀)", url: "https://www.youtube.com/watch?v=4H9RucuXINA", views: "觀看次數：5,014次", summary: "雖含其他變異數分析主題，但有助於理解 SPSS GLM 架構與變異數分析結果判讀脈絡。" },
    ],
  },
  pearson: {
    title: '皮爾森相關係數',
    subtitle: 'Pearson Correlation Coefficient',
    purpose: '用於檢驗兩個連續變項之間線性關係的方向與強度，相關係數 r 介於 -1 與 1 之間。',
    timing: '適用於分析學習動機與學習成效、科技接受度與使用意願、前測與後測分數之間的線性關係。',
    assumptions: ['兩變項宜為連續變項。', '關係型態需接近線性。', '應檢查散佈圖與離群值。', '相關不代表因果，尤其不得直接解讀為實驗效果。'],
    steps: ['選擇 Analyze（分析） > Correlate（相關） > Bivariate（雙變量）。', '將兩個以上欲分析的連續變項移至 Variables（變項）。', '在 Correlation Coefficients（相關係數）勾選 Pearson（皮爾森）。', '依研究假設選擇 Two-tailed（雙尾）或 One-tailed（單尾）；通常採 Two-tailed（雙尾）。', '可勾選 Flag significant correlations（標記顯著相關）。', '按 OK（確定），判讀 r 值方向、效果量大小與顯著性。'],
    screenshot: { src: 'https://sscc.wisc.edu/sscc/pubs/spss/classintro/screenshots/spss_students2/SPSS25Corr.jpg', caption: 'SPSS Bivariate Correlations 對話框，來源：UW–Madison SSCC。' },    videos: [
      { title: "一夜。統計學：相關分析", url: "https://www.youtube.com/watch?v=_MeToCBVkdY", views: "觀看次數：132,243次", summary: "介紹相關分析的統計概念與 SPSS 操作，適合理解 Pearson 相關係數的方向、強度與顯著性。" },
      { title: "SPSS教學, 相關分析", url: "https://www.youtube.com/watch?v=GPNNVgkeY4w", views: "觀看次數：43,618次", summary: "以 SPSS 操作方式示範相關分析，適合學習如何選取變項並判讀相關矩陣。" },
      { title: "spss分析流程(相關係數)", url: "https://www.youtube.com/watch?v=-M29bCXRSaQ", views: "觀看次數：18,625次", summary: "聚焦相關係數分析流程，適合快速複習 SPSS 中相關分析的基本操作步驟。" },
      { title: "【統計分析】：11 SPSS 相關分析", url: "https://www.youtube.com/watch?v=9_mRtLJ-mUs", views: "觀看次數：15,690次", summary: "示範 SPSS 相關分析程序，適合搭配教材檢查變項關聯、顯著性與輸出結果。" },
      { title: "12. 相關分析", url: "https://www.youtube.com/watch?v=yUOQjo-SlBA", views: "觀看次數：3,265次", summary: "從實務問題、相關係數概念到 SPSS 操作與圖表製作，適合作為完整流程的補充教材。" },
    ],
  },
  factor: {
    title: '因素分析',
    subtitle: 'Factor Analysis',
    purpose: '用於從多個觀察變項中萃取潛在構面，常見於量表發展、建構效度檢驗與題項縮減。',
    timing: '適用於問卷量表題項眾多，研究者希望確認題項是否可歸納為若干構面時。',
    assumptions: ['樣本數需足夠，且題項之間應有合理相關。', '需檢查 KMO 與 Bartlett 球形檢定。', '需決定萃取方法、因素數與轉軸方式。', '因素命名應回到理論與題項內容，而非只依統計結果。'],
    steps: ['選擇 Analyze（分析） > Dimension Reduction（降維） > Factor（因素）。', '將量表題項移入 Variables（變項）。', '點選 Descriptives（描述），勾選 KMO and Bartlett’s test of sphericity（KMO 與 Bartlett 球形檢定）。', '點選 Extraction（萃取），選擇 Principal components（主成分）或 Principal axis factoring（主軸因子法），並勾選 Scree plot（陡坡圖）。', '點選 Rotation（轉軸），依構面是否相關選擇 Varimax（最大變異法）或 Oblimin（斜交轉軸）。', '點選 Options（選項），設定排序與抑制低於特定門檻的負荷量，例如 .40。', '按 OK（確定），判讀 KMO、解釋變異量、陡坡圖與轉軸後因素負荷量。'],
    screenshot: { src: 'https://www.statisticssolutions.com/wp-content/uploads/2010/12/318-e1293739743415.png', caption: 'SPSS Factor Analysis Extraction 對話框，來源：Statistics Solutions。' },    videos: [
      { title: "SPSS PCA (Part 1 KMO Measure and Bartlett Test for Sphericity)", url: "https://www.youtube.com/watch?v=efA-syfE6_U", views: "觀看次數：168,670次", summary: "英文影片，聚焦 KMO 與 Bartlett 檢定，適合補強因素分析前置檢核與取樣適切性的理解。" },
      { title: "一夜。統計學：探索性因素分析", url: "https://www.youtube.com/watch?v=sisqqv3gYBs", views: "觀看次數：139,387次", summary: "中文教學介紹探索性因素分析與 SPSS 報表判讀，適合量表建構與構面萃取情境。" },
      { title: "【謝章升專欄】SPSS教學-探索性因素分析(EFA)怎麼做", url: "https://www.youtube.com/watch?v=lO43VTdnCgw", views: "觀看次數：107,837次", summary: "示範 SPSS 探索性因素分析操作，適合學習題項投入、萃取、轉軸與因素負荷量判讀。" },
      { title: "How to do KMO and Bartlett test analysis in SPSS.", url: "https://www.youtube.com/watch?v=5h34lyVctP0", views: "觀看次數：46,330次", summary: "英文影片，說明如何在 SPSS 執行 KMO 與 Bartlett 檢定，適合作為因素分析前檢核參考。" },
      { title: "SPSS-第13章-因素分析", url: "https://www.youtube.com/watch?v=evvGWAyKA14", views: "觀看次數：27,470次", summary: "以章節式方式介紹因素分析，適合需要較完整中文脈絡，理解因素分析用途與操作流程的學習者。" },
    ],
  },
  manova: {
    title: '多變量變異數分析（MANOVA）',
    subtitle: 'Multivariate Analysis of Variance',
    purpose: '用於同時檢驗組別在多個相關依變項上的整體差異，可降低多次單變量檢定造成的第一類錯誤膨脹。',
    timing: '適用於實驗處理可能同時影響多個結果變項，例如學習成效、學習動機與認知負荷。',
    assumptions: ['多個依變項需具合理相關，但不宜高度共線。', '需注意多變量常態、共變異數矩陣同質性與離群值。', '若 MANOVA 顯著，應進一步檢視單變量 ANOVA 與事後比較。'],
    steps: ['選擇 Analyze（分析） > General Linear Model（一般線性模型） > Multivariate（多變量）。', '將多個連續依變項移入 Dependent Variables（依變項）。', '將組別變項移入 Fixed Factor(s)（固定因子）。', '點選 Options（選項），勾選 Descriptive statistics（描述統計）、Estimates of effect size（效果量估計）與 Homogeneity tests（同質性檢定）。', '需要呈現組別趨勢時，點選 Plots（圖形）設定剖面圖。', '按 OK（確定），先判讀 Pillai’s Trace（Pillai 跡）與 Wilks’ Lambda（Wilks Lambda）等多變量檢定，再檢視各依變項的後續結果。'],
    screenshot: { src: 'https://statistics.laerd.com/spss-tutorials/img/owm/one-way-MANOVA-glm-multivariate-dialogue-box-v25-and-above.png', caption: 'SPSS Multivariate 對話框，來源：Laerd Statistics。' },    videos: [
      { title: "Conducting a MANOVA in SPSS with Assumption Testing", url: "https://www.youtube.com/watch?v=rCgeWeXRtDs", views: "觀看次數：102,944次", summary: "英文影片，示範 MANOVA 與假設檢核，適合補強多依變項分析前的檢查與結果判讀。" },
      { title: "Multivariate Analysis of Variance (MANOVA) in SPSS Tutorial (SPSS Tutorial Video #22) - GLM", url: "https://www.youtube.com/watch?v=HomeGINBnuA", views: "觀看次數：90,755次", summary: "以 SPSS GLM 程序示範 MANOVA，適合理解多變量檢定表與後續單變量結果的關聯。" },
      { title: "MANCOVA in SPSS with the Testing of Assumptions", url: "https://www.youtube.com/watch?v=J0FeyWJgHiU", views: "觀看次數：73,259次", summary: "雖以 MANCOVA 為主，但涵蓋多變量分析與假設檢核，適合進一步理解 MANOVA 的延伸應用。" },
      { title: "Multivariate Analysis of Variance | MANOVA | SPSS", url: "https://www.youtube.com/watch?v=1Kff8pYjAYw", views: "觀看次數：42,466次", summary: "英文 SPSS MANOVA 操作影片，適合快速查看多個依變項與固定因子的設定方式。" },
      { title: "CHAP16多變量變異數分析—屏東大學陳正昌講授", url: "https://www.youtube.com/watch?v=gO4GA2eiOGY", views: "觀看次數：20,207次", summary: "中文章節式教學，介紹多變量變異數分析的理論與應用，適合作為 MANOVA 概念補充。" },
    ],
  },
  regression: {
    title: '逐步多元迴歸',
    subtitle: 'Stepwise Multiple Regression',
    purpose: '用於在多個預測變項中，以統計準則逐步選入或移除變項，建立對依變項具有解釋力的迴歸模型。',
    timing: '適用於探索哪些學習背景、態度或行為變項能預測學習成效；但若已有明確理論模型，宜優先採階層迴歸或強迫進入法。',
    assumptions: ['依變項為連續變項。', '需檢查線性、獨立性、常態性、等變異性與多元共線性。', '逐步法容易受樣本特性影響，應避免過度解讀為理論因果模型。', '論文中需清楚說明選入與排除準則。'],
    steps: ['選擇 Analyze（分析） > Regression（迴歸） > Linear（線性）。', '將結果變項移入 Dependent（依變項）。', '將候選預測變項移入 Independent(s)（自變項）。', '在 Method（方法）下拉選單選擇 Stepwise（逐步）。', '點選 Statistics（統計量），勾選 Estimates（估計值）、Model fit（模型適配）、Collinearity diagnostics（共線性診斷）與 Durbin-Watson。', '點選 Plots（圖形），檢查殘差圖；需要時儲存標準化殘差。', '按 OK（確定），依 Model Summary（模型摘要）、ANOVA（變異數分析）、Coefficients（係數）與 Excluded Variables（排除變項）判讀模型。'],
    screenshot: { src: 'https://dw1.s81c.com//IMWUC/MessageImages/d90825f3e18e4780993fcbdb43f8bdcf.png', caption: 'SPSS Linear Regression Method 下拉選單中的 Stepwise，來源：IBM Community。' },    videos: [
      { title: "一夜。統計學：迴歸分析", url: "https://www.youtube.com/watch?v=aNIChQUY-DA", views: "觀看次數：186,107次", summary: "介紹迴歸分析在論文假設檢定中的用途，適合作為逐步多元迴歸前的概念基礎。" },
      { title: "陈老师spss数据分析教程之spss多元线性回归分析", url: "https://www.youtube.com/watch?v=w-f7hXWlCAs", views: "觀看次數：97,852次", summary: "示範 SPSS 多元線性迴歸分析，適合參考依變項、預測變項與模型輸出的基本設定。" },
      { title: "【謝章升專欄】SPSS教學-複迴歸(Regression)與共線性是什麼意思", url: "https://www.youtube.com/watch?v=aVvWksWZlGE", views: "觀看次數：93,961次", summary: "說明複迴歸與共線性概念，適合逐步迴歸分析前檢查 VIF 與模型穩定性的學習需求。" },
      { title: "spss統計分析專題數位筆記 11﹙迴歸分析-中介效果檢驗﹚", url: "https://www.youtube.com/watch?v=10NGMy2X_es", views: "觀看次數：24,298次", summary: "以迴歸分析延伸至中介效果檢驗，適合已具備多元迴歸基礎後作進階研究分析參考。" },
      { title: "21. 逐步迴歸分析法", url: "https://www.youtube.com/watch?v=VKSLmfmGlEI", views: "觀看次數：18,261次", summary: "直接介紹逐步迴歸分析法，包含 SPSS 操作、多元共線性與 VIF，最貼近本分頁的操作主題。" },
    ],
  },
};

const order = ['overview', 'glossary', 'descriptive', 'ttest', 'anova', 'ancova', 'twoway', 'pearson', 'factor', 'manova', 'regression'];
const labels = {
  overview: '首頁總覽',
  glossary: '名詞解釋',
  descriptive: '敘述統計',
  ttest: 'T 檢定',
  anova: 'ANOVA',
  ancova: 'ANCOVA',
  twoway: '二因子 ANOVA',
  pearson: 'Pearson 相關',
  factor: '因素分析',
  manova: 'MANOVA',
  regression: '逐步迴歸',
};

const summary = [
  ['敘述統計', '整理資料概況與初步檢查', '所有分析前的資料檢視、樣本特性描述。'],
  ['T 檢定', '比較兩個平均數', '兩組後測差異、同一組前後測差異。'],
  ['單因子 ANOVA', '比較三組以上平均數', '三種以上教學處理或組別比較。'],
  ['ANCOVA', '控制共變項後比較組別', '控制前測或先備能力後比較後測。'],
  ['二因子 ANOVA', '檢驗兩個因子及交互作用', '同時比較兩個類別自變項對連續依變項的影響。'],
  ['Pearson 相關', '檢驗兩連續變項線性關係', '分析動機、態度與成效的關聯。'],
  ['因素分析', '萃取潛在構面', '量表建構、效度檢核與題項縮減。'],
  ['MANOVA', '同時比較多個依變項', '多個學習成果或心理變項整體差異。'],
  ['逐步多元迴歸', '探索預測變項組合', '找出學習成效的統計預測因子。'],
];


const glossarySections = [
  {
    title: '基本概念與資料型態',
    rows: [
      ['變項', 'Variable', '研究中可被觀察、測量或分類的特徵，例如學習成效、性別、年級或使用時間。'],
      ['自變項', 'Independent Variable', '研究者操弄、分類或用來解釋結果的變項，在實驗研究中通常代表不同處理條件。'],
      ['依變項', 'Dependent Variable', '研究者欲觀察或解釋的結果變項，例如後測分數、學習動機或任務表現。'],
      ['控制變項', 'Control Variable', '研究者希望固定或納入控制的因素，以降低其對研究結果的干擾。'],
      ['共變項', 'Covariate', '在分析中納入控制的連續變項，常見例子為前測分數或先備能力。'],
      ['名義尺度', 'Nominal Scale', '僅用於分類且無大小順序的資料型態，例如性別、班級、組別或學校類型。'],
      ['順序尺度', 'Ordinal Scale', '具有順序但間距不一定相等的資料型態，例如滿意度等級或排名。'],
      ['等距尺度', 'Interval Scale', '數值間距具有意義，但沒有真正零點的資料型態，例如某些標準化量表分數。'],
      ['比率尺度', 'Ratio Scale', '具有相等間距與真正零點的資料型態，例如時間、次數、年齡或答對題數。'],
      ['連續變項', 'Continuous Variable', '可在範圍內取許多數值的變項，例如測驗分數、反應時間或量表總分。'],
      ['類別變項', 'Categorical Variable', '以類別區分個體或群組的變項，例如實驗組與控制組。'],
      ['遺漏值', 'Missing Value', '資料中未被填答、未被記錄或不適合分析的空缺值，分析前需確認其處理方式。'],
    ],
  },
  {
    title: '敘述統計學',
    rows: [
      ['平均數', 'Mean', '所有觀察值加總後除以樣本數，用於表示資料的集中趨勢。'],
      ['中位數', 'Median', '將資料排序後位於中間的位置值，較不容易受到極端值影響。'],
      ['眾數', 'Mode', '資料中出現次數最多的數值或類別，常用於類別資料描述。'],
      ['標準差', 'Standard Deviation', '表示資料分散程度的指標，數值越大代表觀察值越分散。'],
      ['變異數', 'Variance', '標準差的平方，用於表示資料變異程度，也是許多推論統計的基礎。'],
      ['全距', 'Range', '最大值與最小值之差，可快速描述資料分散範圍。'],
      ['四分位距', 'Interquartile Range', '第三四分位數與第一四分位數之差，用於描述中間 50% 資料的分散程度。'],
      ['偏態', 'Skewness', '描述分布是否對稱的指標，正偏態與負偏態分別代表尾端方向不同。'],
      ['峰度', 'Kurtosis', '描述分布尖峭或平坦程度的指標，可作為分布型態檢查參考。'],
      ['次數分配', 'Frequency Distribution', '呈現各數值或類別出現次數的表格，常用於初步了解資料分布。'],
      ['百分比', 'Percentage', '以百分率表示各類別或數值所占比例，常搭配次數分配表呈現。'],
    ],
  },
  {
    title: '推論統計學',
    rows: [
      ['母群體', 'Population', '研究者欲推論的完整對象集合，例如某一教育階段全部學生。'],
      ['樣本', 'Sample', '從母群體中抽取並實際進行觀察或測量的研究對象。'],
      ['抽樣', 'Sampling', '從母群體選取樣本的程序，其品質會影響研究結果的推論能力。'],
      ['抽樣誤差', 'Sampling Error', '因以樣本估計母群體而產生的自然差異，通常無法完全避免。'],
      ['標準誤', 'Standard Error', '樣本統計量抽樣分布的標準差，用於估計統計量的不確定性。'],
      ['信賴區間', 'Confidence Interval', '以樣本資料估計母群體參數可能落入的範圍，常見為 95% 信賴區間。'],
      ['參數', 'Parameter', '母群體中的真實數值，例如母群體平均數或母群體相關係數。'],
      ['統計量', 'Statistic', '由樣本計算而得的數值，例如樣本平均數、樣本標準差或樣本相關係數。'],
      ['效果量', 'Effect Size', '描述差異或關聯程度大小的指標，可補充 p 值不足以呈現的實質意義。'],
      ['統計考驗力', 'Statistical Power', '在真有效果存在時，統計檢定能正確拒絕虛無假設的機率。'],
    ],
  },
  {
    title: '假設檢定',
    rows: [
      ['虛無假設', 'Null Hypothesis', '通常表示沒有差異、沒有關聯或沒有處理效果的假設。'],
      ['對立假設', 'Alternative Hypothesis', '與虛無假設相對，表示存在差異、關聯或處理效果的研究假設。'],
      ['顯著水準', 'Significance Level', '研究者事先設定可接受的第一類錯誤機率，常用 .05。'],
      ['p 值', 'p-value', '在虛無假設為真時，觀察到目前或更極端結果的機率。'],
      ['第一類錯誤', 'Type I Error', '虛無假設其實為真，但研究者錯誤地拒絕虛無假設。'],
      ['第二類錯誤', 'Type II Error', '虛無假設其實為假，但研究者未能拒絕虛無假設。'],
      ['單尾檢定', 'One-tailed Test', '研究假設指定效果方向時使用的檢定方式。'],
      ['雙尾檢定', 'Two-tailed Test', '研究假設不限定方向，只檢驗是否存在差異或關聯。'],
      ['自由度', 'Degrees of Freedom', '統計量計算中可自由變動的資訊量，常與樣本數及模型參數有關。'],
      ['臨界值', 'Critical Value', '決定是否拒絕虛無假設的切點，取決於顯著水準與自由度。'],
      ['信賴水準', 'Confidence Level', '信賴區間長期涵蓋母群體參數的比例，常見為 95%。'],
    ],
  },
  {
    title: 'SPSS 軟體選單上的名稱',
    rows: [
      ['分析', 'Analyze', 'SPSS 主要統計分析選單，多數描述統計與推論統計功能都由此進入。'],
      ['描述統計', 'Descriptive Statistics', '用於產生次數分配、平均數、標準差與其他基本描述統計量。'],
      ['比較平均數', 'Compare Means', '提供 T 檢定、單因子 ANOVA 等平均數比較相關功能。'],
      ['相關', 'Correlate', '用於執行 Pearson 相關、Spearman 相關與其他相關分析。'],
      ['迴歸', 'Regression', '提供線性迴歸、羅吉斯迴歸等模型分析功能。'],
      ['一般線性模型', 'General Linear Model', '用於執行單變量、多變量、重複量數等 GLM 相關分析。'],
      ['單變量', 'Univariate', 'GLM 中針對一個連續依變項進行分析的選項，可用於 ANCOVA。'],
      ['多變量', 'Multivariate', 'GLM 中同時處理多個連續依變項的選項，可用於 MANOVA。'],
      ['降維', 'Dimension Reduction', '用於因素分析、主成分分析等降低變項維度的程序。'],
      ['因素', 'Factor', 'Dimension Reduction 下的因素分析功能，用於萃取潛在構面。'],
      ['事後比較', 'Post Hoc', 'ANOVA 顯著後，用於檢查哪些組別之間存在差異的比較程序。'],
      ['選項', 'Options', '用於設定額外輸出內容，例如描述統計、效果量、同質性檢定或信賴區間。'],
      ['固定因子', 'Fixed Factor(s)', 'GLM 對話框中放置類別自變項或組別變項的位置。'],
      ['共變項', 'Covariate(s)', 'GLM 對話框中放置需控制之連續變項的位置。'],
      ['依變項', 'Dependent Variable', 'SPSS 對話框中放置研究結果變項的位置。'],
    ],
  },
];

function videoList(items) {
  return items
    .map(
      (video) => `
        <li class="video-item">
          <a href="${video.url}" target="_blank" rel="noreferrer">${video.title}</a>
          <span>${video.views}</span>
          <p>${video.summary}</p>
        </li>
      `,
    )
    .join('');
}

function renderHeader(active) {
  const page = pageData[active] ?? pageData.overview;
  return `
    <header class="site-header ${active === 'overview' ? 'home-header' : 'lesson-header'} image-hero">
      <div class="header-copy">
        <p class="eyebrow">Roger Yen 老師 NTUE 教材網站系列</p>
        <h1>${page.title}</h1>
        <p class="lead">${active === 'overview' ? '以實驗研究法為核心，整理研究生進行 SPSS 統計分析時最常用的判斷邏輯與操作流程。' : page.subtitle}</p>
      </div>
      <nav class="site-nav" aria-label="主要導覽">
        ${order.map((item) => `<a class="${item === active ? 'active' : ''}" href="#${item}">${labels[item]}</a>`).join('')}
      </nav>
    </header>
  `;
}

function renderOverview() {
  return `
    <section class="intro" aria-labelledby="definition-title">
      <article>
        <h2 id="definition-title">實驗研究法的定義</h2>
        <p>實驗研究法係指研究者透過操弄自變項、控制可能干擾研究結果的外在變項，並觀察依變項變化，以檢驗處理效果或因果關係的一種量化研究方法。在教育研究中，常見作法包括將受試者分派至實驗組與控制組，或採準實驗設計比較不同教學介入對學習成效、學習動機、態度或行為表現的影響。</p>
        <p>典型實驗研究需明確界定處理條件、測量工具、資料蒐集時間點與比較基準。若無法進行隨機分派，則應在設計或統計分析階段控制前測、先備能力或背景差異，以降低替代解釋的可能性。</p>
      </article>
      <figure class="lesson-visual">
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80" alt="研究資料與分析文件的桌面視覺圖" loading="lazy" />
      </figure>
    </section>

    <section class="concept-strip" aria-label="分析前提醒">
      <article><strong>研究設計</strong><span>先確認操弄、分組與測量時間點。</span></article>
      <article><strong>資料品質</strong><span>先檢查遺漏值、離群值與變項設定。</span></article>
      <article><strong>統計假設</strong><span>依方法檢查常態性、同質性與線性。</span></article>
      <article><strong>結果詮釋</strong><span>同時呈現顯著性、效果量與教育意義。</span></article>
    </section>

    <section id="methods" class="section-block" aria-labelledby="methods-title">
      <h2 id="methods-title">統計方法摘要及使用時機</h2>
      <div class="module-grid">
        ${summary.map(([name, brief, timing]) => `<article class="module-card"><h3>${name}</h3><strong>${brief}</strong><p>${timing}</p></article>`).join('')}
      </div>
    </section>
  `;
}


function renderGlossary() {
  return `
    <section class="intro glossary-intro" aria-labelledby="glossary-title">
      <article>
        <h2 id="glossary-title">量化統計常見術語</h2>
        <p>本頁整理研究生閱讀統計分析、撰寫論文與操作 SPSS 時常見的術語。各表格依概念功能分類，方便在進行資料分析或撰寫研究結果時快速查閱。</p>
      </article>
      <figure class="lesson-visual">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" alt="量化研究與統計術語查閱的視覺圖" loading="lazy" />
      </figure>
    </section>

    <section class="section-block glossary-sections">
      ${glossarySections
        .map(
          (section) => `
            <article class="glossary-section">
              <h2>${section.title}</h2>
              <div class="table-wrap">
                <table class="glossary-table">
                  <thead>
                    <tr>
                      <th>中文術語（或名詞）</th>
                      <th>英文術語（或名詞）</th>
                      <th>說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${section.rows
                      .map(
                        ([zh, en, desc]) => `
                          <tr>
                            <td>${zh}</td>
                            <td>${en}</td>
                            <td>${desc}</td>
                          </tr>
                        `,
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
            </article>
          `,
        )
        .join('')}
    </section>
  `;
}

function renderSteps(page) {
  if (page.stepGroups) {
    return page.stepGroups
      .map(
        (group) => `
          <section class="step-group">
            <h3>${group.title}</h3>
            <ol class="steps">${group.steps.map((item) => `<li>${item}</li>`).join('')}</ol>
          </section>
        `,
      )
      .join('');
  }

  return `<ol class="steps">${page.steps.map((item) => `<li>${item}</li>`).join('')}</ol>`;
}

function renderMethod(page) {
  return `
    <section class="lesson-overview">
      <article>
        <h2>方法摘要</h2>
        <p>${page.purpose}</p>
        <h3>使用時機</h3>
        <p>${page.timing}</p>
      </article>
      <aside class="learning-goals">
        <h3>分析前檢核</h3>
        <ul>${page.assumptions.map((item) => `<li>${item}</li>`).join('')}</ul>
      </aside>
      <figure class="lesson-visual">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="資料分析儀表板視覺圖" loading="lazy" />
      </figure>
    </section>

    <section class="section-block activity-layout">
      <article class="activity-panel">
        <h2>SPSS 操作步驟</h2>
        ${renderSteps(page)}
      </article>
      <figure class="spss-shot">
        <img src="${page.screenshot.src}" alt="${page.title} 的 SPSS 操作畫面截圖" loading="lazy" />
        <figcaption>${page.screenshot.caption}</figcaption>
      </figure>
    </section>

    <section class="section-block reference-layout video-reference">
      <article>
        <h2>YouTube 影片參考</h2>
        <ol>${videoList(page.videos)}</ol>
      </article>
    </section>
  `;
}

function render() {
  const key = location.hash.replace('#', '') || 'overview';
  const active = pageData[key] ? key : 'overview';
  const content = active === 'overview' ? renderOverview() : active === 'glossary' ? renderGlossary() : renderMethod(pageData[active]);
  document.querySelector('#root').innerHTML = `${renderHeader(active)}<main class="site-main">${content}</main><footer class="site-footer"><p>本網站為 Roger Yen 老師的研究方法與 SPSS 教學網站，由 Codex 依據教學設計自動生成維護。</p><p>外部截圖與搜尋連結僅供學習參考，正式研究報告仍應依課程要求與統計方法文獻撰寫。</p></footer>`;
}

window.addEventListener('hashchange', render);
render();
