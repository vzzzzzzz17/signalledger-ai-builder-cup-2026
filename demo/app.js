const sampleCalls = [
  {
    id: "SL-1001",
    author: "HypeMax",
    source: "X",
    asset: "TSLA",
    market: "US Stock",
    time: "2026-10-01 14:30 UTC",
    price: 250,
    direction: "Bullish",
    action: "Buy now",
    horizon: "This week",
    text: "TSLA is about to explode this week. Smart money is loading. Do not miss this move.",
    risk: 8,
    hype: 92,
    evidence: "Vague smart-money claim",
    stopLoss: "None",
    notes: ["High certainty language", "No downside condition", "No source for smart-money claim"],
    returns: { one: 3.2, seven: -8.4, thirty: -12.1, maxFav: 5.1, maxAdv: -14.0, follower: -15.6 },
    path: [0, 2.4, 5.1, 1.8, -3.6, -8.4, -14.0, -12.1],
    flags: ["High hype", "No stop loss", "Follower loss"],
  },
  {
    id: "SL-1002",
    author: "HypeMax",
    source: "Broker community",
    asset: "NVDA",
    market: "US Stock",
    time: "2026-10-02 15:00 UTC",
    price: 190,
    direction: "Bullish",
    action: "Buy dip",
    horizon: "Unclear",
    text: "NVDA dip is a gift. Loading more. Bears will cry.",
    risk: 14,
    hype: 78,
    evidence: "Dip-buy narrative",
    stopLoss: "None",
    notes: ["No time horizon", "Mocking opposite side", "No invalidation level"],
    returns: { one: -1.0, seven: 4.2, thirty: 9.5, maxFav: 11.0, maxAdv: -4.8, follower: 6.1 },
    path: [0, -1.0, -4.8, 0.6, 4.2, 7.8, 11.0, 9.5],
    flags: ["No stop loss"],
  },
  {
    id: "SL-1003",
    author: "HypeMax",
    source: "Broker community",
    asset: "PLTR",
    market: "US Stock",
    time: "2026-10-03 13:45 UTC",
    price: 72,
    direction: "Bullish",
    action: "Buy / hold",
    horizon: "Unclear",
    text: "PLTR 下一个目标 100，别到时候又说没人提醒你。纸手别来。",
    risk: 6,
    hype: 95,
    evidence: "Price target without thesis",
    stopLoss: "None",
    notes: ["中文高压话术", "No reasoning behind target", "Follower pressure language"],
    returns: { one: 0.5, seven: -6.0, thirty: -18.0, maxFav: 2.3, maxAdv: -21.5, follower: -19.8 },
    path: [0, 0.5, 2.3, -2.5, -6.0, -12.2, -21.5, -18.0],
    flags: ["Chinese hype", "Follower loss", "No risk disclosure"],
  },
  {
    id: "SL-1004",
    author: "HypeMax",
    source: "Chat group",
    asset: "COIN",
    market: "US Stock",
    time: "2026-10-04 16:10 UTC",
    price: 315,
    direction: "Bullish",
    action: "Buy / hold",
    horizon: "Weekend",
    text: "COIN is a no-brainer before crypto weekend. I am not selling until 360.",
    risk: 10,
    hype: 84,
    evidence: "Crypto weekend narrative",
    stopLoss: "None",
    notes: ["No-brainer language", "Upside target without downside", "Event narrative not sourced"],
    returns: { one: -4.2, seven: -11.0, thirty: -7.2, maxFav: 1.4, maxAdv: -13.2, follower: -12.6 },
    path: [0, 1.4, -4.2, -8.0, -11.0, -13.2, -9.2, -7.2],
    flags: ["High hype", "Follower loss"],
  },
  {
    id: "SL-1005",
    author: "HypeMax",
    source: "X",
    asset: "MSTR",
    market: "US Stock",
    time: "2026-10-05 14:50 UTC",
    price: 520,
    direction: "Bullish",
    action: "Buy",
    horizon: "Conditional",
    text: "MSTR will rip if BTC moves. This is the cleanest leverage trade.",
    risk: 28,
    hype: 68,
    evidence: "BTC proxy logic",
    stopLoss: "None",
    notes: ["Some conditional logic", "Leverage risk not explained", "No exit plan"],
    returns: { one: 2.0, seven: -9.5, thirty: 1.1, maxFav: 8.2, maxAdv: -16.4, follower: -5.3 },
    path: [0, 2.0, 8.2, 3.1, -9.5, -16.4, -4.0, 1.1],
    flags: ["Leverage risk"],
  },
  {
    id: "SL-2001",
    author: "ChartSage",
    source: "X",
    asset: "AAPL",
    market: "US Stock",
    time: "2026-10-01 14:40 UTC",
    price: 230,
    direction: "Conditional bullish",
    action: "Buy only if support holds",
    horizon: "1-2 weeks",
    text: "AAPL is testing support near 228-230. Long idea only if it holds above 228. Invalidation below 224. Target 238 over 1-2 weeks.",
    risk: 92,
    hype: 10,
    evidence: "Support level and invalidation",
    stopLoss: "Below 224",
    notes: ["Clear invalidation", "Clear target", "Conditional entry"],
    returns: { one: 0.8, seven: 3.9, thirty: 5.2, maxFav: 6.0, maxAdv: -1.7, follower: 3.6 },
    path: [0, -1.1, 0.8, 2.2, 3.9, 6.0, 4.4, 5.2],
    flags: ["Responsible call"],
  },
  {
    id: "SL-2002",
    author: "ChartSage",
    source: "Broker community",
    asset: "MSFT",
    market: "US Stock",
    time: "2026-10-02 14:35 UTC",
    price: 510,
    direction: "Neutral",
    action: "Wait",
    horizon: "Short term",
    text: "MSFT breakout attempt failed twice. I am waiting for a close above 518 before entering. No trade yet.",
    risk: 84,
    hype: 5,
    evidence: "Failed breakout",
    stopLoss: "Not applicable",
    notes: ["Avoids forced trade", "Clear confirmation level", "No hype"],
    returns: { one: -0.4, seven: -2.6, thirty: 1.4, maxFav: 2.2, maxAdv: -4.1, follower: 0.0 },
    path: [0, -0.4, -2.6, -4.1, -1.2, 0.3, 2.2, 1.4],
    flags: ["No-trade discipline"],
  },
  {
    id: "SL-2003",
    author: "ChartSage",
    source: "X",
    asset: "AMD",
    market: "US Stock",
    time: "2026-10-03 15:20 UTC",
    price: 165,
    direction: "Closed failed long",
    action: "Exit / no trade",
    horizon: "Closed",
    text: "AMD long failed. Stopped out at 160 as planned. Taking the loss and waiting for a cleaner setup.",
    risk: 95,
    hype: 4,
    evidence: "Transparent follow-up",
    stopLoss: "160",
    notes: ["Admits loss", "Shows process", "Protects followers"],
    returns: { one: -2.0, seven: -5.5, thirty: -3.2, maxFav: 0.6, maxAdv: -7.8, follower: 0.0 },
    path: [0, -2.0, -5.5, -7.8, -5.2, -1.0, 0.6, -3.2],
    flags: ["Loss transparency"],
  },
  {
    id: "SL-2004",
    author: "ChartSage",
    source: "Broker community",
    asset: "JPM",
    market: "US Stock",
    time: "2026-10-04 14:45 UTC",
    price: 260,
    direction: "Neutral",
    action: "Wait for pullback",
    horizon: "Unclear",
    text: "JPM setup is not attractive here. Risk/reward is poor after the move. I would rather wait for pullback near 248.",
    risk: 78,
    hype: 8,
    evidence: "Risk/reward reasoning",
    stopLoss: "Not applicable",
    notes: ["Avoids chasing", "Explains risk/reward", "No pressure language"],
    returns: { one: 0.3, seven: -1.8, thirty: -0.6, maxFav: 1.2, maxAdv: -4.0, follower: 0.0 },
    path: [0, 0.3, 1.2, -1.8, -4.0, -2.2, -0.6, -0.6],
    flags: ["Responsible call"],
  },
  {
    id: "SL-2005",
    author: "ChartSage",
    source: "X",
    asset: "SPY",
    market: "US Stock",
    time: "2026-10-05 14:30 UTC",
    price: 610,
    direction: "Cautious",
    action: "Reduce size",
    horizon: "Event-driven",
    text: "SPY risk is elevated into CPI. I am reducing size, not chasing. If 604 breaks, downside can accelerate.",
    risk: 88,
    hype: 7,
    evidence: "CPI event risk and level",
    stopLoss: "604 level",
    notes: ["Event risk explained", "No chasing", "Clear level"],
    returns: { one: -1.2, seven: -3.1, thirty: 0.7, maxFav: 3.4, maxAdv: -1.0, follower: 2.0 },
    path: [0, -1.2, -3.1, -2.0, 0.7, 2.4, 3.4, 0.7],
    flags: ["Risk reduction"],
  },
  {
    id: "SL-3001",
    author: "CryptoWhale",
    source: "Crypto community",
    asset: "BTC",
    market: "Crypto",
    time: "2026-10-01 02:15 UTC",
    price: 78000,
    direction: "Bullish",
    action: "Buy",
    horizon: "Very short term",
    text: "BTC about to send. You know what happens after this candle. IYKYK.",
    risk: 8,
    hype: 90,
    evidence: "Vague candle claim",
    stopLoss: "None",
    notes: ["Vague insider-style language", "No entry range", "No downside"],
    returns: { one: 4.0, seven: -6.5, thirty: -2.4, maxFav: 7.5, maxAdv: -10.8, follower: -4.7 },
    path: [0, 4.0, 7.5, 3.2, -1.8, -6.5, -10.8, -2.4],
    flags: ["Follower slippage", "High hype"],
  },
  {
    id: "SL-3002",
    author: "CryptoWhale",
    source: "X",
    asset: "ETH",
    market: "Crypto",
    time: "2026-10-02 03:30 UTC",
    price: 4200,
    direction: "Bullish",
    action: "Buy / hold",
    horizon: "Unclear",
    text: "ETH rotation starts now. If you are not positioned, that is on you.",
    risk: 12,
    hype: 86,
    evidence: "Rotation narrative",
    stopLoss: "None",
    notes: ["Follower guilt pressure", "Unclear horizon", "No invalidation"],
    returns: { one: 1.1, seven: 8.8, thirty: 6.2, maxFav: 12.0, maxAdv: -3.9, follower: 4.3 },
    path: [0, -3.9, 1.1, 6.4, 8.8, 12.0, 9.2, 6.2],
    flags: ["Pressure language"],
  },
  {
    id: "SL-3003",
    author: "CryptoWhale",
    source: "Crypto community",
    asset: "SOL",
    market: "Crypto",
    time: "2026-10-03 04:00 UTC",
    price: 190,
    direction: "Bullish",
    action: "Add size",
    horizon: "Unclear",
    text: "SOL looks ready. I added size. Do not ask me later why nobody told you.",
    risk: 6,
    hype: 93,
    evidence: "Personal position claim",
    stopLoss: "None",
    notes: ["No basis for entry", "Authority pressure", "No risk plan"],
    returns: { one: 9.0, seven: -13.5, thirty: -19.0, maxFav: 15.2, maxAdv: -24.0, follower: -18.7 },
    path: [0, 9.0, 15.2, 2.0, -7.4, -13.5, -24.0, -19.0],
    flags: ["Severe follower slippage", "No stop loss"],
  },
  {
    id: "SL-3004",
    author: "CryptoWhale",
    source: "X",
    asset: "DOGE",
    market: "Crypto",
    time: "2026-10-04 05:00 UTC",
    price: 0.26,
    direction: "Bullish",
    action: "Buy / watch",
    horizon: "Short term",
    text: "DOGE squeeze setup. Shorts will be forced out. This one can move stupid fast.",
    risk: 30,
    hype: 74,
    evidence: "Short squeeze claim",
    stopLoss: "None",
    notes: ["Mentions volatility", "No stop-loss", "Squeeze claim unverified"],
    returns: { one: 6.0, seven: 2.0, thirty: -9.0, maxFav: 18.0, maxAdv: -11.0, follower: -3.5 },
    path: [0, 6.0, 18.0, 9.0, 2.0, -4.0, -11.0, -9.0],
    flags: ["Volatile asset"],
  },
  {
    id: "SL-3005",
    author: "CryptoWhale",
    source: "Chat group",
    asset: "PEPE",
    market: "Crypto",
    time: "2026-10-05 01:20 UTC",
    price: 0.000012,
    direction: "Post-hoc bullish",
    action: "Claims partial profit",
    horizon: "Post-hoc",
    text: "PEPE 我已经止盈一半了，昨天跟上的兄弟现在舒服了吧。没跟上的别问了。",
    risk: 4,
    hype: 98,
    evidence: "Unverifiable prior entry",
    stopLoss: "None",
    notes: ["Post-hoc performance framing", "中文群聊压力", "Follower cannot reproduce result"],
    returns: { one: -8.0, seven: -22.0, thirty: -35.0, maxFav: 10.0, maxAdv: -42.0, follower: -31.5 },
    path: [0, 10.0, -8.0, -16.0, -22.0, -31.5, -42.0, -35.0],
    flags: ["Meme coin", "Post-hoc claim", "Severe follower loss"],
  },
];

const kolProfiles = {
  HypeMax: {
    description: "High-conviction social posts, weak downside disclosure, winner screenshots.",
    grade: "D",
  },
  ChartSage: {
    description: "Transparent process, conditional entries, and loss follow-ups.",
    grade: "A-",
  },
  CryptoWhale: {
    description: "Crypto momentum calls with large gaps between visible wins and follower results.",
    grade: "D+",
  },
};

let calls = [];
let selectedId = null;
let selectedAuthor = "ChartSage";
let marketFilter = "all";
let marketQuotes = {};
let publicCalls = [];
let appealCount = 0;
let lang = "en";

const i18n = {
  en: {
    brandSub: "Community intelligence layer",
    navInbox: "Discover",
    navReceipt: "Signal Detail",
    navOutcome: "Follower Impact",
    navDashboard: "Author Profile",
    navModeration: "Review Queue",
    disclaimerTitle: "No trading advice.",
    disclaimerBody: "Demo uses synthetic public-style posts and static market paths.",
    topEyebrow: "BFSI Prototype",
    topTitle: "A trading community with professional context beside every market call.",
    reset: "Reset",
    loadDataset: "Refresh snapshot",
    problemEyebrow: "Community Layer",
    heroTitle: "Follow the people shaping the market conversation.",
    heroBody:
      "SignalLedger helps you understand an author's claims, process, and follower impact before a hot take becomes a trade.",
    authorsTracked: "Authors tracked",
    callsLoaded: "Calls loaded",
    receiptsCreated: "Context cards",
    highRiskFlags: "High-risk flags",
    pipeIngest: "Browse community posts",
    pipeExtract: "Open professional context",
    pipeTrack: "Compare KOL narrative and follower path",
    pipeReview: "Keep a versioned record",
    inputEyebrow: "Community Feed",
    inputTitle: "Authors worth watching today",
    filterAll: "All authors",
    filterStocks: "US equities",
    filterCrypto: "Crypto",
    filterMacro: "Macro & portfolios",
    filterNeedsContext: "Needs context",
    searchAuthors: "Search authors or assets",
    snapshotLabel: "Loading public market snapshot",
    snapshotLive: "Delayed public market snapshot",
    snapshotFallback: "Cached demo snapshot",
    authorDataLoading: "Loading public authors",
    authorDataLive: "Public authors · source-linked",
    authorDataFallback: "Scenario authors · offline",
    publicSource: "Public source",
    featuredEyebrow: "Selected Author",
    featuredTitle: "Professional context at a glance",
    offlineLabel: "Offline-safe demo",
    sourcePublic: "Market chatter",
    sourceBroker: "Broker feed",
    sourceCrypto: "Crypto calls",
    sourceChat: "Needs context",
    analyzeManual: "Analyze pasted post",
    analyzing: "Analyzing with Gemini…",
    analysisLive: "Gemini context added.",
    analysisFallback: "Offline demo context added.",
    extractEyebrow: "Professional Context",
    extractTitle: "What a user should know before following this view",
    emptyState: "No authors match this filter.",
    originalClaim: "Original Post",
    receiptLabel: "SIGNAL CONTEXT",
    asset: "Asset",
    direction: "Direction",
    callTimePrice: "Call-time price",
    riskDisclosure: "Risk disclosure",
    hypeEvidence: "Hype-to-evidence",
    contentHash: "Content hash",
    auditStatus: "Record status",
    auditStatusValue: "Versioned · author can add context · non-advisory",
    aiNotes: "AI Notes",
    aiNotesTitle: "Why this call was scored this way",
    heroFeature: "Impact Analysis",
    slippageTitle: "Follower execution gap",
    slippageBody:
      "KOL visible result is not the same as follower realized result. This view compares the best visible narrative with likely follower paths.",
    outcomeSplit: "Outcome Split",
    reputationLayer: "Author Risk Profile",
    dashboardTitle: "Behavioral pattern summary",
    platformView: "Platform Review",
    moderationTitle: "Content requiring additional context",
    fairnessFlow: "Fairness Flow",
    appealBody:
      "The author can add missing context such as original entry, stop-loss logic, risk notes, or correction. SignalLedger stores the addition as a new version instead of silently rewriting history.",
    cancel: "Cancel",
    attachContext: "Attach context",
    riskDisclosed: "Risk disclosed",
    partialRisk: "Partial risk",
    noRisk: "No risk context",
    evidence: "Evidence",
    stopInvalidation: "Stop / invalidation",
    aiFlags: "AI flags",
    kolVisible: "KOL visible best case",
    delayedFollower: "Delayed follower",
    maxDrawdown: "Max drawdown after call",
    slippageGap: "Follower slippage gap",
    promotionalPressure: "Promotional pressure",
    evidenceQuality: "Evidence quality",
    authorGrade: "Review grade",
    viewProfile: "View profile",
    viewLatest: "Open latest",
    latestSignals: "Latest signals",
    appealButton: "Appeal / add context",
    calls: "calls",
    followerLossCases: "follower-loss cases",
    reviewReceipt: "Review receipt",
    suggestedLabel: "Suggested label: add risk context",
    attachMessage: "Additional context attached as version {n}. Original record remains unchanged.",
    slippageMessage:
      "A follower entering after the post may see a {gap} gap versus the author's best visible narrative. SignalLedger flags this as {level} follower slippage risk.",
    severe: "severe",
    material: "material",
    moderate: "moderate",
    selectCall: "Select a call",
    noReceipt: "No receipt selected",
    loadToInspect: "Open the community feed to inspect a context card.",
    loadToCompare: "Load sample data to compare KOL narrative and follower reality.",
    articleNoScenario: "This is a public article, not a direct trade call. SignalLedger does not invent an entry or follower outcome.",
    langToggle: "中文",
  },
  zh: {
    brandSub: "交易社区专业上下文层",
    navInbox: "发现",
    navReceipt: "观点详情",
    navOutcome: "跟单影响",
    navDashboard: "作者画像",
    navModeration: "审核队列",
    disclaimerTitle: "非投资建议。",
    disclaimerBody: "Demo 使用模拟公开内容和静态行情路径。",
    topEyebrow: "金融科技原型",
    topTitle: "一个在每条市场观点旁提供专业上下文的交易社区。",
    reset: "重置",
    loadDataset: "刷新快照",
    problemEyebrow: "社区层",
    heroTitle: "关注正在塑造市场讨论的人。",
    heroBody:
      "SignalLedger 帮你在热门观点变成交易之前，理解作者的主张、过程和粉丝影响。",
    authorsTracked: "跟踪作者",
    callsLoaded: "已加载喊单",
    receiptsCreated: "上下文卡片",
    highRiskFlags: "高风险标记",
    pipeIngest: "浏览社区内容",
    pipeExtract: "打开专业上下文",
    pipeTrack: "比较 KOL 叙事和粉丝路径",
    pipeReview: "保留版本记录",
    inputEyebrow: "社区信息流",
    inputTitle: "今天值得关注的作者",
    filterAll: "全部作者",
    filterStocks: "美股",
    filterCrypto: "Crypto",
    filterMacro: "宏观与组合",
    filterNeedsContext: "需要上下文",
    searchAuthors: "搜索作者或标的",
    snapshotLabel: "正在加载公开行情快照",
    snapshotLive: "公开延迟行情快照",
    snapshotFallback: "缓存演示快照",
    authorDataLoading: "正在加载公开作者",
    authorDataLive: "公开作者 · 有来源链接",
    authorDataFallback: "情景作者 · 离线模式",
    publicSource: "公开来源",
    featuredEyebrow: "当前作者",
    featuredTitle: "一眼看懂专业上下文",
    offlineLabel: "离线安全演示",
    sourcePublic: "市场讨论",
    sourceBroker: "券商社区",
    sourceCrypto: "Crypto 喊单",
    sourceChat: "需要上下文",
    analyzeManual: "分析粘贴内容",
    analyzing: "正在用 Gemini 分析…",
    analysisLive: "Gemini 上下文已加入。",
    analysisFallback: "已加入离线演示上下文。",
    extractEyebrow: "专业上下文",
    extractTitle: "用户跟随这条观点前应该知道什么",
    emptyState: "没有符合条件的作者。",
    originalClaim: "原始帖子",
    receiptLabel: "信号上下文",
    asset: "标的",
    direction: "方向",
    callTimePrice: "喊单时价格",
    riskDisclosure: "风险披露",
    hypeEvidence: "情绪/证据比",
    contentHash: "内容哈希",
    auditStatus: "记录状态",
    auditStatusValue: "版本化 · 作者可补充 · 非投资建议",
    aiNotes: "AI 说明",
    aiNotesTitle: "为什么这条喊单得到这个评分",
    heroFeature: "影响分析",
    slippageTitle: "粉丝执行偏差",
    slippageBody: "KOL 展示的收益不等于粉丝真实收益。本页比较最佳可见叙事和普通粉丝可能经历的路径。",
    outcomeSplit: "结果拆分",
    reputationLayer: "作者风险画像",
    dashboardTitle: "行为模式摘要",
    platformView: "平台审核",
    moderationTitle: "需要补充上下文的内容",
    fairnessFlow: "公平机制",
    appealBody:
      "作者可以补充原始入场、止损逻辑、风险说明或更正信息。SignalLedger 会把补充说明作为新版本保存，而不是静默改写历史。",
    cancel: "取消",
    attachContext: "附加说明",
    riskDisclosed: "已披露风险",
    partialRisk: "部分风险提示",
    noRisk: "缺少风险上下文",
    evidence: "证据",
    stopInvalidation: "止损/失效条件",
    aiFlags: "AI 标记",
    kolVisible: "KOL 最佳可见结果",
    delayedFollower: "延迟跟单者",
    maxDrawdown: "喊单后最大回撤",
    slippageGap: "跟单偏差",
    promotionalPressure: "推广压力",
    evidenceQuality: "证据质量",
    authorGrade: "复核等级",
    viewProfile: "查看画像",
    viewLatest: "打开最新观点",
    latestSignals: "最新观点",
    appealButton: "申诉 / 补充说明",
    calls: "条喊单",
    followerLossCases: "个粉丝亏损案例",
    reviewReceipt: "查看收据",
    suggestedLabel: "建议标签：补充风险上下文",
    attachMessage: "补充说明已作为第 {n} 个版本附加。原始记录保持不变。",
    slippageMessage:
      "粉丝在看到帖子后入场，可能比作者最佳可见叙事多承受 {gap} 的差距。SignalLedger 将其标记为{level}跟单偏差风险。",
    severe: "严重",
    material: "明显",
    moderate: "中等",
    selectCall: "请选择一条喊单",
    noReceipt: "尚未选择收据",
    loadToInspect: "打开社区信息流后，可查看上下文卡片。",
    loadToCompare: "加载样例数据后，可比较 KOL 叙事和粉丝真实路径。",
    articleNoScenario: "这是一篇公开文章，不是直接喊单。SignalLedger 不会自行编造入场价或粉丝结果。",
    langToggle: "EN",
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const t = (key) => i18n[lang][key] || i18n.en[key] || key;

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$('[data-i18n-placeholder]').forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  $("#langToggle").textContent = t("langToggle");
  $("#manualPost").placeholder = lang === "zh" ? "在这里粘贴一条市场喊单..." : "Paste a market call here...";
  renderAll();
}

function fmtPct(value) {
  if (value === 0) return "0.0%";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function fmtPrice(call) {
  if (call.price == null) return "Not applicable";
  if (call.asset === "PEPE") return `$${call.price.toFixed(6)}`;
  if (call.asset === "DOGE") return `$${call.price.toFixed(2)}`;
  return `$${call.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function fmtDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).split(" ")[0];
  return date.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", { month: "short", day: "numeric" });
}

function sourceLink(call, label = lang === "zh" ? "打开原文" : "Open source") {
  if (!call.sourceUrl) return "";
  return `<a class="source-link" href="${escapeHtml(call.sourceUrl)}" target="_blank" rel="noreferrer">${label} ↗</a>`;
}

function fmtLivePrice(quote) {
  if (!quote?.price) return "-";
  if (["BTC", "ETH"].includes(quote.symbol)) return `$${quote.price.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  if (["SOL", "DOGE"].includes(quote.symbol)) return `$${quote.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  return `$${quote.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function liveQuoteTag(call) {
  const quote = marketQuotes[call.asset];
  if (!quote?.price) return "";
  const change = quote.changePct == null ? "" : ` ${quote.changePct >= 0 ? "+" : ""}${Number(quote.changePct).toFixed(2)}%`;
  return `<span class="quote-pill">${fmtLivePrice(quote)}${change}</span>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hashFor(call) {
  let hash = 0;
  const input = `${call.id}${call.author}${call.text}`;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return `sha256:${Math.abs(hash).toString(16).padStart(8, "0")}...`;
}

function gradeClass(grade) {
  const letter = grade.toLowerCase().charAt(0);
  return `grade-${letter}`;
}

function riskTag(call) {
  if (call.risk >= 75) return `<span class="tag green">${t("riskDisclosed")}</span>`;
  if (call.risk >= 30) return `<span class="tag amber">${t("partialRisk")}</span>`;
  return `<span class="tag red">${t("noRisk")}</span>`;
}

function renderStats() {
  const authors = Object.keys(groupedByAuthor());
  $("#statAuthors").textContent = authors.length;
  $("#statCalls").textContent = calls.length;
  $("#statFlagged").textContent = calls.filter((call) => call.hype >= 75 || call.returns.follower < -5).length;
}

function authorMatches(author, authorCalls, search) {
  const haystack = `${author} ${authorCalls.map((call) => `${call.asset} ${call.text}`).join(" ")}`.toLowerCase();
  if (search && !haystack.includes(search)) return false;
  if (marketFilter === "all") return true;
  if (marketFilter === "needs-context") {
    return average(authorCalls, (call) => call.risk) < 55 || average(authorCalls, (call) => call.hype) >= 75;
  }
  return authorCalls.some((call) => call.market === marketFilter);
}

function authorInitials(author) {
  return author
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function authorMetrics(authorCalls) {
  return {
    risk: Math.round(average(authorCalls, (call) => call.risk)),
    hype: Math.round(average(authorCalls, (call) => call.hype)),
    gap: Math.round(average(authorCalls, (call) => call.returns.maxFav - call.returns.follower)),
    losses: authorCalls.filter((call) => call.returns.follower < 0).length,
  };
}

function renderAuthorFeed() {
  const list = $("#authorList");
  const empty = $("#authorEmpty");
  if (!list || !empty) return;
  const search = $("#authorSearch")?.value.trim().toLowerCase() || "";
  const authors = Object.entries(groupedByAuthor())
    .filter(([author, authorCalls]) => authorMatches(author, authorCalls, search))
    .sort(([, firstCalls], [, secondCalls]) => {
      const firstPublic = firstCalls.some((call) => call.provenance) ? 1 : 0;
      const secondPublic = secondCalls.some((call) => call.provenance) ? 1 : 0;
      if (firstPublic !== secondPublic) return secondPublic - firstPublic;
      const firstGap = authorMetrics(firstCalls).gap;
      const secondGap = authorMetrics(secondCalls).gap;
      return secondGap - firstGap;
    });

  empty.hidden = authors.length > 0;
  list.innerHTML = authors
    .map(([author, authorCalls]) => {
      const publicProfile = authorCalls.find((call) => call.profileDescription);
      const profile = kolProfiles[author] || { description: publicProfile?.profileDescription || "Imported public author", grade: null };
      const metrics = authorMetrics(authorCalls);
      const latest = authorCalls[authorCalls.length - 1];
      const gradeMarkup = profile.grade
        ? `<span class="grade-pill ${gradeClass(profile.grade)}">${t("authorGrade")} ${profile.grade}</span>`
        : `<span class="source-pill">${t("publicSource")}</span>`;
      return `
        <article class="author-card ${author === selectedAuthor ? "selected" : ""}">
          <div class="author-card-head">
            <button class="author-identity" data-author="${escapeHtml(author)}">
              <span class="author-avatar">${authorInitials(author)}</span>
              <span><strong>${escapeHtml(author)}</strong><small>${escapeHtml(profile.description)}</small></span>
            </button>
            ${gradeMarkup}
          </div>
          <div class="author-signal">
            <div class="post-top"><span class="eyebrow">${escapeHtml(latest.asset)} · ${escapeHtml(latest.source)}</span><span class="quote-group">${liveQuoteTag(latest)}<span class="source-pill">${fmtDate(latest.time)}</span></span></div>
            <p>${escapeHtml(latest.text)}</p>
            <div class="post-tags"><span class="tag">${authorCalls.length} ${t("calls")}</span>${riskTag(latest)}<span class="tag ${metrics.gap > 10 ? "amber" : "green"}">${t("slippageGap")} ${fmtPct(metrics.gap)}</span>${sourceLink(latest)}</div>
          </div>
          <div class="author-card-footer">
            <span class="author-stat"><b>${metrics.risk}</b><small>${t("riskDisclosure")}</small></span>
            <span class="author-stat"><b>${metrics.hype}</b><small>${t("promotionalPressure")}</small></span>
            <div class="author-actions"><button class="text-btn open-author" data-author="${escapeHtml(author)}">${t("viewProfile")}</button><button class="text-btn open-call" data-call-id="${latest.id}">${t("viewLatest")}</button></div>
          </div>
        </article>
      `;
    })
    .join("");

  $$(".open-author, .author-identity").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAuthor = button.dataset.author;
      const firstCall = calls.find((call) => call.author === selectedAuthor);
      if (firstCall) selectedId = firstCall.id;
      renderAll();
      showView("dashboard");
    });
  });
  $$(".open-call").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.callId;
      selectedAuthor = selectedCall()?.author || selectedAuthor;
      renderAll();
      showView("receipt");
    });
  });
}

function renderFeaturedAuthor() {
  const container = $("#featuredAuthor");
  if (!container) return;
  const authorCalls = calls.filter((call) => call.author === selectedAuthor);
  if (!authorCalls.length) {
    container.innerHTML = `<div class="empty-state">${t("emptyState")}</div>`;
    return;
  }
  const publicProfile = authorCalls.find((call) => call.profileDescription);
  const profile = kolProfiles[selectedAuthor] || { description: publicProfile?.profileDescription || "Imported public author", grade: null };
  const metrics = authorMetrics(authorCalls);
  const gradeMarkup = profile.grade
    ? `<span class="grade-pill ${gradeClass(profile.grade)}">${t("authorGrade")} ${profile.grade}</span>`
    : `<span class="source-pill">${t("publicSource")}</span>`;
  container.innerHTML = `
    <div class="featured-identity"><span class="author-avatar large">${authorInitials(selectedAuthor)}</span><div><h4>${escapeHtml(selectedAuthor)}</h4><p>${escapeHtml(profile.description)}</p></div>${gradeMarkup}</div>
    <div class="featured-metrics"><div><strong>${metrics.risk}</strong><span>${t("riskDisclosure")}</span></div><div><strong>${metrics.gap}%</strong><span>${t("slippageGap")}</span></div></div>
    <div class="featured-call-list"><p class="eyebrow">${t("latestSignals")}</p>${authorCalls.slice(-3).reverse().map((call) => `<button class="featured-call open-call" data-call-id="${call.id}"><span><b>${escapeHtml(call.asset)} · ${fmtDate(call.time)}</b><small>${escapeHtml(call.text)}</small></span><span class="tag ${call.risk >= 75 ? "green" : "amber"}">${call.risk}</span></button>`).join("")}</div>
    ${sourceLink(authorCalls[authorCalls.length - 1])}
    <button class="secondary-btn full open-appeal" data-author="${escapeHtml(selectedAuthor)}">${t("appealButton")}</button>
  `;
  $$("#featuredAuthor .open-call").forEach((button) => button.addEventListener("click", () => {
    selectedId = button.dataset.callId;
    renderAll();
    showView("receipt");
  }));
  $$("#featuredAuthor .open-appeal").forEach((button) => button.addEventListener("click", () => openAppeal(button.dataset.author)));
}

function selectedCall() {
  return calls.find((call) => call.id === selectedId) || calls[0] || null;
}

function renderReceipt() {
  const call = selectedCall();
  if (!call) {
    $("#receiptTitle").textContent = t("noReceipt");
    $("#receiptSource").textContent = "Source";
    $("#receiptText").textContent = t("loadToInspect");
    $("#receiptMeta").innerHTML = "";
    $("#receiptId").textContent = "SL-0000";
    ["receiptAsset", "receiptDirection", "receiptPrice", "receiptRisk", "receiptHype"].forEach((id) => {
      $(`#${id}`).textContent = "-";
    });
    $("#receiptHash").textContent = "sha256...";
    $("#receiptNotes").innerHTML = "";
    return;
  }
  $("#receiptTitle").textContent = `${call.author} · ${call.asset}`;
  $("#receiptSource").textContent = call.source;
  $("#receiptText").textContent = call.text;
  const liveQuote = marketQuotes[call.asset];
  $("#receiptMeta").innerHTML = `
    <div class="meta-box"><label>${lang === "zh" ? "时间" : "Time"}</label><span>${call.time}</span></div>
    <div class="meta-box"><label>${lang === "zh" ? "市场" : "Market"}</label><span>${call.market}</span></div>
    <div class="meta-box"><label>${lang === "zh" ? "动作" : "Action"}</label><span>${call.action}</span></div>
    ${liveQuote?.price ? `<div class="meta-box"><label>${lang === "zh" ? "公开行情快照" : "Public snapshot"}</label><span>${fmtLivePrice(liveQuote)} ${liveQuote.changePct == null ? "" : fmtPct(Number(liveQuote.changePct))}</span></div>` : ""}
    ${call.sourceUrl ? `<div class="meta-box"><label>${lang === "zh" ? "来源" : "Source"}</label>${sourceLink(call)}</div>` : ""}
  `;
  $("#receiptId").textContent = call.id;
  $("#receiptAsset").textContent = `${call.asset} · ${call.market}`;
  $("#receiptDirection").textContent = call.direction;
  $("#receiptPrice").textContent = fmtPrice(call);
  $("#receiptRisk").textContent = `${call.risk}/100`;
  $("#receiptHype").textContent = `${call.hype}/100`;
  $("#receiptHash").textContent = hashFor(call);
  $("#receiptNotes").innerHTML = [
    [t("evidence"), call.evidence],
    [t("stopInvalidation"), call.stopLoss],
    [t("aiFlags"), call.notes.join("; ")],
  ]
    .map(
      ([title, body]) => `
        <div class="note">
          <h4>${title}</h4>
          <p>${body}</p>
        </div>
      `,
    )
    .join("");
}

function chartPoint(value, index, values) {
  const min = Math.min(...values, -25);
  const max = Math.max(...values, 18);
  const x = 38 + index * ((590 - 38) / (values.length - 1));
  const y = 220 - ((value - min) / (max - min)) * 170;
  return [x, y];
}

function renderChart(call) {
  const svg = $("#priceChart");
  const values = call.path;
  const points = values.map((value, index) => chartPoint(value, index, values));
  const polyline = points.map(([x, y]) => `${x},${y}`).join(" ");
  const zeroY = chartPoint(0, 0, values)[1];
  const followerIndex = Math.min(2, points.length - 1);
  const maxAdvIndex = values.indexOf(Math.min(...values));
  const bestIndex = values.indexOf(Math.max(...values));

  svg.innerHTML = `
    <line x1="36" y1="${zeroY}" x2="600" y2="${zeroY}" stroke="#cfd8e3" stroke-dasharray="5 5" />
    <polyline points="${polyline}" fill="none" stroke="#1f66d1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    ${points
      .map(
        ([x, y], index) => `
          <circle cx="${x}" cy="${y}" r="${index === 0 || index === followerIndex || index === maxAdvIndex || index === bestIndex ? 6 : 3}" fill="${
            index === maxAdvIndex ? "#bd2d2d" : index === bestIndex ? "#12805c" : index === followerIndex ? "#a06400" : "#1f66d1"
          }" />
        `,
      )
      .join("")}
    <text x="${points[0][0]}" y="245" fill="#657386" font-size="12">Post</text>
    <text x="${points[followerIndex][0] - 34}" y="245" fill="#a06400" font-size="12">Follower entry</text>
    <text x="${points[bestIndex][0] - 28}" y="${points[bestIndex][1] - 12}" fill="#12805c" font-size="12">Best visible</text>
    <text x="${points[maxAdvIndex][0] - 32}" y="${points[maxAdvIndex][1] + 24}" fill="#bd2d2d" font-size="12">Max pain</text>
  `;
}

function renderOutcome() {
  const call = selectedCall();
  if (!call) {
    $("#outcomeTitle").textContent = t("selectCall");
    $("#priceChart").innerHTML = "";
    $("#outcomeMetrics").innerHTML = "";
    $("#slippageCallout").textContent = t("loadToCompare");
    return;
  }
  if (call.provenance) {
    $("#outcomeTitle").textContent = `${call.author} · ${call.asset}`;
    $("#priceChart").innerHTML = `<text x="48" y="130" fill="#697386" font-size="14">${escapeHtml(t("articleNoScenario"))}</text>`;
    $("#outcomeMetrics").innerHTML = `
      <div class="metric-box"><label>${t("kolVisible")}</label><strong>n/a</strong></div>
      <div class="metric-box"><label>${t("delayedFollower")}</label><strong>n/a</strong></div>
    `;
    $("#slippageCallout").textContent = t("articleNoScenario");
    return;
  }
  renderChart(call);
  const visible = call.returns.maxFav;
  const gap = visible - call.returns.follower;
  $("#outcomeTitle").textContent = `${call.author} · ${call.asset}`;
  $("#outcomeMetrics").innerHTML = `
    <div class="metric-box ${visible >= 0 ? "positive" : "negative"}">
      <label>${t("kolVisible")}</label>
      <strong>${fmtPct(visible)}</strong>
    </div>
    <div class="metric-box ${call.returns.follower >= 0 ? "positive" : "negative"}">
      <label>${t("delayedFollower")}</label>
      <strong>${fmtPct(call.returns.follower)}</strong>
    </div>
    <div class="metric-box ${call.returns.maxAdv >= 0 ? "positive" : "negative"}">
      <label>${t("maxDrawdown")}</label>
      <strong>${fmtPct(call.returns.maxAdv)}</strong>
    </div>
    <div class="metric-box negative">
      <label>${t("slippageGap")}</label>
      <strong>${fmtPct(gap)}</strong>
    </div>
  `;
  const level = gap > 20 ? t("severe") : gap > 10 ? t("material") : t("moderate");
  $("#slippageCallout").textContent = t("slippageMessage").replace("{gap}", fmtPct(gap)).replace("{level}", level);
}

function groupedByAuthor() {
  return calls.reduce((acc, call) => {
    acc[call.author] = acc[call.author] || [];
    acc[call.author].push(call);
    return acc;
  }, {});
}

function average(items, selector) {
  if (!items.length) return 0;
  return items.reduce((sum, item) => sum + selector(item), 0) / items.length;
}

function renderKolDashboard() {
  const groups = groupedByAuthor();
  $("#kolDashboard").innerHTML = Object.entries(groups)
    .map(([author, authorCalls]) => {
      const publicProfile = authorCalls.find((call) => call.profileDescription);
      const profile = kolProfiles[author] || { description: publicProfile?.profileDescription || "Imported author", grade: null };
      const risk = Math.round(average(authorCalls, (call) => call.risk));
      const hype = Math.round(average(authorCalls, (call) => call.hype));
      const gap = Math.round(average(authorCalls, (call) => call.returns.maxFav - call.returns.follower));
      const losses = authorCalls.filter((call) => call.returns.follower < 0).length;
      return `
        <article class="kol-card">
          <div class="kol-card-top">
            <div>
              <h4>${author}</h4>
              <p>${profile.description}</p>
            </div>
            ${profile.grade ? `<span class="grade-pill ${gradeClass(profile.grade)}">${t("authorGrade")} ${profile.grade}</span>` : `<span class="source-pill">${t("publicSource")}</span>`}
          </div>
          <div class="score-bars">
            ${scoreRow(t("riskDisclosure"), risk, "risk")}
            ${scoreRow(t("promotionalPressure"), hype, "hype")}
            ${scoreRow(t("slippageGap"), Math.min(gap * 4, 100), "gap", `${gap}%`)}
          </div>
          <div class="post-tags">
            <span class="tag">${authorCalls.length} ${t("calls")}</span>
            <span class="tag">${[...new Set(authorCalls.map((call) => call.market))].join(" / ")}</span>
            <span class="tag ${losses > 2 ? "red" : "amber"}">${losses} ${t("followerLossCases")}</span>
          </div>
          <button class="secondary-btn open-appeal" data-author="${author}">${t("appealButton")}</button>
        </article>
      `;
    })
    .join("");

  $$(".open-appeal").forEach((button) => {
    button.addEventListener("click", () => openAppeal(button.dataset.author));
  });
}

function scoreRow(label, value, cls, displayValue) {
  return `
    <div class="score-row">
      <span>${label}</span>
      <div class="bar"><span class="${cls}" style="width: ${Math.max(4, Math.min(value, 100))}%"></span></div>
      <strong>${displayValue || value}</strong>
    </div>
  `;
}

function renderModeration() {
  const flagged = calls
    .filter((call) => call.hype >= 75 || call.risk < 20 || call.returns.follower < -8)
    .sort((a, b) => b.hype + Math.abs(b.returns.follower) - (a.hype + Math.abs(a.returns.follower)));

  $("#moderationList").innerHTML = flagged
    .map(
      (call) => `
        <div class="mod-item">
          <div>
            <h4>${escapeHtml(call.author)} · ${escapeHtml(call.asset)}</h4>
            <p>${escapeHtml(call.text)}</p>
            <div class="post-tags" style="margin-top: 10px">
              <span class="tag red">${call.flags[0] || "High risk"}</span>
              <span class="tag amber">${t("suggestedLabel")}</span>
              <span class="tag">Follower ${fmtPct(call.returns.follower)}</span>
            </div>
          </div>
          <button class="secondary-btn" data-call-id="${call.id}">${t("reviewReceipt")}</button>
        </div>
      `,
    )
    .join("");

  $$(".mod-item button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.callId;
      renderAll();
      showView("receipt");
    });
  });
}

function renderAll() {
  if (!selectedId && calls.length) selectedId = calls[0].id;
  const activeCall = selectedCall();
  if (activeCall) selectedAuthor = activeCall.author;
  renderStats();
  renderAuthorFeed();
  renderFeaturedAuthor();
  renderReceipt();
  renderOutcome();
  renderKolDashboard();
  renderModeration();
}

function showView(view) {
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  $$(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
}

function loadDataset() {
  calls = sampleCalls.map((call) => ({ ...call }));
  publicCalls = [];
  selectedId = "SL-3001";
  selectedAuthor = "CryptoWhale";
  marketFilter = "all";
  if ($("#authorSearch")) $("#authorSearch").value = "";
  renderAll();
  showView("inbox");
  loadMarketSnapshot();
  loadPublicAuthors();
}

async function loadMarketSnapshot() {
  const status = $("#marketSnapshotStatus");
  if (status) status.textContent = t("snapshotLabel");
  try {
    const response = await fetch("/api/market-snapshot");
    if (!response.ok) throw new Error("Market snapshot unavailable");
    const payload = await response.json();
    marketQuotes = payload.quotes || {};
    if (status) status.textContent = Object.keys(marketQuotes).length ? t("snapshotLive") : t("snapshotFallback");
    renderAll();
  } catch {
    if (status) status.textContent = t("snapshotFallback");
  }
}

async function loadPublicAuthors() {
  const status = $("#authorDataStatus");
  if (status) status.textContent = t("authorDataLoading");
  try {
    const response = await fetch("/api/public-authors");
    if (!response.ok) throw new Error("Public author feeds unavailable");
    const payload = await response.json();
    publicCalls = Array.isArray(payload.calls) ? payload.calls : [];
    calls = [...sampleCalls.map((call) => ({ ...call })), ...publicCalls];
    if (publicCalls.length && !publicCalls.some((call) => call.author === selectedAuthor)) {
      selectedAuthor = publicCalls[0].author;
      selectedId = publicCalls[0].id;
    }
    if (status) status.textContent = publicCalls.length ? t("authorDataLive") : t("authorDataFallback");
    renderAll();
  } catch {
    if (status) status.textContent = t("authorDataFallback");
  }
}

async function analyzeManual() {
  const text = $("#manualPost").value.trim();
  if (!text) return;
  const button = $("#analyzeManual");
  const status = $("#analysisStatus");
  button.disabled = true;
  button.textContent = t("analyzing");
  status.textContent = "";

  let analysis = null;
  let liveAnalysis = false;
  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (response.ok) {
      const payload = await response.json();
      analysis = payload.analysis || null;
      liveAnalysis = payload.live === true;
    }
  } catch {
    analysis = null;
  }

  const upper = text.toUpperCase();
  const fallbackRisk = /止损|risk|invalidation|风险/i.test(text) ? 45 : 8;
  const fallbackHype = /起飞|爆|稳赚|必|别错过|do not miss|fly/i.test(text) ? 90 : 48;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0));
  const manualCall = {
    id: `SL-M${String(Date.now()).slice(-4)}`,
    author: "Community member",
    source: "Pasted post",
    asset: analysis?.asset || (upper.includes("BTC") ? "BTC" : upper.includes("TSLA") ? "TSLA" : "UNKNOWN"),
    market: analysis?.market || (upper.includes("BTC") ? "Crypto" : "US Stock"),
    time: "Demo time",
    price: upper.includes("BTC") ? 78000 : 250,
    direction: analysis?.direction || (/跌|short|空/i.test(text) ? "Bearish" : "Bullish"),
    action: analysis?.action || (/别|do not miss|错过|起飞|fly/i.test(text) ? "High-pressure call" : "Unclear"),
    horizon: analysis?.horizon || "Unclear",
    text,
    risk: clamp(analysis?.riskScore ?? fallbackRisk, 0, 100),
    hype: clamp(analysis?.promotionalPressure ?? fallbackHype, 0, 100),
    evidence: analysis?.evidenceQuality || "Manual context extraction",
    stopLoss: analysis?.stopLoss || (/止损|stop/i.test(text) ? "Mentioned" : "None"),
    notes: Array.isArray(analysis?.flags) && analysis.flags.length
      ? analysis.flags
      : ["Offline demo extraction", "Author context can be added", "Manual correction supported"],
    returns: { one: 1.2, seven: -6.4, thirty: -9.2, maxFav: 4.5, maxAdv: -12.0, follower: -8.8 },
    path: [0, 2.2, 4.5, -1.5, -6.4, -12.0, -10.4, -9.2],
    flags: ["Manual input", "Needs review"],
  };
  calls = [manualCall, ...calls];
  selectedId = manualCall.id;
  status.textContent = analysis && liveAnalysis ? t("analysisLive") : t("analysisFallback");
  button.disabled = false;
  button.textContent = t("analyzeManual");
  renderAll();
  showView("receipt");
}

function openAppeal(author) {
  $("#appealTitle").textContent = `${author} appeal / add context`;
  $("#appealModal").classList.add("active");
  $("#appealModal").setAttribute("aria-hidden", "false");
}

function closeAppeal() {
  $("#appealModal").classList.remove("active");
  $("#appealModal").setAttribute("aria-hidden", "true");
}

function submitAppeal() {
  appealCount += 1;
  closeAppeal();
  const message = t("attachMessage").replace("{n}", appealCount);
  $("#slippageCallout").textContent = message;
  showView("outcome");
}

function bindEvents() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });
  $("#loadDataset").addEventListener("click", loadDataset);
  $("#resetDemo").addEventListener("click", () => {
    calls = [];
    selectedId = null;
    selectedAuthor = "ChartSage";
    marketFilter = "all";
    if ($("#authorSearch")) $("#authorSearch").value = "";
    renderAll();
    showView("inbox");
  });
  $("#analyzeManual").addEventListener("click", analyzeManual);
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "zh" : "en";
    applyLanguage();
  });
  $("#closeAppeal").addEventListener("click", closeAppeal);
  $("#cancelAppeal").addEventListener("click", closeAppeal);
  $("#submitAppeal").addEventListener("click", submitAppeal);
  $$("#marketFilters .filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      marketFilter = button.dataset.market;
      $$("#marketFilters .filter-btn").forEach((item) => item.classList.toggle("active", item === button));
      renderAuthorFeed();
    });
  });
  $("#authorSearch").addEventListener("input", renderAuthorFeed);
  $("#appealModal").addEventListener("click", (event) => {
    if (event.target.id === "appealModal") closeAppeal();
  });
}

bindEvents();
loadDataset();
applyLanguage();
