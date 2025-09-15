export const MonkConfig = {
  actions: {
  Bootshine: {
    id: "pve_action__01",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7079a2bf92e2473c4a28b582850a44b5b8d2d9aa.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 1,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 220.\nOpo-opo's Fury Potency: 420\nOpo-opo Form Bonus: Guarantees a critical hit\nDamage dealt is increased when under an effect that raises critical hit rate.\nAdditional Effect: Changes form to raptor\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 220.",
      "Opo-opo's Fury Potency: 420"
    ],
    effects: [
      "Additional Effect: Changes form to raptor"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "True Strike": {
    id: "pve_action__02",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f0ebdb32af553d84dfd59abb4d868c6be17bf334.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 4,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 300.\nRaptor's Fury Potency: 500\nCan only be executed when in raptor form.\nAdditional Effect: Changes form to coeurl\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 300.",
      "Raptor's Fury Potency: 500"
    ],
    effects: [
      "Additional Effect: Changes form to coeurl"
    ],
    conditions: [
      "Can only be executed when in raptor form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Snap Punch": {
    id: "pve_action__03",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/eea79a3861a427c42750d650af3b17c611ac1f73.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 6,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 270.\n330 when executed from a target's flank.\nCoeurl's Fury Potency: 420\nFlank Coeurl's Fury Potency: 480\nCan only be executed when in coeurl form.\nAdditional Effect: Changes form to opo-opo\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 270.",
      "Coeurl's Fury Potency: 420",
      "Flank Coeurl's Fury Potency: 480"
    ],
    effects: [
      "Additional Effect: Changes form to opo-opo"
    ],
    conditions: [
      "Can only be executed when in coeurl form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Steeled Meditation": {
    id: "pve_action__04",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3f5525f96d26fa3bb52df3cd390fbabd126be062.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 15,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Opens a chakra. Up to five chakra can be opened at once.\nOpens all five chakra when used outside of combat.\nTriggers the cooldown of weaponskills upon execution.\nConversely, execution of weaponskills triggers the cooldown of this action.\nCan only be executed while less than five chakra are open.",
    potency: [],
    effects: [],
    conditions: [
      "Can only be executed while less than five chakra are open."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Steel Peak": {
    id: "pve_action__05",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c5bf98a4d13a858dc2c4932408eefe77c4f173c1.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 15,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 180.\nCan only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution.",
    potency: [
      "Delivers an attack with a potency of 180."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Twin Snakes": {
    id: "pve_action__06",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d649439b0004da7643cbeaafe73e4e93f2572e61.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 18,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 420.\nCan only be executed when in raptor form.\nAdditional Effect: Grants a stack of Raptor's Fury\nRaptor's Fury Effect: Increases potency of Rising Raptor by 200\nAdditional Effect: Changes form to coeurl\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 420.",
      "Raptor's Fury Effect: Increases potency of Rising Raptor by 200"
    ],
    effects: [
      "Additional Effect: Grants a stack of Raptor's Fury",
      "Raptor's Fury Effect: Increases potency of Rising Raptor by 200",
      "Additional Effect: Changes form to coeurl"
    ],
    conditions: [
      "Can only be executed when in raptor form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Arm of the Destroyer": {
    id: "pve_action__07",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/92b45621e9e88401316dc9bede7253b10d4facd8.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 26,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 110 to all nearby targets.\nOpo-opo Form Potency: 120\nAdditional Effect: Changes form to raptor\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 110 to all nearby targets.",
      "Opo-opo Form Potency: 120"
    ],
    effects: [
      "Additional Effect: Changes form to raptor"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Demolish: {
    id: "pve_action__08",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/883edfbb5dec0daed23aa0447d6e7b28cf16b8d3.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 30,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 360.\n420 when executed from a target's rear.\nCan only be executed when in coeurl form.\nAdditional Effect: Grants 2 stacks of Coeurl's Fury\nCoeurl's Fury Effect: Increases potency of Pouncing Coeurl by 150\nAdditional Effect: Changes form to opo-opo\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 360.",
      "Coeurl's Fury Effect: Increases potency of Pouncing Coeurl by 150"
    ],
    effects: [
      "Additional Effect: Grants 2 stacks of Coeurl's Fury",
      "Coeurl's Fury Effect: Increases potency of Pouncing Coeurl by 150",
      "Additional Effect: Changes form to opo-opo"
    ],
    conditions: [
      "Can only be executed when in coeurl form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Rockbreaker: {
    id: "pve_action__09",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5a0f246b748bb726d3626d3713bc71138f6bb86f.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 30,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 150 to all nearby enemies.\nCan only be executed when in coeurl form.\nAdditional Effect: Changes form to opo-opo\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 150 to all nearby enemies."
    ],
    effects: [
      "Additional Effect: Changes form to opo-opo"
    ],
    conditions: [
      "Can only be executed when in coeurl form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Thunderclap: {
    id: "pve_action__10",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9a4a20e6ff8843d06e066fd0ffb6f8f6944acac4.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 35,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 20,
    radius: 0,
    tooltip: "Rush to a targeted enemy's or party member's location.\nMaximum Charges: 3\nCannot be executed while bound.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: 3,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Inspirited Meditation": {
    id: "pve_action__11",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e496f61cb81a7d95c751a64c3c416faa851216f0.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 40,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Opens a chakra. Up to five chakra can be opened at once.\nOpens all five chakra when used outside of combat.\nTriggers the cooldown of weaponskills upon execution.\nConversely, execution of weaponskills triggers the cooldown of this action.\nCan only be executed while less than five chakra are open.",
    potency: [],
    effects: [],
    conditions: [
      "Can only be executed while less than five chakra are open."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Howling Fist": {
    id: "pve_action__12",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d5392c32b9d05bda3c0a4ee45c1d13cce2dee9e1.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 40,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 10,
    radius: 10,
    tooltip: "Delivers an attack with a potency of 100 to all enemies in a straight line before you.\nCan only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution.",
    potency: [
      "Delivers an attack with a potency of 100 to all enemies in a straight line before you."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Mantra: {
    id: "pve_action__13",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/576fee56715e5d7a353c36daab4c4e3a5546738e.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 42,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Increases HP recovery via healing actions by 10% for self and nearby party members.\nDuration: 15s",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Four-point Fury": {
    id: "pve_action__14",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/fe6108fe3ff3591e8a6d3155c5764e53baf41397.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 45,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 140 to all nearby enemies.\nCan only be executed when in raptor form.\nAdditional Effect: Changes form to coeurl\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 140 to all nearby enemies."
    ],
    effects: [
      "Additional Effect: Changes form to coeurl"
    ],
    conditions: [
      "Can only be executed when in raptor form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Dragon Kick": {
    id: "pve_action__15",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a6e218fec5415ba80ebdf6364458022bbd5b32d2.png",
    job: "Pugilist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/t/5cqUqFtgdpy9D9-dk0OPyDN9Os.png",
    level: 50,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 320.\nOpo-opo Form Bonus: Grants a stack of Opo-opo's Fury\nOpo-opo's Fury Effect: Increases potency of Leaping Opo by 200\nAdditional Effect: Changes form to raptor\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 320.",
      "Opo-opo's Fury Effect: Increases potency of Leaping Opo by 200"
    ],
    effects: [
      "Opo-opo's Fury Effect: Increases potency of Leaping Opo by 200",
      "Additional Effect: Changes form to raptor"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Perfect Balance": {
    id: "pve_action__16",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a66c7c878615dad8345d7dce2aced30714572312.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 50,
    type: "Ability",
    cast: 0.0,
    recast: 40.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants 3 stacks of Perfect Balance, each stack allowing the execution of a weaponskill that requires a certain form, without being in that form.\nDuration: 20s\nAdditional Effect: Grants Opo-opo Chakra, Coeurl Chakra, or Raptor Chakra depending on the form changed to upon executing actions\nChanging to Opo-opo Form grants Coeurl Chakra.\nChanging to Raptor Form grants Opo-opo Chakra.\nChanging to Coeurl Form grants Raptor Chakra.\nMaximum Charges: 2\nCan only be executed while in combat and when not under the effect of any Beast Chakra.",
    potency: [],
    effects: [
      "Additional Effect: Grants Opo-opo Chakra, Coeurl Chakra, or Raptor Chakra depending on the form changed to upon executing actions"
    ],
    conditions: [
      "Grants 3 stacks of Perfect Balance, each stack allowing the execution of a weaponskill that requires a certain form, without being in that form.",
      "Can only be executed while in combat and when not under the effect of any Beast Chakra."
    ],
    duration: {
      seconds: 20
    },
    max_charges: 2,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Form Shift": {
    id: "pve_action__17",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/da141fe139c2b20081a175704336a0af21f0f801.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 52,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants Formless Fist to self, allowing the execution of a weaponskill that requires a certain form, without being in that form.\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.",
    potency: [],
    effects: [
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Grants Formless Fist to self, allowing the execution of a weaponskill that requires a certain form, without being in that form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Forbidden Meditation": {
    id: "pve_action__18",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3f5525f96d26fa3bb52df3cd390fbabd126be062.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 54,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Opens a chakra. Up to five chakra can be opened at once.\nOpens all five chakra when used outside of combat.\nTriggers the cooldown of weaponskills upon execution.\nConversely, execution of weaponskills triggers the cooldown of this action.\nCan only be executed while less than five chakra are open.",
    potency: [],
    effects: [],
    conditions: [
      "Can only be executed while less than five chakra are open."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "The Forbidden Chakra": {
    id: "pve_action__19",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/20a6e6104d8cad0e109bd0f56e1d26689017b871.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 54,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 400.\nCan only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution.",
    potency: [
      "Delivers an attack with a potency of 400."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Masterful Blitz": {
    id: "pve_action__20",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e42e291b8a444b9daf5c4bed5170e92d5c11872e.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 60,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Strike the enemy with a technique fueled by the power of your Beast Chakra.\nThe technique used is determined by the number of different types of Beast Chakra opened.\n1 Beast Chakra Type: Elixir Burst\n2 Beast Chakra Types: Celestial Revolution\n3 Beast Chakra Types: Rising Phoenix\n3 Beast Chakra and Both Nadi: Phantom Rush",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Tornado Kick": {
    id: "pve_action__21",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c048e791bb8e3acbc39aed1eaf2e413c79367d23.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 60,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 5,
    tooltip: "Delivers an attack to target and all enemies nearby it with a potency of 1,200 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of Lunar Nadi and Solar Nadi, as well as three Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Tornado Kick when requirements for execution are met.",
    potency: [
      "Delivers an attack to target and all enemies nearby it with a potency of 1,200 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of Lunar Nadi and Solar Nadi, as well as three Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Elixir Field": {
    id: "pve_action__22",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/86593521c943c9be34dd6bcf4bbcaf805b38ab3b.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 60,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack to all nearby enemies with a potency of 800 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Opens the Lunar Nadi\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of three of the same Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Elixir Field when requirements for execution are met.",
    potency: [
      "Delivers an attack to all nearby enemies with a potency of 800 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Opens the Lunar Nadi",
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of three of the same Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Celestial Revolution": {
    id: "pve_action__23",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5d44a1b394d5fe9d8ace8edcc742233d93127baa.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 60,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 600.\nAdditional Effect: Opens the Lunar Nadi\nIf the Lunar Nadi is already open, opens the Solar Nadi instead.\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of three Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Celestial Revolution when requirements for execution are met.",
    potency: [
      "Delivers an attack with a potency of 600."
    ],
    effects: [
      "Additional Effect: Opens the Lunar Nadi",
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of three Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Flint Strike": {
    id: "pve_action__24",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/56b3a643f6f021d073e372428af662f204d82eb5.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 60,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack to all nearby enemies with a potency of 800 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Opens the Solar Nadi\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of three distinct Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Flint Strike when requirements for execution are met.",
    potency: [
      "Delivers an attack to all nearby enemies with a potency of 800 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Opens the Solar Nadi",
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of three distinct Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Riddle of Earth": {
    id: "pve_action__25",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9297680db2fae6085ff7c4607b7f593f1445d0ee.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 64,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Reduces damage taken by 20%.\nDuration: 10s\nAdditional Effect: Grants Earth's Resolve upon taking damage\nEarth's Resolve Effect: Gradually restores HP\nCure Potency: 100\nDuration: 15s\nAdditional Effect: Grants Earth's Rumination\nDuration: 30s",
    potency: [
      "Cure Potency: 100"
    ],
    effects: [
      "Additional Effect: Grants Earth's Resolve upon taking damage",
      "Earth's Resolve Effect: Gradually restores HP",
      "Additional Effect: Grants Earth's Rumination"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Earth's Reply": {
    id: "pve_action__26",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f43b6c836fff7fa639c967aac3d6ef768fc1d16c.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 64,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 300\nEarth's Resolve Potency: 500\nCan only be executed while under the effect of Earth's Rumination.",
    potency: [
      "Cure Potency: 300",
      "Earth's Resolve Potency: 500"
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Earth's Rumination."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Riddle of Fire": {
    id: "pve_action__27",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/615580fd49ed973d96fa084493f79bc87a2199a6.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 68,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Increases damage dealt by 15%.\nDuration: 20s\nAdditional Effect: Grants Fire's Rumination\nDuration: 20s",
    potency: [],
    effects: [
      "Additional Effect: Grants Fire's Rumination"
    ],
    conditions: [],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Brotherhood: {
    id: "pve_action__28",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ab70fce75ed41f0bbaa02e4bc4b5c4a2ff39d07d.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 70,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Grants Brotherhood to self and all nearby party members.\nBrotherhood Effect: Increases damage dealt by 5%\nAdditional Effect: Allows the opening of up to ten chakra\nDuration: 20s\nAdditional Effect: Grants Meditative Brotherhood to self and all nearby party members\nMeditative Brotherhood Effect: 20% chance you open a chakra when party members under this effect successfully land a weaponskill or cast a spell\nChance is 100% when you successfully land a weaponskill or cast a spell while under the effect of Meditative Brotherhood.\nDuration: 20s",
    potency: [],
    effects: [
      "Brotherhood Effect: Increases damage dealt by 5%",
      "Additional Effect: Allows the opening of up to ten chakra",
      "Additional Effect: Grants Meditative Brotherhood to self and all nearby party members",
      "Meditative Brotherhood Effect: 20% chance you open a chakra when party members under this effect successfully land a weaponskill or cast a spell"
    ],
    conditions: [],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Riddle of Wind": {
    id: "pve_action__29",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5cfa2c17de4b6ddd285e621423f92b68d61cdf65.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 72,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Reduces auto-attack delay by 50%.\nDuration: 15s\nAdditional Effect: Grants Wind's Rumination\nDuration: 15s",
    potency: [],
    effects: [
      "Additional Effect: Grants Wind's Rumination"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Enlightened Meditation": {
    id: "pve_action__30",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e496f61cb81a7d95c751a64c3c416faa851216f0.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 74,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Opens a chakra. Up to five chakra can be opened at once.\nOpens all five chakra when used outside of combat.\nTriggers the cooldown of weaponskills upon execution.\nConversely, execution of weaponskills triggers the cooldown of this action.\nCan only be executed while less than five chakra are open.",
    potency: [],
    effects: [],
    conditions: [
      "Can only be executed while less than five chakra are open."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Enlightenment: {
    id: "pve_action__31",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/4609c042377d4e8c7cfd87920d95f2d48993dd3d.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 74,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 10,
    radius: 10,
    tooltip: "Delivers an attack with a potency of 160 to all enemies in a straight line before you.\nCan only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution.",
    potency: [
      "Delivers an attack with a potency of 160 to all enemies in a straight line before you."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in combat and under the effect of five Chakra. Five chakra close upon execution."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Six-sided Star": {
    id: "pve_action__32",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2e88997084591670e9454c1f089c14ccdb98a285.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 80,
    type: "Weaponskill",
    cast: 0.0,
    recast: 4.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 780. Potency increases by 80 for each Chakra open.\nCloses all chakra upon execution.\nAdditional Effect: Increases movement speed\nDuration: 5s\nCritical hits with this weaponskill will not open a chakra.\nThis weaponskill does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.",
    potency: [
      "Delivers an attack with a potency of 780. Potency increases by 80 for each Chakra open."
    ],
    effects: [
      "Additional Effect: Increases movement speed"
    ],
    conditions: [],
    duration: {
      seconds: 5
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Shadow of the Destroyer": {
    id: "pve_action__33",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/747483adb10812567df5653fbd0d333c179fa3dc.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 82,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 120 to all nearby enemies.\nOpo-opo Form Bonus: Guarantees a critical hit\nDamage dealt is increased when under an effect that raises critical hit rate.\nAdditional Effect: Changes form to raptor\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 120 to all nearby enemies."
    ],
    effects: [
      "Additional Effect: Changes form to raptor"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Rising Phoenix": {
    id: "pve_action__34",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3823c3483384694af79cd67f1b7740fb3e1636c7.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 86,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Deals physical fire damage to all nearby enemies with a potency of 900 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Opens the Solar Nadi\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of three distinct Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Rising Phoenix when requirements for execution are met.",
    potency: [
      "Deals physical fire damage to all nearby enemies with a potency of 900 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Opens the Solar Nadi",
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of three distinct Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Phantom Rush": {
    id: "pve_action__35",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/99e2472d285987b1eeefc2d693796a266d120078.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 90,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 5,
    tooltip: "Delivers an attack to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of Lunar Nadi and Solar Nadi, as well as three Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Phantom Rush when requirements for execution are met.",
    potency: [
      "Delivers an attack to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of Lunar Nadi and Solar Nadi, as well as three Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Leaping Opo": {
    id: "pve_action__36",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/000c5561b5d49694d019252cf5bbd8db16d948aa.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 92,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 260.\nOpo-opo's Fury Potency: 460\nOpo-opo Form Bonus: Guarantees a critical hit\nDamage dealt is increased when under an effect that raises critical hit rate.\nAdditional Effect: Changes form to raptor\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 260.",
      "Opo-opo's Fury Potency: 460"
    ],
    effects: [
      "Additional Effect: Changes form to raptor"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Rising Raptor": {
    id: "pve_action__37",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/8b71871e5f6a0c0fbdefea14931fc459e6f6ca58.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 92,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 340.\nRaptor's Fury Potency: 540\nCan only be executed when in raptor form.\nAdditional Effect: Changes form to coeurl\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 340.",
      "Raptor's Fury Potency: 540"
    ],
    effects: [
      "Additional Effect: Changes form to coeurl"
    ],
    conditions: [
      "Can only be executed when in raptor form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Pouncing Coeurl": {
    id: "pve_action__38",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9314f58e4df7e3392781a926bbd0480d3a9b5c71.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 92,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 3,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 310.\n370 when executed from a target's flank.\nCoeurl's Fury Potency: 460\nFlank Coeurl's Fury Potency: 520\nCan only be executed when in coeurl form.\nAdditional Effect: Changes form to opo-opo\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 310.",
      "Coeurl's Fury Potency: 460",
      "Flank Coeurl's Fury Potency: 520"
    ],
    effects: [
      "Additional Effect: Changes form to opo-opo"
    ],
    conditions: [
      "Can only be executed when in coeurl form."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Elixir Burst": {
    id: "pve_action__39",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/334dae96eb1b67c861a22e07a9c0f3c918130f5f.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 92,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 0,
    radius: 5,
    tooltip: "Delivers an attack to all nearby enemies with a potency of 900 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Opens the Lunar Nadi\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of three of the same Beast Chakra.\n\n※This action cannot be assigned to a hotbar.\n※Masterful Blitz changes to Elixir Burst when requirements for execution are met.",
    potency: [
      "Delivers an attack to all nearby enemies with a potency of 900 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Opens the Lunar Nadi",
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of three of the same Beast Chakra.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Wind's Reply": {
    id: "pve_action__40",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d57a98ac83fa1f066de448639688b34ba4342a98.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 96,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 10,
    radius: 10,
    tooltip: "Delivers an attack to all enemies in a straight line before you with a potency of 1,040 for the first enemy, and 35% less for all remaining enemies.\nCan only be executed while under the effect of Wind's Rumination.",
    potency: [
      "Delivers an attack to all enemies in a straight line before you with a potency of 1,040 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Wind's Rumination."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Fire's Reply": {
    id: "pve_action__41",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/6de38cd8ff4cddd607b2bb2afde0dd8a22774489.png",
    job: "Monk",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/C/Ce_VQB6VPPJKTGJwxf3h5iujp4.png",
    level: 100,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.0,
    cost: {},
    range: 20,
    radius: 5,
    tooltip: "Deals damage to all nearby enemies with a potency of 1,400 for the first enemy, and 35% less for all remaining enemies.\nAdditional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form\nDuration: 30s\nAny additional effects associated with the executed action will also be applied.\nCan only be executed while under the effect of Fire's Rumination.",
    potency: [
      "Deals damage to all nearby enemies with a potency of 1,400 for the first enemy, and 35% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Any additional effects associated with the executed action will also be applied."
    ],
    conditions: [
      "Additional Effect: Grants Formless Fist, allowing the execution of a weaponskill that requires a certain form, without being in that form",
      "Can only be executed while under the effect of Fire's Rumination."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_monk_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  }
},
  rotations: []
};