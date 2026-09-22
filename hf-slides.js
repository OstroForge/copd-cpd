function heartFailureSlides() {
  return [
    {
      type: "title",
      kicker: "Ambulance Staff CPD  ·  30 minutes",
      title: "Heart Failure in Pre-hospital Care",
      subtitle: "Recognise the presentation, sit them up, and treat the right problem — congestion, ischaemia or shock.",
      meta: "JRCALC Heart Failure, Glyceryl Trinitrate and Furosemide. Always follow the live JRCALC entry and local Trust policy.",
      notes: "Open on the title. Next is the icebreaker — leave it up while phones scan the QR. Do not call the guideline by a code number. People know it as Heart Failure."
    },
    {
      type: "poll",
      pollId: "hf-hands",
      resultsTitle: "GTN blood pressure — how the room voted",
      kicker: "Hands up  ·  live vote",
      title: "Before we start — phones out",
      prompt: "In acute heart failure, below which systolic blood pressure must you <strong>not</strong> give GTN?",
      votePrompt: "In acute heart failure, below which systolic blood pressure must you not give GTN?",
      options: [
        "90 mmHg",
        "110 mmHg",
        "140 mmHg"
      ],
      correct: 1,
      teach: "<strong>110 mmHg</strong> — the Heart Failure / GTN threshold for AHF, or any symptomatic hypotension. <strong>90 mmHg</strong> is the angina / MI figure. Mixing the two is the habit this session is here to break.",
      notes: "Leave this up while people scan. Typical wrong answer is 90 because that is what they use for ACS. Space to results, then Space again for the teaching point."
    },
    {
      kicker: "Core messages",
      title: "Learning objectives",
      html: `
        <div class="card" style="margin-bottom:12px">
          <h3>By the end you will have refreshed how to:</h3>
          <ul style="columns:2;column-gap:28px">
            <li>Spot acute heart failure and separate it from COPD, PE, pneumonia and sepsis</li>
            <li>Sit the patient fully upright as a treatment, not a comfort measure</li>
            <li>Give GTN only when the indication and the blood pressure both allow it</li>
            <li>Think before fluids, morphine or a “usual LVF package”</li>
          </ul>
        </div>
          <div class="body two">
            <div class="card">
              <h3>This is time-critical</h3>
              <p>JRCALC: acute heart failure is life-threatening. New and decompensated chronic cases need <strong>TIME-CRITICAL</strong> transfer unless there is an advance care or palliative plan. Prefer a hospital with a coronary care unit.</p>
            </div>
            <div class="card">
              <h3>Four presentations — not one protocol</h3>
              <p>Treat what you are looking at: acute pulmonary oedema, peripheral oedema, respiratory distress, or cardiogenic shock.</p>
              <p class="small" style="color:var(--red);margin-top:10px">GTN and furosemide are not automatic. Shock is a different job.</p>
            </div>
          </div>
          <div class="banner build" style="margin-top:12px">AHF is not “give GTN if SBP is over 90”</div>`,
      notes: "Outcomes in 30 seconds. Then the two banners. The room often still runs an old LVF package: sit up, GTN, furosemide, morphine. That package is no longer the guideline."
    },
    {
      kicker: "JRCALC Heart Failure — the actual wording",
      title: "GTN is considered — it is not automatic",
      html: `
        <div class="banner dark">“Consider administering GTN in Acute Heart Failure with ischaemia or uncontrolled hypertension.”</div>
        <div class="body two" style="margin-top:16px">
          <div class="card fact">
            <h3>Two gates before a spray</h3>
            <ul>
              <li><strong>Indication:</strong> acute heart failure <em>with</em> ischaemia or uncontrolled hypertension</li>
              <li><strong>Safety:</strong> systolic BP greater than <strong>110 mmHg</strong>, and not symptomatic hypotension</li>
              <li>Avoid in severe aortic or mitral stenosis, PDE5 inhibitors in the last 24 hours, hypovolaemia, head injury</li>
            </ul>
          </div>
          <div class="card warn">
            <h3>What that sentence does not say</h3>
            <ul>
              <li>It does not say “any pulmonary oedema with SBP over 90”</li>
              <li>It does not say GTN is first-line for every AHF job</li>
              <li>90 mmHg is the ACS / angina figure — a different table in the same monograph</li>
            </ul>
          </div>
        </div>`,
      notes: "Read the quote slowly. January 2024 update: GTN in AHF is for ischaemia or uncontrolled hypertension. Then the 110 mmHg safety line. People will argue ‘we’ve always given it in LVF’. Agree that congestion with a high BP is exactly when vasodilators help — then hold the two gates."
    },
    {
      kicker: "What it is",
      title: "Heart failure in one minute",
      html: `
        <div class="body two">
          <div>
            <ul>
              <li>A clinical syndrome, not a single disease — the heart cannot meet the body’s needs, or does so at high filling pressures</li>
              <li>Commonest UK cause is coronary disease; many have had a previous MI</li>
              <li>Valves, pericardium, rhythm and conduction can all do it</li>
              <li><strong>Chronic HF</strong> is already diagnosed and treated in the community</li>
              <li><strong>Acute on chronic</strong> is a rapid worsening of that known condition</li>
              <li><strong>De novo</strong> is the first presentation — no previous diagnosis</li>
            </ul>
          </div>
          <div>
            <div class="card">
              <h3>Three major acute forms</h3>
              <ul>
                <li><strong>Acute pulmonary oedema</strong> — sudden interstitial oedema, severe dyspnoea, with or without swollen legs</li>
                <li><strong>Predominant peripheral oedema</strong> — fluid-loaded: legs, abdomen, scrotum, raised JVP, pleural fluid</li>
                <li><strong>Cardiogenic shock</strong> — 5–8% of AHF. New cases are often STEMI. Rapid treatment</li>
              </ul>
            </div>
            <div class="card warn" style="margin-top:10px">
              <h3>Pre-hospital trap</h3>
              <p>AHF is frequently mistaken for sepsis: both can collapse and look hypotensive. Fluids that would be right for sepsis can be harmful here.</p>
            </div>
          </div>
        </div>`,
      notes: "Do not lecture HFrEF versus HFpEF. Name the three forms. Shock is rare but it is the one that makes GTN and furosemide the wrong drugs. The sepsis trap is the line that must land."
    },
    {
      kicker: "Words you will hear",
      title: "Terms without the alphabet soup",
      html: `
        <table>
          <thead>
            <tr><th>You may hear</th><th>What it means on scene</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HFrEF / LVSD</strong></td>
              <td>Pumping problem. Ejection fraction under 40%. The left ventricle does not empty well.</td>
            </tr>
            <tr>
              <td><strong>HFpEF</strong></td>
              <td>Filling problem. EF 50% or more. The ventricle is stiff. They can still get pulmonary oedema.</td>
            </tr>
            <tr>
              <td><strong>LVF</strong></td>
              <td>Breathless, often basal crackles, pulmonary oedema. May also have right-sided signs.</td>
            </tr>
            <tr>
              <td><strong>RVF / cor pulmonale</strong></td>
              <td>Swollen, raised JVP, ascites, pleural fluid. Lungs often clear. Cor pulmonale is right failure from chronic lung disease.</td>
            </tr>
            <tr>
              <td><strong>CCF</strong></td>
              <td>Old term. Both pulmonary and peripheral oedema — left and right.</td>
            </tr>
          </tbody>
        </table>
        <p class="callout" style="margin-top:14px">You do not need an echo to start treatment. You do need to know if this looks like congestion, shock, or something else.</p>`,
      notes: "Walk the table quickly. HFmrEF is a grey area — skip unless asked. Land the callout: no echo on scene, still treat what you see."
    },
    {
      kicker: "Look again",
      title: "Is this heart failure — or something else?",
      html: `
        <div class="body two">
          <div class="card">
            <h3>Red flags that support AHF</h3>
            <ul>
              <li><strong>Orthopnoea</strong> — worse lying flat; may have slept in the chair</li>
              <li><strong>PND</strong> — wakes gasping, better sitting up</li>
              <li>New dyspnoea with previous MI, hypertension or angina</li>
              <li>New peripheral oedema with breathlessness</li>
              <li>Pink frothy sputum</li>
              <li>Fine basal crackles, often with an expiratory wheeze</li>
            </ul>
          </div>
          <div class="card myth">
            <h3>Think again if you find</h3>
            <ul class="think-again">
              <li><span>Fever, focal chest signs, productive green sputum</span><em>Pneumonia</em></li>
              <li><span>Wheeze, smoker, known COPD, no orthopnoea</span><em>COPD flare</em></li>
              <li><span>Sudden pleuritic pain, unilateral signs, risk for clot</span><em>PE / pneumothorax</em></li>
              <li><span>Collapse, fever, warm shock, no congestion</span><em>Sepsis</em></li>
              <li><span>Normal 12-lead ECG</span><em>AHF is unlikely — reconsider</em></li>
            </ul>
          </div>
        </div>`,
      notes: "Left box is JRCALC red flags. Right box: JRCALC says pulmonary oedema is hard to separate from COPD, PE and pneumonia. A normal ECG is unusual in HF — that is in the guideline, not a guess."
    },
    {
      kicker: "Why they look like this",
      title: "Left backup, right backup",
      html: `
        <div class="body two">
          <div class="card">
            <h3>Left — into the lungs</h3>
            <p>Poor left ventricular contraction. Blood backs into the pulmonary veins. Hydrostatic pressure pushes fluid into the alveoli.</p>
            <ul>
              <li>Severe dyspnoea, orthopnoea, PND</li>
              <li>Pink or white frothy sputum</li>
              <li>Basal crackles ± wheeze</li>
              <li>Hypoxia</li>
            </ul>
          </div>
          <div class="card">
            <h3>Right — into the body</h3>
            <p>Often follows left failure. Isolated right failure: lung disease, PE, valves. High pulmonary pressure, then a failing right ventricle.</p>
            <ul>
              <li>Raised JVP</li>
              <li>Hepatomegaly, ascites</li>
              <li>Dependent oedema from the feet up</li>
              <li>Lungs may be clear</li>
            </ul>
          </div>
        </div>
        <div class="banner teal" style="margin-top:12px">Most jobs you see will mix both. Treat the presentation in front of you.</div>`,
      notes: "Keep this physiological and short. Left = wet lungs. Right = wet body. JVP is useful but JRCALC says it is hard pre-hospital and must not delay treatment."
    },
    {
      kicker: "Why today?",
      title: "What triggered this episode?",
      html: `
        <p style="margin-bottom:10px">JRCALC: a trigger is found in about two-thirds of decompensations. Some — ischaemia and pneumonia — raise mortality. You may be treating two conditions at once.</p>
        <div class="diagram-row" style="margin-top:0">
          <div class="step red"><h3>Heart</h3><p>MI / ACS<br>Tachyarrhythmia (AF, VT)<br>Bradyarrhythmia<br>Uncontrolled BP</p></div>
          <div class="step gold"><h3>Lungs and infection</h3><p>Pneumonia<br>COPD flare<br>Pulmonary embolism<br>Sepsis</p></div>
          <div class="step green"><h3>Drugs and lifestyle</h3><p>Missed HF medicines<br>NSAIDs, steroids<br>Alcohol / recreational drugs<br>Cardiotoxic chemo</p></div>
          <div class="step dark"><h3>Also consider</h3><p>Chest trauma<br>Valve failure / endocarditis<br>Aortic dissection<br>LVAD if they have one</p></div>
        </div>
        <p class="callout build" style="margin-top:14px">If the ECG shows ACS, this is an ACS job as well as a heart-failure job. Follow Acute Coronary Syndrome.</p>`,
      notes: "People like a list. Hit ischaemia and infection as the dangerous pair. Space for the ACS callout. Ask: ‘Have they been taking their tablets? Any NSAIDs for a bad knee?’"
    },
    {
      kicker: "The dangerous habit",
      title: "STOP and THINK before intravenous fluids",
      html: `
        <div class="banner red">If they have heart failure or valve disease, IV fluids can be harmful — especially given quickly and in large amounts</div>
        <div class="body two" style="margin-top:16px">
          <div class="card myth">
            <h3>Why this keeps happening</h3>
            <ul>
              <li>They look shocked, so the reflex is a fluid challenge</li>
              <li>AHF is frequently mistaken for sepsis</li>
              <li>A “low BP, give fluid” habit does not ask <em>why</em> the pressure is low</li>
            </ul>
          </div>
          <div class="card fact">
            <h3>What to do instead</h3>
            <ul>
              <li>Look for congestion: orthopnoea, crackles, frothy sputum, oedema</li>
              <li>Cardiogenic shock is hypoperfusion from pump failure — not an empty tank</li>
              <li>Correct life-threatening ABCD, sit them up if they will tolerate it, TIME-CRITICAL transfer</li>
              <li>If you truly cannot tell sepsis from AHF, say so at handover and be cautious with volume</li>
            </ul>
          </div>
        </div>`,
      notes: "This is a key-point sentence in JRCALC. Read the red banner. Then the sepsis mix-up. Do not ban every millilitre — ban unthinking wide-open fluids in known HF."
    },
    {
      kicker: "The intervention you already have",
      title: "Sit them fully upright — immediately",
      html: `
        <div class="body two">
          <div class="card ok">
            <h3>Why this is treatment</h3>
            <ul>
              <li>Lowers left atrial pressure — the driving pressure for pulmonary oedema</li>
              <li>Drops the diaphragm, so the lung bases can open</li>
              <li>Lets them use accessory muscles</li>
              <li>JRCALC: the importance of positioning cannot be overstated</li>
            </ul>
          </div>
          <div class="card warn">
            <h3>They will slump</h3>
            <ul>
              <li>Exhausted patients slide down the trolley</li>
              <li>Reposition repeatedly on scene and en route</li>
              <li>Do not lay them flat for a 12-lead if they decompensate the moment they go down — sit them, record what you can, document why</li>
            </ul>
          </div>
        </div>
        <div class="banner build" style="margin-top:12px">Upright first. Then oxygen, ECG and drugs.</div>`,
      notes: "This is free, immediate, and often skipped while people reach for GTN. If they are peri-arrest and need to be laid for CPR, that overrides — but the breathless congested patient should not be recumbent."
    },
    {
      kicker: "On-scene map",
      title: "Congestion with a pulse — or cardiogenic shock?",
      html: `
        <div class="card" style="margin-bottom:12px;text-align:center">
          <p style="font-size:22px;font-weight:750;color:var(--navy);margin:0">Breathless. Wet lungs or wet legs. Known or suspected heart failure.</p>
        </div>
        <p style="text-align:center;font-weight:750;margin:0 0 10px;font-size:22px;color:var(--navy)">Are they hypotensive or hypoperfused?</p>
        <div class="diagram-row two">
          <div class="step red">
            <h3>YES — treat as shock</h3>
            <ul>
              <li>No GTN. No furosemide</li>
              <li>Correct &lt;C&gt;ABCDE. Do not dump fluid</li>
              <li>12-lead — this is often STEMI</li>
              <li>TIME-CRITICAL. ATMIST. Prefer CCU</li>
            </ul>
          </div>
          <div class="step green">
            <h3>NO — congested, BP holding</h3>
            <ul>
              <li>Sit fully upright. Oxygen 94–98%</li>
              <li>GTN only if ischaemia or uncontrolled hypertension, and SBP &gt;110</li>
              <li>Consider furosemide 40 mg slow IV</li>
              <li>CPAP if you have it and you are trained</li>
            </ul>
          </div>
        </div>
          <div class="step dark" style="margin-top:12px">
            <h3>Both paths</h3>
            <p>12-lead. Ask about a care plan or DNACPR. Still TIME-CRITICAL unless a palliative plan says otherwise.</p>
          </div>`,
      notes: "Scene first, then the split. Left path is the 5–8%. Right path is most of the room’s jobs. Navy bar: both still get ECG and a proper receiving hospital."
    },
    {
      kicker: "Oxygen and ECG",
      title: "94–98%, and a 12-lead on everyone",
      html: `
        <div class="body two">
          <div class="card">
            <h3>Oxygen</h3>
            <ul>
              <li>Recommended in acute heart failure</li>
              <li>Target <strong>94–98%</strong></li>
              <li>Give an initial dose until you have a reliable SpO<sub>2</sub>, then titrate</li>
              <li>If they also have COPD, the COPD / oxygen target of 88–92% still applies — that is a separate decision</li>
            </ul>
          </div>
          <div class="card">
            <h3>ECG</h3>
            <ul>
              <li>Record a 12-lead</li>
              <li>It is rare for heart failure to have a normal ECG</li>
              <li>If the ECG is normal, consider another diagnosis</li>
              <li>If it shows ACS, follow the ACS pathway as well</li>
            </ul>
          </div>
        </div>
        <p class="small" style="margin-top:12px">Non-invasive monitoring — SpO<sub>2</sub>, BP, respiratory rate and continuous ECG — from minutes after contact, and keep it on during transfer.</p>`,
      notes: "Oxygen is 94–98% here, not 88–92%. If they have COPD, do not pretend Heart Failure overrules COPD oxygen — you still titrate. The normal-ECG line is a useful ‘are we sure?’ check."
    },
    {
      kicker: "GTN",
      title: "How to give it when both gates are open",
      html: `
        <div class="body two">
          <div class="card">
            <h3>Dose from live JRCALC (spray)</h3>
            <ul>
              <li>Mucosa must be moist</li>
              <li><strong>400–800 micrograms</strong> (1–2 sprays) under the tongue</li>
              <li>Assess over <strong>5 minutes</strong></li>
              <li>Repeat every 5–10 minutes if SBP remains <strong>&gt;110</strong></li>
              <li>Maximum <strong>6 sprays (2.4 milligrams)</strong> in AHF</li>
            </ul>
          </div>
          <div class="card warn">
            <h3>Do not give it</h3>
            <ul>
              <li>SBP under 110 in AHF, or symptomatic hypotension</li>
              <li>Hypovolaemia, unconscious</li>
              <li>Head trauma or cerebral haemorrhage</li>
              <li>Sildenafil or related drugs in the previous 24 hours</li>
              <li>Known severe aortic or mitral stenosis</li>
            </ul>
          </div>
        </div>
        <p class="small" style="margin-top:10px">Same drug, different table: angina / MI / cocaine chest pain still uses SBP &gt;90, and has no 6-spray cap. Do not import that table into heart failure.</p>`,
      notes: "Spray is what we carry. Cite 400–800, 5-minute look, 110, max 6 sprays. PDE5 inhibitors still catch people. Caution in STEMI: GTN is not routinely first-line for MI regardless of location — if this is a STEMI with oedema, you are on two pathways."
    },
    {
      type: "poll",
      pollId: "hf-gtn",
      kicker: "Your turn  ·  live vote",
      title: "Would you give GTN?",
      prompt: "72, known heart failure. Slept in the chair. Pink frothy sputum, crackles, chest pain. SBP <strong>168</strong>, HR 108, SpO<sub>2</sub> 90% on air.",
      votePrompt: "72, known heart failure, slept in the chair, pink frothy sputum, chest pain, SBP 168. Give GTN?",
      options: [
        "Yes — AHF with ischaemia and uncontrolled hypertension, SBP over 110",
        "No — wait until hospital for nitrates",
        "No — SBP must be over 180"
      ],
      correct: 0,
      teach: "<strong>Yes.</strong> This is acute pulmonary oedema with chest pain (ischaemia) and a high BP. Both GTN gates are open. Sit fully upright, oxygen to 94–98%, GTN 400–800 micrograms, 12-lead, TIME-CRITICAL. Furosemide can be considered. This is not a ‘wait for hospital’ job.",
      notes: "This is the textbook congested-and-hypertensive job. If the room votes no, they have over-learned the ‘do not routinely give nitrates’ NICE hospital line. Pre-hospital JRCALC still considers GTN here."
    },
    {
      type: "poll",
      pollId: "hf-shock",
      kicker: "Your turn  ·  live vote",
      title: "Same lungs, different blood pressure",
      prompt: "68, known heart failure. Pale, sweaty, barely responding. Crackles throughout. SBP <strong>86</strong>, HR 128, SpO<sub>2</sub> 80%.",
      votePrompt: "68, known HF, shocked, crackles, SBP 86. GTN and furosemide?",
      detail: `
        <div class="photo-frame cutout shock-zoll">
          <img src="assets/patient-shock-monitor.png" alt="Zoll monitor showing pulse 128, blood pressure 86 over 50, MAP 62, respiratory rate 32, SpO2 80 percent">
        </div>`,
      options: [
        "GTN and furosemide — it is still LVF",
        "GTN only, skip furosemide",
        "Neither — this is cardiogenic shock"
      ],
      correct: 2,
      teach: "<strong>Neither.</strong> SBP 86 is below the GTN line. Furosemide is contraindicated in cardiogenic shock. Sit up if they tolerate it, high-concentration oxygen, 12-lead (often STEMI), TIME-CRITICAL. Fluids are not the reflex here either.",
      notes: "Use the Zoll. People will still reach for GTN because the chest is wet. The blood pressure decides."
    },
    {
      kicker: "Furosemide",
      title: "Consider 40 milligrams — not a reflex, not in shock",
      html: `
        <div class="body two">
          <div class="card">
            <h3>When JRCALC says consider it</h3>
            <ul>
              <li>Pulmonary oedema and/or respiratory distress due to acute heart failure</li>
              <li>Adults 18 years and over</li>
              <li><strong>40 milligrams IV slowly over 2 minutes</strong> — no repeat dose</li>
              <li>The monograph also says consider it when the time to hospital is prolonged</li>
            </ul>
          </div>
          <div class="card warn">
            <h3>Do not give it</h3>
            <ul>
              <li>Cardiogenic shock</li>
              <li>Severe renal failure with anuria</li>
              <li>Reduced GCS with liver cirrhosis</li>
              <li>Children under 18</li>
              <li>Caution if already hypotensive, pregnant, or known low potassium</li>
            </ul>
          </div>
        </div>
        <p class="callout" style="margin-top:12px">Known chronic HF: look at the care plan. Extra oral diuretic may be the plan if they are staying at home. If they need active management, do not delay hospital for a community call.</p>`,
      notes: "Furosemide is ‘consider’, 40 mg once, slow IV. Not the old ‘80 and a second amp’. Shock is a hard stop. Care-plan oral diuretic is for the stable known patient, not the drowning one."
    },
    {
      kicker: "What not to reach for",
      title: "Morphine is not part of the package",
      html: `
        <div class="body two">
          <div class="card myth">
            <h3>Morphine</h3>
            <p>Registries associate opiates in heart failure with higher mortality. JRCALC: <strong>do not use routinely</strong>.</p>
            <p style="margin-top:10px">Consider it if they have <strong>chest pain</strong>, or if a palliative care plan already lists morphine.</p>
          </div>
          <div class="card fact">
            <h3>If you are unsure it is COPD</h3>
            <p>Diagnosis is difficult pre-hospital. Where doubt exists between COPD exacerbation and AHF, <strong>salbutamol may be considered</strong>.</p>
            <p class="small" style="margin-top:10px">That is not a reason to skip sitting them up, a 12-lead, or the HF pathway if the picture is still wet and orthopnoeic.</p>
          </div>
        </div>
        <div class="banner dark build" style="margin-top:12px">The old LVF pack of GTN + furosemide + morphine is not the current guideline</div>`,
      notes: "Kill the morphine-for-oedema habit. Chest pain is the exception. Salbutamol is allowed when you cannot tell — say that out loud so people do not feel trapped."
    },
    {
      kicker: "CPAP",
      title: "If you have it and you are trained, start it early",
      html: `
        <div class="body two">
          <div class="card ok">
            <h3>When JRCALC wants it considered</h3>
            <ul>
              <li>Respiratory distress: respiratory rate <strong>&gt;25</strong> and SpO<sub>2</sub> <strong>&lt;90%</strong></li>
              <li>Start as soon as possible</li>
              <li>Only where the equipment is available and you are suitably trained</li>
            </ul>
            <p style="margin-top:10px">It splints alveoli, pushes oedema back into the capillaries, and the higher intrathoracic pressure reduces venous return.</p>
          </div>
          <div class="card">
            <h3>Why it is in the guideline</h3>
            <ul>
              <li>Trials: CPAP improves survival to discharge and cuts intubation</li>
              <li>Pre-hospital review: CPAP is the NIV that helps mortality and intubation versus standard care</li>
              <li>BiPAP’s effect on those outcomes was uncertain</li>
            </ul>
            <p class="small" style="margin-top:10px">If you do not carry CPAP, you have not failed the job. Sit them up, oxygen, GTN if indicated, move.</p>
          </div>
        </div>`,
      notes: "Do not pretend every WMAS vehicle has CPAP. Teach the criteria so that when they work with a crew or hospital that has it, they start it instead of waiting. NICE says do not use NIV routinely in hospital — JRCALC still wants early CPAP in pre-hospital respiratory distress. Teach JRCALC for this session."
    },
    {
      kicker: "The rest of the job",
      title: "Care plans, conveyance and handover",
      html: `
        <div class="body three">
          <div class="card">
            <h3>Plans and specialist teams</h3>
            <ul>
              <li>Ask about a personal, anticipatory or end-of-life plan, DNACPR / ReSPECT</li>
              <li>Not all chronic HF is palliative — most still go to hospital</li>
              <li>If they are stable and known to the community team, call them if there is time</li>
              <li>Extra oral diuretic may be in the plan if they are staying home</li>
            </ul>
          </div>
          <div class="card">
            <h3>Where to take them</h3>
            <ul>
              <li>TIME-CRITICAL unless a palliative plan says otherwise</li>
              <li>Local pathways — prefer cardiology / CCU / ICU</li>
              <li>There is a ‘time-to-therapy’ idea in AHF: what you do before the door matters</li>
              <li>Watch for an LVAD — different resuscitation rules</li>
            </ul>
          </div>
          <div class="card">
            <h3>Handover language</h3>
            <ul>
              <li>Congestion or shock — say which</li>
              <li>SBP trend, GTN given or withheld and why</li>
              <li>Furosemide 40 mg or not</li>
              <li>12-lead: ACS or not</li>
              <li>Usual care team / DNACPR if known</li>
            </ul>
          </div>
        </div>`,
      notes: "Receiving staff need ‘wet and hypertensive, GTN two sprays, SBP still 150’ or ‘shocked, no nitrates, possible STEMI’. That is better than ‘LVF, treated’."
    },
    {
      type: "poll",
      pollId: "hf-q1",
      kicker: "Check  1 of 5",
      title: "True or false?",
      prompt: "Every acute heart failure patient with a systolic BP over 90 mmHg should get GTN.",
      options: ["True", "False"],
      correct: 1,
      teach: "False. AHF uses <strong>110 mmHg</strong>, not 90. And GTN is considered in AHF with <strong>ischaemia or uncontrolled hypertension</strong> — not every congested chest.",
      notes: "First check that the icebreaker stuck."
    },
    {
      type: "poll",
      pollId: "hf-q2",
      kicker: "Check  2 of 5",
      title: "Fluids",
      prompt: "Known heart failure, collapsed and hypotensive. Your first move with IV fluid?",
      options: [
        "Standard fluid challenge — they are shocked",
        "STOP and THINK — fluids can be harmful in heart failure or valve disease"
      ],
      correct: 1,
      teach: "JRCALC’s own words: if they have heart failure or valve disease, STOP and THINK before IV fluids, especially large or rapid volumes. Cardiogenic shock is not an empty tank. AHF is often misread as sepsis.",
      notes: "Second check. This is the other key-point sentence."
    },
    {
      type: "poll",
      pollId: "hf-q3",
      kicker: "Check  3 of 5",
      title: "Furosemide",
      prompt: "Adult with pulmonary oedema, BP holding, long journey. Furosemide dose?",
      options: [
        "40 milligrams IV slowly over 2 minutes, no repeat",
        "80 milligrams IV, repeat if still wet",
        "Do not give furosemide pre-hospital"
      ],
      correct: 0,
      teach: "<strong>40 mg once</strong>, slowly over 2 minutes. Indication is pulmonary oedema and/or respiratory distress due to AHF. Not in cardiogenic shock. The monograph flags prolonged time to hospital as a reason to consider it — it does not make 80 mg or a second dose legal.",
      notes: "Old practice was 80. Hold 40 and no repeat."
    },
    {
      type: "poll",
      pollId: "hf-q4",
      kicker: "Check  4 of 5",
      title: "Morphine",
      prompt: "Routine morphine for acute pulmonary oedema?",
      options: ["Yes — it eases distress and preload", "No — not routinely"],
      correct: 1,
      teach: "Not routinely. Associated with higher mortality in HF registries. Consider it for <strong>chest pain</strong>, or if a palliative plan already includes morphine.",
      notes: "Short and firm."
    },
    {
      type: "poll",
      pollId: "hf-q5",
      kicker: "Check  5 of 5",
      title: "Positioning",
      prompt: "First physical treatment for the congested, breathless patient?",
      options: [
        "Lie flat for a 12-lead, then sit up",
        "Sit fully upright immediately, and keep repositioning them"
      ],
      correct: 1,
      teach: "Sit fully upright immediately. It lowers left atrial pressure. They will slump — sit them up again. The 12-lead still matters; do not sacrifice the airway and the lungs to get a prettier tracing.",
      notes: "Finish on something they can do on every job."
    },
    {
      kicker: "Take home",
      title: "Leave with these five lines",
      html: `
        <div class="body">
          <div class="banner build">1. Acute heart failure is time-critical unless a palliative plan says otherwise.</div>
          <div class="banner teal build" style="margin-top:8px">2. Sit them fully upright first. Target 94–98% oxygen. Record a 12-lead.</div>
          <div class="banner green build" style="margin-top:8px">3. GTN: ischaemia or uncontrolled hypertension, and SBP over 110 — not the ACS 90 mmHg line.</div>
          <div class="banner dark build" style="margin-top:8px">4. STOP and THINK before IV fluids. No GTN or furosemide in cardiogenic shock.</div>
          <div class="banner red build" style="margin-top:8px">5. Morphine is not routine. CPAP if you have it, RR &gt;25 and SpO<sub>2</sub> &lt;90%.</div>
        </div>`,
      notes: "Read them slowly. Space reveals each line."
    },
    {
      kicker: "Sources",
      title: "References",
      html: `
        <div class="body two">
          <div class="card">
            <h3>Clinical guidance</h3>
            <ul>
              <li>JRCALC Plus, Heart Failure (live entry; v4.33 at the time this session was built)</li>
              <li>JRCALC Glyceryl Trinitrate — AHF table, updated 10 December 2025</li>
              <li>JRCALC Furosemide — 40 mg slow IV, adults 18+</li>
              <li>JRCALC Oxygen — target 94–98% in AHF</li>
              <li>Local WMAS notices, PGDs and stock where they apply</li>
            </ul>
          </div>
          <div class="card">
            <h3>Why the guideline is written this way</h3>
            <ul>
              <li>Mebazaa et al. Eur J Heart Fail 2015 — pre-hospital AHF consensus; vasodilators if SBP ≥110</li>
              <li>NICE CG187 Acute heart failure — hospital nitrates not routine; NIV for severe dyspnoea and acidaemia</li>
              <li>Ponikowski et al. ESC heart failure 2016</li>
              <li>Goodacre et al. Acad Emerg Med 2014 — pre-hospital NIV</li>
              <li>Vital et al. Cochrane 2013 — CPAP / NIV in cardiogenic oedema</li>
              <li>Wakai et al. Cochrane 2013 — nitrates in AHF</li>
            </ul>
          </div>
        </div>
        <p class="small" style="margin-top:12px">Teaching summary of JRCALC Plus, not a substitute for the live guideline. Recheck local PGDs, CPAP availability and stock before you treat. Diagrams in this deck are original teaching graphics, not official JRCALC artwork.</p>`,
      notes: "Ask staff to open Heart Failure in JRCALC Plus after the session. The GTN monograph is the one they will argue about — send them there."
    },
    {
      questions: true,
      kicker: "Close",
      title: "Any questions?",
      html: `
        <div class="body">
          <div class="banner dark" style="font-size:clamp(28px,3.2vw,42px);padding:28px 24px">Thank you for attending</div>
          <div class="banner teal" style="margin-top:12px;padding:22px 24px">We hope it has been useful</div>
          <div class="banner" style="margin-top:12px;padding:22px 24px">Ask now, or email: <a href="mailto:jon.ostrowski@wmas.nhs.uk" style="color:inherit;text-decoration:underline">jon.ostrowski@wmas.nhs.uk</a></div>
          <div class="banner green" style="margin-top:12px;padding:22px 24px">Any suggestions for future CPD sessions?</div>
        </div>`,
      notes: "Leave this up. Next slide collects names for certificates."
    },
    {
      collectNames: true,
      kicker: "Certificates",
      title: "Put your name in for a CPD certificate",
      html: `
        <div class="body two" style="align-items:stretch">
          <div class="card ok">
            <ul>
              <li>Enter your name as you wish it to appear on your certificate of attendance.</li>
              <li>Please also provide your ESR (GRS) number for audit purposes.</li>
              <li>Please also provide your work email for the register.</li>
            </ul>
            <p style="margin-top:14px;font-size:28px;font-weight:750;color:var(--navy)"><span class="cert-total">0</span> names in</p>
          </div>
          <aside class="poll-join cert-join">
            <img alt="Join to add your name" width="132" height="132" />
            <p class="poll-url"></p>
            <p class="poll-phones">Scan if you closed the vote page</p>
          </aside>
        </div>`,
      notes: "Leave this up. Name, ESR and work email write into the OneDrive attendance CSV. ESR and email are not printed on the certificate."
    }
  ];
}
