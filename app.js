const questions = [
  { category: "价值观", prompt: "你尊敬什么样的人？他身上有什么品质让你在意？", hint: "可以是真实认识的人，也可以是作家、艺术家、角色或公众人物。" },
  { category: "价值观", prompt: "在你青春期或思维最活跃的时期，有什么事情深深影响过你？", hint: "想想哪些经历改变了你看待自己或世界的方式。" },
  { category: "价值观", prompt: "你觉得现在的社会或周围环境有什么不足？", hint: "你感到不满的地方，常常也暗示着你在乎什么。" },
  { category: "价值观", prompt: "在朋友眼中，你是一个看重什么东西的人？", hint: "如果不确定，可以想象朋友会怎样描述你。" },
  { category: "价值观", prompt: "如果别人来向你寻求建议，你通常会建议什么？", hint: "你愿意给出的建议，往往也是你自己的生活准则。" },
  { category: "才能", prompt: "你人生中最充实的一段经历是什么？当时你具体做了什么？", hint: "不要只写结果，也注意当时哪些过程让你感到有能量。" },
  { category: "才能", prompt: "最近一次让你觉得不耐烦的事情是什么？", hint: "不耐烦有时说明你对某些问题有敏锐的判断或更高的要求。" },
  { category: "才能", prompt: "别人通常会向你寻求什么帮助？", hint: "可以是学习、表达、组织、倾听、分析或任何其他事情。" },
  { category: "才能", prompt: "到目前为止，你做成过什么事情？", hint: "不一定要是很大的成就，任何你真正完成过的事都可以。" },
  { category: "才能", prompt: "如果不考虑现在的安排，你特别想尝试做什么？", hint: "先不要判断它是否现实，只记录最先出现的愿望。" },
  { category: "理想与愿望", prompt: "有什么事情即使需要花钱，你也愿意认真去学习？", hint: "它可能和职业无关，只要你愿意投入就值得写下。" },
  { category: "理想与愿望", prompt: "你的书架或收藏里，反复出现什么主题？", hint: "也可以写歌曲、电影、视频或你持续关注的内容。" },
  { category: "理想与愿望", prompt: "有没有什么内容曾经帮助过你，甚至像一种救赎？", hint: "它为什么能对你产生这么大的影响？" },
  { category: "理想与愿望", prompt: "你特别想感谢哪些人或事情？", hint: "感谢的对象常常提示我们希望把什么传递下去。" },
  { category: "理想与愿望", prompt: "你对这个世界有什么不满或愤怒？", hint: "愤怒不一定要被消除，它可能在保护某种重要的价值。" },
  { category: "现实校准", prompt: "你未来理想的生活是什么样的？", hint: "请同时想象工作、收入、时间、关系、居住地、生活节奏和日常状态。" }
];

const questionHelp = [
  ["这道题不是让你列出名人，而是观察你被什么样的人吸引。你欣赏的品质，可能就是你想靠近或实践的价值。", "比如：你尊敬一个诚实、能把复杂事情讲清楚的人，不只是因为他的职业，而是因为你在意真实和理解。"],
  ["回想那些改变你兴趣、性格或看世界方式的经历。重点不是事情有多传奇，而是它在你身上留下了什么。", "比如：某段友谊让你意识到真实关系的重要，某本书让你开始关注心理学。"],
  ["你对环境的不满，常常反过来说明你希望世界具有什么。不要急着证明自己正确，只描述你真正在意的缺失。", "比如：你不喜欢人与人只剩下点头之交，这可能说明你重视附近、信任和真实连接。"],
  ["这道题借用别人的视角，帮助你看到自己可能习以为常的特点。你可以写朋友真正说过的话，也可以写自己的猜测。", "比如：朋友会来找你分析问题，说明你可能擅长倾听、理解和组织复杂信息。"],
  ["你给别人的建议，往往也是你相信的生活原则。注意你反复想传达的不是具体技巧，而是什么态度。", "比如：你总劝别人放轻松、不要过度担心，可能说明你重视自由、适度和减少不必要的内耗。"],
  ["充实不等于忙，也不等于结果漂亮。回想一段你在过程中就感到投入、有能量、像在过自己生活的经历。", "比如：和朋友共同做事、采访别人、完成一个作品，都可能比一次高分更能说明你的才能。"],
  ["不耐烦可以是一种线索：它可能说明某件事违背了你的边界，也可能说明你对某种问题特别敏感。", "比如：你对别人不认真听人说话很不耐烦，可能说明你重视理解和真诚交流。"],
  ["不要只写正式技能，也可以写别人为什么愿意来找你。别人反复交给你的问题，通常提供了关于你能力的现实证据。", "比如：别人找你讲题、分析感情问题或倾听烦恼，说明你可能有分析、解释和陪伴的能力。"],
  ["把已经完成过的事情作为证据，而不是用来炫耀。我们想知道你在什么条件下能够坚持、思考并把事情做完。", "比如：完成一个研究项目、学会一门语言、组织一个活动，都可以拆开看你具体贡献了什么。"],
  ["先暂时放下现实限制，写下你想亲自试试的事情。愿望不等于承诺，只是值得验证的方向线索。", "比如：做播客、学心理咨询、做软件、创作音乐，都可以先写下来。"],
  ["这道题问的是你愿意投入成本的好奇心。愿意花钱和时间学习，通常比一句“我觉得有趣”更能说明愿望的强度。", "比如：你愿意付费学乐器、语言、编程或某种研究方法。"],
  ["你长期主动接触的内容，可能比你口头上说的目标更能暴露你的兴趣结构。可以写书，也可以写音乐、频道和电影。", "比如：书架里反复出现心理学、文学、社会观察或创作类内容。"],
  ["这里的“帮助”不一定是宗教意义上的救赎，而是那些曾经让你重新理解自己、获得力量或改变方向的内容。", "比如：某首歌让你改变对人生的态度，某本书让你开始认真面对拖延或关系。"],
  ["感谢的对象显示了什么曾经滋养你，也可能暗示你想把什么继续传递给别人。", "比如：感谢朋友给你的陪伴，也感谢音乐、运动、老师或某个让你保持好奇的环境。"],
  ["愤怒和不满可以作为价值观线索。不是要你写一篇社会批判，而是找出：什么事情让你觉得不应该这样。", "比如：你对人与人被技术隔离感到不满，可能说明你重视真实关系、共同体和附近。"],
  ["这道题把理想拉回现实。不要只写“我想成功”，请想象一个普通星期：你在哪里工作，怎么获得收入，每天和谁相处，有多少自由时间，生活节奏是什么样。", "比如：你希望有舒适的收入，同时保留创作时间、稳定关系和不被工作完全占据的生活。"]
];

const ANSWERS_KEY = "find-yourself-answers";
const SUBMITTED_KEY = "find-yourself-submitted-answers";
const $ = (id) => document.getElementById(id);
const state = { index: 0, page: 0, answers: JSON.parse(localStorage.getItem(ANSWERS_KEY) || "{}"), selectedCareers: [], comparisonStatuses: {} };

const themeProfiles = [
  { name: "创造与表达", cues: ["创作", "创造", "作品", "音乐", "写", "画", "设计", "表达", "视频", "播客", "做出来"] },
  { name: "理解与学习", cues: ["理解", "学习", "研究", "语言", "阅读", "思考", "分析", "知识", "真相", "心理学"] },
  { name: "关系与连接", cues: ["连接", "帮助", "关心", "关系", "朋友", "社区", "沟通", "分享", "附近", "人"] },
  { name: "自由与探索", cues: ["自由", "独立", "探索", "旅行", "好奇", "体验", "世界", "新"] },
  { name: "影响与改变", cues: ["改变", "公平", "环境", "社会", "不满", "问题", "正义", "改善"] },
  { name: "稳定与舒适", cues: ["稳定", "收入", "钱", "赚钱", "舒适", "安全", "生活质量", "时间"] }
];

const careers = [
  { id: "content", title: "内容创作者、播客制作人", description: "通过视频、播客、写作或音乐，把自己的理解和表达转化为作品。", cues: ["创作", "音乐", "写", "视频", "播客", "表达"], values: { money: 2, freedom: 5, creativity: 5, connection: 4, understanding: 4, impact: 3, stability: 2 }, day: "选题、研究、创作、剪辑、发布并和受众交流。", path: "先做小作品或短期项目，职业化通常需要长期积累作品和受众。" },
  { id: "research", title: "社会研究者、用户研究员", description: "通过访谈、观察和分析理解人、社会或用户，再把复杂现象讲清楚。", cues: ["研究", "理解", "分析", "社会", "采访", "问题"], values: { money: 3, freedom: 3, creativity: 3, connection: 4, understanding: 5, impact: 4, stability: 4 }, day: "设计研究、访谈对象、分析材料、形成报告并向团队解释发现。", path: "可以从社会科学、市场研究、UX research 或定性研究项目进入。" },
  { id: "education", title: "教育者、学习设计师", description: "把复杂知识整理成别人能理解、能使用和愿意继续学习的体验。", cues: ["学习", "解释", "帮助", "教学", "理解", "知识"], values: { money: 3, freedom: 3, creativity: 4, connection: 5, understanding: 5, impact: 5, stability: 4 }, day: "备课、解释、设计练习、观察学习者并调整教学方式。", path: "可以从辅导、内容教育、课程设计或教育技术项目开始。" },
  { id: "counseling", title: "心理咨询或助人方向", description: "通过倾听、理解和专业训练，陪伴别人处理情绪、关系或人生问题。", cues: ["心理学", "倾听", "帮助", "关系", "理解", "安慰"], values: { money: 3, freedom: 3, creativity: 2, connection: 5, understanding: 5, impact: 5, stability: 4 }, day: "在专业伦理和训练框架下倾听、评估、回应并持续学习。", path: "这是受训练和执照约束的方向，不能只凭“我喜欢帮助人”直接进入。" },
  { id: "product", title: "AI 产品经理或产品研究者", description: "理解人的需要，把问题、技术和产品体验连接起来，做出真正有用的东西。", cues: ["AI", "技术", "软件", "理解", "问题", "做出来"], values: { money: 4, freedom: 3, creativity: 4, connection: 4, understanding: 4, impact: 4, stability: 4 }, day: "研究用户、定义问题、和工程与设计团队合作、测试并迭代产品。", path: "可以通过个人项目、用户研究、产品实习和技术基础逐步验证。" },
  { id: "software", title: "软件或 AI 创作者", description: "学习技术并把想法实现成软件、工具或互动体验。", cues: ["AI", "编程", "软件", "技术", "做出来", "创造"], values: { money: 4, freedom: 4, creativity: 5, connection: 2, understanding: 4, impact: 3, stability: 4 }, day: "学习技术、设计功能、编写代码、测试产品并不断解决问题。", path: "适合用小项目验证，不需要一开始就决定是否成为软件工程师。" },
  { id: "culture", title: "跨文化传播或语言文化项目", description: "通过语言、文化内容和具体故事，帮助不同背景的人互相理解。", cues: ["语言", "文化", "世界", "理解", "沟通", "连接"], values: { money: 3, freedom: 4, creativity: 4, connection: 5, understanding: 5, impact: 4, stability: 3 }, day: "做翻译、内容、文化项目、国际交流或跨文化沟通。", path: "可以从语言学习、文化内容、国际项目或跨文化采访开始。" },
  { id: "community", title: "社区建设或社会创新", description: "回应人与人失去附近连接等社会问题，设计真实的共同体和公共项目。", cues: ["附近", "社区", "社会", "帮助", "关系", "改变", "人"], values: { money: 2, freedom: 3, creativity: 4, connection: 5, understanding: 4, impact: 5, stability: 2 }, day: "理解社区需要、组织参与者、设计活动并评估真实影响。", path: "可以先从校园组织、公益项目、社区活动或社会研究开始。" }
];

const valueMap = [
  { id: "money", label: "经济收入", cues: ["钱", "收入", "赚钱", "富裕", "物质", "经济"] },
  { id: "freedom", label: "自由与主体性", cues: ["自由", "独立", "不被", "主体性", "自己决定", "不为别人"] },
  { id: "creativity", label: "创造与表达", cues: ["创造", "表达", "作品", "音乐", "艺术", "做出"] },
  { id: "connection", label: "真实关系与连接", cues: ["朋友", "关系", "附近", "连接", "共同体", "陪伴", "人际"] },
  { id: "understanding", label: "理解与知识", cues: ["理解", "真相", "学习", "知识", "研究", "心理学", "思考"] },
  { id: "impact", label: "帮助与社会影响", cues: ["帮助", "改变", "社会", "公平", "有用", "影响"] },
  { id: "stability", label: "稳定与生活质量", cues: ["稳定", "安全", "舒适", "生活质量", "时间", "平衡"] }
];

const careerNotes = {
  content: { money: "收入通常取决于作品、受众、商业合作或平台，早期波动可能较大。", freedom: "创作方式和主题有一定自主性，但平台、流量和受众也会形成新的约束。", creativity: "创造和表达是工作的核心，而不是业余附加项。", connection: "可以和受众建立连接，但线上连接未必等于你理想的深度关系。", understanding: "需要持续研究主题、理解受众并把复杂内容讲清楚。", impact: "影响力取决于内容质量、传播范围和你选择回应的问题。", stability: "工作节奏和收入可能不稳定，需要自己建立结构和边界。" },
  research: { money: "研究岗位的收入和稳定性通常取决于行业、机构和经验。", freedom: "研究问题可能有自主空间，但项目目标、客户或导师会限制方向。", creativity: "创造力主要体现在提出问题、设计方法和讲述发现。", connection: "访谈和合作很多，但关系通常围绕研究目标展开。", understanding: "理解、分析和解释是这类工作的核心回报。", impact: "研究可能影响政策、产品或公共讨论，但影响往往间接发生。", stability: "成熟机构中的岗位相对稳定，早期项目制岗位可能不稳定。" },
  education: { money: "收入通常比自由职业稳定，但上限和工作量取决于教育场景。", freedom: "课程和教学方法有一定自主性，但受课程目标和机构要求影响。", creativity: "需要不断设计例子、活动和解释方式。", connection: "每天都和学习者真实互动，关系感通常很强。", understanding: "既要理解知识，也要理解不同学习者如何理解知识。", impact: "对个体成长的影响直接，但结果不一定马上可见。", stability: "学校或成熟机构通常提供较强稳定性，但时间结构比较固定。" },
  counseling: { money: "完成专业训练后可以形成较稳定的职业路径，但前期投入和门槛较高。", freedom: "咨询方式有专业自主性，但必须遵守伦理、执照和机构规范。", creativity: "创造力主要体现在理解个体、选择回应和建立工作关系。", connection: "核心就是和人建立安全、持续而有边界的关系。", understanding: "需要深入理解情绪、关系、发展和个体处境。", impact: "帮助可能很深，但也伴随责任、边界和情绪负担。", stability: "训练周期长，进入后可以建立相对稳定的专业生活。" },
  product: { money: "技术产品岗位通常有较好的收入可能，但竞争和绩效压力也比较明显。", freedom: "能参与定义问题，但最终会受到用户、商业、团队和资源限制。", creativity: "创造力体现在把模糊问题转成可用产品。", connection: "需要不断理解用户，并和设计、工程、商业团队协作。", understanding: "要同时理解人、技术和组织如何共同运作。", impact: "好的产品可以改变很多人的日常，但规模也可能放大负面影响。", stability: "成熟公司相对稳定，创业或早期团队波动更大。" },
  software: { money: "技术能力通常有较好的收入可能，但需要持续学习并适应变化。", freedom: "个人项目自由度高，受雇工作则受产品目标和技术约束。", creativity: "把抽象想法变成能运行的东西，本身就是创造过程。", connection: "更多通过工具服务别人，日常面对面的关系可能较少。", understanding: "需要深入理解系统、问题和用户需求。", impact: "一个工具可能帮助很多人，但影响取决于你解决的是什么问题。", stability: "技能具有迁移性，但行业变化快，不能把稳定理解成一劳永逸。" },
  culture: { money: "收入路径较多但分散，通常需要语言能力、项目经验和关系网络。", freedom: "跨文化项目可能带来地点和主题上的自由，也受合作方与项目经费影响。", creativity: "需要把语言和文化材料转化成故事、内容或活动。", connection: "工作的核心就是让不同背景的人产生真实理解。", understanding: "需要持续学习语言、历史、语境和人的差异。", impact: "影响通常体现为改变理解、减少误读和建立合作。", stability: "项目制和机构制差异很大，需要接受一定的不确定性。" },
  community: { money: "社会创新和社区工作未必提供最高收入，需要认真评估物质生活目标。", freedom: "可以创造新的组织方式，但资源、政策和参与者会限制行动。", creativity: "需要设计活动、制度和共同参与的方式。", connection: "工作直接围绕真实的附近关系和共同体展开。", understanding: "必须理解具体人的处境，而不能只依赖抽象方案。", impact: "社会影响可能很有意义，但通常缓慢、复杂且难以量化。", stability: "资金和项目周期可能带来较大不确定性。" }
};

function careerSpecificNote(career, valueId) { return careerNotes[career.id]?.[valueId] || "需要进一步了解具体岗位和工作环境。"; }

function saveAnswers() { localStorage.setItem(ANSWERS_KEY, JSON.stringify(state.answers)); }
function show(viewId) { ["intro-view", "question-view", "results-view"].forEach((id) => $(id).classList.toggle("hidden", id !== viewId)); }
function renderIntro() { $("resume-button").classList.toggle("hidden", !localStorage.getItem(SUBMITTED_KEY)); }

function renderQuestion() {
  const q = questions[state.index];
  $("question-number").textContent = state.index + 1;
  $("category-label").textContent = q.category;
  $("question-title").textContent = q.prompt;
  $("question-hint").textContent = q.hint;
  $("answer-input").value = state.answers[state.index] || "";
  $("progress-bar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $("back-button").style.visibility = state.index === 0 ? "hidden" : "visible";
  $("question-help").classList.add("hidden");
  $("question-help-button").setAttribute("aria-expanded", "false");
}

function toggleQuestionHelp() {
  const panel = $("question-help");
  const wasHidden = panel.classList.toggle("hidden");
  const [meaning, example] = questionHelp[state.index];
  panel.innerHTML = `<strong>怎么理解：</strong> ${meaning}<br /><strong>例如：</strong> ${example}`;
  $("question-help-button").setAttribute("aria-expanded", String(!wasHidden));
}

function start() { state.index = 0; show("question-view"); renderQuestion(); $("answer-input").focus(); }
function saveCurrent() { const value = $("answer-input").value.trim(); if (value) state.answers[state.index] = value; else delete state.answers[state.index]; saveAnswers(); }
function next() { saveCurrent(); if (state.index < questions.length - 1) { state.index += 1; renderQuestion(); } else { localStorage.setItem(SUBMITTED_KEY, JSON.stringify(state.answers)); buildAndShowResults(); } }
function previous() { saveCurrent(); if (state.index > 0) { state.index -= 1; renderQuestion(); } }
function skip() { saveCurrent(); next(); }

function categoryText(category) { return questions.map((q, i) => q.category === category ? (state.answers[i] || "") : "").join(" "); }
function allText() { return Object.values(state.answers).join(" "); }
function snippet(category) { const item = questions.map((q, i) => ({ q, a: state.answers[i] || "" })).find((x) => x.q.category === category && x.a.trim()); return item ? (item.a.length > 220 ? `${item.a.slice(0, 220)}……` : item.a) : "暂时没有留下足够的文字证据。"; }
function detectThemes(text) { return themeProfiles.map((p) => ({ name: p.name, score: p.cues.reduce((n, cue) => n + (text.includes(cue) ? 1 : 0), 0) })).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).map((x) => x.name); }
function detectValues(text) { return valueMap.map((v) => ({ ...v, score: v.cues.reduce((n, cue) => n + (text.includes(cue) ? 1 : 0), 0) })).filter((v) => v.score > 0).sort((a, b) => b.score - a.score); }

function careerScore(career, talentText, idealText) {
  const combined = `${talentText} ${idealText}`;
  const matches = career.cues.filter((cue) => combined.includes(cue));
  return { matches, score: matches.length };
}

function buildAnalysis() {
  const talentText = categoryText("才能");
  const idealText = `${categoryText("理想与愿望")} ${state.answers[15] || ""}`;
  const valueText = `${categoryText("价值观")} ${state.answers[15] || ""}`;
  const candidates = careers.map((career) => ({ ...career, fit: careerScore(career, talentText, idealText) })).sort((a, b) => b.fit.score - a.fit.score);
  return {
    values: detectValues(valueText),
    valueThemes: detectThemes(valueText),
    talentThemes: detectThemes(talentText),
    idealThemes: detectThemes(idealText),
    talentSummary: snippet("才能"),
    idealSummary: state.answers[15] || "暂时没有填写理想生活。",
    valueSummary: snippet("价值观"),
    candidates
  };
}

function buildAndShowResults() { state.analysis = buildAnalysis(); state.page = 0; renderResults(); show("results-view"); }
function renderResults() {
  if (!state.analysis) state.analysis = buildAnalysis();
  document.querySelectorAll(".results-tab").forEach((tab) => tab.classList.toggle("active", Number(tab.dataset.page) === state.page));
  if (state.page === 0) renderSummaryPage();
  if (state.page === 1) renderCareerPage();
  if (state.page === 2) renderComparisonPage();
}

function keywordHtml(items) { return items.length ? items.map((item) => `<span class="keyword">${item}</span>`).join("") : `<span class="keyword">还不明确</span>`; }
function renderSummaryPage() {
  const a = state.analysis;
  $("result-content").innerHTML = `
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">01</span><h2>先整理你提供的材料</h2></div>
      <p class="step-description">这里不急着给职业建议，只把你的三类回答分别整理出来。关键词只是入口，下面保留了形成判断的原始重点。</p>
      <div class="summary-grid">
        <article class="summary-card"><h3>你的才能</h3><div class="keyword-row">${keywordHtml(a.talentThemes)}</div><p>${a.talentSummary}</p></article>
        <article class="summary-card"><h3>你的理想与愿望</h3><div class="keyword-row">${keywordHtml(a.idealThemes)}</div><p>${a.idealSummary}</p></article>
        <article class="summary-card"><h3>你的价值观</h3><div class="keyword-row">${keywordHtml(a.valueThemes)}</div><p>${a.valueSummary}</p></article>
      </div>
      <div class="life-card"><h3>现实校准：你未来理想的生活</h3><p>${a.idealSummary}</p></div>
    </section>`;
}

function renderCareerPage() {
  const a = state.analysis;
  $("result-content").innerHTML = `
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">02</span><h2>哪些职业可能适合你？</h2></div>
      <p class="step-description">这些建议来自你的才能、愿望和理想生活，而不是单一关键词。先选你愿意继续了解的方向，下一页再用价值观逐个比对。</p>
      <div class="research-note"><strong>职业研究维度：</strong>下面每个方向都先拆成日常工作、进入路径和现实条件。当前是本地原型资料库；后续可以接入 AI 和实时职业资料，补充最新的工作内容、收入、教育要求和就业变化。</div>
      <div class="career-grid">${a.candidates.slice(0, 8).map((career) => `<article class="career-card ${state.selectedCareers.includes(career.id) ? "selected" : ""}" data-career-card="${career.id}"><label class="career-top"><input type="checkbox" data-career="${career.id}" ${state.selectedCareers.includes(career.id) ? "checked" : ""} /><span><h3>${career.title}</h3><p>${career.description}</p><p><b>为什么出现在这里：</b>与你的回答有 ${career.fit.score} 个方向线索重合（${career.fit.matches.join("、") || "需要进一步探索"}）。</p></span></label><div class="career-meta"><div><strong>日常可能做什么</strong><span>${career.day}</span></div><div><strong>现实进入路径</strong><span>${career.path}</span></div></div></article>`).join("")}</div>
      <p class="microcopy">已选择 <span id="selected-count">${state.selectedCareers.length}</span> 个方向。建议先选择 2–5 个进行比较。</p>
    </section>`;
  document.querySelectorAll("[data-career]").forEach((input) => input.addEventListener("change", () => {
    if (input.checked && !state.selectedCareers.includes(input.dataset.career)) state.selectedCareers.push(input.dataset.career);
    if (!input.checked) state.selectedCareers = state.selectedCareers.filter((id) => id !== input.dataset.career);
    renderCareerPage();
  }));
}

function fitText(label, score) {
  if (score >= 4) return `较符合：这个方向能比较直接地满足你对“${label}”的重视。`;
  if (score === 3) return `部分符合：这个方向能够满足“${label}”的一部分，但取决于具体组织、岗位和你之后的选择。`;
  if (score <= 1) return `存在张力：这个方向未必能稳定满足“${label}”，需要认真考虑你愿意牺牲什么，或者通过其他生活安排补足。`;
  return `中等符合：它可能满足“${label}”，但不是这个方向最稳定的回报。`;
}

function renderComparisonPage() {
  const a = state.analysis;
  const selected = a.candidates.filter((career) => state.selectedCareers.includes(career.id));
  if (!selected.length) {
    $("result-content").innerHTML = `<section class="analysis-step"><div class="step-heading"><span class="step-number">03</span><h2>先选择几个方向</h2></div><p class="step-description">请先到“2 选择方向”页面，选择你想认真比较的职业。这里不会替你默认选择。</p></section>`;
    return;
  }
  const values = a.values.length ? a.values : valueMap.slice(0, 3).map((v) => ({ ...v, score: 0 }));
  $("result-content").innerHTML = `<section class="analysis-step"><div class="step-heading"><span class="step-number">03</span><h2>职业和你的价值观</h2></div><p class="step-description">这不是给职业打一个总分，而是逐项解释：它满足了你在乎的什么，又在哪些地方会产生冲突。</p>${selected.map((career) => `<article class="comparison-card"><h3>${career.title}</h3>${values.map((value) => { const score = career.values[value.id] || 2; return `<div class="value-comparison"><div class="value-comparison-header"><strong>${value.label}</strong><span class="fit-label">${score}/5</span></div><div class="fit-bar"><div class="fit-fill" style="width:${score * 20}%"></div></div><p>${fitText(value.label, score)} ${career.title}的具体情况：${careerSpecificNote(career, value.id)}</p></div>`; }).join("")}<div class="life-card"><h3>和理想生活的关系</h3><p>${career.title}可能带来的生活方式，需要与你的理想生活进行进一步验证：${career.day}</p></div></article>`).join("")}</section>`;
}

function resultText() {
  const a = state.analysis || buildAnalysis();
  return ["找自己：分析结果", "", "才能：" + a.talentThemes.join("、"), "理想与愿望：" + a.idealThemes.join("、"), "价值观：" + a.valueThemes.join("、"), "理想生活：" + a.idealSummary, "", "选择的方向：", ...a.candidates.filter((c) => state.selectedCareers.includes(c.id)).map((c) => c.title)].join("\n");
}

function copyResults() {
  const helper = document.createElement("textarea"); helper.value = resultText(); helper.style.position = "fixed"; helper.style.opacity = "0"; document.body.appendChild(helper); helper.focus(); helper.select();
  try { document.execCommand("copy"); $("copy-button").textContent = "已复制 ✓"; } catch { $("copy-button").textContent = "请使用下载"; }
  helper.remove(); setTimeout(() => $("copy-button").textContent = "复制我的结果", 1800);
}

function downloadResults() { const blob = new Blob([resultText()], { type: "text/plain;charset=utf-8" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "找自己-分析结果.txt"; link.click(); URL.revokeObjectURL(url); }
function showAnswers() { $("results-nav").insertAdjacentHTML("afterend", `<section class="analysis-step"><div class="step-heading"><span class="step-number">A</span><h2>我的原始回答</h2></div><div class="response-list">${questions.map((q, i) => `<div class="response-item"><strong>${i + 1}. ${q.category} · ${q.prompt}</strong><p>${state.answers[i] || "（暂时跳过）"}</p></div>`).join("")}</div></section>`); window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); }
function restart() { localStorage.setItem(SUBMITTED_KEY, JSON.stringify(state.answers)); if (!confirm("开始新的探索？刚才的回答已经保存，可以从首页再次查看。")) return; state.index = 0; state.answers = {}; localStorage.removeItem(ANSWERS_KEY); show("intro-view"); renderIntro(); }
function loadSubmitted() { const saved = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || "null"); if (!saved) return; state.answers = saved; state.selectedCareers = []; buildAndShowResults(); }

document.querySelectorAll(".results-tab").forEach((tab) => tab.addEventListener("click", () => { state.page = Number(tab.dataset.page); renderResults(); }));
$("start-button").addEventListener("click", start);
$("resume-button").addEventListener("click", loadSubmitted);
$("next-button").addEventListener("click", next);
$("back-button").addEventListener("click", previous);
$("skip-button").addEventListener("click", skip);
$("question-help-button").addEventListener("click", toggleQuestionHelp);
$("restart-button").addEventListener("click", restart);
$("view-answers-button").addEventListener("click", showAnswers);
$("copy-button").addEventListener("click", copyResults);
$("download-button").addEventListener("click", downloadResults);
renderIntro();
