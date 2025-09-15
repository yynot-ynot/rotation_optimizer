export const BardConfig = {
  actions: {
  "Heavy Shot": {
    id: "pve_action__01",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c2be827c9e88459a397d2d02851c435d27a7bfd8.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 1,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 160.\nAdditional Effect: 20% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 160."
    ],
    effects: [
      "Additional Effect: 20% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Straight Shot": {
    id: "pve_action__02",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/58345465e1b0bb46bac9920464892ef4e51be34f.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 2,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 200.\nCan only be executed when under the effect of Hawk's Eye or Barrage.",
    potency: [
      "Delivers an attack with a potency of 200."
    ],
    effects: [],
    conditions: [
      "Can only be executed when under the effect of Hawk's Eye or Barrage."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Raging Strikes": {
    id: "pve_action__03",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/444bd0d452881277e79be184fdb8ca6d21906014.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 4,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Increases damage dealt by 15%.\nDuration: 20s",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Venomous Bite": {
    id: "pve_action__04",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5628b34f3942ef93659f9f03dd2c0556b66f83ea.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 6,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 100.\nAdditional Effect: Venom\nPotency: 15\nDuration: 45s",
    potency: [
      "Delivers an attack with a potency of 100.",
      "Potency: 15"
    ],
    effects: [
      "Additional Effect: Venom"
    ],
    conditions: [],
    duration: {
      seconds: 45
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Bloodletter: {
    id: "pve_action__05",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/fd9763578c2d9e6fca1cc0637d953ba405aa5b2b.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 12,
    type: "Ability",
    cast: 0.0,
    recast: 15.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 130.\nMaximum Charges: 3\nShares a recast timer with Rain of Death.",
    potency: [
      "Delivers an attack with a potency of 130."
    ],
    effects: [],
    conditions: [
      "Shares a recast timer with Rain of Death."
    ],
    duration: null,
    max_charges: 3,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Repelling Shot": {
    id: "pve_action__06",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/33e4423b5606c916b4c92db7a6cfb7d22d8f89ac.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 15,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 15,
    radius: 0,
    tooltip: "Jump 10 yalms away from current target.\nCannot be executed while bound.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Quick Nock": {
    id: "pve_action__07",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/674767e2dcc3f57156cd13273601bd4ed337657b.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 18,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 12,
    radius: 12,
    tooltip: "Delivers an attack with a potency of 110 to all enemies in a cone before you.\nAdditional Effect: 20% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 110 to all enemies in a cone before you."
    ],
    effects: [
      "Additional Effect: 20% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Wide Volley": {
    id: "pve_action__08",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f935382d44889e5e74a995ed49bb6db78532edd4.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 25,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 140 to target and all enemies nearby it.\nBarrage Potency: 220\nCan only be executed while under the effect of Hawk's Eye or Barrage.",
    potency: [
      "Delivers an attack with a potency of 140 to target and all enemies nearby it.",
      "Barrage Potency: 220"
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Hawk's Eye or Barrage."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Windbite: {
    id: "pve_action__09",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/798e2b8207ce793087365990d0996232238b9225.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 30,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Deals wind damage with a potency of 60.\nAdditional Effect: Wind damage over time\nPotency: 20\nDuration: 45s",
    potency: [
      "Deals wind damage with a potency of 60.",
      "Potency: 20"
    ],
    effects: [
      "Additional Effect: Wind damage over time"
    ],
    conditions: [],
    duration: {
      seconds: 45
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Mage's Ballad": {
    id: "pve_action__10",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7744e7d846192e0c01c11c8854e6701d3a1000e1.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 30,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants Mage's Ballad to self and all party members within 50 yalms, increasing damage dealt by 1%.\nDuration: 45s\nAdditional Effect: 80% chance to grant Repertoire\nThis effect can trigger repeatedly while singing the Mage's Ballad.\nRepertoire Effect: Reduces the recast time of Heartbreak Shot and Rain of Death by 7.5s\nAdditional Effect: Grants Mage's Coda\nCan only be executed while in combat.",
    potency: [],
    effects: [
      "Additional Effect: 80% chance to grant Repertoire",
      "Repertoire Effect: Reduces the recast time of Heartbreak Shot and Rain of Death by 7.5s",
      "Additional Effect: Grants Mage's Coda"
    ],
    conditions: [
      "Can only be executed while in combat."
    ],
    duration: {
      seconds: 45
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "The Warden's Paean": {
    id: "pve_action__11",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e2358f71a46fe53449fdff7c7e42bb99c51987ca.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 35,
    type: "Ability",
    cast: 0.0,
    recast: 45.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Removes one select detrimental effect from self or target party member. If the target is not enfeebled, a barrier is created nullifying the target's next detrimental effect suffered.\nDuration: 30s",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Barrage: {
    id: "pve_action__12",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/28e7d01b94a703869a9bfae6f06864154f1bd2f3.png",
    job: "Archer",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/K/gm9qOAy0dmiDT1-4iIAS9G5bx8.png",
    level: 38,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants Barrage, allowing the use of Refulgent Arrow and Shadowbite. Upon execution, Refulgent Arrow will strike the selected target three times, while Shadowbite's potency will be increased to 300.\nDuration: 10s\nAdditional Effect: Grants Resonant Arrow Ready\nDuration: 30s",
    potency: [
      "Grants Barrage, allowing the use of Refulgent Arrow and Shadowbite. Upon execution, Refulgent Arrow will strike the selected target three times, while Shadowbite's potency will be increased to 300."
    ],
    effects: [
      "Additional Effect: Grants Resonant Arrow Ready"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Army's Paeon": {
    id: "pve_action__13",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d8e2b6d980867d94b2c2f3b5067e50dede5b9064.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 40,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants Army's Paeon to self and all party members within 50 yalms, increasing direct hit rate by 3%.\nDuration: 45s\nAdditional Effect: 80% chance to grant Repertoire\nThis effect can trigger repeatedly while singing the Army's Paeon.\nRepertoire Effect: Reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay by 4%\nCan be stacked up to 4 times.\nAdditional Effect: Grants Army's Coda\nCan only be executed while in combat.",
    potency: [],
    effects: [
      "Additional Effect: 80% chance to grant Repertoire",
      "Repertoire Effect: Reduces weaponskill cast time and recast time, spell cast time and recast time, and auto-attack delay by 4%",
      "Additional Effect: Grants Army's Coda"
    ],
    conditions: [
      "Can only be executed while in combat."
    ],
    duration: {
      seconds: 45
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Rain of Death": {
    id: "pve_action__14",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/86a4368f7c70f8ff48ac30768d6ee6253c73b3f5.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 45,
    type: "Ability",
    cast: 0.0,
    recast: 15.0,
    cost: {},
    range: 25,
    radius: 8,
    tooltip: "Delivers an attack with a potency of 100 to target and all enemies nearby it.\nMaximum Charges: 3\nShares a recast timer with Heartbreak Shot.",
    potency: [
      "Delivers an attack with a potency of 100 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "Shares a recast timer with Heartbreak Shot."
    ],
    duration: null,
    max_charges: 3,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Battle Voice": {
    id: "pve_action__15",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/0b50ad3e2e20b0d9a5478c296c861592f0eccd41.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 50,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Increases direct hit rate of self and all nearby party members by 20%.\nDuration: 20s",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "The Wanderer's Minuet": {
    id: "pve_action__16",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3f0462d7211269eb0dc49978c35f58e4e1077aae.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 52,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants the Wanderer's Minuet to self and all party members within 50 yalms, increasing critical hit rate by 2%.\nDuration: 45s\nAdditional Effect: 80% chance to grant Repertoire\nThis effect can trigger repeatedly while singing the Wanderer's Minuet.\nRepertoire Effect: Allows execution of Pitch Perfect\nCan be stacked up to 3 times.\nAdditional Effect: Grants Wanderer's Coda\nCan only be executed while in combat.",
    potency: [],
    effects: [
      "Additional Effect: 80% chance to grant Repertoire",
      "Repertoire Effect: Allows execution of Pitch Perfect",
      "Additional Effect: Grants Wanderer's Coda"
    ],
    conditions: [
      "Can only be executed while in combat."
    ],
    duration: {
      seconds: 45
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Pitch Perfect": {
    id: "pve_action__17",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/4b5cb786bc03d337b39054027f6087b4f7cb6882.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 52,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Delivers an attack to the target and all enemies nearby it. Potency varies with number of Repertoire stacks, dealing full damage for the first enemy, and 50% less for all remaining enemies.\n1 Repertoire Stack: 100\n2 Repertoire Stacks: 220\n3 Repertoire Stacks: 360\nCan only be executed when the Wanderer's Minuet is active and you have at least one stack of Repertoire.",
    potency: [
      "Delivers an attack to the target and all enemies nearby it. Potency varies with number of Repertoire stacks, dealing full damage for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed when the Wanderer's Minuet is active and you have at least one stack of Repertoire."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Empyreal Arrow": {
    id: "pve_action__18",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/df058855e5500505c31eda4041f74e8fe4dbdb76.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 54,
    type: "Ability",
    cast: 0.0,
    recast: 15.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 260.",
    potency: [
      "Delivers an attack with a potency of 260."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Iron Jaws": {
    id: "pve_action__19",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3224b272a8cb080df1f93bfaf11d1cfec05533d8.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 56,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 100.\nAdditional Effect: If the target is suffering from a Caustic Bite or Stormbite effect inflicted by you, the effect timer is reset\nAdditional Effect: 35% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 100."
    ],
    effects: [
      "Additional Effect: If the target is suffering from a Caustic Bite or Stormbite effect inflicted by you, the effect timer is reset",
      "Additional Effect: 35% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Sidewinder: {
    id: "pve_action__20",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f39927d0bec5c6d20e72bddd59b9a9f250c99e2c.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 60,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 400.",
    potency: [
      "Delivers an attack with a potency of 400."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Troubadour: {
    id: "pve_action__21",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/6618d7a1a2770ce51edecf1c26a2937b5fc95963.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 62,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Reduces damage taken by self and nearby party members by 15%.\nDuration: 15s\nEffect cannot be stacked with machinist's Tactician or dancer's Shield Samba.",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Caustic Bite": {
    id: "pve_action__22",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d9dd6ba8d37d6319c1eafd39f665bfb7dc6953d5.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 64,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 150.\nAdditional Effect: Poison\nPotency: 20\nDuration: 45s\nAdditional Effect: 35% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 150.",
      "Potency: 20"
    ],
    effects: [
      "Additional Effect: Poison",
      "Additional Effect: 35% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Stormbite: {
    id: "pve_action__23",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f40a7b8d145d3419b05d7c491c388a448773c995.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 64,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Deals wind damage with a potency of 100.\nAdditional Effect: Wind damage over time\nPotency: 25\nDuration: 45s\nAdditional Effect: 35% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Deals wind damage with a potency of 100.",
      "Potency: 25"
    ],
    effects: [
      "Additional Effect: Wind damage over time",
      "Additional Effect: 35% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Nature's Minne": {
    id: "pve_action__24",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/03c3c2cabca1caf35d1c9a6ef8d0fe150e03762c.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 66,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Increases HP recovery via healing actions by 15% for self and nearby party members.\nDuration: 15s",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Refulgent Arrow": {
    id: "pve_action__25",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3595a008f1495d37a1cf915ecd72b10754e1fbc9.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 70,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 280.\nCan only be executed when under the effect of Hawk's Eye or Barrage.",
    potency: [
      "Delivers an attack with a potency of 280."
    ],
    effects: [],
    conditions: [
      "Can only be executed when under the effect of Hawk's Eye or Barrage."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Shadowbite: {
    id: "pve_action__26",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/88f59edc609d2adbd323ced0d409048e30ca0b35.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 72,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Delivers an attack with a potency of 200 to target and all enemies nearby it.\nBarrage Potency: 300\nCan only be executed when under the effect of Hawk's Eye or Barrage.",
    potency: [
      "Delivers an attack with a potency of 200 to target and all enemies nearby it.",
      "Barrage Potency: 300"
    ],
    effects: [],
    conditions: [
      "Can only be executed when under the effect of Hawk's Eye or Barrage."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Burst Shot": {
    id: "pve_action__27",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5690bdb5a291ff736672ec4e52eb99fbed475e94.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 76,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 220.\nAdditional Effect: 35% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 220."
    ],
    effects: [
      "Additional Effect: 35% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Apex Arrow": {
    id: "pve_action__28",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7f89a5408c4dec6ee1ccdc71968eed0c0a3e97bc.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 80,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 25,
    tooltip: "Delivers an attack with a potency of 120 to all enemies in a straight line before you.\nSoul Voice Gauge Cost: 20 \nPotency increases up to 600 as Soul Voice Gauge exceeds minimum cost.\nAdditional Effect: Grants Blast Arrow Ready upon execution while Soul Voice Gauge is 80 or higher\nDuration: 10s\nConsumes Soul Voice Gauge upon execution.",
    potency: [
      "Delivers an attack with a potency of 120 to all enemies in a straight line before you.",
      "Potency increases up to 600 as Soul Voice Gauge exceeds minimum cost."
    ],
    effects: [
      "Additional Effect: Grants Blast Arrow Ready upon execution while Soul Voice Gauge is 80 or higher"
    ],
    conditions: [],
    duration: {
      seconds: 10
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Ladonsbite: {
    id: "pve_action__29",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3efef1c2c0b7ffb04ab2a5e4d167bdad1fa69906.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 82,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 12,
    radius: 12,
    tooltip: "Delivers an attack with a potency of 140 to all enemies in a cone before you.\nAdditional Effect: 35% chance of granting Hawk's Eye\nDuration: 30s",
    potency: [
      "Delivers an attack with a potency of 140 to all enemies in a cone before you."
    ],
    effects: [
      "Additional Effect: 35% chance of granting Hawk's Eye"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Blast Arrow": {
    id: "pve_action__30",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3d00d8fc59c62a0ebd964ad501cc401abddc3105.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 86,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 25,
    tooltip: "Delivers an attack to all enemies in a straight line before you with a potency of 600 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while under the effect of Blast Arrow Ready.\n\n※This action cannot be assigned to a hotbar.\n※Apex Arrow changes to Blast Arrow when requirements for execution are met.",
    potency: [
      "Delivers an attack to all enemies in a straight line before you with a potency of 600 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Blast Arrow Ready.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Radiant Finale": {
    id: "pve_action__31",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/38d93335592c001b3839ad49b743bb4f4341eb83.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 90,
    type: "Ability",
    cast: 0.0,
    recast: 110.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Increases damage dealt by self and nearby party members.\nDuration: 20s\nEffectiveness is determined by the number of different Coda active in the Song Gauge.\n1 Coda: 2%\n2 Coda: 4%\n3 Coda: 6%\nAdditional Effect: Grants Radiant Encore Ready\nDuration: 30s\nCan only be executed when at least 1 coda is active.",
    potency: [],
    effects: [
      "Additional Effect: Grants Radiant Encore Ready"
    ],
    conditions: [
      "Can only be executed when at least 1 coda is active."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Heartbreak Shot": {
    id: "pve_action__32",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c0a5370256054855bc11136374ddbd388c3f8c98.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 92,
    type: "Ability",
    cast: 0.0,
    recast: 15.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Delivers an attack with a potency of 180.\nMaximum Charges: 3\nShares a recast timer with Rain of Death.",
    potency: [
      "Delivers an attack with a potency of 180."
    ],
    effects: [],
    conditions: [
      "Shares a recast timer with Rain of Death."
    ],
    duration: null,
    max_charges: 3,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Resonant Arrow": {
    id: "pve_action__33",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/5ecc6e2f2f492310758f85277b00eb134eec6c68.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 96,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Delivers an attack to target and all enemies nearby it with a potency of 640 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while under the effect of Resonant Arrow Ready.",
    potency: [
      "Delivers an attack to target and all enemies nearby it with a potency of 640 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Resonant Arrow Ready."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Radiant Encore": {
    id: "pve_action__34",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f2f516fd00c23f16a32c6278b6d9ebd7481d41a3.png",
    job: "Bard",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/d7BM1x8OZRZU-9fTk-D7g1t2oc.png",
    level: 100,
    type: "Weaponskill",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Delivers an attack to target and all enemies nearby it.\nPotency is determined by the number of different Coda consumed in the Radiant Finale executed prior, dealing full damage for the first enemy, and 50% less for all remaining enemies.\n1 Coda: 600\n2 Coda: 700\n3 Coda: 1,000\nCan only be executed while under the effect of Radiant Encore Ready.",
    potency: [
      "Potency is determined by the number of different Coda consumed in the Radiant Finale executed prior, dealing full damage for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Radiant Encore Ready."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_bard_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  }
},
  rotations: []
};