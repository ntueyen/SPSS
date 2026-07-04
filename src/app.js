const pageData = {
  overview: {
    title: '實驗研究法常用統計分析方法',
    subtitle: '研究生 SPSS 操作步驟網站教材',
  },
  descriptive: {
    title: '敘述統計',
    subtitle: 'Descriptive Statistics',
    purpose: '用於整理樣本資料的集中趨勢、離散情形與分布型態，通常是所有實驗資料分析的第一步。',
    timing: '適用於描述各組前測、後測、背景變項與量表得分概況，並檢查是否有極端值、輸入錯誤或分布異常。',
    assumptions: ['依研究目的選擇平均數、標準差、中位數、百分比或圖形。', '若後續要進行推論統計，應同步檢視常態性、離群值與遺漏值。'],
    steps: ['開啟資料檔，確認每一個變項的名稱、測量層級與數值標籤設定正確。', '選擇 Analyze > Descriptive Statistics > Descriptives。', '將欲分析的連續變項移到 Variable(s) 欄位。', '點選 Options，勾選 Mean、Std. deviation、Minimum、Maximum；需要時加入 Skewness 與 Kurtosis。', '按 Continue，再按 OK 產生輸出。', '在論文撰寫時，以表格呈現各組平均數與標準差，並說明樣本數。'],
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
    subtitle: 'T Test',
    purpose: '用於比較兩個平均數是否具有統計上的顯著差異，可分為單一樣本、獨立樣本與相依樣本 T 檢定。',
    timing: '實驗研究常用於比較實驗組與控制組後測差異，或比較同一組學生前測與後測的平均數差異。',
    assumptions: ['依研究設計選擇獨立樣本或相依樣本 T 檢定。', '連續依變項宜近似常態；獨立樣本 T 檢定需檢查變異數同質性。', '若前測已存在顯著差異，宜考慮 ANCOVA，而非只比較後測。'],
    steps: ['確認分組變項已以數字或文字清楚區分兩組。', '選擇 Analyze > Compare Means > Independent-Samples T Test；若為前後測同一批受試者，改選 Paired-Samples T Test。', '將依變項移至 Test Variable(s)。', '將分組變項移至 Grouping Variable，點 Define Groups 輸入兩組代碼。', '按 Continue，再按 OK。', '先閱讀 Levene’s Test，再依 Equal variances assumed 或 not assumed 的列判讀 t、df 與 p 值。'],
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
    steps: ['選擇 Analyze > Compare Means > One-Way ANOVA。', '將連續依變項放入 Dependent List。', '將組別變項放入 Factor。', '點選 Options，勾選 Descriptive 與 Homogeneity of variance test。', '點選 Post Hoc，依變異數同質性選擇 Tukey、Bonferroni 或 Games-Howell。', '按 OK，依 F 值、p 值與事後比較結果判讀組間差異。'],
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
    steps: ['選擇 Analyze > General Linear Model > Univariate。', '將後測或結果變項放入 Dependent Variable。', '將組別變項放入 Fixed Factor(s)。', '將前測或欲控制的連續變項放入 Covariate(s)。', '點選 Model，可先檢查 Factor × Covariate 交互作用以確認迴歸斜率同質性。', '點選 Options，勾選 Descriptive statistics、Estimates of effect size 與 Homogeneity tests。', '按 OK，判讀調整後平均數、組別主效果與偏 Eta 平方。'],
    screenshot: { src: 'https://statistics.laerd.com/spss-tutorials/img/a/one-way-ancova-glm-univariate-dialogue-box-v25-and-above.png', caption: 'SPSS Univariate ANCOVA 對話框，來源：Laerd Statistics。' },    videos: [
      { title: "Analysis of Covariance (ANCOVA) - SPSS (part 1)", url: "https://www.youtube.com/watch?v=_uYASFVUNpQ", views: "觀看次數：368,117次", summary: "英文教學影片，完整示範 ANCOVA 在 SPSS 中的設定流程，適合補強共變項與組別效果的操作理解。" },
      { title: "ANCOVA in SPSS", url: "https://www.youtube.com/watch?v=1nL9yTCLPRs", views: "觀看次數：152,459次", summary: "說明如何在 SPSS 執行 ANCOVA，並涵蓋迴歸斜率同質性等假設檢核，適合進階使用者參考。" },
      { title: "Pretest and Posttest Data Analysis with ANCOVA in SPSS", url: "https://www.youtube.com/watch?v=0rGevuktP64", views: "觀看次數：110,467次", summary: "以「前測－後測」資料為例說明 ANCOVA，特別適合教育實驗研究中控制前測分數的情境。" },
      { title: "SPSS 19 教學: ANCOVA 實例操作", url: "https://www.youtube.com/watch?v=ELk95ve892E", views: "觀看次數：38,480次", summary: "中文 SPSS ANCOVA 實例操作影片，適合對照本教材步驟，理解依變項、固定因子與共變項配置。" },
      { title: "CHAP15共變數分析—屏東大學陳正昌講授", url: "https://www.youtube.com/watch?v=mrboblG_8xw", views: "觀看次數：16,119次", summary: "以統計分析教材章節方式講解共變數分析，適合想理解 ANCOVA 理論背景與分析詮釋的學習者。" },
    ],
  },
  pearson: {
    title: '皮爾森相關係數',
    subtitle: 'Pearson Correlation Coefficient',
    purpose: '用於檢驗兩個連續變項之間線性關係的方向與強度，相關係數 r 介於 -1 與 1 之間。',
    timing: '適用於分析學習動機與學習成效、科技接受度與使用意願、前測與後測分數之間的線性關係。',
    assumptions: ['兩變項宜為連續變項。', '關係型態需接近線性。', '應檢查散佈圖與離群值。', '相關不代表因果，尤其不得直接解讀為實驗效果。'],
    steps: ['選擇 Analyze > Correlate > Bivariate。', '將兩個以上欲分析的連續變項移至 Variables。', '在 Correlation Coefficients 勾選 Pearson。', '依研究假設選擇 Two-tailed 或 One-tailed；通常採 Two-tailed。', '可勾選 Flag significant correlations。', '按 OK，判讀 r 值方向、效果量大小與顯著性。'],
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
    steps: ['選擇 Analyze > Dimension Reduction > Factor。', '將量表題項移入 Variables。', '點選 Descriptives，勾選 KMO and Bartlett’s test of sphericity。', '點選 Extraction，選擇 Principal components 或 Principal axis factoring，並勾選 Scree plot。', '點選 Rotation，依構面是否相關選擇 Varimax 或 Oblimin。', '點選 Options，設定排序與抑制低於特定門檻的負荷量，例如 .40。', '按 OK，判讀 KMO、解釋變異量、陡坡圖與轉軸後因素負荷量。'],
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
    steps: ['選擇 Analyze > General Linear Model > Multivariate。', '將多個連續依變項移入 Dependent Variables。', '將組別變項移入 Fixed Factor(s)。', '點選 Options，勾選 Descriptive statistics、Estimates of effect size 與 Homogeneity tests。', '需要呈現組別趨勢時，點選 Plots 設定剖面圖。', '按 OK，先判讀 Pillai’s Trace、Wilks’ Lambda 等多變量檢定，再檢視各依變項的後續結果。'],
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
    steps: ['選擇 Analyze > Regression > Linear。', '將結果變項移入 Dependent。', '將候選預測變項移入 Independent(s)。', '在 Method 下拉選單選擇 Stepwise。', '點選 Statistics，勾選 Estimates、Model fit、Collinearity diagnostics 與 Durbin-Watson。', '點選 Plots，檢查殘差圖；需要時儲存標準化殘差。', '按 OK，依 Model Summary、ANOVA、Coefficients 與 Excluded Variables 判讀模型。'],
    screenshot: { src: 'https://dw1.s81c.com//IMWUC/MessageImages/d90825f3e18e4780993fcbdb43f8bdcf.png', caption: 'SPSS Linear Regression Method 下拉選單中的 Stepwise，來源：IBM Community。' },    videos: [
      { title: "一夜。統計學：迴歸分析", url: "https://www.youtube.com/watch?v=aNIChQUY-DA", views: "觀看次數：186,107次", summary: "介紹迴歸分析在論文假設檢定中的用途，適合作為逐步多元迴歸前的概念基礎。" },
      { title: "陈老师spss数据分析教程之spss多元线性回归分析", url: "https://www.youtube.com/watch?v=w-f7hXWlCAs", views: "觀看次數：97,852次", summary: "示範 SPSS 多元線性迴歸分析，適合參考依變項、預測變項與模型輸出的基本設定。" },
      { title: "【謝章升專欄】SPSS教學-複迴歸(Regression)與共線性是什麼意思", url: "https://www.youtube.com/watch?v=aVvWksWZlGE", views: "觀看次數：93,961次", summary: "說明複迴歸與共線性概念，適合逐步迴歸分析前檢查 VIF 與模型穩定性的學習需求。" },
      { title: "spss統計分析專題數位筆記 11﹙迴歸分析-中介效果檢驗﹚", url: "https://www.youtube.com/watch?v=10NGMy2X_es", views: "觀看次數：24,298次", summary: "以迴歸分析延伸至中介效果檢驗，適合已具備多元迴歸基礎後作進階研究分析參考。" },
      { title: "21. 逐步迴歸分析法", url: "https://www.youtube.com/watch?v=VKSLmfmGlEI", views: "觀看次數：18,261次", summary: "直接介紹逐步迴歸分析法，包含 SPSS 操作、多元共線性與 VIF，最貼近本分頁的操作主題。" },
    ],
  },
};

const order = ['overview', 'descriptive', 'ttest', 'anova', 'ancova', 'pearson', 'factor', 'manova', 'regression'];
const labels = {
  overview: '首頁總覽',
  descriptive: '敘述統計',
  ttest: 'T 檢定',
  anova: 'ANOVA',
  ancova: 'ANCOVA',
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
  ['Pearson 相關', '檢驗兩連續變項線性關係', '分析動機、態度與成效的關聯。'],
  ['因素分析', '萃取潛在構面', '量表建構、效度檢核與題項縮減。'],
  ['MANOVA', '同時比較多個依變項', '多個學習成果或心理變項整體差異。'],
  ['逐步多元迴歸', '探索預測變項組合', '找出學習成效的統計預測因子。'],
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
        <ol class="steps">${page.steps.map((item) => `<li>${item}</li>`).join('')}</ol>
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
  const content = active === 'overview' ? renderOverview() : renderMethod(pageData[active]);
  document.querySelector('#root').innerHTML = `${renderHeader(active)}<main class="site-main">${content}</main><footer class="site-footer"><p>本網站為 Roger Yen 老師的研究方法與 SPSS 教學網站，由 Codex 依據教學設計自動生成維護。</p><p>外部截圖與搜尋連結僅供學習參考，正式研究報告仍應依課程要求與統計方法文獻撰寫。</p></footer>`;
}

window.addEventListener('hashchange', render);
render();
