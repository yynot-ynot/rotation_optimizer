export const WarriorConfig = {
  actions: {
  "Heavy Swing": {
    id: "pve_action__01",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7a622f61949998a4bca402f5be90c0417bb02ac1.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 1,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 240.",
    potency: [
      "Delivers an attack with a potency of 240."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Maim: {
    id: "pve_action__02",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/39dae45d3a3309357462861dac9bb9b159030ea8.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 4,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 190.\nCombo Action: Heavy Swing\nCombo Potency: 340\nCombo Bonus: Increases Beast Gauge by 10",
    potency: [
      "Delivers an attack with a potency of 190.",
      "Combo Potency: 340"
    ],
    effects: [
      "Combo Bonus: Increases Beast Gauge by 10"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Berserk: {
    id: "pve_action__03",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/56790feb3c64d9c129e2ab42aca7bb9e26a34a58.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 6,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants 3 stacks of Berserk, each stack guaranteeing weaponskill attacks are critical and direct hits.\nIncreases damage dealt when under an effect that raises critical hit rate or direct hit rate.\nDuration: 15s\nAdditional Effect: Extends Surging Tempest duration by 10s to a maximum of 60s",
    potency: [],
    effects: [
      "Additional Effect: Extends Surging Tempest duration by 10s to a maximum of 60s"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Overpower: {
    id: "pve_action__04",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/335c367406c5d952f11b8fd2dadaabb89e1cecbc.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 10,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 110 to all nearby enemies.\nAdditional Effect: Increased enmity",
    potency: [
      "Delivers an attack with a potency of 110 to all nearby enemies."
    ],
    effects: [
      "Additional Effect: Increased enmity"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Defiance: {
    id: "pve_action__05",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e6cc16e225417ce3c68cde5eb28df034f349d25d.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 10,
    type: "Ability",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Significantly increases enmity generation.\nEffect ends upon reuse.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Release Defiance": {
    id: "pve_action__06",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1965311bb3fb720ba65258cb8f427bb986fa36c4.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 10,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Cancels the effect of Defiance.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Tomahawk: {
    id: "pve_action__07",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/de42e4febcf54cf4af3189f9d2adfa4ca5975c25.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 15,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 20,
    radius: 0,
    tooltip: "Delivers a ranged attack with a potency of 150.\nAdditional Effect: Increased enmity",
    potency: [
      "Delivers a ranged attack with a potency of 150."
    ],
    effects: [
      "Additional Effect: Increased enmity"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Storm's Path": {
    id: "pve_action__08",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/14d9c5aa40a8f86aa13890aa9bedc9f6579ed289.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 26,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 220.\nCombo Action: Maim\nCombo Potency: 500\nCombo Bonus: Restores own HP\nCure Potency: 250\nCombo Bonus: Increases Beast Gauge by 20",
    potency: [
      "Delivers an attack with a potency of 220.",
      "Combo Potency: 500",
      "Cure Potency: 250"
    ],
    effects: [
      "Combo Bonus: Restores own HP",
      "Combo Bonus: Increases Beast Gauge by 20"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Thrill of Battle": {
    id: "pve_action__09",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9412945d8b5a61fbb118907bd33046110ff83434.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 30,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Increases maximum HP by 20% and restores the amount increased.\nAdditional Effect: Increases HP recovery via healing actions on self by 20%\nDuration: 10s",
    potency: [],
    effects: [
      "Additional Effect: Increases HP recovery via healing actions on self by 20%"
    ],
    conditions: [],
    duration: {
      seconds: 10
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Inner Beast": {
    id: "pve_action__10",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c72ea7de2c06ad8a03bc55598297aba5bf00b0b6.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 35,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 330.\nBeast Gauge Cost: 50",
    potency: [
      "Delivers an attack with a potency of 330."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Vengeance: {
    id: "pve_action__11",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/72a939d0010304553c5b88fae576f5a25f453e10.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 38,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Reduces damage taken by 30% and delivers an attack with a potency of 55 every time you suffer physical damage.\nDuration: 15s",
    potency: [
      "Reduces damage taken by 30% and delivers an attack with a potency of 55 every time you suffer physical damage."
    ],
    effects: [],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Mythril Tempest": {
    id: "pve_action__12",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/b9efeaf988763dc594fc2497b603cfda4253064f.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 40,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 100 to all nearby enemies.\nAdditional Effect: Increased enmity\nCombo Action: Overpower\nCombo Potency: 140\nCombo Bonus: Grants Surging Tempest, increasing damage dealt by 10%\nDuration: 30s\nExtends Surging Tempest duration by 30s to a maximum of 60s.\nCombo Bonus: Increases Beast Gauge by 20",
    potency: [
      "Delivers an attack with a potency of 100 to all nearby enemies.",
      "Combo Potency: 140"
    ],
    effects: [
      "Additional Effect: Increased enmity",
      "Combo Bonus: Grants Surging Tempest, increasing damage dealt by 10%",
      "Combo Bonus: Increases Beast Gauge by 20"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Holmgang: {
    id: "pve_action__13",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/91b5673b1dfb08c80d7b8fc2bdc936f46906317f.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 42,
    type: "Ability",
    cast: 0.0,
    recast: 240.0,
    cost: {},
    range: 6,
    radius: 0,
    tooltip: "Brace yourself for an enemy onslaught, preventing most attacks from reducing your HP to less than 1.\nDuration: 10s\nWhen a target is selected, halts their movement with chains.",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 10
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Steel Cyclone": {
    id: "pve_action__14",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/caee561eee94d7ecc27ac396982ebe39df5c6893.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 45,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 160 to all nearby enemies.\nBeast Gauge Cost: 50",
    potency: [
      "Delivers an attack with a potency of 160 to all nearby enemies."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Storm's Eye": {
    id: "pve_action__15",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/05faebea82787675c2331bb4ddb7778b70ab53f0.png",
    job: "Marauder",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/w/i0Qqk20XpSpIH_5Aevv1Pi86G4.png",
    level: 50,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 220.\nCombo Action: Maim\nCombo Potency: 500\nCombo Bonus: Grants Surging Tempest, increasing damage dealt by 10%\nDuration: 30s\nExtends Surging Tempest duration by 30s to a maximum of 60s.\nCombo Bonus: Increases Beast Gauge by 10",
    potency: [
      "Delivers an attack with a potency of 220.",
      "Combo Potency: 500"
    ],
    effects: [
      "Combo Bonus: Grants Surging Tempest, increasing damage dealt by 10%",
      "Combo Bonus: Increases Beast Gauge by 10"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Infuriate: {
    id: "pve_action__16",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ecd32b95358ef9b2756b005daef73afdde9fab80.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 50,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Increases Beast Gauge by 50.\nAdditional Effect: Grants Nascent Chaos\nDuration: 30s\nNascent Chaos Effect: When Beast Gauge is 50 or greater, changes Decimate to Chaotic Cyclone and Fell Cleave to Inner Chaos\nMaximum Charges: 2\nCan only be executed while in combat.",
    potency: [],
    effects: [
      "Additional Effect: Grants Nascent Chaos",
      "Nascent Chaos Effect: When Beast Gauge is 50 or greater, changes Decimate to Chaotic Cyclone and Fell Cleave to Inner Chaos"
    ],
    conditions: [
      "Can only be executed while in combat."
    ],
    duration: {
      seconds: 30
    },
    max_charges: 2,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Fell Cleave": {
    id: "pve_action__17",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5d146522a8fc94788d96043b93034176eab59a10.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 54,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 580.\nBeast Gauge Cost: 50",
    potency: [
      "Delivers an attack with a potency of 580."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Raw Intuition": {
    id: "pve_action__18",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1d9a63cc19bbec0e2f99d192040c26e306e2e675.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 56,
    type: "Ability",
    cast: 0.0,
    recast: 25.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Reduces damage taken by 10%.\nDuration: 6s\nAdditional Effect: Restores HP with each weaponskill successfully delivered\nCure Potency: 400\nShares a recast timer with Nascent Flash.",
    potency: [
      "Cure Potency: 400"
    ],
    effects: [
      "Additional Effect: Restores HP with each weaponskill successfully delivered"
    ],
    conditions: [
      "Shares a recast timer with Nascent Flash."
    ],
    duration: {
      seconds: 6
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Equilibrium: {
    id: "pve_action__19",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/b549a16dfa8cbde55ec19b81bad325c5480d98e2.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 58,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Restores own HP.\nCure Potency: 1,200\nAdditional Effect: Gradually restores HP\nCure Potency: 200\nDuration: 15s",
    potency: [
      "Cure Potency: 1,200",
      "Cure Potency: 200"
    ],
    effects: [
      "Additional Effect: Gradually restores HP"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Decimate: {
    id: "pve_action__20",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f4fdd09a56a0b83a0cbe11a83f706dc0fb6781f5.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 60,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack to all nearby enemies with a potency of 180.\nBeast Gauge Cost: 50",
    potency: [
      "Delivers an attack to all nearby enemies with a potency of 180."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Onslaught: {
    id: "pve_action__21",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d0a1dad0fa6c8294ceb31b6879c765a02498e3fb.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 62,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 20,
    radius: 0,
    tooltip: "Rushes target and delivers an attack with a potency of 150.\nMaximum Charges: 3\nCannot be executed while bound.",
    potency: [
      "Rushes target and delivers an attack with a potency of 150."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: 3,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Upheaval: {
    id: "pve_action__22",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ba0b3b08d9b2ef02636e06148bc739680390fdd3.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 64,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 420.\nShares a recast timer with Orogeny.",
    potency: [
      "Delivers an attack with a potency of 420."
    ],
    effects: [],
    conditions: [
      "Shares a recast timer with Orogeny."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Shake It Off": {
    id: "pve_action__23",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f71e2c46512c1e937c0ff316be668d853869c637.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 68,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Creates a barrier around self and all nearby party members that absorbs damage totaling 15% of maximum HP.\nDispels Thrill of Battle, Damnation, and Bloodwhetting, increasing damage absorbed by 2% for each effect removed. \nDuration: 30s\nAdditional Effect: Gradually restores HP\nCure Potency: 100\nDuration: 15s\nAdditional Effect: Restores target's HP\nCure Potency: 300",
    potency: [
      "Cure Potency: 100",
      "Cure Potency: 300"
    ],
    effects: [
      "Additional Effect: Gradually restores HP",
      "Additional Effect: Restores target's HP"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Inner Release": {
    id: "pve_action__24",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/809168ffb23f67e3d4b720b3caa4a0a1773fea4c.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 70,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants 3 stacks of Inner Release, each stack allowing the use of Fell Cleave or Decimate without cost and guaranteeing they are critical and direct hits.\nIncreases damage dealt when under an effect that raises critical hit rate or direct hit rate.\nAdditional Effect: Grants Inner Strength, nullifying Stun, Sleep, Bind, Heavy, and most knockback and draw-in effects\nDuration: 15s\nAdditional Effect: Extends Surging Tempest duration by 10s to a maximum of 60s\nAdditional Effect: Grants Primal Rend Ready\nDuration: 30s\nAdditional Effect: Grants a stack of Burgeoning Fury upon successfully landing Fell Cleave or Decimate, up to a maximum of 3\nAt maximum stacks, become Wrathful, changing Inner Release to Primal Wrath.",
    potency: [],
    effects: [
      "Additional Effect: Grants Inner Strength, nullifying Stun, Sleep, Bind, Heavy, and most knockback and draw-in effects",
      "Additional Effect: Extends Surging Tempest duration by 10s to a maximum of 60s",
      "Additional Effect: Grants Primal Rend Ready",
      "Additional Effect: Grants a stack of Burgeoning Fury upon successfully landing Fell Cleave or Decimate, up to a maximum of 3"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Chaotic Cyclone": {
    id: "pve_action__25",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a5ea711252d08de0f9fd2e65313690c19b9f8773.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 72,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers a critical direct hit with a potency of 200 to all nearby enemies.\nDamage dealt is increased when under an effect that raises critical hit rate or direct hit rate.\nAdditional Effect: Reduces the recast time of Infuriate by 5 seconds\nBeast Gauge Cost: 50\nCan only be executed while under the effect of Nascent Chaos. Effect fades upon execution.\n\n※This action cannot be assigned to a hotbar.\n※Decimate changes to Chaotic Cyclone when requirements for execution are met.",
    potency: [
      "Delivers a critical direct hit with a potency of 200 to all nearby enemies."
    ],
    effects: [
      "Additional Effect: Reduces the recast time of Infuriate by 5 seconds"
    ],
    conditions: [
      "Can only be executed while under the effect of Nascent Chaos. Effect fades upon execution.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Nascent Flash": {
    id: "pve_action__26",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/0a4356e3696cea8f2c8cea9be200e773da6c7caa.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 76,
    type: "Ability",
    cast: 0.0,
    recast: 25.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Grants Nascent Flash to self and Nascent Glint to target party member.\nNascent Flash Effect: Restores HP with each weaponskill successfully delivered\nCure Potency: 400\nNascent Glint Effect: Restores HP equaling 100% of that recovered by Nascent Flash while also reducing damage taken by 10%\nDuration: 8s\nAdditional Effect: Grants Stem the Flow to target, reducing damage taken by 10%\nDuration: 4s\nAdditional Effect: Grants Stem the Tide to target, nullifying damage equivalent to a heal of 400 potency\nDuration: 20s\nShares a recast timer with Bloodwhetting.",
    potency: [
      "Cure Potency: 400",
      "Additional Effect: Grants Stem the Tide to target, nullifying damage equivalent to a heal of 400 potency"
    ],
    effects: [
      "Nascent Flash Effect: Restores HP with each weaponskill successfully delivered",
      "Nascent Glint Effect: Restores HP equaling 100% of that recovered by Nascent Flash while also reducing damage taken by 10%",
      "Additional Effect: Grants Stem the Flow to target, reducing damage taken by 10%",
      "Additional Effect: Grants Stem the Tide to target, nullifying damage equivalent to a heal of 400 potency"
    ],
    conditions: [
      "Shares a recast timer with Bloodwhetting."
    ],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Inner Chaos": {
    id: "pve_action__27",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/70a629706b7fa0dc566d988dbf32da064d0c3458.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 80,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers a critical direct hit with a potency of 660.\nDamage dealt is increased when under an effect that raises critical hit rate or direct hit rate.\nAdditional Effect: Reduces the recast time of Infuriate by 5 seconds\nBeast Gauge Cost: 50\nCan only be executed while under the effect of Nascent Chaos. Effect fades upon execution.\n\n※This action cannot be assigned to a hotbar.\n※Fell Cleave changes to Inner Chaos when requirements for execution are met.",
    potency: [
      "Delivers a critical direct hit with a potency of 660."
    ],
    effects: [
      "Additional Effect: Reduces the recast time of Infuriate by 5 seconds"
    ],
    conditions: [
      "Can only be executed while under the effect of Nascent Chaos. Effect fades upon execution.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Bloodwhetting: {
    id: "pve_action__28",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/439c677f7cd4da8e9be9b92245865d2eb1ebceca.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 82,
    type: "Ability",
    cast: 0.0,
    recast: 25.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Reduces damage taken by 10%.\nDuration: 8s\nAdditional Effect: Restores HP with each weaponskill successfully delivered\nCure Potency: 400\nAdditional Effect: Grants Stem the Flow\nStem the Flow Effect: Reduces damage taken by 10%\nDuration: 4s\nAdditional Effect: Grants Stem the Tide\nStem the Tide Effect: Creates a barrier around self that absorbs damage equivalent to a heal of 400 potency\nDuration: 20s\nShares a recast timer with Nascent Flash.",
    potency: [
      "Cure Potency: 400",
      "Stem the Tide Effect: Creates a barrier around self that absorbs damage equivalent to a heal of 400 potency"
    ],
    effects: [
      "Additional Effect: Restores HP with each weaponskill successfully delivered",
      "Additional Effect: Grants Stem the Flow",
      "Stem the Flow Effect: Reduces damage taken by 10%",
      "Additional Effect: Grants Stem the Tide",
      "Stem the Tide Effect: Creates a barrier around self that absorbs damage equivalent to a heal of 400 potency"
    ],
    conditions: [
      "Shares a recast timer with Nascent Flash."
    ],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Orogeny: {
    id: "pve_action__29",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a746763655d8eb64a4f2577f4a19d445866aa8e5.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 86,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 150 to all nearby enemies.\nShares a recast timer with Upheaval.",
    potency: [
      "Delivers an attack with a potency of 150 to all nearby enemies."
    ],
    effects: [],
    conditions: [
      "Shares a recast timer with Upheaval."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Primal Rend": {
    id: "pve_action__30",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e6ccdb7bd1a86153af07f02f06583113ac86c8eb.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 90,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 20,
    radius: 5,
    tooltip: "Jumps to the target and delivers a critical direct hit to target and all enemies nearby it with a potency of 700 for the first enemy, and 50% less for all remaining enemies.\nDamage dealt is increased when under an effect that raises critical hit rate or direct hit rate.\nAdditional Effect: Grants Primal Ruination Ready\nDuration: 20s\nCan only be executed while under the effect of Primal Rend Ready, granted by Inner Release.\nCannot be executed while bound.",
    potency: [
      "Jumps to the target and delivers a critical direct hit to target and all enemies nearby it with a potency of 700 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Grants Primal Ruination Ready"
    ],
    conditions: [
      "Can only be executed while under the effect of Primal Rend Ready, granted by Inner Release."
    ],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Damnation: {
    id: "pve_action__31",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a4f5302a169e6ee5667e03976e7455aacc394604.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 92,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Reduces damage taken by 40% and delivers an attack with a potency of 55 every time you suffer physical damage.\nDuration: 15s\nAdditional Effect: Grants Primeval Impulse when the effect expires or damage is taken\nPrimeval Impulse Effect: Healing over time\nCure Potency: 300\nDuration: 15s",
    potency: [
      "Reduces damage taken by 40% and delivers an attack with a potency of 55 every time you suffer physical damage.",
      "Cure Potency: 300"
    ],
    effects: [
      "Additional Effect: Grants Primeval Impulse when the effect expires or damage is taken",
      "Primeval Impulse Effect: Healing over time"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Primal Wrath": {
    id: "pve_action__32",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e9e68562064da9f0787632d983da080105fc2389.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 96,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack to all nearby enemies with a potency of 700 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed when Wrathful.\n\n※This action cannot be assigned to a hotbar.\n※Inner Release changes to Primal Wrath when requirements for execution are met.",
    potency: [
      "Delivers an attack to all nearby enemies with a potency of 700 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed when Wrathful.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Primal Ruination": {
    id: "pve_action__33",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5eb4d961217f31467ecf479d45f89767f5f9c0d7.png",
    job: "Warrior",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/0/U3f8Q98TbAeGvg_vXiHGOaa2d4.png",
    level: 100,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 5,
    tooltip: "Delivers a critical direct hit to target and all enemies nearby it with a potency of 780 for the first enemy, and 50% less for all remaining enemies.\nIncreases damage dealt when under an effect that raises critical hit rate or direct hit rate.\nCan only be executed while under the effect of Primal Ruination Ready.\n\n※This action cannot be assigned to a hotbar.\n※Primal Rend changes to Primal Ruination when requirements for execution are met.",
    potency: [
      "Delivers a critical direct hit to target and all enemies nearby it with a potency of 780 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Primal Ruination Ready.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_warrior_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  }
},
  rotations: []
};