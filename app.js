const questions = [
  { number: 1, category: "价值观", prompt: "你尊敬什么样的人？他身上有什么品质让你在意？", hint: "可以是真实认识的人，也可以是作家、艺术家、角色或公众人物。" },
  { number: 2, category: "价值观", prompt: "在你青春期或思维最活跃的时期，有什么事情深深影响过你？", hint: "想想哪些经历改变了你看待自己或世界的方式。" },
  { number: 3, category: "价值观", prompt: "你觉得现在的社会或周围环境有什么不足？", hint: "你感到不满的地方，常常也暗示着你在乎什么。" },
  { number: 4, category: "价值观", prompt: "在朋友眼中，你是一个看重什么东西的人？", hint: "如果不确定，可以想象朋友会怎样描述你。" },
  { number: 5, category: "价值观", prompt: "如果别人来向你寻求建议，你通常会建议什么？", hint: "你愿意给出的建议，往往也是你自己的生活准则。" },
  { isAddon: true, category: "价值观附加问题", prompt: "你未来理想的生活是什么样的？", hint: "请尽量具体：你希望年收入大致多少、每周能接受工作多少小时、在哪里生活、保留多少自由时间、和谁相处，以及哪些事情不愿牺牲。" },
  { number: 6, category: "才能", prompt: "你人生中最充实的一段经历是什么？当时你具体做了什么？", hint: "不要只写结果，也注意当时哪些过程让你感到有能量。" },
  { number: 7, category: "才能", prompt: "最近一次让你觉得不耐烦的事情是什么？", hint: "不耐烦有时说明你对某些问题有敏锐的判断或更高的要求。" },
  { number: 8, category: "才能", prompt: "别人通常会向你寻求什么帮助？", hint: "可以是学习、表达、组织、倾听、分析或任何其他事情。" },
  { number: 9, category: "才能", prompt: "到目前为止，你做成过什么事情？", hint: "不一定要是很大的成就，任何你真正完成过的事都可以。" },
  { number: 10, category: "才能", prompt: "如果不考虑现在的安排，你特别想尝试做什么？", hint: "先不要判断它是否现实，只记录最先出现的愿望。" },
  { number: 11, category: "理想与愿望", prompt: "有什么事情即使需要花钱，你也愿意认真去学习？", hint: "它可能和职业无关，只要你愿意投入就值得写下。" },
  { number: 12, category: "理想与愿望", prompt: "你的书架或收藏里，反复出现什么主题？", hint: "也可以写歌曲、电影、视频或你持续关注的内容。" },
  { number: 13, category: "理想与愿望", prompt: "有没有什么内容曾经帮助过你，甚至像一种救赎？", hint: "它为什么能对你产生这么大的影响？" },
  { number: 14, category: "理想与愿望", prompt: "你特别想感谢哪些人或事情？", hint: "感谢的对象常常提示我们希望把什么传递下去。" },
  { number: 15, category: "理想与愿望", prompt: "你对这个世界有什么不满或愤怒？", hint: "愤怒不一定要被消除，它可能在保护某种重要的价值。" }
];

const questionHelp = [
  ["这道题不是让你列出名人，而是观察你被什么样的人吸引。你欣赏的品质，可能就是你想靠近或实践的价值。", "比如：你尊敬一个诚实、能把复杂事情讲清楚的人，不只是因为他的职业，而是因为你在意真实和理解。"],
  ["回想那些改变你兴趣、性格或看世界方式的经历。重点不是事情有多传奇，而是它在你身上留下了什么。", "比如：某段友谊让你意识到真实关系的重要，某本书让你开始关注心理学。"],
  ["你对环境的不满，常常反过来说明你希望世界具有什么。不要急着证明自己正确，只描述你真正在意的缺失。", "比如：你不喜欢人与人只剩下点头之交，这可能说明你重视附近、信任和真实连接。"],
  ["这道题借用别人的视角，帮助你看到自己可能习以为常的特点。你可以写朋友真正说过的话，也可以写自己的猜测。", "比如：朋友会来找你分析问题，说明你可能擅长倾听、理解和组织复杂信息。"],
  ["你给别人的建议，往往也是你相信的生活原则。注意你反复想传达的不是具体技巧，而是什么态度。", "比如：你总劝别人放轻松、不要过度担心，可能说明你重视自由、适度和减少不必要的内耗。"],
  ["这道题把理想拉回现实。除了想做什么，也请写出你愿意用什么生活条件来支持它：大致收入、可接受的工作时长、地点、关系、自由时间，以及不愿意牺牲的东西。", "比如：你希望税前年收入约 8 万美元、每周工作 40 小时以内，保留创作和稳定关系的时间，也不接受长期失去自主性。"],
  ["充实不等于忙，也不等于结果漂亮。回想一段你在过程中就感到投入、有能量、像在过自己生活的经历。", "比如：和朋友共同做事、采访别人、完成一个作品，都可能比一次高分更能说明你的才能。"],
  ["不耐烦可以是一种线索：它可能说明某件事违背了你的边界，也可能说明你对某种问题特别敏感。", "比如：你对别人不认真听人说话很不耐烦，可能说明你重视理解和真诚交流。"],
  ["不要只写正式技能，也可以写别人为什么愿意来找你。别人反复交给你的问题，通常提供了关于你能力的现实证据。", "比如：别人找你讲题、分析感情问题或倾听烦恼，说明你可能有分析、解释和陪伴的能力。"],
  ["把已经完成过的事情作为证据，而不是用来炫耀。我们想知道你在什么条件下能够坚持、思考并把事情做完。", "比如：完成一个研究项目、学会一门语言、组织一个活动，都可以拆开看你具体贡献了什么。"],
  ["先暂时放下现实限制，写下你想亲自试试的事情。愿望不等于承诺，只是值得验证的方向线索。", "比如：做播客、学心理咨询、做软件、创作音乐，都可以先写下来。"],
  ["这道题问的是你愿意投入成本的好奇心。愿意花钱和时间学习，通常比一句“我觉得有趣”更能说明愿望的强度。", "比如：你愿意付费学乐器、语言、编程或某种研究方法。"],
  ["你长期主动接触的内容，可能比你口头上说的目标更能暴露你的兴趣结构。可以写书，也可以写音乐、频道和电影。", "比如：书架里反复出现心理学、文学、社会观察或创作类内容。"],
  ["这里的“帮助”不一定是宗教意义上的救赎，而是那些曾经让你重新理解自己、获得力量或改变方向的内容。", "比如：某首歌让你改变对人生的态度，某本书让你开始认真面对拖延或关系。"],
  ["感谢的对象显示了什么曾经滋养你，也可能暗示你想把什么继续传递给别人。", "比如：感谢朋友给你的陪伴，也感谢音乐、运动、老师或某个让你保持好奇的环境。"],
  ["愤怒和不满可以作为价值观线索。不是要你写一篇社会批判，而是找出：什么事情让你觉得不应该这样。", "比如：你对人与人被技术隔离感到不满，可能说明你重视真实关系、共同体和附近。"]
];

const ANSWERS_KEY = "find-yourself-answers";
const SUBMITTED_KEY = "find-yourself-submitted-answers";
const ANSWERS_VERSION_KEY = "find-yourself-answers-version";
const SUBMITTED_VERSION_KEY = "find-yourself-submitted-answers-version";
const ANSWERS_VERSION = "2";
const $ = (id) => document.getElementById(id);

function migrateAnswers(raw, force = false) {
  if (!raw || (!force && localStorage.getItem(ANSWERS_VERSION_KEY) === ANSWERS_VERSION)) return raw || {};
  const migrated = {};
  for (let i = 0; i < 5; i += 1) if (raw[i]) migrated[i] = raw[i];
  if (raw[15]) migrated[5] = raw[15];
  for (let i = 6; i <= 15; i += 1) if (raw[i - 1]) migrated[i] = raw[i - 1];
  localStorage.setItem(ANSWERS_VERSION_KEY, ANSWERS_VERSION);
  return migrated;
}

const state = { index: 0, page: 0, salaryRegion: "china", answers: migrateAnswers(JSON.parse(localStorage.getItem(ANSWERS_KEY) || "{}")), selectedCareers: [], openCareers: [], comparisonStatuses: {}, analysis: null, analysisSource: "local" };
localStorage.setItem(ANSWERS_KEY, JSON.stringify(state.answers));

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
  { id: "money", label: "经济与现实条件", cues: ["钱", "收入", "赚钱", "富裕", "物质", "经济", "年薪", "美元", "人民币", "每月"] },
  { id: "freedom", label: "自主与不背叛自己", cues: ["自由", "独立", "不被", "主体性", "自己决定", "不为别人", "真实", "做自己", "高我"] },
  { id: "creativity", label: "创造与表达", cues: ["创造", "表达", "作品", "音乐", "艺术", "做出"] },
  { id: "connection", label: "真实关系与附近", cues: ["朋友", "关系", "附近", "连接", "共同体", "陪伴", "人际", "真实关系"] },
  { id: "understanding", label: "理解与成长", cues: ["理解", "真相", "学习", "知识", "研究", "心理学", "思考", "成长"] },
  { id: "impact", label: "帮助与社会影响", cues: ["帮助", "改变", "社会", "公平", "有用", "影响"] },
  { id: "stability", label: "稳定与生活节奏", cues: ["稳定", "安全", "舒适", "生活质量", "时间", "平衡", "工作时长", "每周"] }
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

const careerResearch = {
  content: { income: { china: { range: "¥60,000–¥300,000+ / 年", median: "约 ¥120,000 / 年" }, us: { range: "$35,000–$120,000+ / 年", median: "约 $65,000 / 年" }, factors: "受雇岗位还是自由创作、平台流量、作品质量、商业合作和受众规模。", sourceNote: "创作者收入没有统一薪资口径，这里以内容编辑、媒体制作和自由创作的宽范围做原型参考。" }, requirements: "作品集、选题与叙事能力、基础拍摄或剪辑能力，以及长期建立受众的能力。", cases: ["从短视频、播客或个人 newsletter 做小规模实验，再根据受众反馈形成稳定主题。", "在媒体、教育、文化机构或品牌团队中先积累编辑、策划和制作经验。"], links: [{ title: "YouTube：内容创作者/播客工作日搜索", url: "https://www.youtube.com/results?search_query=内容创作者+播客+一天的工作" }, { title: "B站：内容创作者职业案例搜索", url: "https://search.bilibili.com/all?keyword=内容创作者%20职业%20案例" }] },
  research: { income: { china: { range: "¥100,000–¥350,000 / 年", median: "约 ¥180,000 / 年" }, us: { range: "$50,000–$125,000 / 年", median: "约 $85,000 / 年" }, factors: "受研究类型、行业、城市、方法能力、学历和是否直接影响商业决策影响。", sourceNote: "社会研究、市场研究和用户研究的岗位口径不同，实际收入差异会很大。" }, requirements: "研究设计、访谈、观察、定性或定量分析、写作汇报，以及对研究伦理的理解。", cases: ["先参与校园、实验室或个人访谈项目，练习从问题到证据再到结论的完整链条。", "用户研究员通常会把访谈发现转化为产品决策，而社会研究者可能服务于政策或公共议题。"], links: [{ title: "YouTube：用户研究员/社会研究员工作搜索", url: "https://www.youtube.com/results?search_query=用户研究员+社会研究员+一天的工作" }, { title: "B站：用户研究职业案例搜索", url: "https://search.bilibili.com/all?keyword=用户研究员%20职业%20案例" }] },
  education: { income: { china: { range: "¥80,000–¥280,000 / 年", median: "约 ¥150,000 / 年" }, us: { range: "$45,000–$105,000 / 年", median: "约 $70,000 / 年" }, factors: "受公立/私立机构、城市、教学对象、课程设计能力、资格和是否自由授课影响。", sourceNote: "学校、课程设计、教育科技和自由辅导的收入差距较大。" }, requirements: "领域知识、解释能力、课程/活动设计、反馈能力；正式教学岗位可能需要相应资格。", cases: ["从辅导、学习内容或助教开始，观察学习者真正卡在哪里，再设计解释和练习。", "学习设计师会把目标、内容、活动和评估组合成可使用的学习体验。"], links: [{ title: "YouTube：学习设计师/教育工作者工作搜索", url: "https://www.youtube.com/results?search_query=学习设计师+教育工作者+一天的工作" }, { title: "B站：课程设计职业案例搜索", url: "https://search.bilibili.com/all?keyword=课程设计师%20职业%20案例" }] },
  counseling: { income: { china: { range: "¥80,000–¥360,000 / 年", median: "约 ¥160,000 / 年" }, us: { range: "$40,000–$85,000 / 年", median: "约 $58,000 / 年" }, factors: "受执照/训练、机构或私人执业、城市、来访量、咨询时长和专业方向影响。", sourceNote: "助人行业必须区分受训练的专业工作与没有执照要求的情绪支持服务。" }, requirements: "心理学基础、临床训练、督导、伦理与当地执照；不能只凭善于倾听直接执业。", cases: ["先通过心理学课程、志愿服务或受督导的助人实践确认自己能否长期承受这类工作。", "不同方向的工作对象、治疗取向、机构环境和情绪负担差异很大。"], links: [{ title: "YouTube：心理咨询师工作日与训练路径搜索", url: "https://www.youtube.com/results?search_query=心理咨询师+工作日+训练路径" }, { title: "B站：心理咨询职业案例搜索", url: "https://search.bilibili.com/all?keyword=心理咨询师%20职业%20案例" }] },
  product: { income: { china: { range: "¥180,000–¥650,000+ / 年", median: "约 ¥320,000 / 年" }, us: { range: "$70,000–$180,000+ / 年", median: "约 $115,000 / 年" }, factors: "受城市、公司规模、行业、产品责任范围、技术理解和项目结果影响。", sourceNote: "产品经理、产品研究和 AI 产品岗位没有完全统一的职业口径，这里是互联网/科技行业原型参考。" }, requirements: "用户研究、问题定义、产品写作、原型与测试、跨团队沟通；技术基础很有帮助。", cases: ["用一个真实用户问题做小产品，从访谈、原型、测试到迭代留下完整记录。", "产品研究岗位更偏向理解用户与证据，产品经理还要承担优先级和落地协调。"], links: [{ title: "YouTube：产品经理工作日与案例搜索", url: "https://www.youtube.com/results?search_query=产品经理+工作日+真实案例" }, { title: "B站：AI 产品经理职业案例搜索", url: "https://search.bilibili.com/all?keyword=AI产品经理%20职业%20案例" }] },
  software: { income: { china: { range: "¥180,000–¥700,000+ / 年", median: "约 ¥320,000 / 年" }, us: { range: "$70,000–$190,000+ / 年", median: "约 $125,000 / 年" }, factors: "受技术栈、工程深度、城市、公司类型、经验和是否承担 AI/系统核心工作影响。", sourceNote: "软件开发、AI 工程和独立创作的收入差异很大，不能把中位数当作个人预期。" }, requirements: "编程基础、调试、系统思维、版本控制、测试，以及把用户需求转成可实现方案的能力。", cases: ["从一个能被朋友实际使用的小工具开始，记录需求、实现、测试和反馈。", "AI 创作者还需要理解模型局限、数据隐私和如何验证输出是否真的有用。"], links: [{ title: "YouTube：软件工程师/AI 工程师工作搜索", url: "https://www.youtube.com/results?search_query=软件工程师+AI工程师+一天的工作" }, { title: "B站：独立开发者职业案例搜索", url: "https://search.bilibili.com/all?keyword=独立开发者%20职业%20案例" }] },
  culture: { income: { china: { range: "¥60,000–¥260,000 / 年", median: "约 ¥130,000 / 年" }, us: { range: "$35,000–$95,000 / 年", median: "约 $60,000 / 年" }, factors: "受语言组合、专业领域、客户类型、项目制程度、城市和是否兼有内容/项目能力影响。", sourceNote: "口译、笔译、国际项目和文化机构的收入路径不同。" }, requirements: "高水平语言能力、文化语境理解、写作/翻译/项目协作和跨文化沟通能力。", cases: ["通过语言学习、跨文化采访或文化内容项目，先观察自己喜欢的是语言本身还是人与语境的连接。", "国际项目中需要同时处理不同沟通习惯、时间安排和组织目标。"], links: [{ title: "YouTube：跨文化传播/翻译工作搜索", url: "https://www.youtube.com/results?search_query=跨文化传播+翻译+一天的工作" }, { title: "B站：跨文化职业案例搜索", url: "https://search.bilibili.com/all?keyword=跨文化传播%20职业%20案例" }] },
  community: { income: { china: { range: "¥60,000–¥260,000 / 年", median: "约 ¥130,000 / 年" }, us: { range: "$40,000–$105,000 / 年", median: "约 $65,000 / 年" }, factors: "受公共部门/企业/非营利组织、项目资金、城市、管理责任和组织规模影响。", sourceNote: "社区与社会创新岗位的收入和稳定性通常不如商业岗位统一。" }, requirements: "社区倾听、项目组织、合作沟通、资源协调、影响评估与对具体处境的尊重。", cases: ["先参与校园组织、公益项目或社区活动，观察自己是否愿意处理长期、琐碎但重要的协调工作。", "社会创新的真实效果通常需要时间，不能只用活动数量衡量。"], links: [{ title: "YouTube：社区工作/社会创新工作搜索", url: "https://www.youtube.com/results?search_query=社区工作者+社会创新+一天的工作" }, { title: "B站：社会创新职业案例搜索", url: "https://search.bilibili.com/all?keyword=社会创新%20职业%20案例" }] }
};
careers.forEach((career) => Object.assign(career, careerResearch[career.id] || {}));

const careerLogic = {
  content: { talent: "它需要把研究、观察和个人理解组织成别人愿意听完的表达；如果你已经在回答中表现出解释、创作或持续研究的过程，这部分是可迁移的。", dream: "它能直接承接你想做视频、播客、写作或音乐内容的愿望，但梦想能否变成稳定生活，取决于你是否愿意长期经营作品、受众和收入结构。", tradeoff: "自由和表达比较强，收入与节奏却可能波动；如果你希望稳定收入，需要先把它当作可验证的项目，而不是立即押注。" },
  research: { talent: "它把访谈、观察、分析和写作变成日常工作；如果你享受理解人和把复杂材料讲清楚，已有经历可以转化为研究作品集。", dream: "它能连接你对社会、心理、人的故事和真实问题的兴趣，但最后产出常常是报告和决策支持，不一定是你想象中的直接创作。", tradeoff: "理解深度和影响力较强，但项目目标、客户或机构会限制问题；你需要确认自己能否接受较长的证据积累过程。" },
  education: { talent: "它要求把自己理解的东西重新组织成别人能学会的路径；如果你常为朋友解释、辅导或整理知识，这些经历可以成为现实证据。", dream: "它可以把学习、帮助人和表达结合起来，也可能提供比纯创作更稳定的日常；但工作中会有重复解释、评估和机构要求。", tradeoff: "连接感和影响力比较直接，时间结构可能更固定；如果你最想要的是完全自主的生活节奏，需要选择合适的教育场景。" },
  counseling: { talent: "它需要倾听、理解关系和承受复杂情绪，也要求长期训练和专业边界；善于给建议只是起点，不等于已经适合执业。", dream: "它可能回应你希望帮助别人、理解自己和理解人的愿望，但这是受伦理和资格约束的专业工作，不能只靠理想感进入。", tradeoff: "关系深度和帮助感很强，训练周期、情绪负担和责任也很重；需要先通过课程、志愿或受督导实践验证。" },
  product: { talent: "它需要同时理解人的需要、技术限制和组织协作；如果你既想研究问题又想把东西做出来，个人项目可以成为很有说服力的证据。", dream: "它能把 AI、软件、理解人和实际帮助结合起来，和你想创造有用产品的愿望比较接近；但产品也必须面对商业目标和用户反馈。", tradeoff: "影响范围和收入可能较好，但自主性不是无限的，优先级、团队和市场会持续介入；你需要确认自己愿意在现实约束中创造。" },
  software: { talent: "它要求持续拆解问题、学习技术、调试和完成实现；如果你对编程或工具有真实愿望，小项目比抽象兴趣更能验证这条路。", dream: "它可以把“做出有用的软件”直接变成作品，并保留较强的创造空间；但日常也包含大量细节、报错、维护和独处时间。", tradeoff: "创造、收入和自主性可能较强，面对面关系未必充分；如果你希望工作本身提供大量深度关系，需要额外设计协作和用户接触。" },
  culture: { talent: "它需要语言学习、语境理解、沟通和把差异讲清楚的能力；如果你对语言和不同生活经验有持续兴趣，跨文化项目能把它变成具体工作。", dream: "它能承接你对音乐、语言、世界和人与人理解的愿望，但部分岗位的日常可能更偏翻译、协调或项目执行，而不是持续创作。", tradeoff: "连接和探索比较强，收入路径和工作稳定性需要具体选择；你需要分辨自己更想做语言服务、文化内容还是国际项目。" },
  community: { talent: "它需要倾听具体处境、组织人和持续协调，而不是只提出一个漂亮理念；如果你在意附近和真实关系，校园或社区项目能提供验证。", dream: "它能把你对真实连接、社会问题和帮助别人的愿望带到现实中，但改变通常缓慢，成果也不总是容易量化。", tradeoff: "意义感和关系性强，收入、资源和稳定性可能较弱；如果你有明确的物质目标，需要把资金来源和生活底线提前算清楚。" }
};
careers.forEach((career) => Object.assign(career, careerLogic[career.id] || {}));

function saveAnswers() { localStorage.setItem(ANSWERS_KEY, JSON.stringify(state.answers)); }
function show(viewId) { ["intro-view", "question-view", "results-view"].forEach((id) => $(id).classList.toggle("hidden", id !== viewId)); }
function renderIntro() { $("resume-button").classList.toggle("hidden", !localStorage.getItem(SUBMITTED_KEY)); }

function renderQuestion() {
  const q = questions[state.index];
  $("question-number").textContent = q.isAddon ? "价值观附加问题" : `问题 ${q.number} / 15`;
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
function next() { saveCurrent(); if (state.index < questions.length - 1) { state.index += 1; renderQuestion(); } else { localStorage.setItem(SUBMITTED_KEY, JSON.stringify(state.answers)); localStorage.setItem(SUBMITTED_VERSION_KEY, ANSWERS_VERSION); buildAndShowResults(); } }
function previous() { saveCurrent(); if (state.index > 0) { state.index -= 1; renderQuestion(); } }
function skip() { saveCurrent(); next(); }

function escapeHtml(value = "") { return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character])); }
function categoryText(category) { return questions.map((q, i) => q.category === category ? (state.answers[i] || "") : "").join(" "); }
function lifeText() { return state.answers[5] || ""; }
function allText() { return Object.values(state.answers).join(" "); }
function detectThemes(text) { return themeProfiles.map((p) => ({ name: p.name, score: p.cues.reduce((n, cue) => n + (text.includes(cue) ? 1 : 0), 0) })).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).map((x) => x.name); }
function detectValues(text) { return valueMap.map((v) => ({ ...v, score: v.cues.reduce((n, cue) => n + (text.includes(cue) ? 1 : 0), 0) })).filter((v) => v.score > 0).sort((a, b) => b.score - a.score); }

const themeDescriptions = {
  "创造与表达": "把想法、感受或理解转化为作品、内容和别人能够接收到的表达",
  "理解与学习": "拆解复杂问题、持续学习，并形成自己的判断和解释",
  "关系与连接": "倾听和理解具体的人，在真实关系中建立信任与互相支持",
  "自由与探索": "保留选择空间，对新经验和不同世界保持主动好奇",
  "影响与改变": "发现环境中的问题，并希望让现实变得更公平、更有用或更接近理想",
  "稳定与舒适": "认真考虑收入、时间、居住和生活节奏，让理想可以长期维持"
};

function describeThemes(themes, fallback) {
  if (!themes.length) return fallback;
  const descriptions = themes.slice(0, 3).map((theme) => themeDescriptions[theme] || theme);
  return `你的回答反复指向${descriptions.join("、")}。这说明你在意的不只是一个抽象标签，而是一种可以在日常工作和生活中反复实践的方式。`;
}

function summarizeCategory(category, text, themes) {
  if (!text.trim()) return "暂时没有足够的回答可以形成稳定判断，之后可以通过具体经历继续补充。";
  if (category === "才能") return `从你对充实经历、他人求助和已经完成的事情的描述来看，你的优势可能集中在${themes.slice(0, 3).map((theme) => themeDescriptions[theme] || theme).join("、") || "持续投入、解决问题和完成事情"}。这些更像是你在什么样的工作过程中容易发挥，而不只是某几个技能名称。`;
  if (category === "理想与愿望") return `你想把${themes.slice(0, 3).map((theme) => themeDescriptions[theme] || theme).join("、") || "持续学习和真实兴趣"}带进未来。这里既包含想做的事，也包含你希望自己的生活保持什么感觉；它们会和才能一起生成下一步值得了解的方向。`;
  return `你在意${themes.slice(0, 3).map((theme) => themeDescriptions[theme] || theme).join("、") || "真实、可持续且不违背自己的生活"}。这些价值需要放回理想生活的收入、时间、关系和居住条件里检验，才不会停留在过于理想化的口号。`;
}
function pointsHtml(items = []) { return items.length ? `<ul class="summary-points">${items.slice(0, 5).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""; }

function careerScore(career, talentText, idealText) {
  const combined = `${talentText} ${idealText}`;
  const matches = career.cues.filter((cue) => combined.includes(cue));
  return { matches, score: matches.length };
}

function answerSentences(category) {
  return questions.map((question, index) => question.category === category ? (state.answers[index] || "") : "").join(" ").split(/[。！？!?；;\n]+/).map((sentence) => sentence.trim()).filter(Boolean);
}

function shortEvidence(category, cues) {
  const sentences = answerSentences(category);
  const match = sentences.find((sentence) => cues.some((cue) => sentence.includes(cue)));
  if (!match) return "";
  return match.length > 72 ? `${match.slice(0, 72)}……` : match;
}

function parseLifeConstraints(text) {
  const income = text.match(/(?:\$\s*[\d,]+(?:\s*[kK万千百亿]|\s*万)?|[\d,.]+\s*(?:万美元|美元|人民币|元|万块|万元|万))/);
  const hours = text.match(/(?:每周|一周|每天)[^。！？!?；;\n]{0,20}(?:小时|时|工作日)/);
  const location = text.match(/(?:住在|生活在|居住在|地点是|想在)[^。！？!?；;\n]{2,24}/);
  return {
    income: income ? income[0] : "还没有明确写出具体收入目标",
    hours: hours ? hours[0] : "还没有明确写出可接受的工作时长",
    location: location ? location[0] : "还没有明确写出地点偏好",
    hasConcrete: Boolean(income || hours || location)
  };
}

function futureLifeSummary(text, profile) {
  if (!text.trim()) return "你还没有填写理想生活，因此这里暂时不能判断收入、工作时长和生活节奏是否是硬条件。";
  const constraints = parseLifeConstraints(text);
  const concrete = [constraints.income, constraints.hours, constraints.location].filter((item) => !item.startsWith("还没有")).join("；");
  const priorities = profile.slice(0, 4).map((item) => item.label).join("、");
  return `你想要的未来生活不只是一个职业名称，而是同时包含${priorities || "自主性、关系和可持续的生活节奏"}。${concrete ? `目前已经明确的现实条件包括：${concrete}。` : "目前还需要把收入和时间等条件写得更具体。"}这些条件会直接影响职业比较。`;
}

function valueProfile(text) {
  return valueMap.map((value) => {
    const evidence = value.cues.reduce((count, cue) => count + (text.includes(cue) ? 1 : 0), 0);
    return { ...value, evidence, importance: Math.min(5, 1 + evidence * 0.8), evidenceText: shortEvidence("价值观", value.cues) || shortEvidence("价值观附加问题", value.cues) };
  }).sort((a, b) => b.evidence - a.evidence);
}

function scoreCareerValue(career, value, profile) {
  const base = Number(career.values?.[value.id] || 2.5);
  const priorityAdjustment = value.evidence ? Math.min(0.6, value.evidence * 0.1) : 0;
  const score = Math.max(0, Math.min(10, Number((base * 2 + priorityAdjustment).toFixed(1))));
  const explanation = careerSpecificNote(career, value.id);
  return { score, explanation };
}

function overallCareerFit(career, profile) {
  const relevant = profile.filter((value) => value.evidence > 0);
  const dimensions = relevant.length ? relevant : profile.slice(0, 3);
  const totalWeight = dimensions.reduce((sum, value) => sum + value.importance, 0) || 1;
  const weighted = dimensions.reduce((sum, value) => sum + scoreCareerValue(career, value, profile).score * value.importance, 0) / totalWeight;
  return Number(weighted.toFixed(1));
}

function careerFitAnalysis(career, talentText, idealText, profile) {
  const fit = careerScore(career, talentText, idealText);
  const talentQuote = shortEvidence("才能", career.cues);
  const idealQuote = shortEvidence("理想与愿望", career.cues) || shortEvidence("价值观附加问题", career.cues);
  const pros = [career.talent, career.dream];
  if (talentQuote) pros.push(`你在才能部分写到“${talentQuote}”，这与该方向需要的工作方式有直接联系。`);
  if (idealQuote) pros.push(`你在愿望或理想生活中提到“${idealQuote}”，这说明它至少回应了你想继续探索的一部分。`);
  const cons = [career.tradeoff, `这个方向的具体要求是：${career.requirements}`];
  if (!talentQuote) cons.push("目前才能回答中还没有足够直接的证据支持它，最好通过一个小项目或从业者访谈验证，而不是只凭兴趣决定。");
  const overall = overallCareerFit(career, profile);
  const recommendation = overall >= 7.5 ? "值得优先尝试" : overall >= 6 ? "可以有条件地尝试" : "暂时不建议直接押注";
  return { ...fit, pros, cons, overall, recommendation };
}

function buildLocalAnalysis() {
  const talentText = categoryText("才能");
  const idealText = `${categoryText("理想与愿望")} ${lifeText()}`;
  const valueText = `${categoryText("价值观")} ${lifeText()}`;
  const profile = valueProfile(valueText);
  const candidates = careers.map((career) => ({ ...career, fit: careerFitAnalysis(career, talentText, idealText, profile) })).sort((a, b) => b.fit.overall - a.fit.overall || b.fit.score - a.fit.score);
  return {
    values: profile,
    valueThemes: profile.filter((value) => value.evidence > 0).slice(0, 4).map((value) => value.label),
    talentThemes: detectThemes(talentText),
    idealThemes: detectThemes(idealText),
    talentSummary: summarizeCategory("才能", talentText, detectThemes(talentText)),
    idealSummary: summarizeCategory("理想与愿望", idealText, detectThemes(idealText)),
    valueSummary: summarizeCategory("价值观", valueText, detectThemes(valueText)),
    talentStrengths: detectThemes(talentText).slice(0, 3).map((theme) => themeDescriptions[theme] || theme),
    valueTensions: [],
    lifeSummary: futureLifeSummary(lifeText(), profile),
    lifeConstraints: parseLifeConstraints(lifeText()),
    candidates
  };
}

function buildAndShowResults() {
  state.analysis = buildLocalAnalysis();
  state.analysisSource = "local";
  state.page = 0;
  $("answers-panel").classList.add("hidden");
  $("view-answers-button").textContent = "查看我的回答";
  renderResults();
  show("results-view");
}
function renderResults() {
  if (!state.analysis) state.analysis = buildLocalAnalysis();
  document.querySelectorAll(".results-tab").forEach((tab) => tab.classList.toggle("active", Number(tab.dataset.page) === state.page));
  if (state.page === 0) renderSummaryPage();
  if (state.page === 1) renderCareerPage();
  if (state.page === 2) renderComparisonPage();
}

function keywordHtml(items) { return items.length ? items.map((item) => `<span class="keyword">${escapeHtml(item)}</span>`).join("") : `<span class="keyword">还不明确</span>`; }
function renderSummaryPage() {
  const a = state.analysis;
  $("result-content").innerHTML = `
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">01</span><h2>先整理你提供的材料</h2></div>
      <p class="step-description">这里先把你的回答提炼成关键词、重点和描述。下面的文字是分析后的概括，不是把原始回答重新贴一遍。</p>
      <div class="analysis-status local-ready">本地分析版：你的回答只保存在当前浏览器中，不会发送到 AI 服务。</div>
      <div class="summary-grid">
        <article class="summary-card"><h3>你的才能</h3><div class="keyword-row">${keywordHtml(a.talentThemes)}</div><p>${escapeHtml(a.talentSummary)}</p>${pointsHtml(a.talentStrengths)}</article>
        <article class="summary-card"><h3>你的理想与愿望</h3><div class="keyword-row">${keywordHtml(a.idealThemes)}</div><p>${escapeHtml(a.idealSummary)}</p></article>
        <article class="summary-card"><h3>你的价值观</h3><div class="keyword-row">${keywordHtml(a.valueThemes)}</div><p>${escapeHtml(a.valueSummary)}</p>${pointsHtml(a.valueTensions)}</article>
      </div>
      <div class="life-card"><h3>现实校准：你未来理想的生活</h3><p>${escapeHtml(a.lifeSummary)}</p></div>
    </section>`;
}

function linkHtml(links = []) {
  return links.length ? `<ul class="career-links">${links.map((link) => `<li><a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.title || link.url)}</a></li>`).join("")}</ul>` : `<p class="microcopy">暂时没有链接；请先从官方职业资料网站搜索这个方向。</p>`;
}

function incomeHtml(income) {
  if (!income) return "暂时没有数字化收入参考。";
  if (typeof income === "string") return income;
  const data = income[state.salaryRegion] || income.china || income.us;
  const regionLabel = state.salaryRegion === "china" ? "中国参考" : "美国参考";
  return `<strong class="income-range">${regionLabel} · 范围：${escapeHtml(data.range)}</strong><strong class="income-median">中位数参考：${escapeHtml(data.median)}</strong><span>收入差异主要取决于：${escapeHtml(income.factors || "地区、经验、岗位和行业。")}</span><span class="income-note">${escapeHtml(income.sourceNote || "这是帮助你建立量级感的原型参考，需要按具体岗位继续核实。")}</span>`;
}

function bulletHtml(items = []) {
  return `<ul class="analysis-bullets">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function careerDetailsHtml(career) {
  return `<div class="career-details ${state.openCareers.includes(career.id) ? "" : "hidden"}" id="details-${escapeHtml(career.id)}">
    <div class="career-detail-grid">
      <div><strong>收入参考</strong><span>${incomeHtml(career.income)}</span></div>
      <div><strong>入行要求</strong><span>${escapeHtml(career.requirements || career.path || "需要进一步核实教育、技能和资格要求。")}</span></div>
      <div><strong>日常工作</strong><span>${escapeHtml(career.daily_work || career.day || "需要进一步了解具体岗位。")}</span></div>
    </div>
    <div class="case-block"><strong>可能的尝试方式</strong><ul>${(career.case_examples || career.cases || ["先做一个小项目、访谈从业者或争取一次影子学习机会。"]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
    <div class="case-block"><strong>进一步了解</strong>${linkHtml(career.links)}</div>
  </div>`;
}

function renderCareerPage() {
  const a = state.analysis;
  $("result-content").innerHTML = `
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">02</span><h2>哪些职业可能适合你？</h2></div>
      <p class="step-description">你的才能和梦想有哪些适合的职业方向？</p>
      <div class="research-note"><strong>研究提醒：</strong>收入、要求和案例是帮助你继续探索的入口，不是对未来的保证。打开每张卡片查看资料链接，并用真实访谈、项目或实习验证。</div>
      <div class="salary-controls"><strong>收入参考地区</strong><button class="value-button ${state.salaryRegion === "china" ? "active" : ""}" data-salary-region="china">中国（默认）</button><button class="value-button ${state.salaryRegion === "us" ? "active" : ""}" data-salary-region="us">美国</button></div>
      <div class="career-grid">${a.candidates.slice(0, 10).map((career) => `<article class="career-card ${state.selectedCareers.includes(career.id) ? "selected" : ""}" data-career-card="${escapeHtml(career.id)}"><label class="career-top"><input type="checkbox" data-career="${escapeHtml(career.id)}" ${state.selectedCareers.includes(career.id) ? "checked" : ""} /><span><h3>${escapeHtml(career.title)}</h3><p>${escapeHtml(career.description)}</p></span><span class="recommendation-pill">${escapeHtml(career.fit.recommendation)}</span></label><div class="career-fit-columns"><div><h4>符合你的才能和梦想之处</h4>${bulletHtml(career.fit.pros)}</div><div><h4>潜在问题</h4>${bulletHtml(career.fit.cons)}</div></div><div class="career-meta"><div><strong>日常可能做什么</strong><span>${escapeHtml(career.day || "请展开职业详情。")}</span></div><div><strong>现实进入路径</strong><span>${escapeHtml(career.path || career.requirements || "请展开职业详情。")}</span></div></div><button class="secondary-button detail-button" data-career-details="${escapeHtml(career.id)}">${state.openCareers.includes(career.id) ? "收起职业详情" : "查看收入、案例和要求"}</button>${careerDetailsHtml(career)}</article>`).join("")}</div>
      <p class="microcopy">已选择 <span id="selected-count">${state.selectedCareers.length}</span> 个方向。建议先选择 2–5 个进行比较。</p>
      <button id="go-to-comparison-button" class="primary-button next-step-button" ${state.selectedCareers.length ? "" : "disabled"}>进入第三步：比较价值观 →</button>
    </section>`;
  document.querySelectorAll("[data-career]").forEach((input) => input.addEventListener("change", () => {
    if (input.checked && !state.selectedCareers.includes(input.dataset.career)) state.selectedCareers.push(input.dataset.career);
    if (!input.checked) state.selectedCareers = state.selectedCareers.filter((id) => id !== input.dataset.career);
    renderCareerPage();
  }));
  document.querySelectorAll("[data-career-details]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.careerDetails;
    state.openCareers = state.openCareers.includes(id) ? state.openCareers.filter((careerId) => careerId !== id) : [...state.openCareers, id];
    renderCareerPage();
  }));
  document.querySelectorAll("[data-salary-region]").forEach((button) => button.addEventListener("click", () => {
    state.salaryRegion = button.dataset.salaryRegion;
    renderCareerPage();
  }));
  $("go-to-comparison-button").addEventListener("click", () => {
    if (!state.selectedCareers.length) return;
    state.page = 2;
    renderResults();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function fitText(label, score) {
  if (score >= 7.5) return `较符合：从目前材料看，这个方向比较能承接你对“${label}”的重视。`;
  if (score >= 6) return `部分符合：它能满足“${label}”的一部分，但具体岗位和生活安排会显著影响结果。`;
  return `存在张力：它未必能稳定满足“${label}”，需要认真考虑这是不是你愿意长期承担的代价。`;
}

function careerValueFit(career, value) {
  return scoreCareerValue(career, value, state.analysis.values || []);
}

function renderComparisonPage() {
  const a = state.analysis;
  const selected = a.candidates.filter((career) => state.selectedCareers.includes(career.id));
  if (!selected.length) {
    $("result-content").innerHTML = `<section class="analysis-step"><div class="step-heading"><span class="step-number">03</span><h2>先选择几个方向</h2></div><p class="step-description">请先到“2 选择方向”页面，选择你想认真比较的职业。这里不会替你默认选择。</p></section>`;
    return;
  }
  const values = a.values.filter((value) => value.evidence > 0).slice(0, 7).length ? a.values.filter((value) => value.evidence > 0).slice(0, 7) : valueMap.slice(0, 4).map((value) => ({ ...value, evidence: 0, importance: 1 }));
  $("result-content").innerHTML = `<section class="analysis-step"><div class="step-heading"><span class="step-number">03</span><h2>职业和你的价值观</h2></div><p class="step-description">这里不把你压缩成几个标签。每一项评分只是对“这个工作方向能否提供你在意的生活条件”的解释性判断，并且保留一位小数；真正重要的是后面的理由和整体取舍。</p><div class="life-card"><h3>从你的回答提炼出的未来生活方向</h3><p>${escapeHtml(a.lifeSummary)}</p><p class="constraint-line">收入：${escapeHtml(a.lifeConstraints.income)} · 工作时间：${escapeHtml(a.lifeConstraints.hours)} · 地点：${escapeHtml(a.lifeConstraints.location)}</p></div>${selected.map((career) => `<article class="comparison-card"><h3>${escapeHtml(career.title)}</h3><div class="overall-judgment"><strong>整体判断：${escapeHtml(career.fit.recommendation)}</strong><span>它和你目前材料的整体契合度：${career.fit.overall.toFixed(1)} / 10</span></div>${values.map((value) => { const fit = careerValueFit(career, value); return `<div class="value-comparison"><div class="value-comparison-header"><strong>${escapeHtml(value.label)}</strong><span class="fit-label">${fit.score.toFixed(1)} / 10</span></div><div class="fit-bar"><div class="fit-fill" style="width:${fit.score * 10}%"></div></div><p>${fitText(value.label, fit.score)} ${escapeHtml(fit.explanation)}</p></div>`; }).join("")}<div class="life-card"><h3>为什么这样判断</h3><p>${escapeHtml(career.fit.pros[1] || career.fit.pros[0])}</p><p>${escapeHtml(career.fit.cons[0])}</p></div></article>`).join("")}</section>`;
}

function resultText() {
  const a = state.analysis || buildLocalAnalysis();
  return ["找自己：分析结果", "", "才能关键词：" + a.talentThemes.join("、"), "才能分析：" + a.talentSummary, "理想关键词：" + a.idealThemes.join("、"), "理想分析：" + a.idealSummary, "价值观关键词：" + a.valueThemes.join("、"), "价值观分析：" + a.valueSummary, "理想生活：" + a.lifeSummary, "", "选择的方向：", ...a.candidates.filter((c) => state.selectedCareers.includes(c.id)).map((c) => c.title)].join("\n");
}

function copyResults() {
  const helper = document.createElement("textarea"); helper.value = resultText(); helper.style.position = "fixed"; helper.style.opacity = "0"; document.body.appendChild(helper); helper.focus(); helper.select();
  try { document.execCommand("copy"); $("copy-button").textContent = "已复制 ✓"; } catch { $("copy-button").textContent = "请使用下载"; }
  helper.remove(); setTimeout(() => $("copy-button").textContent = "复制我的结果", 1800);
}

function downloadResults() { const blob = new Blob([resultText()], { type: "text/plain;charset=utf-8" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "找自己-分析结果.txt"; link.click(); URL.revokeObjectURL(url); }
function renderAnswersPanel() {
  $("answers-panel").innerHTML = `<div class="analysis-step"><div class="step-heading"><span class="step-number">A</span><h2>我的原始回答</h2></div><p class="step-description">这些是你当时提交的原文。分析摘要和职业建议不会替代它们。</p><div class="response-list">${questions.map((q, i) => `<div class="response-item"><strong>${q.isAddon ? "价值观附加问题" : `问题 ${q.number}`} · ${escapeHtml(q.category)} · ${escapeHtml(q.prompt)}</strong><p>${escapeHtml(state.answers[i] || "（暂时跳过）")}</p></div>`).join("")}</div></div>`;
}
function showAnswers() {
  const panel = $("answers-panel");
  const opening = panel.classList.contains("hidden");
  if (opening) renderAnswersPanel();
  panel.classList.toggle("hidden", !opening);
  $("view-answers-button").textContent = opening ? "收起我的回答" : "查看我的回答";
  if (opening) panel.scrollIntoView({ behavior: "smooth", block: "start" });
}
function restart() { localStorage.setItem(SUBMITTED_KEY, JSON.stringify(state.answers)); localStorage.setItem(SUBMITTED_VERSION_KEY, ANSWERS_VERSION); if (!confirm("开始新的探索？刚才的回答已经保存，可以从首页再次查看。")) return; state.index = 0; state.answers = {}; state.analysis = null; localStorage.removeItem(ANSWERS_KEY); show("intro-view"); renderIntro(); }
function loadSubmitted() { const saved = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || "null"); if (!saved) return; const needsMigration = localStorage.getItem(SUBMITTED_VERSION_KEY) !== ANSWERS_VERSION; state.answers = needsMigration ? migrateAnswers(saved, true) : saved; localStorage.setItem(ANSWERS_KEY, JSON.stringify(state.answers)); localStorage.setItem(SUBMITTED_VERSION_KEY, ANSWERS_VERSION); state.selectedCareers = []; state.openCareers = []; state.analysis = null; buildAndShowResults(); }

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
