/* CHART showcase: step viewer + simulated run.
   All values below are transcribed from one real provider run:
   outputs/experiments/paper-post-20260629-115601/llmscoring1_paper.json
   (venue: icml, paper supplied as user PDF, 76796 extracted chars).
   Both the reviewer view and the AC view read from that same run so the
   numbers agree across views. Nothing is invented.
   Step timings are display pacing only, which is why the log column
   shows step indices rather than a fabricated wall clock. */

(function () {
  "use strict";

  var DICT = window.CHART_I18N || { zh: {}, en: {} };
  var locale = "zh";

  function t(key) {
    var table = DICT[locale] || {};
    return table[key] !== undefined ? table[key] : (DICT.zh[key] !== undefined ? DICT.zh[key] : key);
  }

  /* Field names, quoted reviewer text and model output are the same in both
     locales; only the surrounding annotations come from the dictionary. */
  function buildStages() {
    return [
      {
        title: t("stage.0.title"),
        note: t("stage.0.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>review id</dt><dd>review_156R</dd></div>' +
          '<div><dt>venue</dt><dd>icml</dd></div>' +
          '<div><dt>submitted</dt><dd>Rating 3 / 6 · Weak Reject</dd></div>' +
          '<div><dt>confidence</dt><dd>4 / 5</dd></div>' +
          '<div><dt>paper source</dt><dd class="ok">user_pdf</dd></div>' +
          '<div><dt>extracted text</dt><dd>76,796 chars</dd></div>' +
          '</dl>' +
          '<div class="quote"><span>' + t("stage.0.strengths") + '</span>' +
          'The topic is timely and relevant to large AI/ML conferences. The paper is clearly written and supports its ' +
          'position with empirical analyses. The reviewer expects substantial interest in discussing the proposal.</div>' +
          '<div class="quote"><span>' + t("stage.0.weaknesses") + '</span>' +
          'The reviewer is not fully convinced that Figure 2a illustrates the claimed problem. Some empirical figures ' +
          'would be stronger with error bars, reliability estimates, or correlation statistics. The analysis could ' +
          'better separate score similarity from rationale similarity.</div>'
      },
      {
        title: t("stage.1.title"),
        note: t("stage.1.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>anchor range</dt><dd class="accent">4.0 - 5.0</dd></div>' +
          '<div><dt>residual</dt><dd class="accent">-1.0</dd></div>' +
          '<div><dt>severity</dt><dd class="faint">low</dd></div>' +
          '<div><dt>stability</dt><dd class="ok">stable</dd></div>' +
          '<div><dt>samples</dt><dd>3 · midpoint σ 0.0</dd></div>' +
          '<div><dt>direction agreement</dt><dd class="ok">100%</dd></div>' +
          '</dl>' +
          '<div class="quote"><span>' + t("stage.1.reasoning") + '</span>' +
          'The reviewer finds the paper timely, relevant, and clearly written with empirical support, and expects ' +
          'substantial discussion. However, concerns about Figure 2a’s clarity, missing statistical rigor (error bars, ' +
          'correlations, reliability), and incomplete separation of score vs. rationale similarity keep it at a ' +
          'borderline accept to accept level.</div>' +
          '<ul class="list-tight">' +
          '<li>' + t("stage.1.l1") + '</li>' +
          '<li>' + t("stage.1.l2") + '</li>' +
          '<li>' + t("stage.1.l3") + '</li>' +
          '</ul>' +
          '<div class="flag"><b>low</b><span>' + t("stage.1.flag") + '</span></div>'
      },
      {
        title: t("stage.2.title"),
        note: t("stage.2.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>paper available</dt><dd class="ok">true</dd></div>' +
          '<div><dt>key claims</dt><dd>3</dd></div>' +
          '<div><dt>status</dt><dd class="accent">3 × unverifiable</dd></div>' +
          '<div><dt>claim types</dt><dd>other · experiments_insufficient ×2</dd></div>' +
          '</dl>' +
          '<div class="quote"><span>' + t("stage.2.claim1") + '</span>' +
          'Figure 2a does not convincingly illustrate the claimed problem.</div>' +
          '<ul class="list-tight">' +
          '<li>' + t("stage.2.m1") + '</li>' +
          '<li>' + t("stage.2.m2") + '</li>' +
          '<li>' + t("stage.2.m3") + '</li>' +
          '</ul>' +
          '<ul class="list-tight" style="margin-top:18px">' +
          '<li><span><b>' + t("stage.2.c2label") + '</b> Some empirical figures would be stronger with error bars, ' +
          'reliability estimates, or correlation statistics. ' + t("stage.2.c2") + '</span></li>' +
          '<li><span><b>' + t("stage.2.c3label") + '</b> The analysis does not adequately separate score similarity ' +
          'from rationale similarity. ' + t("stage.2.c3") + '</span></li>' +
          '</ul>'
      },
      {
        title: t("stage.3.title"),
        note: t("stage.3.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>dominant</dt><dd>none</dd></div>' +
          '<div><dt>status</dt><dd class="ok">balanced</dd></div>' +
          '</dl>' +
          '<div class="dims">' +
          '<div><span>Support</span><b>2 / 4</b></div>' +
          '<div><span>Significance</span><b>3 / 4</b></div>' +
          '<div><span>Discussion Potential</span><b>4 / 4</b></div>' +
          '<div><span>Argument Clarity</span><b>3 / 4</b></div>' +
          '<div><span>Related Work</span><b>3 / 4</b></div>' +
          '</div>' +
          '<div class="flag flag-ok"><b>balanced</b><span>' + t("stage.3.flag") + '</span></div>' +
          '<p class="stage-note" style="margin-top:20px">' + t("stage.3.after") + '</p>'
      },
      {
        title: t("stage.4.title"),
        note: t("stage.4.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>reliability gate</dt><dd class="ok">passed · 0 failed checks</dd></div>' +
          '<div><dt>care plan</dt><dd class="accent">reviewer_calibration_challenge</dd></div>' +
          '<div><dt>synthesis confidence</dt><dd>0.75</dd></div>' +
          '<div><dt>intended judgment possible</dt><dd class="ok">true</dd></div>' +
          '</dl>' +
          '<p class="stage-note" style="margin-top:22px">' + t("stage.4.prompt") + '</p>' +
          '<ul class="opts">' +
          '<li><b>A</b>' + t("stage.4.a") + '</li>' +
          '<li><b>B</b>' + t("stage.4.b") + '</li>' +
          '<li><b>C</b>' + t("stage.4.c") + '</li>' +
          '<li><b>D</b>' + t("stage.4.d") + '</li>' +
          '</ul>' +
          '<p class="stage-note">' + t("stage.4.after") + '</p>' +
          '<ul class="list-tight"><li>' + t("stage.4.out1") + '</li>' +
          '<li>' + t("stage.4.out2") + '</li></ul>'
      }
    ];
  }

  var STAGES = buildStages();

  var LOG = [
    ["01", "loaders: parsed review_156R, venue=icml, paper_source=user_pdf, 76796 chars"],
    ["02", "score_anchor: 3 samples, midpoint_std=0.0, direction_agreement=1.0"],
    ["03", "score_anchor: <b>anchor_range=(4.0, 5.0) residual=-1 severity=low</b> stability=stable"],
    ["04", "planner: requested rubric_weight"],
    ["05", "rubric_weight: dominant=none status=balanced"],
    ["06", "planner: requested evidence_grounding"],
    ["07", "evidence_grounding: paper_available=true, 3 claims unverifiable"],
    ["08", "submit_diagnosis: care_plan=reviewer_calibration_challenge confidence=0.75"],
    ["09", "reliability: gate passed, failed_checks=0, repaired=false"],
    ["10", "<u>wrote llmscoring1_paper.json · review_156R CaseReport</u>"]
  ];

  /* Which rail step each log row lights up. The specialists run one at a
     time and the planner chooses the order, so this run did rubric before
     evidence: the indices intentionally go 1 -> 3 -> 2 -> 4. */
  var LOG_STAGE = [0, 1, 1, 3, 3, 2, 2, 4, 4, 4];

  /* How long each row stays on screen before the next one lands, in ms.
     Not uniform: a row that only announces a step ("planner: requested ...")
     needs less time than one that swaps a full panel of numbers in. The rows
     that replace the panel body get the long dwells so there is time to read
     the result before the next step takes over. Sum is ~9s. */
  var DWELL = [1000, 700, 1150, 650, 1050, 650, 1100, 1050, 900, 900];
  var LEAD_IN = 380;

  var body = document.getElementById("stageBody");
  if (!body) return;

  var tabs = Array.prototype.slice.call(document.querySelectorAll(".step"));
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var runBtn = document.getElementById("runBtn");
  var runNote = document.getElementById("runNote");
  var bar = document.getElementById("bar");
  var logEl = document.getElementById("log");
  var current = 0;
  var timers = [];
  var running = false;

  /* The run note reports live state, so it cannot be tagged as static copy:
     a locale switch would reset a finished run's note back to "idle" while
     its log rows were still on screen. State is tracked here and the label
     is re-derived whenever the locale changes. */
  var runState = "idle";

  function paintRunNote() {
    runNote.textContent = runState === "complete"
      ? t("run.complete").replace("{n}", LOG.length)
      : t("run." + runState);
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function stopRun() {
    clearTimers();
    running = false;
    runState = "idle";
    runBtn.disabled = false;
    paintRunNote();
    bar.style.width = "0%";
    logEl.innerHTML = "";
    paint(current);
  }

  function paint(i, opts) {
    var s = STAGES[i];
    body.innerHTML =
      '<h3 class="stage-title">' + s.title + "</h3>" +
      '<p class="stage-note">' + s.note + "</p>" +
      (opts && opts.pending
        ? '<div class="skel" aria-label="' + t("run.pending") + '"><i></i><i></i><i></i></div>'
        : s.html);

    /* During a run the planner can visit steps out of order, so "done"
       tracks which steps have actually been visited rather than assuming
       everything before the current index finished. */
    if (opts && opts.visited) {
      tabs.forEach(function (tab, n) {
        if (n === i) tab.setAttribute("aria-current", "true");
        else tab.removeAttribute("aria-current");
        tab.classList.toggle("done", n !== i && opts.visited.indexOf(n) !== -1);
      });
    } else {
      tabs.forEach(function (tab, n) {
        if (n === i) tab.setAttribute("aria-current", "true");
        else tab.removeAttribute("aria-current");
        tab.classList.toggle("done", n < i);
      });
    }
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === STAGES.length - 1;
  }

  function go(i) {
    current = Math.max(0, Math.min(STAGES.length - 1, i));
    paint(current);
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      if (running) return;
      go(i);
    });
  });
  prevBtn.addEventListener("click", function () { if (!running) go(current - 1); });
  nextBtn.addEventListener("click", function () { if (!running) go(current + 1); });

  function run() {
    clearTimers();
    running = true;
    runBtn.disabled = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    logEl.innerHTML = "";
    bar.style.width = "0%";
    runState = "running";
    paintRunNote();

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Cumulative offsets, so a row fires after every dwell before it. Reduced
       motion collapses to a flat 60ms: the point there is to reach the end
       state quickly, not to pace a reading experience. */
    var at = LEAD_IN;
    var offsets = LOG.map(function (row, n) {
      var start = at;
      at += reduce ? 60 : DWELL[n];
      return reduce ? 60 * (n + 1) : start;
    });

    LOG.forEach(function (row, n) {
      timers.push(setTimeout(function () {
        var el = document.createElement("div");
        el.className = "log-row";
        el.innerHTML = "<time>" + row[0] + "</time><b>" + row[1] + "</b>";
        logEl.appendChild(el);
        logEl.scrollTop = logEl.scrollHeight;
        bar.style.width = Math.round(((n + 1) / LOG.length) * 100) + "%";

        /* Row 1 announces that anchor scoring started but has no result
           yet, so that step renders as pending until row 2 carries the
           computed range. Same for the two planner rows. */
        current = LOG_STAGE[n];
        paint(current, {
          pending: n === 1 || n === 3 || n === 5,
          visited: LOG_STAGE.slice(0, n + 1)
        });

        if (n === LOG.length - 1) {
          running = false;
          runState = "complete";
          runBtn.disabled = false;
          paintRunNote();
          paint(STAGES.length - 1);
        }
      }, offsets[n]));
    });
  }

  runBtn.addEventListener("click", run);

  paint(0);

  /* scroll reveal: signals section hierarchy on first view only */
  var reveals = document.querySelectorAll(".reveal");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* reviewer / AC view switch. Both views read the same run, so this only
     changes which slice of that run is on screen. Switching away from a
     running diagnosis stops it rather than leaving timers firing into a
     hidden panel. */
  var viewBtns = {
    reviewer: document.getElementById("viewReviewer"),
    ac: document.getElementById("viewAc")
  };
  var panels = {
    reviewer: document.getElementById("panelReviewer"),
    ac: document.getElementById("panelAc")
  };
  var demoTitle = document.getElementById("demoTitle");
  var demoLede = document.getElementById("demoLede");

  var activeView = "reviewer";

  function setView(name) {
    if (!panels.reviewer || !panels.ac) return;
    if (running) stopRun();
    Object.keys(panels).forEach(function (k) {
      panels[k].hidden = k !== name;
      viewBtns[k].setAttribute("aria-selected", k === name ? "true" : "false");
    });
    /* The scroll observer cannot reveal a panel that was hidden when it
       ran, so a panel shown by the switch is revealed here instead. */
    panels[name].classList.add("in");
    activeView = name;
    if (demoTitle) demoTitle.textContent = t("head." + name + ".title");
    if (demoLede) demoLede.innerHTML = t("head." + name + ".lede_html");
  }

  if (viewBtns.reviewer && viewBtns.ac) {
    viewBtns.reviewer.addEventListener("click", function () { setView("reviewer"); });
    viewBtns.ac.addEventListener("click", function () { setView("ac"); });
  }

  /* zh / en switch. Static copy is tagged with data-i18n in the markup;
     anything rendered by this file is rebuilt from the dictionary. */
  function applyLocale() {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      /* value is "attr:key", e.g. "aria-label:ac.tscroll" */
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });

    document.title = t("doc.title");
    [
      ['meta[name="description"]', "doc.desc"],
      ['meta[property="og:title"]', "doc.title"],
      ['meta[property="og:description"]', "doc.ogdesc"]
    ].forEach(function (pair) {
      var m = document.querySelector(pair[0]);
      if (m) m.setAttribute("content", t(pair[1]));
    });

    STAGES = buildStages();
    if (running) stopRun();
    else paint(current);
    paintRunNote();
    setView(activeView);
  }

  var langBtns = document.querySelectorAll(".lang-btn");
  if (langBtns.length) {
    var stored = null;
    try { stored = window.localStorage.getItem("chart-locale"); } catch (e) { stored = null; }
    if (stored !== "zh" && stored !== "en") {
      stored = (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    }
    locale = stored;

    langBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        locale = b.getAttribute("data-locale") === "en" ? "en" : "zh";
        try { window.localStorage.setItem("chart-locale", locale); } catch (e) { /* private mode */ }
        langBtns.forEach(function (o) {
          o.setAttribute("aria-selected", o.getAttribute("data-locale") === locale ? "true" : "false");
        });
        applyLocale();
      });
      b.setAttribute("aria-selected", b.getAttribute("data-locale") === locale ? "true" : "false");
    });
    applyLocale();
  }

  /* mobile menu */
  var menuBtn = document.getElementById("menuBtn");
  var panel = document.getElementById("mobilePanel");
  if (menuBtn && panel) {
    menuBtn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
