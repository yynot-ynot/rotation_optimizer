export const SageConfig = {
  actions: {
  Dosis: {
    id: "pve_action__01",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/817398ae8dfe613839528291eebfe76e05bd3584.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 1,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 300
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 300.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170",
    potency: [
      "Deals unaspected damage with a potency of 300.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Diagnosis: {
    id: "pve_action__02",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c750ddbd308f469bfe54e263e98f2b1dc42ecfd3.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 2,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 30,
    radius: 0,
    tooltip: "Restores target's HP.\nCure Potency: 450",
    potency: [
      "Cure Potency: 450"
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Kardia: {
    id: "pve_action__03",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/bd80c68721d02a37275edfa07de82a39adbceb1c.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 4,
    type: "Ability",
    cast: 0.0,
    recast: 5.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Grants self the effect of Kardia and a selected party member or self the effect of Kardion, restoring HP after landing certain magic attacks.\nCure Potency: 170",
    potency: [
      "Cure Potency: 170"
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Prognosis: {
    id: "pve_action__04",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7f8253801283aa010e5a6ff40dafda493f1d58a4.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 10,
    type: "Spell",
    cast: 2.0,
    recast: 2.5,
    cost: {
      mp: 700
    },
    range: 0,
    radius: 20,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 300",
    potency: [
      "Cure Potency: 300"
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Egeiro: {
    id: "pve_action__05",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3b5dbe0188fba544474a1c3304af88544838e5cc.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
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
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Physis: {
    id: "pve_action__06",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/b2acbee8acf84344ed1cbf15e97a5f88fe0f2e22.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 20,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 20,
    tooltip: "Gradually restores own HP and the HP of all nearby party members.\nCure Potency: 100\nDuration: 15s",
    potency: [
      "Cure Potency: 100"
    ],
    effects: [],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Phlegma: {
    id: "pve_action__07",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9f221a8b7c540f90f808d332e802b3626fef4431.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 26,
    type: "Spell",
    cast: 0.0,
    recast: 40.0,
    cost: {
      mp: 400
    },
    range: 6,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 400 for the first enemy, and 30% less for all remaining enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nMaximum Charges: 2\nRecast timer cannot be affected by status effects or gear attributes.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 400 for the first enemy, and 30% less for all remaining enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: 2,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Eukrasia: {
    id: "pve_action__08",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3d9da11ae40aa687171f1bf2a5655b6f0e442d79.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Augments certain offensive and healing magic actions.\nDosis III is upgraded to Eukrasian Dosis III.\nDyskrasia II is upgraded to Eukrasian Dyskrasia.\nDiagnosis is upgraded to Eukrasian Diagnosis.\nPrognosis is upgraded to Eukrasian Prognosis II.\nThis action does not share a recast timer with any other actions. Upon execution, the recast timer for this action will be applied to all other weaponskills and magic actions.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Diagnosis": {
    id: "pve_action__09",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/0a0085828964c504f045a98b67feaf6c26c2307d.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 800
    },
    range: 30,
    radius: 0,
    tooltip: "Restores target's HP.\nCure Potency: 300\nAdditional Effect: Erects a magicked barrier which nullifies damage equaling 180％ of the amount of HP restored. When critical HP is restored, also grants Differential Diagnosis, nullifying damage equaling 180% the amount of HP restored.\nDuration: 30s\nEffect cannot be stacked with Eukrasian Prognosis or scholar's Galvanize.\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Diagnosis changes to Eukrasian Diagnosis when requirements for execution are met.",
    potency: [
      "Cure Potency: 300"
    ],
    effects: [
      "Additional Effect: Erects a magicked barrier which nullifies damage equaling 180％ of the amount of HP restored. When critical HP is restored, also grants Differential Diagnosis, nullifying damage equaling 180% the amount of HP restored."
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Prognosis": {
    id: "pve_action__10",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/723cccd2fe9542159daffcd22f44ff52d8a2f6a1.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 800
    },
    range: 0,
    radius: 20,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 100\nAdditional Effect: Erects a magicked barrier which nullifies damage equaling 320% of the amount of HP restored\nDuration: 30s\nEffect cannot be stacked with those of Eukrasian Diagnosis or scholar's Galvanize.\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Prognosis changes to Eukrasian Prognosis when requirements for execution are met.",
    potency: [
      "Cure Potency: 100"
    ],
    effects: [
      "Additional Effect: Erects a magicked barrier which nullifies damage equaling 320% of the amount of HP restored"
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Dosis": {
    id: "pve_action__11",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3cffb9cb106612236b80ce85e1881e0d7760512f.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 30,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 400
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage over time.\nPotency: 40\nDuration: 30s\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Dosis changes to Eukrasian Dosis when requirements for execution are met.",
    potency: [
      "Potency: 40",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Soteria: {
    id: "pve_action__12",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/4f39d0024ea7741facfb247d0056064e831c3765.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 35,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants 4 stacks of Soteria, each stack increasing the cure potency of Kardion effects granted by you by 70%.\nDuration: 15s",
    potency: [
      "Grants 4 stacks of Soteria, each stack increasing the cure potency of Kardion effects granted by you by 70%."
    ],
    effects: [],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Icarus: {
    id: "pve_action__13",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/347d5069652ea0716aa462ba3dd96fc148156b0f.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 40,
    type: "Ability",
    cast: 0.0,
    recast: 45.0,
    cost: {},
    range: 25,
    radius: 0,
    tooltip: "Rush to a targeted enemy's or party member's location.\nUnable to cast if bound.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Druochole: {
    id: "pve_action__14",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/00cd1d056243c5e06b9bbb52a6112ddb35dbcbe9.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 45,
    type: "Ability",
    cast: 0.0,
    recast: 1.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Restores target's HP.\nCure Potency: 600\nAdditional Effect: Restores 7% of maximum MP\nAddersgall Cost: 1",
    potency: [
      "Cure Potency: 600"
    ],
    effects: [
      "Additional Effect: Restores 7% of maximum MP"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Dyskrasia: {
    id: "pve_action__15",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/849a554b53462ae2c240dc06558bf710c0f98e5e.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 46,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 0,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 160 to all nearby enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170",
    potency: [
      "Deals unaspected damage with a potency of 160 to all nearby enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Kerachole: {
    id: "pve_action__16",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/b49859cbf63de26b230527650742576590166760.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 50,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Reduces damage taken by self and nearby party members by 10%.\nDuration: 15s\nEffect cannot be stacked with Taurochole.\nAdditional Effect: Regen\nCure Potency: 100\nDuration: 15s\nAdditional Effect: Restores 7% of maximum MP\nAddersgall Cost: 1",
    potency: [
      "Cure Potency: 100"
    ],
    effects: [
      "Additional Effect: Regen",
      "Additional Effect: Restores 7% of maximum MP"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Ixochole: {
    id: "pve_action__17",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/4ee83614031659334dda42affd3314aebcaf98f4.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 52,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 0,
    radius: 20,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 400\nAdditional Effect: Restores 7% of maximum MP\nAddersgall Cost: 1",
    potency: [
      "Cure Potency: 400"
    ],
    effects: [
      "Additional Effect: Restores 7% of maximum MP"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Zoe: {
    id: "pve_action__18",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/958000045b75c90c1ce059d11d2f2ed488d72a65.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 56,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Increases healing magic potency of your next healing spell by 50%.\nDuration: 30s",
    potency: [
      "Increases healing magic potency of your next healing spell by 50%."
    ],
    effects: [],
    conditions: [],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Pepsis: {
    id: "pve_action__19",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/863096a46c76144097ba25d6d9d5fe1f997cda9e.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 58,
    type: "Ability",
    cast: 0.0,
    recast: 30.0,
    cost: {},
    range: 0,
    radius: 20,
    tooltip: "Restores own HP and the HP of nearby party members by removing Eukrasian Diagnosis and Eukrasian Prognosis effects granted by you.\nEukrasian Diagnosis Cure Potency: 450\nEukrasian Prognosis Cure Potency: 350\nTargets not under the effect of Eukrasian Diagnosis or Eukrasian Prognosis will not be healed.",
    potency: [
      "Eukrasian Diagnosis Cure Potency: 450",
      "Eukrasian Prognosis Cure Potency: 350"
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Physis II": {
    id: "pve_action__20",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/ece8fe6d911ad6497e35a13d82572d2373d2a2a4.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 60,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Gradually restores own HP and the HP of all nearby party members.\nCure Potency: 130\nDuration: 15s\nAdditional Effect: Increases HP recovered by healing actions by 10%\nDuration: 15s",
    potency: [
      "Cure Potency: 130"
    ],
    effects: [
      "Additional Effect: Increases HP recovered by healing actions by 10%"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Taurochole: {
    id: "pve_action__21",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/fe3b0d2ce97deba2e6b4cfbc39e65e2abd32b31b.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 62,
    type: "Ability",
    cast: 0.0,
    recast: 45.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Restores own or target party member's HP.\nCure Potency: 700\nAdditional Effect: Reduces target's damage taken by 10%\nDuration: 15s\nEffect cannot be stacked with Kerachole.\nAdditional Effect: Restores 7% of maximum MP\nAddersgall Cost: 1",
    potency: [
      "Cure Potency: 700"
    ],
    effects: [
      "Additional Effect: Reduces target's damage taken by 10%",
      "Additional Effect: Restores 7% of maximum MP"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Toxikon: {
    id: "pve_action__22",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/bedfcd09b95bf0fa2290753478364965c82a739b.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 66,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 300 for the first enemy, and 50% less for all remaining enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nAddersting Cost: 1",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 300 for the first enemy, and 50% less for all remaining enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Haima: {
    id: "pve_action__23",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/31657e2f5ec2ec375960c927a6ed532883d8d271.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 70,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Erects a magicked barrier around self or target party member that absorbs damage equivalent to a heal of 300 potency.\nAdditional Effect: Grants 5 stacks of Haimatinon\nDuration: 15s\nWhen the barrier is completely absorbed, a stack of Haimatinon is consumed and a new barrier is applied.\nWhen the effect duration expires, a healing effect is then applied.\nCure Potency: 150 per remaining stack of Haimatinon",
    potency: [
      "Erects a magicked barrier around self or target party member that absorbs damage equivalent to a heal of 300 potency.",
      "Cure Potency: 150 per remaining stack of Haimatinon"
    ],
    effects: [
      "Additional Effect: Grants 5 stacks of Haimatinon"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Dosis II": {
    id: "pve_action__24",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/0323f174ced3df37c1c6699f4c4dc980e58b9b7b.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 72,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 320.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170",
    potency: [
      "Deals unaspected damage with a potency of 320.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Phlegma II": {
    id: "pve_action__25",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/f1948c2f7f527f0dab918a0224c6021ff4e808b9.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 72,
    type: "Spell",
    cast: 0.0,
    recast: 40.0,
    cost: {
      mp: 400
    },
    range: 6,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 490 for the first enemy, and 50% less for all remaining enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nMaximum Charges: 2\nRecast timer cannot be affected by status effects or gear attributes.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 490 for the first enemy, and 50% less for all remaining enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: 2,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Dosis II": {
    id: "pve_action__26",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/407976b29bc9e0d8cb51ddf0ad5312f90d4bee89.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 72,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 400
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage over time.\nPotency: 60\nDuration: 30s\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Dosis II changes to Eukrasian Dosis II when requirements for execution are met.",
    potency: [
      "Potency: 60",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Rhizomata: {
    id: "pve_action__27",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/de5abe27cae326e6906d5627c6bf02dc4e98cc2b.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 74,
    type: "Ability",
    cast: 0.0,
    recast: 90.0,
    cost: {},
    range: 0,
    radius: 0,
    tooltip: "Grants 1 stack of Addersgall.",
    potency: [],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Holos: {
    id: "pve_action__28",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/849030dfa96d3cc4cee84939ef23c0554d9a3821.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 76,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 300\nAdditional Effect: Erects a magicked barrier which nullifies damage equaling the amount of HP restored\nDuration: 30s\nAdditional Effect: Reduces damage taken by self and nearby party members by 10%\nDuration: 20s",
    potency: [
      "Cure Potency: 300"
    ],
    effects: [
      "Additional Effect: Erects a magicked barrier which nullifies damage equaling the amount of HP restored",
      "Additional Effect: Reduces damage taken by self and nearby party members by 10%"
    ],
    conditions: [],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Panhaima: {
    id: "pve_action__29",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/62887c572b00028c1a9a531420b9e9b545a991b6.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 80,
    type: "Ability",
    cast: 0.0,
    recast: 120.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Erects a magicked barrier around self and all party members near you that absorbs damage equivalent to a heal of 200 potency.\nAdditional Effect: Grants 5 stacks of Panhaimatinon\nDuration: 15s\nWhen the barrier is completely absorbed, a stack of Panhaimatinon is consumed and a new barrier is applied.\nWhen the effect duration expires, a healing effect is then applied.\nCure Potency: 100 per remaining stack of Panhaimatinon",
    potency: [
      "Erects a magicked barrier around self and all party members near you that absorbs damage equivalent to a heal of 200 potency.",
      "Cure Potency: 100 per remaining stack of Panhaimatinon"
    ],
    effects: [
      "Additional Effect: Grants 5 stacks of Panhaimatinon"
    ],
    conditions: [],
    duration: {
      seconds: 15
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Dosis III": {
    id: "pve_action__30",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/fb33abf61a92db08d67e07c031761606961158d7.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 82,
    type: "Spell",
    cast: 1.5,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage with a potency of 380.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170",
    potency: [
      "Deals unaspected damage with a potency of 380.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Phlegma III": {
    id: "pve_action__31",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/7a2ab72f418459265a3ab33cb5f73955114ffc72.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 40.0,
    cost: {
      mp: 400
    },
    range: 6,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 600 for the first enemy, and 50% less for all remaining enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nMaximum Charges: 2\nRecast timer cannot be affected by status effects or gear attributes.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 600 for the first enemy, and 50% less for all remaining enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: 2,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Dosis III": {
    id: "pve_action__32",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/2671a79b114893a97f5b09bcf484e7871dd99b9e.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 400
    },
    range: 25,
    radius: 0,
    tooltip: "Deals unaspected damage over time.\nPotency: 80\nDuration: 30s\nEffect cannot be stacked with Eukrasian Dyskrasia.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Dosis III changes to Eukrasian Dosis III when requirements for execution are met.",
    potency: [
      "Potency: 80",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Dyskrasia II": {
    id: "pve_action__33",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/3061c16b09ce276506076a0a2cdf8e87b410778b.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {
      mp: 400
    },
    range: 0,
    radius: 5,
    tooltip: "Deals unaspected damage with a potency of 170 to all nearby enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170",
    potency: [
      "Deals unaspected damage with a potency of 170 to all nearby enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Dyskrasia": {
    id: "pve_action__34",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c8c74517022e0d8f5fd8f379225a64f12eff5e0a.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 400
    },
    range: 0,
    radius: 5,
    tooltip: "Deals unaspected damage over time to all nearby enemies.\nPotency: 40\nDuration: 30s\nEffect cannot be stacked with Eukrasian Dosis III.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Dyskrasia II changes to Eukrasian Dyskrasia when requirements for execution are met.",
    potency: [
      "Potency: 40",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Toxikon II": {
    id: "pve_action__35",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/c5b8440e4fcf071ca470f8ea71f4d7634c2f8763.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 82,
    type: "Spell",
    cast: 0.0,
    recast: 2.5,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 380 for the first enemy, and 50% less for all remaining enemies.\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nAddersting Cost: 1",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 380 for the first enemy, and 50% less for all remaining enemies.",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Krasis: {
    id: "pve_action__36",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/db444cd7e3849561b5394b75c2e7eaabbdf394e8.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 86,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 30,
    radius: 0,
    tooltip: "Increases HP recovery via healing actions for a party member or self by 20%.\nDuration: 10s",
    potency: [],
    effects: [],
    conditions: [],
    duration: {
      seconds: 10
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Pneuma: {
    id: "pve_action__37",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/6380ca8ba90f73c92c654a648b26bfab7aa8bd97.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 90,
    type: "Spell",
    cast: 1.5,
    recast: 120.0,
    cost: {
      mp: 700
    },
    range: 25,
    radius: 25,
    tooltip: "Deals unaspected damage to all enemies in a straight line before you with a potency of 380 for the first enemy, and 40% less for all remaining enemies.\nAdditional Effect: Restores own HP and the HP of all party members within a radius of 20 yalms\nCure Potency: 600\nAdditional Effect: Restores HP to targets under the effect of Kardion granted by you\nCure Potency: 170\nRecast timer cannot be affected by status effects or gear attributes.",
    potency: [
      "Deals unaspected damage to all enemies in a straight line before you with a potency of 380 for the first enemy, and 40% less for all remaining enemies.",
      "Cure Potency: 600",
      "Cure Potency: 170"
    ],
    effects: [
      "Additional Effect: Restores own HP and the HP of all party members within a radius of 20 yalms",
      "Additional Effect: Restores HP to targets under the effect of Kardion granted by you"
    ],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Psyche: {
    id: "pve_action__38",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/9d4fec42b917590f53bfa7ccc1691c083afd7a3c.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 92,
    type: "Ability",
    cast: 0.0,
    recast: 60.0,
    cost: {},
    range: 25,
    radius: 5,
    tooltip: "Deals unaspected damage to target and all enemies nearby it with a potency of 600 for the first enemy, and 50% less for all remaining enemies.",
    potency: [
      "Deals unaspected damage to target and all enemies nearby it with a potency of 600 for the first enemy, and 50% less for all remaining enemies."
    ],
    effects: [],
    conditions: [],
    duration: null,
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  "Eukrasian Prognosis II": {
    id: "pve_action__39",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/dc49cdcdfa8ec3a8d32f6e8b405ddda6971e23f0.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 96,
    type: "Spell",
    cast: 0.0,
    recast: 1.5,
    cost: {
      mp: 800
    },
    range: 0,
    radius: 20,
    tooltip: "Restores own HP and the HP of all nearby party members.\nCure Potency: 100\nAdditional Effect: Erects a magicked barrier which nullifies damage equaling 360% of the amount of HP restored\nDuration: 30s\nEffect cannot be stacked with those of Eukrasian Diagnosis or scholar's Galvanize.\nCan only be executed while under the effect of Eukrasia.\n\n※This action cannot be assigned to a hotbar.\n※Prognosis changes to Eukrasian Prognosis II when requirements for execution are met.",
    potency: [
      "Cure Potency: 100"
    ],
    effects: [
      "Additional Effect: Erects a magicked barrier which nullifies damage equaling 360% of the amount of HP restored"
    ],
    conditions: [
      "Can only be executed while under the effect of Eukrasia.",
      "※This action cannot be assigned to a hotbar."
    ],
    duration: {
      seconds: 30
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  },
  Philosophia: {
    id: "pve_action__40",
    icon_url: "https://lds-img.finalfantasyxiv.com/d/a3dd5ff88eb7a7cce95536d48fe81665e3feb3ca.png",
    job: "Sage",
    job_icon_url: "https://lds-img.finalfantasyxiv.com/promo/h/e/G0lQTD01LdCGk5pECSc7fbbmbM.png",
    level: 100,
    type: "Ability",
    cast: 0.0,
    recast: 180.0,
    cost: {},
    range: 0,
    radius: 30,
    tooltip: "Increases healing magic potency by 20%.\nDuration: 20s\nAdditional Effect: Grants self and nearby party members the effect of Eudaimonia, restoring HP after landing spells\nCure Potency: 150\nDuration: 20s",
    potency: [
      "Increases healing magic potency by 20%.",
      "Cure Potency: 150"
    ],
    effects: [
      "Additional Effect: Grants self and nearby party members the effect of Eudaimonia, restoring HP after landing spells"
    ],
    conditions: [],
    duration: {
      seconds: 20
    },
    max_charges: null,
    source_url: "FFXIV_Job_Guide_Raw_sage_2025-09.html",
    last_seen: "2025-09-12T00:00:00+00:00",
    language: "en"
  }
},
  rotations: []
};