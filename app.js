const questions = [
  { category: "价值观", prompt: "你尊敬什么样的人？他身上有什么品质让你在意？", hint: "可以是真实认识的人，也可以是作家、艺术家、角色或公众人物。" },
  { category: "价值观", prompt: "在你青春期或思维最活跃的时期，有什么事情深深影响过你？", hint: "想想哪些经历改变了你看待自己或世界的方式。" },
  { category: "价值观", prompt: "你觉得现在的社会或周围环境有什么不足？", hint: "你感到不满的地方，常常也暗示着你在乎什么。" },
  { category: "价值观", prompt: "在朋友眼中，你是一个看重什么东西的人？", hint: "如果不确定，可以想象朋友会怎样描述你。" },
  { category: "价值观", prompt: "如果别人来向你寻求建议，你通常会建议什么？", hint: "你愿意给出的建议，往往也是你自己的生活准则。" },
  { category: "才能", prompt: "你人生中最充实的一段经历是什么？当时你具体做了什么？", hint: "不要只写结果，也注意当时哪些过程让你感到有能量。" },
  { category: "才能", prompt: "最近一次让你觉得不耐烦的事情是什么？", hint: "不耐烦有时说明你对某些事情有敏锐的判断或更高的要求。" },
  { category: "才能", prompt: "别人通常会向你寻求什么帮助？", hint: "可以是学习、表达、组织、倾听、分析或任何其他事情。" },
  { category: "才能", prompt: "到目前为止，你做成过什么事情？", hint: "不一定要是很大的成就，任何你真正完成过的事都可以。" },
  { category: "才能", prompt: "如果不考虑现在的安排，你特别想尝试做什么？", hint: "先不要判断它是否现实，只记录最先出现的愿望。" },
  { category: "愿望", prompt: "有什么事情即使需要花钱，你也愿意认真去学习？", hint: "它可能和职业无关，只要你愿意投入就值得写下。" },
  { category: "愿望", prompt: "你的书架或收藏里，反复出现什么主题？", hint: "也可以写歌曲、电影、视频或你持续关注的内容。" },
  { category: "愿望", prompt: "有没有什么内容曾经帮助过你，甚至像一种救赎？", hint: "它为什么能对你产生这么大的影响？" },
  { category: "愿望", prompt: "你特别想感谢哪些人或事情？", hint: "感谢的对象常常提示我们希望把什么传递下去。" },
  { category: "愿望", prompt: "你对这个世界有什么不满或愤怒？", hint: "愤怒不一定要被消除，它可能在保护某种重要的价值。" }
];

const questionHelp = [
  { meaning: "这道题不是让你列出名人，而是观察你被什么样的人吸引。你欣赏的品质，可能就是你想靠近或实践的价值。", example: "比如：你尊敬一个诚实、能把复杂事情讲清楚的人，不只是因为他的职业，而是因为你在意真实和理解。" },
  { meaning: "回想那些改变你兴趣、性格或看世界方式的经历。重点不是事情有多传奇，而是它在你身上留下了什么。", example: "比如：某段友谊让你意识到真实关系的重要，某本书让你开始关注心理学。" },
  { meaning: "你对环境的不满，常常反过来说明你希望世界具有什么。不要急着证明自己正确，只描述你真正在意的缺失。", example: "比如：你不喜欢人与人只剩下点头之交，这可能说明你重视附近、信任和真实连接。" },
  { meaning: "这道题借用别人的视角，帮助你看到自己可能习以为常的特点。你可以写朋友真正说过的话，也可以写自己的猜测。", example: "比如：朋友会来找你分析问题，说明你可能擅长倾听、理解和组织复杂信息。" },
  { meaning: "你给别人的建议，往往也是你相信的生活原则。注意你反复想传达的不是具体技巧，而是什么态度。", example: "比如：你总劝别人放轻松、不要过度担心，可能说明你重视自由、适度和减少不必要的内耗。" },
  { meaning: "充实不等于忙，也不等于结果漂亮。回想一段你在过程中就感到投入、有能量、像在过自己生活的经历。", example: "比如：和朋友共同做事、采访别人、完成一个作品，都可能比一次高分更能说明你的才能。" },
  { meaning: "不耐烦可以是一种线索：它可能说明某件事违背了你的边界，也可能说明你对某种问题特别敏感。", example: "比如：你对别人不认真听人说话很不耐烦，可能说明你重视理解和真诚交流。" },
  { meaning: "不要只写正式技能，也可以写别人为什么愿意来找你。别人反复交给你的问题，通常提供了关于你能力的现实证据。", example: "比如：别人找你讲题、分析感情问题或倾听烦恼，说明你可能有分析、解释和陪伴的能力。" },
  { meaning: "把已经完成过的事情作为证据，而不是用来炫耀。我们想知道你在什么条件下能够坚持、思考并把事情做完。", example: "比如：完成一个研究项目、学会一门语言、组织一个活动，都可以拆开看你具体贡献了什么。" },
  { meaning: "先暂时放下现实限制，写下你想亲自试试的事情。愿望不等于承诺，只是值得验证的方向线索。", example: "比如：做播客、学心理咨询、做软件、创作音乐，都可以先写下来，不用马上判断能不能谋生。" },
  { meaning: "这道题问的是你愿意投入成本的好奇心。愿意花钱和时间学习，通常比一句“我觉得有趣”更能说明愿望的强度。", example: "比如：你愿意付费学乐器、语言、编程或某种研究方法。" },
  { meaning: "你长期主动接触的内容，可能比你口头上说的目标更能暴露你的兴趣结构。可以写书，也可以写音乐、频道和电影。", example: "比如：书架里反复出现心理学、文学、社会观察或创作类内容。" },
  { meaning: "这里的“帮助”不一定是宗教意义上的救赎，而是那些曾经让你重新理解自己、获得力量或改变方向的内容。", example: "比如：某首歌让你改变对人生的态度，某本书让你开始认真面对拖延或关系。" },
  { meaning: "感谢的对象显示了什么曾经滋养你，也可能暗示你想把什么继续传递给别人。不要只写最正式的答案。", example: "比如：感谢朋友给你的陪伴，也感谢音乐、运动、老师或某个让你保持好奇的环境。" },
  { meaning: "愤怒和不满可以作为价值观线索。不是要你写一篇社会批判，而是找出：什么事情让你觉得不应该这样。", example: "比如：你对人与人被技术隔离感到不满，可能说明你重视真实关系、共同体和附近。" }
];

const ANSWERS_KEY = "direction-explorer-answers";
const SUBMITTED_KEY = "direction-explorer-submitted-answers";
const state = { index: 0, answers: JSON.parse(localStorage.getItem(ANSWERS_KEY) || "{}") };
const $ = (id) => document.getElementById(id);

function save() {
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(state.answers));
}

function show(viewId) {
  ["intro-view", "question-view", "results-view"].forEach((id) => $(id).classList.toggle("hidden", id !== viewId));
}

function renderQuestion() {
  const question = questions[state.index];
  $("question-number").textContent = state.index + 1;
  $("category-label").textContent = question.category;
  $("question-title").textContent = question.prompt;
  $("question-hint").textContent = question.hint;
  $("question-help").classList.add("hidden");
  $("question-help-button").setAttribute("aria-expanded", "false");
  $("answer-input").value = state.answers[state.index] || "";
  $("progress-bar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $("back-button").style.visibility = state.index === 0 ? "hidden" : "visible";
}

function toggleQuestionHelp() {
  const help = questionHelp[state.index];
  const panel = $("question-help");
  const open = panel.classList.toggle("hidden");
  $("question-help-button").setAttribute("aria-expanded", String(!open));
  panel.innerHTML = `<strong>怎么理解：</strong> ${help.meaning}<br /><strong>例如：</strong> ${help.example}`;
}

function start() {
  state.index = 0;
  show("question-view");
  renderQuestion();
  $("answer-input").focus();
}

function saveCurrent() {
  const value = $("answer-input").value.trim();
  if (value) state.answers[state.index] = value;
  else delete state.answers[state.index];
  save();
}

function next() {
  saveCurrent();
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    localStorage.setItem(SUBMITTED_KEY, JSON.stringify(state.answers));
    renderResults();
    show("results-view");
  }
}

function previous() {
  saveCurrent();
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
}

function skip() {
  saveCurrent();
  next();
}

function textFor(category) {
  return questions.map((q, i) => q.category === category ? (state.answers[i] || "") : "").join(" ");
}

function wordsFor(category) {
  const text = textFor(category);
  const themes = [
    ["创造", "表达", "音乐", "写", "画", "设计", "作品", "艺术"],
    ["理解", "学习", "研究", "语言", "阅读", "思考", "分析", "知识"],
    ["连接", "帮助", "关心", "关系", "朋友", "社区", "沟通", "人"],
    ["自由", "独立", "探索", "旅行", "好奇", "体验", "世界"],
    ["改变", "公平", "环境", "社会", "不满", "问题", "正义"]
  ];
  return themes.filter((group) => group.some((word) => text.includes(word))).map((group) => group[0]);
}

function fallback(category) {
  const text = questions.map((q, i) => q.category === category ? (state.answers[i] || "") : "").join(" ");
  if (!text) return "还没有留下内容";
  return text.length > 54 ? `${text.slice(0, 54)}……` : text;
}

function directionMaterials() {
  const values = wordsFor("价值观");
  const talents = wordsFor("才能");
  const wishes = wordsFor("愿望");
  const signals = [...new Set([...talents, ...wishes])];
  const themes = signals.length ? signals : ["探索", "成长", "表达"];
  const matches = [
    { id: "create", title: `${themes[0]} × ${themes[1] || "表达"}`, body: "把你已经表现出的能力，放进一个你想亲自完成或体验的方向里。" },
    { id: "learn", title: `${themes[1] || "学习"} × ${themes[2] || "探索"}`, body: "通过持续学习和真实实验，看看某种兴趣能否逐渐变成能力。" },
    { id: "connect", title: `${themes[2] || "连接"} × ${themes[0] || "创造"}`, body: "把你的愿望和能力带到人与世界之间，形成具体的连接。" }
  ];
  return { values, talents, wishes, matches };
}

function renderResults() {
  const { values, talents, wishes, matches } = directionMaterials();
  const material = (title, content) => `<div class="material"><strong>${title}</strong><span>${content.length ? content.join(" · ") : fallback(title === "才能线索" ? "才能" : title === "愿望线索" ? "愿望" : "价值观")}</span></div>`;
  $("result-content").innerHTML = `
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">01</span><h2>先看才能和愿望</h2></div>
      <p class="step-description">我们先不问什么“应该”重要。先看你已经表现出来的能力，和你持续被吸引的事情。</p>
      <div class="material-list">${material("才能线索", talents)}${material("愿望线索", wishes)}</div>
    </section>
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">02</span><h2>你觉得哪些能够连在一起？</h2></div>
      <p class="step-description">下面是系统根据才能和愿望提出的可能连接。请亲自勾选你觉得确实有感觉的，不认同的可以不选。</p>
      <div id="match-list">${matches.map((match) => `<label class="match-card"><span><strong>${match.title}</strong><p>${match.body}</p></span><span class="match-check"><input type="checkbox" data-match="${match.id}" checked />我认同</span></label>`).join("")}</div>
    </section>
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">03</span><h2>从连接里形成方向</h2></div>
      <p class="step-description">这些方向不是测试结果，而是把前一步你认可的连接变成可以亲自验证的可能性。</p>
      <div id="direction-list">${matches.map((match, i) => `<label class="direction-choice"><input type="checkbox" data-direction="${match.id}" checked /><span><strong>${i + 1}. ${match.title}方向</strong><p>把这组能力和愿望变成一个可以持续尝试的作品、学习路径或生活实践。</p></span></label>`).join("")}</div>
    </section>
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">04</span><h2>最后用价值观筛选</h2></div>
      <p class="step-description">价值观不是用来替你生成方向的，而是帮助你判断：哪些可能性值得进入你的生命。</p>
      <div id="value-filter-list">${matches.map((match, i) => `<div class="value-filter" data-filter="${match.id}"><p><strong>${i + 1}. ${match.title}方向</strong><br />它是否符合你在乎的东西，并且是你愿意承担的选择？</p><div class="value-buttons"><button class="value-button active" data-value="keep">保留</button><button class="value-button" data-value="maybe">再观察</button><button class="value-button" data-value="drop">暂不考虑</button></div></div>`).join("")}</div>
    </section>
    <section class="analysis-step">
      <div class="step-heading"><span class="step-number">05</span><h2>你的暂时选择</h2></div>
      <p class="step-description">你不需要找到人生唯一答案。先选一个愿意用 7 天或 30 天亲自验证的方向。</p>
      <div id="final-directions"></div>
    </section>
    <section id="responses-section" class="analysis-step hidden">
      <div class="step-heading"><span class="step-number">A</span><h2>我的原始回答</h2></div>
      <p class="step-description">这些是你刚才提交的原话。它们会保存在当前浏览器里，不会因为查看结果而消失。</p>
      <div id="responses-list" class="response-list"></div>
    </section>
  `;
  renderResponses();
  bindAnalysisControls(matches, values);
  updateFinalDirections(matches, values);
}

function renderResponses() {
  const list = $("responses-list");
  if (!list) return;
  list.innerHTML = questions.map((question, index) => {
    const answer = state.answers[index] || "（暂时跳过）";
    return `<div class="response-item"><strong>${index + 1}. ${question.category} · ${question.prompt}</strong><p>${answer}</p></div>`;
  }).join("");
}

function bindAnalysisControls(matches, values) {
  document.querySelectorAll("[data-match]").forEach((input) => input.addEventListener("change", () => {
    const direction = document.querySelector(`[data-direction="${input.dataset.match}"]`);
    if (direction) direction.checked = input.checked;
    updateFinalDirections(matches, values);
  }));
  document.querySelectorAll("[data-direction]").forEach((input) => input.addEventListener("change", () => updateFinalDirections(matches, values)));
  document.querySelectorAll("[data-filter]").forEach((card) => card.querySelectorAll("[data-value]").forEach((button) => button.addEventListener("click", () => {
    card.querySelectorAll("[data-value]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    card.dataset.status = button.dataset.value;
    updateFinalDirections(matches, values);
  })));
}

function updateFinalDirections(matches, values) {
  const selected = Array.from(document.querySelectorAll("[data-direction]:checked")).map((input) => input.dataset.direction);
  const final = matches.filter((match) => selected.includes(match.id) && (document.querySelector(`[data-filter="${match.id}"]`)?.dataset.status || "keep") !== "drop");
  const container = $("final-directions");
  if (!final.length) {
    container.innerHTML = `<p class="step-description">目前没有保留的方向。你可以回到上面重新选择；暂时没有答案也是一种诚实的结果。</p>`;
    return;
  }
  const valueText = values.length ? `它与你提到的价值线索（${values.join("、")}）有一定联系。` : "再观察它是否真的符合你在乎的东西。";
  container.innerHTML = final.map((match) => `<div class="final-direction"><strong>${match.title}方向</strong><span>${valueText} 下一步：用一个小行动验证它，而不是马上对它做终身承诺。</span></div>`).join("");
}

function restart() {
  localStorage.setItem(SUBMITTED_KEY, JSON.stringify(state.answers));
  if (!confirm("开始新的探索？刚才提交的回答已经保存，可以从首页再次查看。")) return;
  state.index = 0;
  state.answers = {};
  localStorage.removeItem(ANSWERS_KEY);
  show("intro-view");
  renderIntro();
}

async function copyResults() {
  const text = ["找自己：我的回答", "", ...questions.map((question, index) => `${index + 1}. ${question.prompt}\n${state.answers[index] || "（暂时跳过）"}`)].join("\n\n");
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.focus();
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }
    $("copy-button").textContent = "已复制 ✓";
  } catch (error) {
    $("copy-button").textContent = "复制失败，请下载";
  }
  setTimeout(() => $("copy-button").textContent = "复制我的结果", 1800);
}

function downloadAnswers() {
  const text = ["找自己：我的回答", "", ...questions.map((question, index) => `${index + 1}. ${question.category} · ${question.prompt}\n${state.answers[index] || "（暂时跳过）"}`)].join("\n\n");
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "找自己-我的回答.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function showAnswers() {
  const section = $("responses-section");
  if (!section) return;
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resumeSubmitted() {
  const submitted = JSON.parse(localStorage.getItem(SUBMITTED_KEY) || "null");
  if (!submitted) return;
  state.answers = submitted;
  renderResults();
  show("results-view");
}

$("start-button").addEventListener("click", start);
$("next-button").addEventListener("click", next);
$("back-button").addEventListener("click", previous);
$("skip-button").addEventListener("click", skip);
$("question-help-button").addEventListener("click", toggleQuestionHelp);
$("restart-button").addEventListener("click", restart);
$("view-answers-button").addEventListener("click", showAnswers);
$("copy-button").addEventListener("click", copyResults);
$("download-button").addEventListener("click", downloadAnswers);
$("resume-button").addEventListener("click", resumeSubmitted);

$("resume-button").classList.toggle("hidden", !localStorage.getItem(SUBMITTED_KEY));
