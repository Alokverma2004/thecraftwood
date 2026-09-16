/* ==================================================================
   TheCraftwood — site script
   ------------------------------------------------------------------
   CONFIG: put the studio's WhatsApp number below in international
   format, digits only (e.g. "919876543210"). Until it is set, the
   order button copies the order text and opens Instagram DMs instead.
================================================================== */
const CONFIG = {
  WHATSAPP_NUMBER: "916375137303",           // +91 63751 37303
  INSTAGRAM_URL: "https://www.instagram.com/_thecraftwood/",
  INSTAGRAM_DM: "https://ig.me/m/_thecraftwood",
  PRICES: { "5 Inches": 699, "6 Inches": 799, "7 Inches": 999, "8 Inches": 1199, Keychain: 219 },
};

/* ---------- Data ---------- */
const PIECES = [
  { img: "birthday-woman.jpg",  ar: "1080/1266", cat: "birthday", size: "7 Inches", title: "Keep Shining",            tag: "Birthday",           desc: "A single portrait with a birthday wish, engraved on a 7-inch slice." },
  { img: "couple-forever.jpg",  ar: "1026/1260", cat: "couples",  size: "7 Inches", title: "Forever Begins Now",      tag: "Couples",            desc: "Couple portrait with vows, wedding date and a hashtag." },
  { img: "birthday-man.jpg",    ar: "1114/1238", cat: "birthday", size: "7 Inches", title: "Keep Smiling",            tag: "Birthday",           desc: "Full-length portrait beside a hand-lettered birthday message." },
  { img: "rakhi-sisters.jpg",   ar: "1200/1248", cat: "family",   size: "8 Inches", title: "Sisters, Always",         tag: "Rakshabandhan",      desc: "Three sisters on an 8-inch slice with a Rakhi message and laurels." },
  { img: "pet-cat.jpg",         ar: "1074/1330", cat: "pets",     size: "7 Inches", title: "Her & Her Cat",           tag: "Pets",               desc: "A portrait with a pet, finished with a floral birthday script." },
  { img: "keychain-initial.jpg",ar: "812/910",   cat: "keychains",size: "Keychain", title: "Initial & Moon",          tag: "Keychain · ₹219",    desc: "An initial, a moon, a message and a tiny cloud. Fully customisable." },
  { img: "birthday-bike.jpg",   ar: "998/1206",  cat: "birthday", size: "7 Inches", title: "Moments Once",            tag: "Birthday",           desc: "Portrait on a motorcycle with a long-form quote and date." },
  { img: "memorial-family.jpg", ar: "1088/1352", cat: "memorial", size: "8 Inches", title: "Heaven Couldn't Stop My Love", tag: "In loving memory", desc: "A remembrance piece for a sister, with a message from the heart." },
  { img: "saree-portrait.jpg",  ar: "1076/1326", cat: "birthday", size: "6 Inches", title: "Portrait in Saree",       tag: "Portrait",           desc: "Minimal single portrait with tiny sparkles and a heart." },
  { img: "keychain-siblings.jpg",ar:"786/845",   cat: "keychains",size: "Keychain", title: "Best Sister, Best Bro",   tag: "Keychain · ₹219",    desc: "Matching keychains for siblings — a Rakhi favourite." },
  { img: "sister-birthday.jpg", ar: "1092/1278", cat: "family",   size: "7 Inches", title: "Fist Bump",               tag: "Family",             desc: "Portrait paired with a fist-bump illustration and birthday wish." },
  { img: "birthday-garden.jpg", ar: "1098/1260", cat: "birthday", size: "8 Inches", title: "Garden Portrait",         tag: "Birthday",           desc: "Detailed portrait with foliage, a long wish and a small kitten." },
  { img: "bff-child.jpg",       ar: "1070/1248", cat: "friends",  size: "7 Inches", title: "Best Friend Forever",     tag: "Friends",            desc: "A childhood photo turned into a keepsake for a lifelong friend." },
  { img: "keychain-pair.jpg",   ar: "692/540",   cat: "keychains",size: "Keychain", title: "Infinity & Name",         tag: "Keychain · ₹219",    desc: "A pair of keychains: an infinity heart and a name in script." },
  { img: "teacher-6inch.jpg",   ar: "826/890",   cat: "birthday", size: "6 Inches", title: "For a Favourite Teacher", tag: "Teacher",            desc: "A 6-inch portrait with a heartfelt note for a teacher." },
  { img: "on-stand.jpg",        ar: "624/850",   cat: "family",   size: "8 Inches", title: "Birthday, On Stand",      tag: "Family",             desc: "Two moments on one slice, displayed on the included stand." },
  { img: "memorial-cat.jpg",    ar: "302/438",   cat: "memorial", size: "6 Inches", title: "Paw Prints On Our Heart", tag: "Pet memorial",       desc: "A remembrance piece for a much-loved family cat." },
  { img: "keychain-palm.jpg",   ar: "834/825",   cat: "keychains",size: "Keychain", title: "Rakhi Hands",             tag: "Keychain · ₹219",    desc: "An illustrated Rakhi moment, engraved on a keychain." },
  { img: "bff-couple.jpg",      ar: "335/388",   cat: "friends",  size: "6 Inches", title: "You Always Top The List", tag: "Friends",            desc: "Two best friends and a note that says it all." },
  { img: "keychain-hands.jpg",  ar: "764/980",   cat: "keychains",size: "Keychain", title: "Handshake",               tag: "Keychain · ₹219",    desc: "A tiny illustration of two hands, engraved in fine detail." },
];

const REVIEWS = [
  { src: "ig", text: "This piece is absolutely beautiful. The detailing, the concept, and the emotions it reflects are so pure and meaningful. It feels personal and thoughtfully made — truly something special.", who: "Instagram DM" },
  { src: "wa", text: "I just received it today. It's absolutely adorable. The craftsmanship and the details are stunning. I truly appreciate the time and skill you put into this.", who: "WhatsApp" },
  { src: "ig", text: "My mother is so happy after seeing this… I wonder how is this so actual. So beautiful. You are absolutely super talented.", who: "Instagram DM" },
  { src: "wa", text: "Received with tons of thanks. My kids loved it ❤️", who: "WhatsApp · pet memorial" },
  { src: "ig", text: "It was my first experience of a customised gift from any online site. When I received them I was so happy that they are actually looking so beautiful. For the whole day I am just thinking about them.", who: "Instagram DM" },
  { src: "ig", text: "Finally received the gift. The person was really happy and became emotional. Thanks for the wonderful art work ❤️", who: "Instagram DM" },
  { src: "wa", text: "Its amazing. Thank you so much for such a wonderful creation 😍", who: "WhatsApp" },
  { src: "ig", text: "The care and package safety covering was too good. I will place more orders and recommend new customers for you.", who: "Instagram DM" },
  { src: "ig", text: "Rec'd today, thank you so much — these are very very beautiful 🤩", who: "Instagram DM" },
  { src: "wa", text: "Order received, thank you so much. Great work ❤️", who: "WhatsApp · best friends" },
  { src: "ig", text: "It reached in the evening. Thank you so much, it is very pretty and was appreciated so much.", who: "Instagram DM" },
];

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => "₹" + n.toLocaleString("en-IN");
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-on"), 2800);
}
function waLink(text) {
  const n = CONFIG.WHATSAPP_NUMBER.replace(/\D/g, "");
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(text)}` : "";
}

/* ---------- Gallery ---------- */
const gallery = $("#gallery");
gallery.innerHTML = PIECES.map((p, i) => `
  <button class="card" data-cat="${p.cat}" data-i="${i}" style="--ar:${p.ar};animation-delay:${(i % 6) * 60}ms" aria-label="${p.title} — ${p.tag}">
    <img src="images/${p.img}" alt="${p.title}: ${p.desc}" loading="${i < 3 ? "eager" : "lazy"}" decoding="async">
    <span class="card__meta">
      <span><span class="card__tag">${p.tag}</span><br><span class="card__title">${p.title}</span></span>
      <span class="card__size">${p.size === "Keychain" ? "₹219" : p.size.replace(" Inches", "″")}</span>
    </span>
  </button>`).join("");

function applyFilter(cat) {
  $$(".chip").forEach(c => {
    const on = c.dataset.filter === cat;
    c.classList.toggle("is-active", on);
    c.setAttribute("aria-selected", on);
  });
  $$(".card").forEach((card, i) => {
    const show = cat === "all" || card.dataset.cat === cat;
    card.classList.toggle("is-hidden", !show);
    if (show) { card.style.animation = "none"; void card.offsetWidth; card.style.animation = ""; }
  });
}
$$(".chip").forEach(c => c.addEventListener("click", () => applyFilter(c.dataset.filter)));
$$(".occasions__list a").forEach(a => a.addEventListener("click", () => applyFilter(a.dataset.filter)));

/* ---------- Lightbox ---------- */
const lb = $("#lightbox");
let lbIndex = 0;
function openLightbox(i) {
  const p = PIECES[i];
  lbIndex = i;
  $("#lbImg").src = `images/${p.img}`;
  $("#lbImg").alt = p.title;
  $("#lbTag").textContent = p.tag + (p.size !== "Keychain" ? ` · ${p.size.replace(" Inches", "″")}` : "");
  $("#lbTitle").textContent = p.title;
  $("#lbDesc").textContent = p.desc;
  lb.showModal();
}
gallery.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openLightbox(+card.dataset.i);
});
$("#lbClose").addEventListener("click", () => lb.close());
const visibleIdx = () => $$(".card:not(.is-hidden)").map(c => +c.dataset.i);
function stepLightbox(dir) {
  const list = visibleIdx(); if (!list.length) return;
  const pos = list.indexOf(lbIndex);
  openLightbox(list[(pos + dir + list.length) % list.length]);
}
$("#lbPrev").addEventListener("click", () => stepLightbox(-1));
$("#lbNext").addEventListener("click", () => stepLightbox(1));
lb.addEventListener("keydown", e => { if (e.key === "ArrowRight") stepLightbox(1); if (e.key === "ArrowLeft") stepLightbox(-1); });
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
$("#lbOrder").addEventListener("click", () => {
  lb.close();
  presetFromPiece(PIECES[lbIndex]);
  $("#order").scrollIntoView({ behavior: "smooth" });
});

/* ---------- Order builder ---------- */
const form = $("#orderForm");
const sizeField = $("#sizeField");
const previewImg = $("#previewImg");
const previewCap = $("#previewCap");

const OCCASION_BY_CAT = {
  birthday: "Birthday", couples: "Anniversary", family: "Family portrait", friends: "Best friend",
  pets: "Pet portrait", memorial: "In loving memory", keychains: "Just because",
};

function presetFromPiece(p) {
  form.product.value = p.size === "Keychain" ? "Keychain" : "Wood slice frame";
  if (p.size !== "Keychain") form.size.value = p.size;
  const occ = p.tag === "Teacher" ? "Teacher / Farewell" : p.tag === "Rakshabandhan" ? "Rakshabandhan" : OCCASION_BY_CAT[p.cat];
  if (occ) form.occasion.value = occ;
  form.notes.value = `Style reference: "${p.title}" from your collection`;
  setPreview(p);
  render();
}
function setPreview(p, instant = false) {
  const apply = () => {
    previewImg.src = `images/${p.img}`;
    previewImg.alt = p.title;
    previewCap.textContent = p.size === "Keychain" ? `Keychain — ${p.title}` : `${p.size.replace(" Inches", "″")} ${p.tag.toLowerCase()} piece — ${p.title}`;
    previewImg.style.opacity = 1;
  };
  if (instant) return apply();
  previewImg.style.opacity = 0;
  setTimeout(apply, 200);
}
function pieceFor(product, size, occasion) {
  if (product === "Keychain") return PIECES.find(p => p.cat === "keychains");
  const byOcc = { "Anniversary": "couples", "Wedding": "couples", "Rakshabandhan": "family", "Family portrait": "family",
    "Best friend": "friends", "Pet portrait": "pets", "In loving memory": "memorial" }[occasion];
  return PIECES.find(p => p.size === size && p.cat === (byOcc || "birthday"))
      || PIECES.find(p => p.cat === (byOcc || "birthday"))
      || PIECES[0];
}

function state() {
  const d = Object.fromEntries(new FormData(form).entries());
  d.product = d.product || "Wood slice frame";
  d.size = d.size || "6 Inches";
  d.price = d.product === "Keychain" ? CONFIG.PRICES.Keychain : CONFIG.PRICES[d.size];
  return d;
}

function render() {
  const d = state();
  sizeField.hidden = d.product === "Keychain";
  const rows = [
    ["Item", d.product === "Keychain" ? "Engraved keychain" : `Wood slice frame · ${d.size.replace(" Inches", "″")}`],
    ["Occasion", d.occasion],
    ["In the photo", `${d.people} ${d.people === "1" ? "person" : "people"}`],
    d.names && ["Engrave", d.names],
    d.message && ["Message", d.message.length > 60 ? d.message.slice(0, 60) + "…" : d.message],
    d.city && ["Deliver to", d.city],
  ].filter(Boolean);
  $("#ticketRows").innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${escapeHtml(v)}</dd>`).join("");
  $("#ticketTotal").textContent = money(d.price);
  $("#ticketNote").textContent = d.product === "Keychain" ? "Stand not applicable. Shipping confirmed on WhatsApp." : "Stand included. Shipping confirmed on WhatsApp.";
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function composeMessage() {
  const d = state();
  const lines = [
    `Hi TheCraftwood! I'd like to order a custom piece 🎁`,
    ``,
    `• Item: ${d.product === "Keychain" ? "Engraved keychain (₹219)" : `Wood slice frame — ${d.size} (${money(d.price)})`}`,
    `• Occasion: ${d.occasion}`,
    `• People/pets in photo: ${d.people}`,
    d.names ? `• Name(s)/date to engrave: ${d.names}` : null,
    d.message ? `• Message/quote: ${d.message}` : null,
    d.notes ? `• Notes: ${d.notes}` : null,
    ``,
    `• My name: ${d.customer || "-"}`,
    d.city ? `• Deliver to: ${d.city}` : null,
    ``,
    `I'll share the photo here. Please confirm the price with shipping. Thank you!`,
    `(Sent from the TheCraftwood website)`,
  ].filter(l => l !== null);
  return lines.join("\n");
}

form.addEventListener("input", e => {
  if (e.target.name === "product" || e.target.name === "size" || e.target.name === "occasion") {
    const d = state();
    setPreview(pieceFor(d.product, d.size, d.occasion));
  }
  render();
});
form.addEventListener("submit", async e => {
  e.preventDefault();
  const nameInput = form.customer;
  if (!nameInput.value.trim()) {
    nameInput.classList.add("touched");
    nameInput.focus();
    toast("Please add your name so we know who to thank.");
    return;
  }
  const text = composeMessage();
  const link = waLink(text);
  if (link) {
    window.open(link, "_blank", "noopener");
    toast("Opening WhatsApp with your order details…");
  } else {
    await copyText(text);
    window.open(CONFIG.INSTAGRAM_DM, "_blank", "noopener");
    toast("Order details copied — paste them in our Instagram DM 💬");
  }
});
$("#copyBtn").addEventListener("click", async () => {
  await copyText(composeMessage());
  toast("Order details copied to clipboard.");
});
async function copyText(t) {
  try { await navigator.clipboard.writeText(t); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = t; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
}

/* Size cards → order form */
$$("#sizes .size").forEach(btn => btn.addEventListener("click", () => {
  form.product.value = "Wood slice frame";
  form.size.value = btn.dataset.size;
  $$("#sizes .size").forEach(b => b.classList.toggle("is-selected", b === btn));
  const d = state();
  setPreview(pieceFor(d.product, d.size, d.occasion));
  render();
  $("#order").scrollIntoView({ behavior: "smooth" });
}));
$$("[data-pick-keychain]").forEach(b => b.addEventListener("click", () => {
  form.product.value = "Keychain";
  setPreview(pieceFor("Keychain"));
  render();
  $("#order").scrollIntoView({ behavior: "smooth" });
}));
form.addEventListener("change", e => {
  if (e.target.name === "size") $$("#sizes .size").forEach(b => b.classList.toggle("is-selected", b.dataset.size === e.target.value));
});

/* Header/footer/fab WhatsApp links */
(function wireQuickChat() {
  const generic = waLink("Hi TheCraftwood! I'd like to know more about your engraved wooden frames 🙂");
  const fab = $("#fab"), foot = $("#footWa");
  if (generic) {
    fab.href = generic; fab.target = "_blank"; fab.rel = "noopener";
    foot.href = generic; foot.target = "_blank"; foot.rel = "noopener";
  }
})();

/* ---------- Reviews ---------- */
const track = $("#reviewsTrack");
const reviewHtml = r => `
  <article class="review">
    <div class="review__src"><span><i class="${r.src}">${r.src === "wa" ? "✓" : "♡"}</i>${r.who}</span><b>★★★★★</b></div>
    <p class="review__text">${r.text}</p>
  </article>`;
track.innerHTML = REVIEWS.map(reviewHtml).join("") + REVIEWS.map(reviewHtml).join("");

/* ---------- Nav ---------- */
const burger = $("#burger"), nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
$$("#nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false");
}));

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
$$(".reveal").forEach(el => io.observe(el));

/* ---------- Misc ---------- */
if (location.search.includes("noanim")) $$(".reveal").forEach(el => el.classList.add("is-in"));
$("#year").textContent = new Date().getFullYear();
{ const d = state(); setPreview(pieceFor(d.product, d.size, d.occasion), true); }
render();
