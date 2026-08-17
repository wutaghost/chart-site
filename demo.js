/* CHART showcase: step viewer + simulated run.
   All values below are transcribed from one real provider run:
   outputs/experiments/paper-post-20260817/llmscoring1_paper.json
   (venue: icml, paper supplied as user PDF, 76797 extracted chars,
   provider deepseek / deepseek-v4-pro).
   The reviewer view, the AC view and the review text shown to the author all
   read from that same run so the numbers agree across views. Nothing is
   invented; the author rating form is the one exception and is labelled as a
   proposal-layer surface because no author-side field exists in the schema.
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
          '<div><dt>extracted text</dt><dd>76,797 chars · truncated</dd></div>' +
          '</dl>' +
          '<div class="quote"><span>' + t("stage.0.strengths") + '</span>' +
          'The topic is timely and relevant to large AI/ML conferences. The paper is clearly written and supports its ' +
          'position with empirical analyses. The reviewer expects substantial interest in discussing or debating the proposal.</div>' +
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
          '<div><dt>anchor range</dt><dd class="accent">5.27 - 6.00</dd></div>' +
          '<div><dt>residual</dt><dd class="accent">-2.271</dd></div>' +
          '<div><dt>severity</dt><dd class="accent">high</dd></div>' +
          '<div><dt>stability</dt><dd class="faint">moderate</dd></div>' +
          '<div><dt>samples</dt><dd>3 · midpoint σ 0.7744</dd></div>' +
          '<div><dt>context mode</dt><dd class="ok">paper_and_rationale</dd></div>' +
          '</dl>' +
          '<div class="quote"><span>' + t("stage.1.reasoning") + '</span>' +
          'Anchor derived from 7 review-grounded contributions (4 strengths, 3 weaknesses).</div>' +
          '<ul class="list-tight">' +
          '<li>' + t("stage.1.l1") + '</li>' +
          '<li>' + t("stage.1.l2") + '</li>' +
          '<li>' + t("stage.1.l3") + '</li>' +
          '</ul>' +
          /* The weight column is what makes the high anchor auditable: the two
             core strengths outweigh all three weaknesses by two orders of
             magnitude, which is visible here rather than asserted. */
          '<p class="stage-note" style="margin-top:20px;color:var(--text)"><b>' + t("stage.1.contrib") + '</b></p>' +
          '<div class="dims" style="margin-top:10px">' +
          '<div class="hot"><span>core · strength · supported</span><b>4.5 → +0.914</b></div>' +
          '<div class="hot"><span>core · strength · supported</span><b>4.5 → +0.226</b></div>' +
          '<div><span>supporting · strength</span><b>0.6 → +0.030</b></div>' +
          '<div><span>minor · strength · not_checkable</span><b>0.144 → +0.007</b></div>' +
          '<div><span>caveat · weakness ×3</span><b>0.027-0.036 → Σ -0.005</b></div>' +
          '<div><span>baseline 3.5 · signed movement</span><b>+2.371 → 5.871</b></div>' +
          '</div>' +
          '<p class="stage-note" style="margin-top:18px">' + t("stage.1.contrib_note") + '</p>' +
          '<div class="flag"><b>high</b><span>' + t("stage.1.flag") + '</span></div>'
      },
      {
        title: t("stage.2.title"),
        note: t("stage.2.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>paper available</dt><dd class="ok">true</dd></div>' +
          '<div><dt>key claims</dt><dd>4</dd></div>' +
          '<div><dt>status</dt><dd class="accent">4 × under_supported</dd></div>' +
          '<div><dt>claim types</dt><dd>experiments_insufficient ×3 · strong_contribution</dd></div>' +
          '</dl>' +
          '<div class="quote"><span>' + t("stage.2.claim1") + '</span>' +
          'The reviewer is not fully convinced that Figure 2a illustrates the claimed problem.</div>' +
          '<ul class="list-tight">' +
          '<li>' + t("stage.2.m1") + '</li>' +
          '<li>' + t("stage.2.m2") + '</li>' +
          '</ul>' +
          '<ul class="list-tight" style="margin-top:18px">' +
          '<li><span><b>' + t("stage.2.c2label") + '</b> Some empirical figures would be stronger with error bars, ' +
          'reliability estimates, or correlation statistics. ' + t("stage.2.c2") + '</span></li>' +
          '<li><span><b>' + t("stage.2.c3label") + '</b> The analysis could better separate score similarity ' +
          'from rationale similarity. ' + t("stage.2.c3") + '</span></li>' +
          '<li><span><b>' + t("stage.2.c4label") + '</b> The paper is clearly written and supports its position ' +
          'with empirical analyses. ' + t("stage.2.c4") + '</span></li>' +
          '</ul>' +
          '<p class="stage-note" style="margin-top:18px">' + t("stage.2.after") + '</p>'
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
          '<div><span>support</span><b>2</b></div>' +
          '<div><span>significance</span><b>3</b></div>' +
          '<div><span>discussion_potential</span><b>4</b></div>' +
          '<div><span>argument_clarity</span><b>3</b></div>' +
          '<div><span>related_work</span><b>3</b></div>' +
          '</div>' +
          '<div class="flag flag-ok"><b>balanced</b><span>' + t("stage.3.flag") + '</span></div>' +
          '<p class="stage-note" style="margin-top:20px">' + t("stage.3.after") + '</p>'
      },
      {
        title: t("stage.4.title"),
        note: t("stage.4.note"),
        html:
          '<dl class="kv">' +
          '<div><dt>reliability gate</dt><dd class="ok">passed · repaired</dd></div>' +
          '<div><dt>care plan</dt><dd class="accent">reviewer_calibration_challenge</dd></div>' +
          '<div><dt>synthesis confidence</dt><dd>0.92</dd></div>' +
          '<div><dt>intended judgment possible</dt><dd class="ok">true</dd></div>' +
          '</dl>' +
          /* The gate rejected the first submission in this run. Showing both
             attempts is the point: the arch diagram claims a feedback edge
             back to the planner, and this run actually took it. */
          '<div class="flag"><b>rejected</b><span>' + t("stage.4.gate1") + '</span></div>' +
          '<div class="flag flag-ok"><b>passed</b><span>' + t("stage.4.gate2") + '</span></div>' +
          '<ul class="list-tight" style="margin-top:18px"><li>' + t("stage.4.out1") + '</li>' +
          '<li>' + t("stage.4.out2") + '</li></ul>' +
          REVIEWER_LETTER()
      }
    ];
  }

  /* The reviewer-facing artifact, verbatim from the run's rendered_output.
     Field labels stay English because render.py emits English; only the
     surrounding annotations are translated. Issues 3 and 4 sit in a <details>
     so the panel does not grow past the log. */
  function REVIEWER_LETTER() {
    function issue(n, wrote, why, asks) {
      return '<div class="deliv-issue"><b>Issue ' + n + '</b>' +
        '<div class="deliv-wrote"><span>' + t("deliv.r.wrote") + '</span><em>“' + wrote + '”</em></div>' +
        '<p class="deliv-why"><b>' + t("deliv.r.why") + '</b>' + why + '</p>' +
        '<p class="deliv-why"><b>' + t("deliv.r.ask") + '</b></p>' +
        '<ul class="deliv-ask">' + asks.map(function (a) { return '<li>' + a + '</li>'; }).join("") + '</ul></div>';
    }

    return '<div class="deliv">' +
      '<div class="deliv-bar"><span class="deliv-path">' + t("deliv.r.path") + '</span>' +
      '<span class="badge badge-hot">' + t("deliv.badge") + '</span></div>' +
      '<div class="deliv-body">' +
      '<h4 class="deliv-h">' + t("deliv.r.h") + '</h4>' +

      '<div class="deliv-sec"><b>' + t("deliv.r.sum") + '</b>' +
      '<div class="deliv-score">' +
      '<div><i>' + t("deliv.r.sub") + '</i><b>3 / 6</b></div>' +
      '<div><i>' + t("deliv.r.anchor") + '</i><b class="hot">≈ 5.9 / 6</b></div>' +
      '</div>' +
      '<p>The submitted score and the rationale provided are not fully aligned, as the strengths described appear ' +
      'to outweigh the identified concerns. Clarification on how the concerns lead to a Weak Reject is needed, ' +
      'or the score should be revised to better reflect the rationale.</p></div>' +

      '<div class="deliv-sec"><b>' + t("deliv.r.issues") + '</b>' +
      issue(1,
        "The reviewer is not fully convinced that Figure 2a illustrates the claimed problem.",
        "The claim that Figure 2a does not illustrate the problem lacks specificity, making it difficult to determine how much weight it should carry in the score.",
        ["What specific aspect of Figure 2a fails to illustrate the problem?",
         "What additional analysis or visualization would resolve this concern?",
         "How does this concern affect the overall score given other strengths?"]) +
      issue(2,
        "Some empirical figures would be stronger with error bars, reliability estimates, or correlation statistics.",
        "The request for additional statistics is too general; without knowing which figures and which statistics are missing, it is unclear how this affects the paper's conclusions.",
        ["Please identify the exact figure(s) that lack error bars, reliability estimates, or correlation statistics.",
         "Which specific statistic is missing from each, and why is it essential for the paper's claims?",
         "How does this concern contribute to the score?"]) +
      '<details class="deliv-more"><summary>' + t("deliv.r.more") + '</summary>' +
      issue(3,
        "The analysis could better separate score similarity from rationale similarity.",
        "The observation about separating score similarity from rationale similarity is not detailed enough to understand its significance or its impact on the score.",
        ["Which part of the analysis conflates score similarity and rationale similarity?",
         "How would a better separation affect the paper's conclusions or the calibration proposal?",
         "How does this concern influence the final score?"]) +
      issue(4,
        "The paper is clearly written and supports its position with empirical analyses.",
        "The positive assessment of the paper's clarity and empirical support is not linked to specific evidence, making it hard to weigh against the identified weaknesses.",
        ["Which specific empirical analyses are being referred to?",
         "How do they support the paper's position?",
         "How do they balance the concerns about figure clarity and missing statistics?"]) +
      '</details></div>' +

      '<div class="deliv-sec"><b>' + t("deliv.r.opts") + '</b>' +
      '<ul class="deliv-opts">' +
      '<li>Keep the score and add concrete evidence showing why the concerns are decisive.</li>' +
      '<li>Revise the score if some concerns are serious but not decisive.</li>' +
      '<li>Keep the concerns while marking some as limitations rather than central reasons for the score.</li>' +
      '<li>Distinguish which concerns affect the main contribution and which affect only part of the evidence.</li>' +
      '</ul></div>' +

      '<p class="stage-note" style="margin-top:22px">' + t("deliv.r.note") + '</p>' +
      '</div></div>';
  }

  var STAGES = buildStages();

  /* Transcribed from the run's agent_steps + agent_events. Row 04-05 is the
     rejected first submission: the model asked for adjust_score and the
     reliability gate refused it, which is why rows 06-09 exist at all. */
  var LOG = [
    ["01", "loaders: parsed review_156R, venue=icml, paper_source=user_pdf, 76797 chars"],
    ["02", "score_anchor: 3 samples, midpoint_std=0.7744, stability=moderate"],
    ["03", "score_anchor: <b>anchor_range=(5.2714, 6.0) residual=-2.271 severity=high</b>"],
    ["04", "submit_diagnosis: care_plan=adjust_score confidence=0.95"],
    ["05", "reliability_gate: <b>rejected</b> failed_checks=[adjust_score_but_intent_possible]"],
    ["06", "planner: requested rubric_weight"],
    ["07", "rubric_weight: dominant=none status=balanced"],
    ["08", "planner: requested evidence_grounding"],
    ["09", "evidence_grounding: paper_available=true, 4 claims under_supported"],
    ["10", "submit_diagnosis: care_plan=reviewer_calibration_challenge confidence=0.92"],
    ["11", "reliability: gate passed, failed_checks=0, repaired=true"],
    ["12", "<u>wrote llmscoring1_paper.json · review_156R CaseReport</u>"]
  ];

  /* Which rail step each log row lights up. The planner chooses the order and
     the gate can send it backwards, so this run went 1 -> 4 -> 3 -> 2 -> 4:
     anchor, a rejected record attempt, then rubric and evidence, then the
     record again. The indices are deliberately non-monotonic. */
  var LOG_STAGE = [0, 1, 1, 4, 4, 3, 3, 2, 2, 4, 4, 4];

  /* How long each row stays on screen before the next one lands, in ms.
     Not uniform: a row that only announces a step ("planner: requested ...")
     needs less time than one that swaps a full panel of numbers in. The rows
     that replace the panel body get the long dwells so there is time to read
     the result before the next step takes over. The rejection row is held
     longer because the backwards jump needs a beat to register. Sum is ~11s. */
  var DWELL = [900, 650, 1100, 850, 1200, 600, 950, 600, 1050, 950, 850, 850];
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

        /* Rows that announce a step without carrying its result render the
           step as pending: row 02 (anchor sampling started), row 04 (the
           record attempt that has not been judged yet) and the two planner
           rows 06 and 08. Zero-based, so 1 / 3 / 5 / 7. */
        current = LOG_STAGE[n];
        paint(current, {
          pending: n === 1 || n === 3 || n === 5 || n === 7,
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

  /* reviewer / AC / author view switch. The first two views read the same run,
     so switching only changes which slice of that run is on screen. The author
     view shows the same review_156R text plus a proposal-layer rating form.
     Switching away from a running diagnosis stops it rather than leaving timers
     firing into a hidden panel. */
  var viewBtns = {
    reviewer: document.getElementById("viewReviewer"),
    ac: document.getElementById("viewAc"),
    author: document.getElementById("viewAuthor")
  };
  var panels = {
    reviewer: document.getElementById("panelReviewer"),
    ac: document.getElementById("panelAc"),
    author: document.getElementById("panelAuthor")
  };
  var demoTitle = document.getElementById("demoTitle");
  var demoLede = document.getElementById("demoLede");

  var activeView = "reviewer";

  function setView(name) {
    if (!panels.reviewer || !panels.ac || !panels.author) return;
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

  if (viewBtns.reviewer && viewBtns.ac && viewBtns.author) {
    viewBtns.reviewer.addEventListener("click", function () { setView("reviewer"); });
    viewBtns.ac.addEventListener("click", function () { setView("ac"); });
    viewBtns.author.addEventListener("click", function () { setView("author"); });
  }

  /* Author rating form. Deliberately local-only: no fetch, no storage, no
     hidden field. The summary line is the whole output, and it says so. The
     form is a proposal-layer surface because the schema has no author-side
     field, so there is nothing to post it to even in a real deployment. */
  var aform = document.getElementById("authorForm");
  if (aform) {
    var aout = document.getElementById("authorOut");
    var aSubmit = document.getElementById("authorSubmit");
    var aReset = document.getElementById("authorReset");
    var aAc = document.getElementById("authorAc");
    var Q = ["q1", "q2", "q3", "q4"];
    var submitted = false;

    function scores() {
      return Q.map(function (q) {
        var hit = aform.querySelector('input[name="' + q + '"]:checked');
        return hit ? Number(hit.value) : null;
      }).filter(function (v) { return v !== null; });
    }

    /* Called on every change and after a locale switch, so the summary never
       shows a stale language or a stale count. */
    function paintOut() {
      var got = scores();
      if (submitted && got.length === Q.length) {
        var mean = got.reduce(function (a, b) { return a + b; }, 0) / got.length;
        aout.textContent = t("author.out.done")
          .replace("{avg}", mean.toFixed(2))
          .replace("{ac}", aAc && aAc.checked ? t("author.out.ac") : "");
        aout.classList.add("filled");
        return;
      }
      aout.classList.remove("filled");
      aout.textContent = got.length === 0
        ? t("author.out.empty")
        : t("author.out.partial").replace("{n}", got.length);
    }

    aform.addEventListener("change", function () {
      /* Editing after a submit invalidates the recorded summary, so the state
         drops back to "in progress" rather than showing a mean for a set of
         answers the reader has since changed. */
      if (submitted && scores().length < Q.length) submitted = false;
      paintOut();
    });

    aform.addEventListener("submit", function (e) {
      e.preventDefault();
      if (scores().length < Q.length) { paintOut(); return; }
      submitted = true;
      paintOut();
    });

    if (aReset) {
      aReset.addEventListener("click", function () {
        aform.reset();
        submitted = false;
        paintOut();
      });
    }
    if (aSubmit) aSubmit.setAttribute("type", "submit");
    window.CHART_PAINT_AUTHOR_OUT = paintOut;
    paintOut();
  }

  /* architecture figure switch. The two diagrams are alternatives rather than
     a sequence, so only one is in the page at a time. */
  var archTabs = [document.getElementById("archTab1"), document.getElementById("archTab2")];
  var archPanels = [document.getElementById("archPanel1"), document.getElementById("archPanel2")];

  function setArch(i) {
    if (!archPanels[0] || !archPanels[1]) return;
    archPanels.forEach(function (p, n) {
      p.hidden = n !== i;
      archTabs[n].setAttribute("aria-selected", n === i ? "true" : "false");
      /* Same reason as the view switch: the scroll observer cannot reveal a
         panel that was hidden when it ran. */
      if (n === i) p.classList.add("in");
    });
  }

  if (archTabs[0] && archTabs[1]) {
    archTabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { setArch(i); });
    });
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
    /* The author summary reports live form state for the same reason the run
       note does, so it is re-derived here instead of being tagged as copy. */
    if (window.CHART_PAINT_AUTHOR_OUT) window.CHART_PAINT_AUTHOR_OUT();
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
