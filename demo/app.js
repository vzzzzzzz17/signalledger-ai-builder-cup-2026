const sampleCalls = [
  {
    id: "CL-1001",
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
    id: "CL-1002",
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
    id: "CL-1003",
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
    id: "CL-1004",
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
    id: "CL-1005",
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
    id: "CL-2001",
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
    id: "CL-2002",
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
    id: "CL-2003",
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
    id: "CL-2004",
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
    id: "CL-2005",
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
    id: "CL-3001",
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
    id: "CL-3002",
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
    id: "CL-3003",
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
    id: "CL-3004",
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
    id: "CL-3005",
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
let appealCount = 0;
let lang = "en";

const i18n = {
  en: {
    brandSub: "Community intelligence layer",
    navInbox: "Community",
    navReceipt: "Context Card",
    navOutcome: "Follower Impact",
    navDashboard: "Author Profile",
    navModeration: "Review Queue",
    disclaimerTitle: "No trading advice.",
    disclaimerBody: "Demo uses synthetic public-style posts and static market paths.",
    topEyebrow: "BFSI Prototype",
    topTitle: "A trading community with professional context beside every market call.",
    reset: "Reset",
    loadDataset: "Load 15 sample calls",
    problemEyebrow: "Community Layer",
    heroTitle: "Users browse the feed. CallLedger adds the missing professional context.",
    heroBody:
      "CallLedger keeps the community experience, but adds structured context: evidence quality, risk disclosure, author behavior, and realistic follower outcomes.",
    callsLoaded: "Calls loaded",
    receiptsCreated: "Receipts created",
    highRiskFlags: "High-risk flags",
    pipeIngest: "Browse community posts",
    pipeExtract: "Open professional context",
    pipeTrack: "Compare KOL narrative and follower path",
    pipeReview: "Save receipt for future review",
    inputEyebrow: "Community Feed",
    inputTitle: "Browse market calls across stocks and crypto",
    sourcePublic: "Market chatter",
    sourceBroker: "Broker feed",
    sourceCrypto: "Crypto calls",
    sourceChat: "Needs context",
    analyzeManual: "Analyze pasted post",
    extractEyebrow: "Professional Context",
    extractTitle: "What a user should know before following this view",
    emptyState: "Load the sample dataset or analyze a pasted post to generate receipts.",
    originalClaim: "Original Claim",
    receiptLabel: "CONTEXT RECEIPT",
    asset: "Asset",
    direction: "Direction",
    callTimePrice: "Call-time price",
    riskDisclosure: "Risk disclosure",
    hypeEvidence: "Hype-to-evidence",
    contentHash: "Content hash",
    auditStatus: "Audit status",
    auditStatusValue: "Versioned · appealable · non-advisory",
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
      "The author can add missing context such as original entry, stop-loss logic, risk notes, or correction. CallLedger stores the appeal as a new version instead of silently rewriting history.",
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
    appealButton: "Appeal / add context",
    calls: "calls",
    followerLossCases: "follower-loss cases",
    reviewReceipt: "Review receipt",
    suggestedLabel: "Suggested label: add risk context",
    attachMessage: "Appeal context attached as version {n}. Original receipt remains unchanged.",
    slippageMessage:
      "A follower entering after the post may see a {gap} gap versus the KOL's best visible narrative. CallLedger flags this as {level} follower slippage risk.",
    severe: "severe",
    material: "material",
    moderate: "moderate",
    selectCall: "Select a call",
    noReceipt: "No receipt selected",
    loadToInspect: "Load sample data to inspect a call receipt.",
    loadToCompare: "Load sample data to compare KOL narrative and follower reality.",
    langToggle: "中文",
  },
  zh: {
    brandSub: "交易社区专业上下文层",
    navInbox: "社区",
    navReceipt: "上下文卡片",
    navOutcome: "跟单影响",
    navDashboard: "作者画像",
    navModeration: "审核队列",
    disclaimerTitle: "非投资建议。",
    disclaimerBody: "Demo 使用模拟公开内容和静态行情路径。",
    topEyebrow: "金融科技原型",
    topTitle: "一个在每条市场观点旁提供专业上下文的交易社区。",
    reset: "重置",
    loadDataset: "加载 15 条样例",
    problemEyebrow: "社区层",
    heroTitle: "用户进来逛社区，CallLedger 在旁边补上专业上下文。",
    heroBody:
      "CallLedger 保留社区浏览体验，同时补充证据质量、风险披露、作者历史行为和普通粉丝可能经历的真实路径。",
    callsLoaded: "已加载喊单",
    receiptsCreated: "已生成收据",
    highRiskFlags: "高风险标记",
    pipeIngest: "浏览社区内容",
    pipeExtract: "打开专业上下文",
    pipeTrack: "比较 KOL 叙事和粉丝路径",
    pipeReview: "保存收据用于复盘",
    inputEyebrow: "社区信息流",
    inputTitle: "浏览美股和 Crypto 市场观点",
    sourcePublic: "市场讨论",
    sourceBroker: "券商社区",
    sourceCrypto: "Crypto 喊单",
    sourceChat: "需要上下文",
    analyzeManual: "分析粘贴内容",
    extractEyebrow: "专业上下文",
    extractTitle: "用户跟随这条观点前应该知道什么",
    emptyState: "加载样例数据或分析粘贴内容后，会生成喊单收据。",
    originalClaim: "原始观点",
    receiptLabel: "上下文收据",
    asset: "标的",
    direction: "方向",
    callTimePrice: "喊单时价格",
    riskDisclosure: "风险披露",
    hypeEvidence: "情绪/证据比",
    contentHash: "内容哈希",
    auditStatus: "审计状态",
    auditStatusValue: "版本化 · 可申诉 · 非投资建议",
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
      "作者可以补充原始入场、止损逻辑、风险说明或更正信息。CallLedger 会把补充说明作为新版本保存，而不是静默改写历史。",
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
    appealButton: "申诉 / 补充说明",
    calls: "条喊单",
    followerLossCases: "个粉丝亏损案例",
    reviewReceipt: "查看收据",
    suggestedLabel: "建议标签：补充风险上下文",
    attachMessage: "补充说明已作为第 {n} 个版本附加。原始收据保持不变。",
    slippageMessage:
      "粉丝在看到帖子后入场，可能比 KOL 最佳可见叙事多承受 {gap} 的差距。CallLedger 将其标记为{level}跟单偏差风险。",
    severe: "严重",
    material: "明显",
    moderate: "中等",
    selectCall: "请选择一条喊单",
    noReceipt: "尚未选择收据",
    loadToInspect: "加载样例数据后，可查看喊单收据。",
    loadToCompare: "加载样例数据后，可比较 KOL 叙事和粉丝真实路径。",
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
  if (call.asset === "PEPE") return `$${call.price.toFixed(6)}`;
  if (call.asset === "DOGE") return `$${call.price.toFixed(2)}`;
  return `$${call.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
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
  $("#statCalls").textContent = calls.length;
  $("#statReceipts").textContent = calls.length;
  $("#statFlagged").textContent = calls.filter((call) => call.hype >= 75 || call.returns.follower < -5).length;
}

function renderPostList() {
  const list = $("#extractionList");
  const empty = $("#extractionEmpty");
  if (!calls.length) {
    empty.style.display = "grid";
    list.innerHTML = "";
    return;
  }
  empty.style.display = "none";
  list.innerHTML = calls
    .map(
      (call) => `
        <button class="post-card ${call.id === selectedId ? "active" : ""}" data-call-id="${call.id}">
          <div class="post-top">
            <span class="post-author">${call.author}</span>
            <span class="source-pill">${call.source}</span>
          </div>
          <p class="post-text">${call.text}</p>
          <div class="post-tags">
            <span class="tag">${call.asset} · ${call.direction}</span>
            ${riskTag(call)}
            <span class="tag ${call.hype >= 75 ? "red" : call.hype >= 40 ? "amber" : "green"}">${t("promotionalPressure")} ${call.hype}</span>
          </div>
        </button>
      `,
    )
    .join("");

  $$(".post-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.callId;
      renderAll();
      showView("receipt");
    });
  });
}

function selectedCall() {
  return calls.find((call) => call.id === selectedId) || calls[0] || null;
}

function renderReceipt() {
  const call = selectedCall();
  if (!call) {
    $("#receiptTitle").textContent = t("noReceipt");
    $("#receiptText").textContent = t("loadToInspect");
    return;
  }
  $("#receiptTitle").textContent = `${call.author} · ${call.asset}`;
  $("#receiptSource").textContent = call.source;
  $("#receiptText").textContent = call.text;
  $("#receiptMeta").innerHTML = `
    <div class="meta-box"><label>${lang === "zh" ? "时间" : "Time"}</label><span>${call.time}</span></div>
    <div class="meta-box"><label>${lang === "zh" ? "市场" : "Market"}</label><span>${call.market}</span></div>
    <div class="meta-box"><label>${lang === "zh" ? "动作" : "Action"}</label><span>${call.action}</span></div>
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
    $("#slippageCallout").textContent = t("loadToCompare");
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
      const profile = kolProfiles[author] || { description: "Imported author", grade: "B" };
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
            <span class="grade-pill ${gradeClass(profile.grade)}">${t("authorGrade")} ${profile.grade}</span>
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
            <h4>${call.author} · ${call.asset}</h4>
            <p>${call.text}</p>
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
  renderStats();
  renderPostList();
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
  selectedId = "CL-3001";
  renderAll();
  showView("inbox");
}

function analyzeManual() {
  const text = $("#manualPost").value.trim();
  if (!text) return;
  const manualCall = {
    id: `CL-M${String(Date.now()).slice(-4)}`,
    author: "ManualInput",
    source: "Pasted text",
    asset: text.toUpperCase().includes("BTC") ? "BTC" : text.toUpperCase().includes("TSLA") ? "TSLA" : "UNKNOWN",
    market: text.toUpperCase().includes("BTC") ? "Crypto" : "US Stock",
    time: "Demo time",
    price: text.toUpperCase().includes("BTC") ? 78000 : 250,
    direction: /跌|short|空/i.test(text) ? "Bearish" : "Bullish",
    action: /别|do not miss|错过|起飞|fly/i.test(text) ? "High-pressure call" : "Unclear",
    horizon: "Unclear",
    text,
    risk: /止损|risk|invalidation|风险/i.test(text) ? 45 : 8,
    hype: /起飞|爆|稳赚|必|别错过|do not miss|fly/i.test(text) ? 90 : 48,
    evidence: "Manual AI-style extraction",
    stopLoss: /止损|stop/i.test(text) ? "Mentioned" : "None",
    notes: ["Demo extraction from pasted text", "Needs Gemini in production", "Manual correction supported"],
    returns: { one: 1.2, seven: -6.4, thirty: -9.2, maxFav: 4.5, maxAdv: -12.0, follower: -8.8 },
    path: [0, 2.2, 4.5, -1.5, -6.4, -12.0, -10.4, -9.2],
    flags: ["Manual input", "Needs review"],
  };
  calls = [manualCall, ...calls];
  selectedId = manualCall.id;
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
  $("#appealModal").addEventListener("click", (event) => {
    if (event.target.id === "appealModal") closeAppeal();
  });
}

bindEvents();
renderAll();
applyLanguage();
