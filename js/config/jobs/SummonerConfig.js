export const SummonerConfig = {
  actions: {
  Ruin: {
    id: "pve_action__01",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1c74fa1688f3d89d6f5b972ce384df15f62e35d1.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 1,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 240.",
    potency: [
      "Deals unaspected damage with a potency of 240."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Carbuncle": {
    id: "pve_action__02",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/14a64b174c103f36179809458245dc5e4f4fe0a6.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 2,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 0,
    radius: 0,
    tooltip: "Summons Carbuncle to your side.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Radiant Aegis": {
    id: "pve_action__03",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a116b861109158ee5db8e36cf922fae8f923e7d5.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 2,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Orders Carbuncle to execute Radiant Aegis.\nRadiant Aegis Effect: Creates a barrier around self that absorbs damage totaling 20% of your maximum HP\nDuration: 30s\nMaximum Charges: 2\nCan only be executed while Carbuncle is summoned.",
    potency: [],
    effects: [
      "Radiant Aegis Effect: Creates a barrier around self that absorbs damage totaling 20% of your maximum HP"
    ],
    conditions: [
      "Can only be executed while Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: 2,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Physick: {
    id: "pve_action__04",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e51f309947cde0c36f3a0cd815ca01e268928eb6.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 4,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 30,
    radius: 0,
    tooltip: "Restores target's HP.\nCure Potency: 400",
    potency: [
      "Cure Potency: 400"
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Aethercharge: {
    id: "pve_action__05",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ad9a8a02fa446a43dc54439c8ac1d04dad1384b2.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 6,
    type: "Spell",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants Aethercharge, increasing the potency of Ruin, Ruin II, and Ruin III by 50, and Outburst by 20.\nDuration: 15s\nAdditional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum\nCan only be executed in combat and while Carbuncle is summoned.",
    potency: [
      "Grants Aethercharge, increasing the potency of Ruin, Ruin II, and Ruin III by 50, and Outburst by 20."
    ],
    effects: [
      "Additional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum"
    ],
    conditions: [
      "Can only be executed in combat and while Carbuncle is summoned."
    ],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Ruby": {
    id: "pve_action__06",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/23ce1df0ac3aa5df6aa4b22cdf2369ff364cabc0.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 6,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Ruby Carbuncle, and orders it to execute Glittering Ruby.\nGlittering Ruby Effect: Rushes target and deals fire damage with a potency of 400\nAdditional Effect: Grants 2 stacks of Fire Attunement\nFire Attunement Effect: Gemshine and Precious Brilliance become fire-aspected\nDuration: 30s\nCan only be executed while under the effect of Ruby Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Ruby Carbuncle is present, and return once gone.",
    potency: [
      "Glittering Ruby Effect: Rushes target and deals fire damage with a potency of 400"
    ],
    effects: [
      "Glittering Ruby Effect: Rushes target and deals fire damage with a potency of 400",
      "Additional Effect: Grants 2 stacks of Fire Attunement",
      "Fire Attunement Effect: Gemshine and Precious Brilliance become fire-aspected"
    ],
    conditions: [
      "Can only be executed while under the effect of Ruby Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Gemshine: {
    id: "pve_action__07",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/b1b0a655e18e0c446a0774ef264f010a8766db7f.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 6,
    type: "Spell",
    cast: 2.5,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Channel the energies of your active elemental attunement to attack your enemy.\nFire Attunement Effect: Deal fire damage to a single target\nEarth Attunement Effect: Deal earth damage to a single target\nWind Attunement Effect: Deal wind damage to a single target",
    potency: [],
    effects: [
      "Fire Attunement Effect: Deal fire damage to a single target",
      "Earth Attunement Effect: Deal earth damage to a single target",
      "Wind Attunement Effect: Deal wind damage to a single target"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Ruin": {
    id: "pve_action__08",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1c74fa1688f3d89d6f5b972ce384df15f62e35d1.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 6,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals fire damage with a potency of 340.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage with a potency of 340."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Fester: {
    id: "pve_action__09",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/34e34cc7ee016c8dc1493838cefc523aea784378.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 10,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 340.\nAetherflow Gauge Cost: 1",
    potency: [
      "Deals unaspected damage with a potency of 340."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Energy Drain": {
    id: "pve_action__10",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/92ea9227a8a09c62eb53852e2c26c0d6763a35c2.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 10,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 200.\nAdditional Effect: Aetherflow II\nAdditional Effect: Grants Further Ruin\nDuration: 60s\nShares a recast timer with Energy Siphon.",
    potency: [
      "Deals unaspected damage with a potency of 200."
    ],
    effects: [
      "Additional Effect: Aetherflow II",
      "Additional Effect: Grants Further Ruin"
    ],
    conditions: [
      "Shares a recast timer with Energy Siphon."
    ],
    duration: {
      seconds: 60
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Resurrection: {
    id: "pve_action__11",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9e61ea15caf1f7c0e4b44943dcbee0178e61a9fd.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 12,
    type: "Spell",
    cast: 8.0,
    recast: 2.5,
    cost: {
      mp: 2400
    },
    range: 30,
    radius: 0,
    tooltip: "Resurrects target to a weakened state.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Topaz": {
    id: "pve_action__12",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/45345cb4f108a07c372f8a355b26c13661d51887.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 15,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Topaz Carbuncle, and orders it to execute Glittering Topaz.\nGlittering Topaz Effect: Rushes target and deals earth damage with a potency of 400\nAdditional Effect: Grants 4 stacks of Earth Attunement\nEarth Attunement Effect: Gemshine and Precious Brilliance become earth-aspected\nDuration: 30s\nCan only be executed while under the effect of Topaz Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Topaz Carbuncle is present, and return once gone.",
    potency: [
      "Glittering Topaz Effect: Rushes target and deals earth damage with a potency of 400"
    ],
    effects: [
      "Glittering Topaz Effect: Rushes target and deals earth damage with a potency of 400",
      "Additional Effect: Grants 4 stacks of Earth Attunement",
      "Earth Attunement Effect: Gemshine and Precious Brilliance become earth-aspected"
    ],
    conditions: [
      "Can only be executed while under the effect of Topaz Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Ruin": {
    id: "pve_action__13",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1c74fa1688f3d89d6f5b972ce384df15f62e35d1.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 15,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals earth damage with a potency of 240.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals earth damage with a potency of 240."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Emerald": {
    id: "pve_action__14",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d9d328ec1a7b30579dd56ad69fad33981e197f70.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 22,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Emerald Carbuncle, and orders it to execute Glittering Emerald.\nGlittering Emerald Effect: Deals wind damage with a potency of 400\nAdditional Effect: Grants 4 stacks of Wind Attunement\nWind Attunement Effect: Gemshine and Precious Brilliance become wind-aspected\nDuration: 30s\nCan only be executed while under the effect of Emerald Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Emerald Carbuncle is present, and return once gone.",
    potency: [
      "Glittering Emerald Effect: Deals wind damage with a potency of 400"
    ],
    effects: [
      "Glittering Emerald Effect: Deals wind damage with a potency of 400",
      "Additional Effect: Grants 4 stacks of Wind Attunement",
      "Wind Attunement Effect: Gemshine and Precious Brilliance become wind-aspected"
    ],
    conditions: [
      "Can only be executed while under the effect of Emerald Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Ruin": {
    id: "pve_action__15",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1c74fa1688f3d89d6f5b972ce384df15f62e35d1.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 22,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals wind damage with a potency of 160.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals wind damage with a potency of 160."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Outburst: {
    id: "pve_action__16",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2b85c12f6f9b3f7bd5d4599d9fb2d88f42e7d551.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 26,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 100 to target and all enemies nearby it.",
    potency: [
      "Deals unaspected damage with a potency of 100 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Precious Brilliance": {
    id: "pve_action__17",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1fa3119e51a423fedea3e3a238497548d0c64960.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 26,
    type: "Spell",
    cast: 2.5,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Channel the energies of your active elemental attunement to attack multiple enemies.\nFire Attunement Effect: Deal fire damage to a target and all enemies nearby it\nEarth Attunement Effect: Deal earth damage to a target and all enemies nearby it\nWind Attunement Effect: Deal wind damage to a target and all enemies nearby it",
    potency: [],
    effects: [
      "Fire Attunement Effect: Deal fire damage to a target and all enemies nearby it",
      "Earth Attunement Effect: Deal earth damage to a target and all enemies nearby it",
      "Wind Attunement Effect: Deal wind damage to a target and all enemies nearby it"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Outburst": {
    id: "pve_action__18",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2b85c12f6f9b3f7bd5d4599d9fb2d88f42e7d551.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 26,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals fire damage with a potency of 160 to target and all enemies nearby it.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage with a potency of 160 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Outburst": {
    id: "pve_action__19",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2b85c12f6f9b3f7bd5d4599d9fb2d88f42e7d551.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 26,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals earth damage with a potency of 110 to target and all enemies nearby it.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals earth damage with a potency of 110 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Outburst": {
    id: "pve_action__20",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2b85c12f6f9b3f7bd5d4599d9fb2d88f42e7d551.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 26,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals wind damage with a potency of 70 to target and all enemies nearby it.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals wind damage with a potency of 70 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruin II": {
    id: "pve_action__21",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d6875ae1008a9e4b2d04562cff42646752e919c5.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 30,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 270.",
    potency: [
      "Deals unaspected damage with a potency of 270."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Ifrit": {
    id: "pve_action__22",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/715b4b554a74c32f7c76258400c2e254c6b9d401.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Ifrit-Egi and orders it to execute Inferno.\nInferno Effect: Rushes forward and deals fire damage to all enemies in a 5-yalm cone before it with a potency of 600 for the first enemy, and 50% less for all remaining enemies\nAdditional Effect: Grants 2 stacks of Fire Attunement\nFire Attunement Effect: Gemshine and Precious Brilliance become fire-aspected\nDuration: 30s\nAdditional Effect: Grants Ifrit's Favor\nEffect of Ifrit's Favor ends upon execution of certain summoner actions.\nCan only be executed while under the effect of Ruby Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Ifrit-Egi is present, and return once gone.",
    potency: [
      "Inferno Effect: Rushes forward and deals fire damage to all enemies in a 5-yalm cone before it with a potency of 600 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Inferno Effect: Rushes forward and deals fire damage to all enemies in a 5-yalm cone before it with a potency of 600 for the first enemy, and 50% less for all remaining enemies",
      "Additional Effect: Grants 2 stacks of Fire Attunement",
      "Fire Attunement Effect: Gemshine and Precious Brilliance become fire-aspected",
      "Additional Effect: Grants Ifrit's Favor"
    ],
    conditions: [
      "Can only be executed while under the effect of Ruby Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Ruin II": {
    id: "pve_action__23",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d6875ae1008a9e4b2d04562cff42646752e919c5.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 30,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals fire damage with a potency of 380.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage with a potency of 380."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Ruin II": {
    id: "pve_action__24",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d6875ae1008a9e4b2d04562cff42646752e919c5.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals earth damage with a potency of 270.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals earth damage with a potency of 270."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Ruin II": {
    id: "pve_action__25",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d6875ae1008a9e4b2d04562cff42646752e919c5.png",
    job: "Arcanist",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/k/_3v-EDzckpsEC39oe0t4A8pLJk.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals wind damage with a potency of 170.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals wind damage with a potency of 170."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Titan": {
    id: "pve_action__26",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/0e63c4fe037c46bb8fcb3b1402319d0cf1084711.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 35,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Titan-Egi and orders it to execute Earthen Fury.\nEarthen Fury Effect: Rushes forward and deals earth damage to all enemies within 5 yalms with a potency of 600 for the first enemy, and 50% less for all remaining enemies\nAdditional Effect: Grants 4 stacks of Earth Attunement\nEarth Attunement Effect: Gemshine and Precious Brilliance become earth-aspected\nDuration: 30s\nCan only be executed while under the effect of Topaz Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Titan-Egi is present, and return once gone.",
    potency: [
      "Earthen Fury Effect: Rushes forward and deals earth damage to all enemies within 5 yalms with a potency of 600 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Earthen Fury Effect: Rushes forward and deals earth damage to all enemies within 5 yalms with a potency of 600 for the first enemy, and 50% less for all remaining enemies",
      "Additional Effect: Grants 4 stacks of Earth Attunement",
      "Earth Attunement Effect: Gemshine and Precious Brilliance become earth-aspected"
    ],
    conditions: [
      "Can only be executed while under the effect of Topaz Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Painflare: {
    id: "pve_action__27",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f9335b8757ce19d93307eb4686a8271552de608d.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 40,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 150 to target and all enemies nearby it.\nAetherflow Gauge Cost: 1",
    potency: [
      "Deals unaspected damage with a potency of 150 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Garuda": {
    id: "pve_action__28",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f0d45cc564da364190b10ea26b9978147b3813fd.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 45,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Garuda-Egi and orders it to execute Aerial Blast.\nAerial Blast Effect: Deals wind damage to target and all enemies within 5 yalms with a potency of 600 for the first enemy, and 50% less for all remaining enemies\nAdditional Effect: Grants 4 stacks of Wind Attunement\nWind Attunement Effect: Gemshine and Precious Brilliance become wind-aspected\nDuration: 30s\nAdditional Effect: Grants Garuda's Favor\nEffect of Garuda's Favor ends upon execution of certain summoner actions.\nCan only be executed while under the effect of Emerald Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Garuda-Egi is present, and return once gone.",
    potency: [
      "Aerial Blast Effect: Deals wind damage to target and all enemies within 5 yalms with a potency of 600 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Aerial Blast Effect: Deals wind damage to target and all enemies within 5 yalms with a potency of 600 for the first enemy, and 50% less for all remaining enemies",
      "Additional Effect: Grants 4 stacks of Wind Attunement",
      "Wind Attunement Effect: Gemshine and Precious Brilliance become wind-aspected",
      "Additional Effect: Grants Garuda's Favor"
    ],
    conditions: [
      "Can only be executed while under the effect of Emerald Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Energy Siphon": {
    id: "pve_action__29",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f7611746e0238a496d85af166ef6da7cff071f43.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 52,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 100 to target and all enemies nearby it.\nAdditional Effect: Aetherflow II\nAdditional Effect: Grants Further Ruin\nDuration: 60s\nShares a recast timer with Energy Drain.",
    potency: [
      "Deals unaspected damage with a potency of 100 to target and all enemies nearby it."
    ],
    effects: [
      "Additional Effect: Aetherflow II",
      "Additional Effect: Grants Further Ruin"
    ],
    conditions: [
      "Shares a recast timer with Energy Drain."
    ],
    duration: {
      seconds: 60
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruin III": {
    id: "pve_action__30",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d133d1c9ecf315375c76bc25ddd5c01d9ce56512.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 54,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 400.",
    potency: [
      "Deals unaspected damage with a potency of 400."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Ruin III": {
    id: "pve_action__31",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d133d1c9ecf315375c76bc25ddd5c01d9ce56512.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 54,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals fire damage with a potency of 410.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage with a potency of 410."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Ruin III": {
    id: "pve_action__32",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d133d1c9ecf315375c76bc25ddd5c01d9ce56512.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 54,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals earth damage with a potency of 300.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals earth damage with a potency of 300."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Ruin III": {
    id: "pve_action__33",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d133d1c9ecf315375c76bc25ddd5c01d9ce56512.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 54,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals wind damage with a potency of 180.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals wind damage with a potency of 180."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Dreadwyrm Trance": {
    id: "pve_action__34",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7509846b70611448faedd354f58cb626c90fe0b5.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 58,
    type: "Spell",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Enters Dreadwyrm Trance.\nDuration: 15s\nAdditional Effect: Changes Ruin III to Astral Impulse and Outburst to Astral Flare\nAdditional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum\nCan only be executed in combat and while Carbuncle is summoned.\nThis action does not share a recast timer with any other actions.",
    potency: [],
    effects: [
      "Additional Effect: Changes Ruin III to Astral Impulse and Outburst to Astral Flare",
      "Additional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum"
    ],
    conditions: [
      "Can only be executed in combat and while Carbuncle is summoned."
    ],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Astral Impulse": {
    id: "pve_action__35",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2ba7ab41cd2f8dac96ba0c89426eebff963d6be0.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 58,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 500.\nCan only be executed while in Dreadwyrm Trance.\n\n※This action cannot be assigned to a hotbar.\n※Ruin III changes to Astral Impulse when requirements for execution are met.",
    potency: [
      "Deals unaspected damage with a potency of 500."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in Dreadwyrm Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Astral Flare": {
    id: "pve_action__36",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/41380367e3ff56dfc723ac049dbcacd00ac5c6f8.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 58,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 180 to target and all enemies nearby it.\nCan only be executed while in Dreadwyrm Trance.\n\n※This action cannot be assigned to a hotbar.\n※Tri-disaster changes to Astral Flare when requirements for execution are met.",
    potency: [
      "Deals unaspected damage with a potency of 180 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in Dreadwyrm Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Astral Flow": {
    id: "pve_action__37",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3fd44c9091d6888f7b3b3ee449d3f71d94d9b05a.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 60,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Channel the energies of your active trance or elemental favor to perform one of several actions.\nDreadwyrm Trance Effect: Action changes to Deathflare\nLightwyrm Trance Effect: Action changes to Sunflare\nFirebird Trance Effect: Action changes to Rekindle\nIfrit's Favor Effect: Action changes to Crimson Cyclone\nTitan's Favor Effect: Action changes to Mountain Buster\nGaruda's Favor Effect: Action changes to Slipstream",
    potency: [],
    effects: [
      "Dreadwyrm Trance Effect: Action changes to Deathflare",
      "Lightwyrm Trance Effect: Action changes to Sunflare",
      "Firebird Trance Effect: Action changes to Rekindle",
      "Ifrit's Favor Effect: Action changes to Crimson Cyclone",
      "Titan's Favor Effect: Action changes to Mountain Buster",
      "Garuda's Favor Effect: Action changes to Slipstream"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Deathflare: {
    id: "pve_action__38",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e88a1de4bbb8cdaa4c08ef5717797c2872bb42dd.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 60,
    type: "Ability",
    cast: 0.0,
    recast: 20.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 500 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while in Dreadwyrm Trance.\n\n※This action cannot be assigned to a hotbar.\n※Astral Flow changes to Deathflare when requirements for execution are met.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 500 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in Dreadwyrm Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruin IV": {
    id: "pve_action__39",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/289900e8f6153efeabb601c5cce046b80eed4c88.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 62,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies.\nCan only be executed while under the effect of Further Ruin.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Further Ruin."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Searing Light": {
    id: "pve_action__40",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/6c4b1ae3c69201feb415963f374cd3449a4ad7db.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 66,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Increases damage dealt by self and nearby party members by 5%.\nDuration: 20s\nAdditional Effect: Grants Ruby's Glimmer\nDuration: 30s",
    potency: [],
    effects: [
      "Additional Effect: Grants Ruby's Glimmer"
    ],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Bahamut": {
    id: "pve_action__41",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/88e476ec7f35cfb0f94120dc2ef1b7ed0c00768a.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 70,
    type: "Spell",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Enters Dreadwyrm Trance and summons Demi-Bahamut to fight your target.\nDemi-Bahamut will execute Wyrmwave automatically on the targets attacked by you after summoning.\nIncreases enmity in target when Demi-Bahamut is summoned.\nDuration: 15s\nAdditional Effect: Changes Ruin III to Astral Impulse and Tri-disaster to Astral Flare\nAdditional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum\nCan only be executed while Carbuncle is summoned.\nThis action does not share a recast timer with any other actions.",
    potency: [],
    effects: [
      "Additional Effect: Changes Ruin III to Astral Impulse and Tri-disaster to Astral Flare",
      "Additional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum"
    ],
    conditions: [
      "Can only be executed while Carbuncle is summoned."
    ],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Wyrmwave: {
    id: "pve_action__42",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/0e7bcb6dd7b20399f831c58338994005b10da6b3.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 70,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {},
    range: 50,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 150.\nWill only execute while Demi-Bahamut is summoned.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals unaspected damage with a potency of 150."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Enkindle Bahamut": {
    id: "pve_action__43",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7841102eeddcd359b9bc0af66a8c51aee6c7b258.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 70,
    type: "Ability",
    cast: 0.0,
    recast: 20.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Orders Demi-Bahamut to execute Akh Morn.\nAkh Morn Effect: Deals unaspected damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies",
    potency: [
      "Akh Morn Effect: Deals unaspected damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Akh Morn Effect: Deals unaspected damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Akh Morn": {
    id: "pve_action__44",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ffbcb07b5ee81884939776d358768995cb4083ae.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 70,
    type: "Ability",
    cast: 0.0,
    recast: 0.0,
    cost: {},
    range: 50,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while Demi-Bahamut is summoned.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while Demi-Bahamut is summoned.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Rite": {
    id: "pve_action__45",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3c739e3604ba2d045b691a46c0dbef1a658951f3.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 72,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals fire damage with a potency of 580.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.\n※Gemshine changes to Ruby Rite when requirements for execution are met.",
    potency: [
      "Deals fire damage with a potency of 580."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Rite": {
    id: "pve_action__46",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/4c4900529cf628e2f3fda4134c996741f8b465c3.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 72,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals earth damage with a potency of 340.\nAdditional Effect: Grants Titan's Favor\nEffect of Titan's Favor ends upon execution of certain summoner actions.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.\n※Gemshine changes to Topaz Rite when requirements for execution are met.",
    potency: [
      "Deals earth damage with a potency of 340."
    ],
    effects: [
      "Additional Effect: Grants Titan's Favor"
    ],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Rite": {
    id: "pve_action__47",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/87c16672ddea00204d4c0489b5417166cdb2546a.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 72,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals wind damage with a potency of 280.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.\n※Gemshine changes to Emerald Rite when requirements for execution are met.",
    potency: [
      "Deals wind damage with a potency of 280."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Tri-disaster": {
    id: "pve_action__48",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/20e1e40922c159401231154ab0cc94c789b1f58f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 74,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 120 to target and all enemies nearby it.",
    potency: [
      "Deals unaspected damage with a potency of 120 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Disaster": {
    id: "pve_action__49",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/20e1e40922c159401231154ab0cc94c789b1f58f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 74,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals fire damage with a potency of 190 to target and all enemies nearby it.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage with a potency of 190 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Disaster": {
    id: "pve_action__50",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/20e1e40922c159401231154ab0cc94c789b1f58f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 74,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals earth damage with a potency of 130 to target and all enemies nearby it.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals earth damage with a potency of 130 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Disaster": {
    id: "pve_action__51",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/20e1e40922c159401231154ab0cc94c789b1f58f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 74,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals wind damage with a potency of 90 to target and all enemies nearby it.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals wind damage with a potency of 90 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Phoenix": {
    id: "pve_action__52",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e38e769e9f268f4dcc345b25d310cd53d10d4795.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Spell",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Enters Firebird Trance and summons Demi-Phoenix to fight by your side, which executes Everlasting Flight as it manifests.\nDemi-Phoenix will execute Scarlet Flame automatically on the targets attacked by you after summoning.\nIncreases enmity in target when Demi-Phoenix is summoned.\nDuration: 15s\nAdditional Effect: Changes Ruin III to Fountain of Fire and Tri-disaster to Brand of Purgatory\nAdditional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum\nCan only be executed while Carbuncle is summoned.\nThis action does not share a recast timer with any other actions.\n\n※This action cannot be assigned to a hotbar.\n※Summon Bahamut changes to Summon Phoenix when requirements for execution are met.",
    potency: [],
    effects: [
      "Additional Effect: Changes Ruin III to Fountain of Fire and Tri-disaster to Brand of Purgatory",
      "Additional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum"
    ],
    conditions: [
      "Can only be executed while Carbuncle is summoned.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Fountain of Fire": {
    id: "pve_action__53",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/1b50beab981774f701d16ac61674bfc01747f38b.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals fire damage with a potency of 580.\nCan only be executed while under the effect of Firebird Trance.\n\n※This action cannot be assigned to a hotbar.\n※Ruin III changes to Fountain of Fire when requirements for execution are met.",
    potency: [
      "Deals fire damage with a potency of 580."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Firebird Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Brand of Purgatory": {
    id: "pve_action__54",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/daebb0133d31dbdcc989ecf9fd04ef3acf040cba.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 8,
    tooltip: "Deals fire damage with a potency of 240 to target and all enemies nearby it.\nCan only be executed while under the effect of Firebird Trance.\n\n※This action cannot be assigned to a hotbar.\n※Tri-disaster changes to Brand of Purgatory when requirements for execution are met.",
    potency: [
      "Deals fire damage with a potency of 240 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Firebird Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Rekindle: {
    id: "pve_action__55",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/6b2befa4d39ad77fa8992d934bd796e836eed13f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Ability",
    cast: 0.0,
    recast: 20.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Restores own or target party member's HP.\nCure Potency: 400\nAdditional Effect: Grants Rekindle to target\nDuration: 30s\nRekindle Effect: Healing over time when HP falls below 75% or upon effect duration expiration\nCure Potency: 200\nDuration: 15s\nCan only be executed while in Firebird Trance.\n\n※This action cannot be assigned to a hotbar.\n※Astral Flow changes to Rekindle when requirements for execution are met.",
    potency: [
      "Cure Potency: 400",
      "Cure Potency: 200"
    ],
    effects: [
      "Additional Effect: Grants Rekindle to target",
      "Rekindle Effect: Healing over time when HP falls below 75% or upon effect duration expiration"
    ],
    conditions: [
      "Can only be executed while in Firebird Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Enkindle Phoenix": {
    id: "pve_action__56",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/596917791c140eef84754e4488df04bfb7aabf87.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Ability",
    cast: 0.0,
    recast: 20.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Orders Demi-Phoenix to execute Revelation.\nRevelation Effect: Deals fire damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies\n\n※This action cannot be assigned to a hotbar.\n※Enkindle Bahamut changes to Enkindle Phoenix when requirements for execution are met.",
    potency: [
      "Revelation Effect: Deals fire damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Revelation Effect: Deals fire damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies"
    ],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Everlasting Flight": {
    id: "pve_action__57",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/47555a1b908cba86b377560667afa40e8471b69a.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Ability",
    cast: 0.0,
    recast: 0.0,
    cost: {},
    range: 0,
    radius: 15,
    tooltip: "Gradually restores own HP and the HP of all nearby party members.\nCure Potency: 100\nDuration: 21s\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Cure Potency: 100"
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 21
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Scarlet Flame": {
    id: "pve_action__58",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/865ff61841e27dc0ede5742b0109c45b672c2ef2.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {},
    range: 50,
    radius: 0,
    tooltip: "Deals fire damage with a potency of 150.\nWill only execute while Demi-Phoenix is summoned.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage with a potency of 150."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Revelation: {
    id: "pve_action__59",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9358e80cfda84c41bef60f05c6f66218842a6f74.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 80,
    type: "Ability",
    cast: 0.0,
    recast: 0.0,
    cost: {},
    range: 50,
    radius: 5,
    tooltip: "Deals fire damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while Demi-Phoenix is summoned.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals fire damage to target and all enemies nearby it with a potency of 1,300 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while Demi-Phoenix is summoned.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Ruby Catastrophe": {
    id: "pve_action__60",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/aff103d032034722b3a4063ad749eb2bb85793aa.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 82,
    type: "Spell",
    cast: 2.8,
    recast: 3.0,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals fire damage with a potency of 210 to target and all enemies nearby it.\nFire Attunement Cost: 1\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.\n※Precious Brilliance changes to Ruby Catastrophe when requirements for execution are met.",
    potency: [
      "Deals fire damage with a potency of 210 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Topaz Catastrophe": {
    id: "pve_action__61",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/8f6bc648e6b39fcdfdb5d747cc28ea98dd65b441.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals earth damage with a potency of 140 to target and all enemies nearby it.\nAdditional Effect: Grants Titan's Favor\nEffect of Titan's Favor ends upon execution of certain summoner actions.\nEarth Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.\n※Precious Brilliance changes to Topaz Catastrophe when requirements for execution are met.",
    potency: [
      "Deals earth damage with a potency of 140 to target and all enemies nearby it."
    ],
    effects: [
      "Additional Effect: Grants Titan's Favor"
    ],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Emerald Catastrophe": {
    id: "pve_action__62",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/876d6589f594c3f74d7d2834d297f18da7809199.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 5,
    tooltip: "Deals wind damage with a potency of 100 to target and all enemies nearby it.\nWind Attunement Cost: 1\n\n※This action cannot be assigned to a hotbar.\n※Precious Brilliance changes to Emerald Catastrophe when requirements for execution are met.",
    potency: [
      "Deals wind damage with a potency of 100 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Crimson Cyclone": {
    id: "pve_action__63",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7ec3b0243e57959d38e7bcbfaaab4fe0bbf8972b.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 86,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Rushes forward and delivers a fire attack to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies.\nAdditional Effect: Grants Crimson Strike Ready\nEffect ends upon execution of certain summoner actions.\nCan only be executed while under the effect of Ifrit's Favor.\nCannot be executed while bound.\n\n※This action cannot be assigned to a hotbar.\n※Astral Flow changes to Crimson Cyclone when requirements for execution are met.",
    potency: [
      "Rushes forward and delivers a fire attack to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies."
    ],
    effects: [
      "Additional Effect: Grants Crimson Strike Ready"
    ],
    conditions: [
      "Can only be executed while under the effect of Ifrit's Favor.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Crimson Strike": {
    id: "pve_action__64",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a63bb4e29d20c938e1b68ea0dc0ab64c3a8a9fdf.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 86,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 3,
    radius: 5,
    tooltip: "Deals fire damage to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies.\nCan only be executed while under the effect of Crimson Strike Ready.\n\n※This action cannot be assigned to a hotbar.\n※Crimson Cyclone changes to Crimson Strike when requirements for execution are met.",
    potency: [
      "Deals fire damage to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Crimson Strike Ready.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Mountain Buster": {
    id: "pve_action__65",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/735d3aabed75539866193ca97b356367f818821f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 86,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals earth damage to target and all enemies nearby it with a potency of 160 for the first enemy, and 60% less for all remaining enemies.\nCan only be executed while under the effect of Titan's Favor.\n\n※This action cannot be assigned to a hotbar.\n※Astral Flow changes to Mountain Buster when requirements for execution are met.",
    potency: [
      "Deals earth damage to target and all enemies nearby it with a potency of 160 for the first enemy, and 60% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Titan's Favor.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Slipstream: {
    id: "pve_action__66",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/6a54b05a1f6bd144d28149045f1f9cc61f86daf3.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 86,
    type: "Spell",
    cast: 3.0,
    recast: 3.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals wind damage to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies.\nAdditional Effect: Creates a windstorm centered around the target, dealing damage to any enemies who enter\nPotency: 30\nDuration: 15s\nCan only be executed while under the effect of Garuda's Favor.\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.\n\n※This action cannot be assigned to a hotbar.\n※Astral Flow changes to Slipstream when requirements for execution are met.",
    potency: [
      "Deals wind damage to target and all enemies nearby it with a potency of 520 for the first enemy, and 60% less for all remaining enemies.",
      "Potency: 30"
    ],
    effects: [
      "Additional Effect: Creates a windstorm centered around the target, dealing damage to any enemies who enter"
    ],
    conditions: [
      "Can only be executed while under the effect of Garuda's Favor.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Ifrit II": {
    id: "pve_action__67",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e49b3a55b75a637cb0e6e794d588b2ba4886c742.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 90,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Ruby Ifrit and orders it to execute Inferno.\nInferno Effect: Deals fire damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies\nAdditional Effect: Grants 2 stacks of Fire Attunement\nDuration: 30s\nFire Attunement Effect: Gemshine and Precious Brilliance become fire-aspected\nAdditional Effect: Grants Ifrit's Favor\nEffect of Ifrit's Favor ends upon execution of certain summoner actions.\nCan only be executed while under the effect of Ruby Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Ruby Ifrit is present, and return once gone.",
    potency: [
      "Inferno Effect: Deals fire damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Inferno Effect: Deals fire damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies",
      "Additional Effect: Grants 2 stacks of Fire Attunement",
      "Fire Attunement Effect: Gemshine and Precious Brilliance become fire-aspected",
      "Additional Effect: Grants Ifrit's Favor"
    ],
    conditions: [
      "Can only be executed while under the effect of Ruby Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Titan II": {
    id: "pve_action__68",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/d5e3edcb915673621b1ccb51774abf494eba6b5e.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 90,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Topaz Titan and orders it to execute Earthen Fury.\nEarthen Fury Effect: Deals earth damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies\nAdditional Effect: Grants 4 stacks of Earth Attunement\nDuration: 30s\nEarth Attunement Effect: Gemshine and Precious Brilliance become earth-aspected\nCan only be executed while under the effect of Topaz Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Topaz Titan is present, and return once gone.",
    potency: [
      "Earthen Fury Effect: Deals earth damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Earthen Fury Effect: Deals earth damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies",
      "Additional Effect: Grants 4 stacks of Earth Attunement",
      "Earth Attunement Effect: Gemshine and Precious Brilliance become earth-aspected"
    ],
    conditions: [
      "Can only be executed while under the effect of Topaz Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Garuda II": {
    id: "pve_action__69",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f25f4c81570c889872295e4ba99496ee6bf3fc89.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 90,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Summons Emerald Garuda and orders it to execute Aerial Blast.\nAerial Blast Effect: Deals wind damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies\nAdditional Effect: Grants 4 stacks of Wind Attunement\nDuration: 30s\nWind Attunement Effect: Gemshine and Precious Brilliance become wind-aspected\nAdditional Effect: Grants Garuda's Favor\nEffect of Garuda's Favor ends upon execution of certain summoner actions.\nCan only be executed while under the effect of Emerald Arcanum and Carbuncle is summoned.\nCurrent pet will leave the battlefield while Emerald Garuda is present, and return once gone.",
    potency: [
      "Aerial Blast Effect: Deals wind damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Aerial Blast Effect: Deals wind damage to target and all enemies within 5 yalms with a potency of 800 for the first enemy, and 50% less for all remaining enemies",
      "Additional Effect: Grants 4 stacks of Wind Attunement",
      "Wind Attunement Effect: Gemshine and Precious Brilliance become wind-aspected",
      "Additional Effect: Grants Garuda's Favor"
    ],
    conditions: [
      "Can only be executed while under the effect of Emerald Arcanum and Carbuncle is summoned."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Necrotize: {
    id: "pve_action__70",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f224b169e6f0f4b35b361e5c6666293e09a1f0ac.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 92,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 460.\nAetherflow Gauge Cost: 1",
    potency: [
      "Deals unaspected damage with a potency of 460."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Searing Flash": {
    id: "pve_action__71",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/b1edfc3a4d1b47e1df840e26e0969529070fed58.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 96,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 600 to target and all enemies nearby it.\nCan only be executed while under the effect of Ruby's Glimmer.",
    potency: [
      "Deals unaspected damage with a potency of 600 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Ruby's Glimmer."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Lux Solaris": {
    id: "pve_action__72",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/38e51b1e903bd0b7bc685ec95c2ac105779bbc8c.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 15,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 500\nCan only be executed while under the effect of Refulgent Lux.",
    potency: [
      "Cure Potency: 500"
    ],
    effects: [],
    conditions: [
      "Can only be executed while under the effect of Refulgent Lux."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Summon Solar Bahamut": {
    id: "pve_action__73",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/8b65e3df95387470664286d1e2a0f71dd29b8f77.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Spell",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Enters Lightwyrm Trance and summons Solar Bahamut to fight your target.\nSolar Bahamut will execute Luxwave automatically on the targets attacked by you after summoning.\nIncreases enmity in target when Solar Bahamut is summoned.\nDuration: 15s\nAdditional Effect: Grants Refulgent Lux\nDuration: 30s\nAdditional Effect: Changes Ruin III to Umbral Impulse and Tri-disaster to Umbral Flare\nAdditional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum\nCan only be executed while Carbuncle is summoned.\nThis action does not share a recast timer with any other actions.\n\n※This action cannot be assigned to a hotbar.\n※Summon Bahamut changes to Summon Solar Bahamut when requirements for execution are met.",
    potency: [],
    effects: [
      "Additional Effect: Grants Refulgent Lux",
      "Additional Effect: Changes Ruin III to Umbral Impulse and Tri-disaster to Umbral Flare",
      "Additional Effect: Grants Ruby Arcanum, Topaz Arcanum, and Emerald Arcanum"
    ],
    conditions: [
      "Can only be executed while Carbuncle is summoned.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Umbral Impulse": {
    id: "pve_action__74",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/097755a6dc321ca146451fbb0e5c42dca4d9dd02.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 620.\nCan only be executed while in Lightwyrm Trance.\n\n※This action cannot be assigned to a hotbar.\n※Ruin III changes to Umbral Impulse when requirements for execution are met.",
    potency: [
      "Deals unaspected damage with a potency of 620."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in Lightwyrm Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Umbral Flare": {
    id: "pve_action__75",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/e20b0b341a670598c6af9548925d4da35c2e4365.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 8,
    tooltip: "Deals unaspected damage with a potency of 280 to target and all enemies nearby it.\nCan only be executed while in Lightwyrm Trance.\n\n※This action cannot be assigned to a hotbar.\n※Tri-disaster changes to Umbral Flare when requirements for execution are met.",
    potency: [
      "Deals unaspected damage with a potency of 280 to target and all enemies nearby it."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in Lightwyrm Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Sunflare: {
    id: "pve_action__76",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ea98821592c274277d2472f4eb33e014c66a751f.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Ability",
    cast: 0.0,
    recast: 20.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 800 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while in Lightwyrm Trance.\n\n※This action cannot be assigned to a hotbar.\n※Astral Flow changes to Sunflare when requirements for execution are met.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 800 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while in Lightwyrm Trance.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Enkindle Solar Bahamut": {
    id: "pve_action__77",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/4deaaa9815c4b1bd5fc52e76019d9192342568b9.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Ability",
    cast: 0.0,
    recast: 20.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Orders Solar Bahamut to execute Exodus.\nExodus Effect: Deals unaspected damage to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 50% less for all remaining enemies\n\n※This action cannot be assigned to a hotbar.\n※Enkindle Bahamut changes to Enkindle Solar Bahamut when requirements for execution are met.",
    potency: [
      "Exodus Effect: Deals unaspected damage to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 50% less for all remaining enemies"
    ],
    effects: [
      "Exodus Effect: Deals unaspected damage to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 50% less for all remaining enemies"
    ],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Luxwave: {
    id: "pve_action__78",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7ea77f0af91e55be0b619e4dc72e20c5ba56f516.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {},
    range: 50,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 160.\nWill only execute while Solar Bahamut is summoned.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals unaspected damage with a potency of 160."
    ],
    effects: [],
    conditions: [
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Exodus: {
    id: "pve_action__79",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/97f91c1009d19698ee6e2e3272b974a4c0dd62ff.png",
    job: "Summoner",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/b/ZwJFxv3XnfqB5N6tKbgXKnj6BU.png",
    level: 100,
    type: "Ability",
    cast: 0.0,
    recast: 0.0,
    cost: {},
    range: 50,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 50% less for all remaining enemies.\nCan only be executed while Solar Bahamut is summoned.\n\n※This action cannot be assigned to a hotbar.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 1,500 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [
      "Can only be executed while Solar Bahamut is summoned.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_summoner_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  }
},
  rotations: []
};