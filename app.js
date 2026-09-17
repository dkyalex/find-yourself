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

const state = { index: 0, answers: JSON.parse(localStorage.getItem("direction-explorer-answers") || "{}") };
const $ = (id) => document.getElementById(id);

function save() {
  localStorage.setItem("direction-explorer-answers", JSON.stringify(state.answers));
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
  $("answer-input").value = state.answers[state.index] || "";
  $("progress-bar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $("back-button").style.visibility = state.index === 0 ? "hidden" : "visible";
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

function wordsFor(category) {
  const text = questions.map((q, i) => q.category === category ? (state.answers[i] || "") : "").join(" ");
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

function renderResults() {
  const values = wordsFor("价值观");
  const talents = wordsFor("才能");
  const wishes = wordsFor("愿望");
  const signals = [...new Set([...values, ...talents, ...wishes])];
  const themes = signals.length ? signals : ["探索", "成长", "表达"];
  const directions = [
    `把${themes[0]}变成可以持续实践的作品或项目`,
    `通过${themes[1] || "学习"}和真实经验，逐渐建立自己的能力`,
    `在${themes[2] || "人与世界"}之间创造连接，并观察自己是否因此感到鲜活`
  ];
  $("result-content").innerHTML = `
    <div class="material-grid">
      <div class="material"><strong>价值观线索</strong><span>${values.length ? values.join(" · ") : fallback("价值观")}</span></div>
      <div class="material"><strong>才能线索</strong><span>${talents.length ? talents.join(" · ") : fallback("才能")}</span></div>
      <div class="material"><strong>愿望线索</strong><span>${wishes.length ? wishes.join(" · ") : fallback("愿望")}</span></div>
    </div>
    <h2 class="result-heading">三个可以亲自验证的方向</h2>
    ${directions.map((direction, i) => `<article class="result-card"><h3>${i + 1}. ${direction}</h3><p>这不是结论。先用一个小行动试一试，再观察它是否真的值得你投入时间。</p></article>`).join("")}
  `;
}

function restart() {
  if (!confirm("要清除当前回答并重新开始吗？")) return;
  state.index = 0;
  state.answers = {};
  localStorage.removeItem("direction-explorer-answers");
  show("intro-view");
}

async function copyResults() {
  const text = ["找到值得投入的方向", "", ...Array.from(document.querySelectorAll(".result-card h3")).map((el) => el.textContent)].join("\n");
  await navigator.clipboard?.writeText(text);
  $("copy-button").textContent = "已复制 ✓";
  setTimeout(() => $("copy-button").textContent = "复制我的结果", 1600);
}

$("start-button").addEventListener("click", start);
$("next-button").addEventListener("click", next);
$("back-button").addEventListener("click", previous);
$("skip-button").addEventListener("click", skip);
$("restart-button").addEventListener("click", restart);
$("copy-button").addEventListener("click", copyResults);
