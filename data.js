/* FoFit — Faroe Islands fitness map data
 * ---------------------------------------------------------------
 * Edit this file to add/update locations. Each entry is one place.
 *
 * PRICING IS NORMALISED: `priceMonthly` is the headline figure and is
 * always a per-MONTH membership (or "Free" / "Class-based" / "See website"),
 * so gyms compare like-for-like. The `prices` array holds the full
 * breakdown — keep those per-month too where possible, and clearly
 * label anything that isn't (e.g. "Day pass").
 *
 * coords [lat, lng] are APPROXIMATE unless noted — refine on the map.
 * verified: true = key details confirmed from an official source.
 * --------------------------------------------------------------- */

const GYMS = [
  /* ---------------- BURN (chain — 3 gym locations) ---------------- */
  {
    id: "burn-torshavn",
    name: "Burn — Tórshavn",
    type: "Gym & fitness centre",
    town: "Tórshavn", island: "Streymoy",
    coords: [62.010764, -6.772841],
    address: "Niels Finsensgøta 8, FO-100 Tórshavn",
    phone: "+298 299900", email: "burn@burn.fo",
    website: "https://burn.fo", facebook: "https://www.facebook.com/burn.fo",
    photo: "", rating: null,
    priceMonthly: "From 269 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · morning 06–14", value: "269 kr/mo" },
      { label: "Direct debit (PBS) · all-day 06–22", value: "369 kr/mo" },
      { label: "Direct debit (PBS) · all-day + classes/sauna", value: "399 kr/mo" },
      { label: "Cash · 1 month (all-day)", value: "469 kr" },
      { label: "Cash · 12 months (all-day)", value: "3,825 kr (~319/mo)" },
      { label: "Day pass (klippkort)", value: "99 kr" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: {
      note: "Reception/changing closes 22:00 (20:00 Fri–Sun).",
      Mon: "05:00–00:00", Tue: "05:00–00:00", Wed: "05:00–00:00", Thu: "05:00–00:00",
      Fri: "05:00–22:00", Sat: "08:00–22:00", Sun: "08:00–22:00"
    },
    amenities: ["Classes", "Sauna", "Jacuzzi", "City centre"],
    classes: ["Spinning", "Yoga", "Reformer Pilates", "Body Burn", "Booty Burn", "Get In Shape", "Zumba"],
    notes: "Modern fitness centre in central Tórshavn with group classes, a sauna and a jacuzzi.",
    verified: true
  },
  {
    id: "burn-vestmanna",
    name: "Burn — Vestmanna",
    type: "Gym & fitness centre",
    town: "Vestmanna", island: "Streymoy",
    coords: [62.153972, -7.161162],
    address: "Niðari Vegur 16, FO-350 Vestmanna",
    phone: "+298 299900", email: "burn@burn.fo",
    website: "https://burn.fo", facebook: "https://www.facebook.com/burn.fo",
    photo: "", rating: null,
    priceMonthly: "From 269 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · morning 06–14", value: "269 kr/mo" },
      { label: "Direct debit (PBS) · all-day 06–22", value: "369 kr/mo" },
      { label: "Direct debit (PBS) · all-day + extras", value: "399 kr/mo" },
      { label: "Cash · 1 month (all-day)", value: "469 kr" },
      { label: "Cash · 12 months (all-day)", value: "3,825 kr (~319/mo)" },
      { label: "Day pass (klippkort)", value: "99 kr" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: { note: "Staffed/branch hours vary — see burn.fo. Same membership as other Burn gyms." },
    amenities: ["Weights", "Cardio", "Stretching"],
    notes: "Burn's Vestmanna gym with free weights, cardio machines and a stretching area.",
    verified: true
  },
  {
    id: "burn-margair",
    name: "Burn — Margáir",
    type: "Gym & fitness centre",
    town: "Streymnes", island: "Streymoy",
    coords: [62.193722, -7.043909],
    address: "Streymnesvegur 114, FO-435 Streymnes",
    phone: "+298 299900", email: "burn@burn.fo",
    website: "https://burn.fo", facebook: "https://www.facebook.com/burn.fo",
    photo: "", rating: null,
    priceMonthly: "From 269 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · morning 06–14", value: "269 kr/mo" },
      { label: "Direct debit (PBS) · all-day 06–22", value: "369 kr/mo" },
      { label: "Direct debit (PBS) · all-day + extras", value: "399 kr/mo" },
      { label: "Cash · 1 month (all-day)", value: "469 kr" },
      { label: "Cash · 12 months (all-day)", value: "3,825 kr (~319/mo)" },
      { label: "Day pass (klippkort)", value: "99 kr" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: { note: "Branch hours vary — see burn.fo. Same membership as other Burn gyms." },
    amenities: ["Weights", "Cardio", "Klassik Light"],
    classes: ["Klassik Light"],
    notes: "Burn's gym at Margáir in Streymnes, beside the EB/Streymur stadium, with weights and cardio; also hosts Klassik Light classes.",
    verified: true
  },

  /* ---------------- BURN KLASSIK (outdoor bootcamp — 1 location) ---------------- */
  {
    id: "burn-klassik",
    name: "Burn Klassik — Berjabrekka",
    type: "Coached fitness course",
    town: "Tórshavn", island: "Streymoy",
    coords: [62.025448, -6.790747],
    address: "Berjabrekka, Tórshavn",
    phone: "+298 299900", email: "burn@burn.fo",
    website: "https://burn.fo/burn-klassik/", facebook: "https://www.facebook.com/burn.fo",
    photo: "", rating: null,
    priceMonthly: "Course · 2,200 kr (1st)",
    prices: [
      { label: "1st course", value: "2,200 kr" },
      { label: "2nd course", value: "1,700 kr" },
      { label: "3rd course", value: "1,200 kr" },
      { label: "4th course", value: "900 kr" },
      { label: "5th course", value: "600 kr" },
      { label: "6th+ course", value: "500 kr" }
    ],
    hours: {
      note: "Sessions Mon/Wed/Fri 06:53–07:53, 10:00–11:00 & 16:00–19:00 (drop-in); extra Sat 10:00–11:00. Each repeat course is cheaper.",
    },
    amenities: ["Coached", "Course-based", "Klassik Light"],
    notes: "Burn Klassik is a coached fitness course at Berjabrekka, run as fixed multi-week programmes with set weekly session times. Prices are per course and drop for returning participants.",
    verified: true
  },

  /* ---------------- YNDI ---------------- */
  {
    id: "yndi",
    name: "Yndi Fitness",
    type: "Gym & fitness centre",
    town: "Tórshavn", island: "Streymoy",
    coords: [62.022837, -6.780976],
    address: "Sundsvegur 6, FO-100 Tórshavn",
    phone: "+298 311311", email: "yndi@yndi.fo",
    website: "https://yndi.fo", facebook: "https://www.facebook.com/yndifitness",
    photo: "", rating: null,
    priceMonthly: "From 369 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · monthly, 3-mo min.", value: "369 kr/mo" },
      { label: "Direct debit · student/pensioner", value: "299 kr/mo" },
      { label: "Cash · 1 month", value: "519 kr" },
      { label: "Cash · 12 months", value: "3,798 kr (~317/mo)" },
      { label: "10-clip card", value: "660 kr" }
    ],
    hours: {
      note: "",
      Mon: "06:00–22:00", Tue: "06:00–22:00", Wed: "06:00–22:00", Thu: "06:00–22:00",
      Fri: "06:00–20:00", Sat: "08:00–20:00", Sun: "08:00–20:00"
    },
    amenities: ["Strength floor", "Cardio", "Cycling / Spinning", "Aerobics studio", "Classes"],
    classes: ["ORKA", "Cycling", "Yoga", "Aerobics", "Circuit", "Full-body", "Zumba"],
    notes: "Two floors plus a cycling room and an 80 m² aerobics area.",
    verified: true
  },

  /* ---------------- VÆLVERA (chain — 3 locations) ---------------- */
  {
    id: "valvera-torshavn",
    name: "Vælvera Fitness — Tórshavn",
    type: "Gym & fitness centre",
    town: "Tórshavn", island: "Streymoy",
    coords: [62.020464, -6.773062],
    address: "Heykavegur 6, FO-100 Tórshavn",
    phone: "+298 320310", email: "info@vaelvera.fo",
    website: "http://www.vaelvera.fo", facebook: "https://www.facebook.com/p/V%C3%A6lvera-Fitness-100064119904321/",
    photo: "", rating: null,
    priceMonthly: "From 299 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · 12-month", value: "299 kr/mo" },
      { label: "Direct debit (PBS) · monthly, no binding", value: "369 kr/mo" },
      { label: "Direct debit · student/under-21/pensioner", value: "299 kr/mo" },
      { label: "Direct debit · youth under 15", value: "199 kr/mo" },
      { label: "Direct debit · child under 12", value: "129 kr/mo" },
      { label: "Family (4, per person)", value: "212 kr/mo" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: {
      note: "Open daily 05:00–24:00 (all Vælvera branches).",
      Mon: "05:00–24:00", Tue: "05:00–24:00", Wed: "05:00–24:00", Thu: "05:00–24:00",
      Fri: "05:00–24:00", Sat: "05:00–24:00", Sun: "05:00–24:00"
    },
    amenities: ["Strength", "Cardio", "Aerobics", "Dance", "Martial arts", "Classes"],
    classes: ["BodyAttack", "BodyBalance", "BodyCombat", "Pump Fit", "Step Fit", "Kickboxing", "Latinmix", "Circuit"],
    notes: "Strength and cardio floors plus a studio for aerobics, dance and martial-arts classes.",
    verified: true
  },
  {
    id: "valvera-runavik",
    name: "Vælvera Fitness — Saltangará",
    type: "Gym & fitness centre",
    town: "Saltangará", island: "Eysturoy",
    coords: [62.115385, -6.722565],
    address: "Heiðavegur 60, Saltangará",
    phone: "+298 445800", email: "info@vaelvera.fo",
    website: "http://www.vaelvera.fo", facebook: "https://www.instagram.com/explore/locations/1014713363/vaelvera-fitness-runavik/",
    photo: "", rating: null,
    priceMonthly: "From 299 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · 12-month", value: "299 kr/mo" },
      { label: "Direct debit (PBS) · monthly, no binding", value: "369 kr/mo" },
      { label: "Direct debit · student/under-21/pensioner", value: "299 kr/mo" },
      { label: "Direct debit · youth under 15", value: "199 kr/mo" },
      { label: "Direct debit · child under 12", value: "129 kr/mo" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: {
      note: "Open daily 05:00–24:00.",
      Mon: "05:00–24:00", Tue: "05:00–24:00", Wed: "05:00–24:00", Thu: "05:00–24:00",
      Fri: "05:00–24:00", Sat: "05:00–24:00", Sun: "05:00–24:00"
    },
    amenities: ["Strength", "Cardio", "Classes"],
    classes: ["BodyAttack", "BodyBalance", "BodyCombat", "Pump Fit", "Step Fit", "Kickboxing", "Latinmix", "Circuit"],
    notes: "Strength and cardio floors with group classes, in Saltangará.",
    verified: true
  },
  {
    id: "valvera-midvagur",
    name: "Vælvera Fitness — Miðvágur",
    type: "Gym & fitness centre",
    town: "Miðvágur", island: "Vágar",
    coords: [62.047955, -7.192204],
    address: "Miðvágur",
    phone: "", email: "info@vaelvera.fo",
    website: "http://www.vaelvera.fo", facebook: "",
    photo: "", rating: null,
    priceMonthly: "From 299 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · 12-month", value: "299 kr/mo" },
      { label: "Direct debit (PBS) · monthly, no binding", value: "369 kr/mo" },
      { label: "Direct debit · student/under-21/pensioner", value: "299 kr/mo" },
      { label: "Direct debit · youth under 15", value: "199 kr/mo" },
      { label: "Direct debit · child under 12", value: "129 kr/mo" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: {
      note: "Open daily 05:00–24:00.",
      Mon: "05:00–24:00", Tue: "05:00–24:00", Wed: "05:00–24:00", Thu: "05:00–24:00",
      Fri: "05:00–24:00", Sat: "05:00–24:00", Sun: "05:00–24:00"
    },
    amenities: ["Strength", "Cardio", "Classes"],
    classes: ["BodyAttack", "BodyBalance", "BodyCombat", "Pump Fit", "Step Fit", "Kickboxing", "Latinmix", "Circuit"],
    notes: "Strength and cardio floors with group classes, in Miðvágur on Vágar.",
    verified: true
  },

  /* ---------------- TVØRMEGI CROSSFIT ---------------- */
  {
    id: "tvormegi",
    name: "Tvørmegi CrossFit",
    type: "CrossFit box",
    town: "Tórshavn", island: "Streymoy",
    coords: [61.998564, -6.802249],
    address: "Slættanesgøta 11, FO-100 Tórshavn",
    phone: "+298 508275", email: "",
    website: "https://tvormegi.fo",
    facebook: "https://www.facebook.com/tvormegi",
    photo: "", rating: null,
    priceMonthly: "495 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · fixed monthly", value: "495 kr/mo" },
      { label: "1 month (no binding)", value: "695 kr" },
      { label: "Direct debit · student", value: "345 kr/mo" },
      { label: "Direct debit · youth 16–21", value: "275 kr/mo" },
      { label: "1 week", value: "245 kr" },
      { label: "10-clip card", value: "995 kr" },
      { label: "Drop-in", value: "145 kr" },
      { label: "Trial class", value: "Free — book online" }
    ],
    hours: { note: "Class-based schedule — book via the Tvørmegi CrossFit app." },
    amenities: ["CrossFit", "Functional", "Classes", "Coached", "Open gym", "Community"],
    classes: ["WOD (CrossFit)", "Open Gym", "Boot Camp", "Senior WOD", "CrossFit Mammur", "Kids & Youth"],
    notes: "Functional-fitness box with coached CrossFit classes and open-gym access; sessions booked through the Tvørmegi app.",
    verified: true
  },

  /* ---------------- ÍÐKA ---------------- */
  {
    id: "idka",
    name: "Íðka",
    type: "Fitness & class studio",
    town: "Klaksvík", island: "Borðoy",
    coords: [62.223213, -6.578632],
    address: "Bøgøta 38, FO-700 Klaksvík",
    phone: "+298 454647", email: "info@idka.fo",
    website: "https://www.idka.fo", facebook: "",
    photo: "", rating: null,
    priceMonthly: "From 269 kr/mo · direct debit",
    prices: [
      { label: "Direct debit (PBS) · 12-month", value: "269 kr/mo" },
      { label: "Direct debit (PBS) · 6-month", value: "319 kr/mo" },
      { label: "Direct debit (PBS) · 1-month", value: "369 kr/mo" },
      { label: "Direct debit · student/under-18/pensioner", value: "from 219 kr/mo" },
      { label: "10-clip card", value: "799 kr" },
      { label: "Drop-in", value: "90 kr" },
      { label: "Sign-up fee", value: "199 kr" }
    ],
    hours: {
      note: "Member access daily 05:00–22:00. Staffed Mon–Thu 17:00–21:00, Fri 17:00–20:00.",
      Mon: "05:00–22:00", Tue: "05:00–22:00", Wed: "05:00–22:00", Thu: "05:00–22:00",
      Fri: "05:00–22:00", Sat: "05:00–22:00", Sun: "05:00–22:00"
    },
    amenities: ["Classes", "Zumba", "HIIT", "BodyPump", "BodyCombat", "Spinning", "Physio"],
    classes: ["Zumba", "Strong by Zumba", "HIIT", "BodyCombat", "BodyPump", "BodyFlow", "Spinning", "Sprint", "Booty"],
    notes: "Class-focused studio in Klaksvík: Zumba, HIIT, Les Mills (BodyPump/Combat/Flow), Spinning, plus a physio clinic.",
    verified: true
  },

  /* ---------------- OUTDOOR ---------------- */
  {
    id: "outdoor-torsbreyt",
    name: "Outdoor Fitness & Playground — Tórshavn",
    type: "Outdoor fitness park",
    town: "Tórshavn", island: "Streymoy",
    coords: [62.010957, -6.769027],   // exact, user-provided
    address: "Tórsbreyt area, Tórshavn",
    phone: "", email: "",
    website: "", facebook: "",
    photo: "", rating: null,
    priceMonthly: "Free",
    prices: [
      { label: "Access", value: "Free — public" }
    ],
    hours: { note: "Open-air — accessible any time." },
    amenities: ["Outdoor", "Calisthenics", "Playground", "Free", "Public"],
    notes: "Public open-air fitness/calisthenics equipment with a playground — free to use.",
    verified: true
  }
];

/* Map starting view (centre of the Faroe Islands) */
const MAP_CENTER = [62.05, -6.95];
const MAP_ZOOM = 10;
