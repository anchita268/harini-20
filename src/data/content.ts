// ============================================================================
// HARINI'S 20th BIRTHDAY MAGAZINE — CONTENT FILE
// ----------------------------------------------------------------------------
// This is the ONLY file you need to touch to update text, captions, dates,
// and photo references. Every section of the website pulls from here.
//
// 📸 HOW TO ADD YOUR OWN PHOTOS:
// 1. Drop your image files into:  /public/photos/
// 2. Reference them below as:    "/photos/your-file-name.jpg"
// 3. Keep file names simple (no spaces) — e.g. "kindergarten-1.jpg"
// 4. Recommended sizes: portrait photos ~1000x1300px, landscape ~1300x1000px,
//    square ~1200x1200px. JPG or PNG both work.
//
// Every place that says `src: "/photos/..."` is a PHOTO PLACEHOLDER.
// Just swap the file name — nothing else needs to change.
// ============================================================================

export const siteMeta = {
  name: "Harini",
  age: 20,
  issueLine: "VOL. I — NO. 20",
  tagline: "THE BIRTHDAY ISSUE",
  bestFriendName: "Anchita and SK", // change to your own name if you want it printed
};

// ----------------------------------------------------------------------------
// SPREAD 1 — COVER
// Fake headlines that wrap around the big cover photo, like a real magazine.
// ----------------------------------------------------------------------------
export const coverHeadlines = {
  topLeft: "EXCLUSIVE: TWENTIETH BIRTHDAY\n SPECIAL",
  topRight: "<3",
  bottomLeft: "“MADE BY THE MOST SPECTACULAR, AMAZING\n SEXY, SMART AND THE BEST FRIENDS\n YOU COULD HAVE EVER ASKED FOR”",
  bottomRight: "INSIDE PAGES:\nTHE LORE, THE AWARDS,\nTHE YAP SESSIONS",
  coverLine: "PLUS: 20 REASONS WE HAVEN'T REPLACED HER (YET)",
  // 🖼️ PHOTO PLACEHOLDER — main cover cutout photo of Harini.
  // Best results: a fun, full-body or three-quarter shot with plain-ish
  // background so it reads like a magazine cutout.
  coverPhoto: "/photos/cover-main.jpg",
};

// ----------------------------------------------------------------------------
// SPREAD 2 — EDITOR'S LETTER
// ----------------------------------------------------------------------------
export const editorsLetter = {
  kicker: "FROM THE MOST GENEROUS AND LOVING FRIENDS IN THE WORLD",
  headline: "Dear Jay,",
  body: [
    "HAPPY TWENTIETH BIRTHDAY! We're so happy to celebrate this birthday with you and become uncs together. I hope you have the best party ever and enjoy your twenties with us travelling around Europe, working, graduating, getting married, having 18 kids, becoming sugar mommies to Anchita and SK and so much more.",
    "We are so lucky to have been friends with you for so long. You have made every hangout so memorable and we cant wait for our kids to grow up and experience the same friendship we shared for the past decade. You're one of the funniest, most beautiful and talented people we've ever met.",
    "Anyone would be incredibly lucky to have you as their best friend but you are lowkey not allowed to have other best friends because we are more than enough. You dont need other hoes.",
  ],
  // 🖼️ PHOTO PLACEHOLDER — small candid photo near the editor's letter
  signaturePhoto: "/photos/editor-candid.jpg",
  handwrittenNote: "ANYWAYS, we take tips starting from the low, low price of $50 and Guzman y Gomez",
};

// ----------------------------------------------------------------------------
// SPREAD 3 — THE LORE (friendship timeline)
// Add/remove objects freely — the timeline re-renders automatically.
// ----------------------------------------------------------------------------
export const loreTimeline = [
  {
    year: "2017",
    title: "The shredded Photo Collage",
    text: "Bensy ma'am asked you to stay back for me and somehow we ended up bunking an event together?!?",
    photo: "/photos/lore-2017.jpeg", // 🖼️ PHOTO PLACEHOLDER
  },
  {
    year: "2018",
    title: "SK joins GIIS",
    text: "Me randomly asking you to study in the library ended up with years of the funniest memories all over tampines hub.",
    photo: "/photos/lore-2018.jpg", // 🖼️ PHOTO PLACEHOLDER
  },
  {
    year: "2019",
    title: "8th Grade: Our prime",
    text: "Hanging out after school, playing games in class, and making tik toks in the washroom, OBSESSING OVER BTS <3, and our FIRST BOYFRIENDS!",
    photo: "/photos/lore-2019.jpg", // 🖼️ PHOTO PLACEHOLDER
  },
  {
    year: "2022",
    title: "WHy did you have to leave GIIS",
    text: "First trip together to Batam and stressing over boards together D:",
    photo: "/photos/lore-2022.jpg", // 🖼️ PHOTO PLACEHOLDER
  },
  {
    year: "2024",
    title: "FINALLY LEGAL",
    text: "Lots of drinking, our first time clubbing!! sleepovers and much more",
    photo: "/photos/lore-2023.jpg", // 🖼️ PHOTO PLACEHOLDER
  },
  {
    year: "2024",
    title: "Your first and only green flag!",
    text: "You met Druv YAYYY",
    photo: "/photos/lore-2024.jpeg", // 🖼️ PHOTO PLACEHOLDER
  },
  {
    year: "2026",
    title: "Twenty. Twenty!! TWENTY!!!",
    text: "OUR FIRST SOLO TRIP TO EUROPE!!!!!",
    photo: "/photos/lore-2026.jpg", // 🖼️ PHOTO PLACEHOLDER
  },
];

// ----------------------------------------------------------------------------
// SPREADS 4–8 — PHOTO DIARY
// Add as many photos as you want to each spread's array — layouts will
// keep working with more or fewer photos. Each item needs at minimum
// a `src` and a `caption`. `rotate` and `tape` are optional styling hints.
// ----------------------------------------------------------------------------

// Spread 4 — Polaroid wall
export const diaryPolaroids = [
  { src: "/photos/diary-01.jpg", caption: "first time at marquee!", rotate: -3, tape: "rouge" },
  { src: "/photos/diary-02.jpg", caption: "beach day <3", rotate: 2, tape: "moss" },
  { src: "/photos/diary-03.jpg", caption: "HHN", rotate: -1, tape: "dust" },
  { src: "/photos/diary-04.jpg", caption: "I AM SOBER!!!", rotate: 4, tape: "gold" },
  { src: "/photos/diary-05.jpg", caption: "#we miss aleia", rotate: -2, tape: "denim" },
  { src: "/photos/diary-06.jpg", caption: "batam!!", rotate: 3, tape: "rouge" },
  { src: "/photos/diary-07.jpg", caption: "anchita's house!!", rotate: -4, tape: "moss" },
  { src: "/photos/diary-08.jpg", caption: "...", rotate: 1, tape: "dust" },
]; // 🖼️ Add more objects here for more polaroids — grid wraps automatically.

// Spread 5 — Film strip rolls (group photos in horizontal strips)
export const diaryFilmStrips = [
  {
    rollTitle: "ROLL 01 — SUMMER, UNDATED",
    frames: [
      "/photos/film-01-1.jpg",
      "/photos/film-01-2.jpg",
      "/photos/film-01-3.jpg",
      "/photos/film-01-4.jpg",
    ],
  },
  {
    rollTitle: "ROLL 02 — THE TRIP WE DON'T DISCUSS",
    frames: [
      "/photos/film-02-1.jpg",
      "/photos/film-02-2.jpg",
      "/photos/film-02-3.jpg",
      "/photos/film-02-4.jpg",
    ],
  },
  {
    rollTitle: "ROLL 03 — BIRTHDAYS, A RETROSPECTIVE",
    frames: [
      "/photos/film-03-1.jpg",
      "/photos/film-03-2.jpg",
      "/photos/film-03-3.jpg",
      "/photos/film-03-4.jpg",
    ],
  },
]; // 🖼️ Add a new object for a new "roll" of film, or add/remove frames.

// Spread 6 — Layered collage (editorial cluster)
export const diaryCollage = [
  { src: "/photos/collage-01.jpg", size: "lg", rotate: -2, top: "4%", left: "6%" },
  { src: "/photos/collage-02.jpg", size: "sm", rotate: 4, top: "2%", left: "52%" },
  { src: "/photos/collage-03.jpg", size: "md", rotate: -4, top: "32%", left: "30%" },
  { src: "/photos/collage-04.jpg", size: "sm", rotate: 6, top: "8%", left: "78%" },
  { src: "/photos/collage-05.jpg", size: "md", rotate: 3, top: "55%", left: "4%" },
  { src: "/photos/collage-06.jpg", size: "lg", rotate: 1, top: "48%", left: "58%" },
  { src: "/photos/collage-07.jpg", size: "sm", rotate: -6, top: "75%", left: "20%" },
  { src: "/photos/collage-08.jpg", size: "sm", rotate: 5, top: "78%", left: "70%" },
  { src: "/photos/collage-10.jpg", size: "sm", rotate: -5, top: "43%", left: "84%" },
  { src: "/photos/collage-09.jpg", size: "md", rotate: -5, top: "73%", left: "90%" },
  { src: "/photos/collage-11.jpg", size: "lg", rotate: 5, top: "15%", left: "96%" },
  { src: "/photos/collage-12.jpg", size: "md", rotate: 3, top: "55%", left: "02%" }

]; // 🖼️ size: "sm" | "md" | "lg" — top/left are % positions inside the collage canvas.

// Spread 7 — Caption-led editorial grid (looks like a fashion spread)
export const diaryEditorialGrid = [
  { src: "/photos/editorial-01.jpg", caption: "LOOK 01 — campus chaos, accessorised", credit: "candid, unposed, iconic anyway" },
  { src: "/photos/editorial-02.jpg", caption: "LOOK 02 — birthday dinner, take three", credit: "she changed outfits twice in the car" },
  { src: "/photos/editorial-03.jpg", caption: "LOOK 03 — 6am airport, still serving", credit: "no sleep, full glam, unclear how" },
  { src: "/photos/editorial-04.jpg", caption: "LOOK 04 — 'casual' grocery run", credit: "there is no such thing as casual for her" },
  { src: "/photos/editorial-05.jpg", caption: "LOOK 05 — group project presentation fit", credit: "carried the entire team, in heels" },
  { src: "/photos/editorial-06.jpg", caption: "LOOK 06 — rooftop, golden hour, of course", credit: "main character lighting, every time" },
]; // 🖼️ Add as many "looks" as you want — grid re-flows automatically.

// Spread 8 — Scrapbook freeform (stickers, notes, mixed photo sizes)
export const diaryScrapbook = [
  { src: "/photos/scrap-01.jpg", caption: "exhibit A", rotate: -3 },
  { src: "/photos/scrap-02.jpg", caption: "exhibit B", rotate: 2 },
  { src: "/photos/scrap-03.jpg", caption: "the evidence keeps coming", rotate: -1 },
  { src: "/photos/scrap-04.jpg", caption: "your honor, I rest my case", rotate: 4 },
  { src: "/photos/scrap-05.jpg", caption: "unrelated but iconic", rotate: -4 },
  { src: "/photos/scrap-06.jpg", caption: "filed under: chaos", rotate: 3 },
]; // 🖼️ Freeform scrapbook strip — add more for a longer scroll.

// ----------------------------------------------------------------------------
// SPREAD 9 — 20 THINGS WE LOVE ABOUT YOU
// Keep this list at exactly 20 items if you want the "20 for 20" framing,
// but feel free to add or cut — the numbering updates itself.
// ----------------------------------------------------------------------------
export const twentyThings = [
  "You light up the room and make everything a 1000x more fun",
  "You remember everyone's order. Every single time.",
  "Your group chat voice notes are 40% information, 60% sound effects.",
  "You've never met a dance floor you didn't immediately claim.",
  "You cry at commercials but somehow stay calm in actual emergencies.",
  "Your read of any room, any vibe, any person, in under ten seconds.",
  "You once planned an entire trip in the time it took me to choose a font.",
  "You give the best unsolicited advice — and it's always right, annoyingly.",
  "Your laugh is the loudest one in any room, and we wouldn't change that.",
  "You text 'are you up' at 1am and somehow it's never actually urgent.",
  "You've worn the same energy to a funeral and a foam party. Respect.",
  "You make ordinary Tuesdays feel like events.",
  "You remember birthdays better than the actual birthday person.",
  "Your fashion sense has never once asked for permission.",
  "You apologize badly but you show up perfectly.",
  "You've never let me sit alone with a bad feeling for too long.",
  "You turn waiting rooms into stand-up comedy sets.",
  "Your playlists are unhinged and somehow always correct.",
  "You hype up strangers like they're your best friend too.",
  "Twenty years of knowing you and you still surprise me weekly.",
];

// ----------------------------------------------------------------------------
// SPREAD 10 — THE HARINI AWARDS
// ----------------------------------------------------------------------------
export const harinAwards = [
  {
    title: "Most Likely To Start Chaos",
    blurb: "Walked into the room and the room never recovered.",
  },
  {
    title: "CEO of Last-Minute Plans",
    blurb: "Founded, funded, and fully executed at 11:47pm.",
  },
  {
    title: "Professional Yapper, Lifetime Achievement",
    blurb: "Forty-minute story. Zero regrets. Worth every second.",
  },
  {
    title: "Main Character Energy Award",
    blurb: "Everyone else is just supporting cast and she knows it.",
  },
  {
    title: "Most Likely To Cry Laughing In Public",
    blurb: "No context needed. We've all been there with her.",
  },
  {
    title: "Best Use Of A Group Chat",
    blurb: "Single-handedly kept it alive through three timezone changes.",
  },
  {
    title: "Most Convincing Last-Minute Apology",
    blurb: "Still don't know how she talks her way out of everything.",
  },
  {
    title: "Hall of Fame: Showing Up Anyway",
    blurb: "Tired, late, underslept — never once actually absent.",
  },
];

// ----------------------------------------------------------------------------
// SPREAD 11 — LETTERS FROM ANCHITA AND SK
// ----------------------------------------------------------------------------
export const interview = {
  intro: "INTRO INTRO",
  qa: [
    {
      q: "How did you two meet?",
      a: "Kindergarten. She took my crayon. I decided that meant we were destined to be friends, and I have not been wrong about anything since.",
    },
    {
      q: "One word to describe Harini?",
      a: "Unpredictable. In the best, most exhausting, most loveable way.",
    },
    {
      q: "What's a memory you'll never tell anyone else?",
      a: "Absolutely not. Some lore stays in the vault.",
    },
    {
      q: "Best trip you've taken together?",
      a: "The one with four hours' planning notice and zero regrets. You know the one.",
    },
    {
      q: "What's Harini like at 2am?",
      a: "Somehow more coherent than most people at 2pm. Concerning, honestly.",
    },
    {
      q: "What do you hope for her in this new decade?",
      a: "Everything she's chasing, and the chaos to keep chasing it her own way.",
    },
  ],
};

// ----------------------------------------------------------------------------
// SPREAD 12 — BIRTHDAY MESSAGES (postcards from friends)
// Add one object per friend message. `stamp` is optional decorative text.
// ----------------------------------------------------------------------------
export const birthdayMessages = [
  {
    from: "Me",
    message: "Twenty years of you and I still laugh the hardest with you. Here's to the next twenty being even louder.",
    photo: "/photos/postcard-01.jpg", // 🖼️ PHOTO PLACEHOLDER (optional)
    stamp: "AIRMAIL — BEST FRIEND CLASS",
  },
  {
    from: "Friend Name",
    message: "Happiest birthday to the loudest, funniest, most main-character person I know. Never change.",
    photo: "/photos/postcard-02.jpg", // 🖼️ PHOTO PLACEHOLDER (optional)
    stamp: "FROM THE GROUP CHAT",
  },
  {
    from: "Friend Name",
    message: "You make every plan better just by being there. Happy 20th — go be chaotic, you earned it.",
    photo: "/photos/postcard-03.jpg", // 🖼️ PHOTO PLACEHOLDER (optional)
    stamp: "HAND DELIVERED, NO STAMP NEEDED",
  },
  {
    from: "Friend Name",
    message: "Twenty looks good on you. So does literally everything else, annoyingly.",
    photo: "/photos/postcard-04.jpg", // 🖼️ PHOTO PLACEHOLDER (optional)
    stamp: "SPECIAL DELIVERY",
  },
]; // 🖼️ Edit `from` and `message`, replace photos, or duplicate the block for more.

// ----------------------------------------------------------------------------
// SPREAD 13 — MEMORY WALL (large freeform scrapbook collage)
// A bigger pool of photos than the diary spreads — this is the "everything"
// wall. Mix in duplicates from earlier spreads or all-new ones.
// ----------------------------------------------------------------------------
export const memoryWall = [
  "/photos/wall-01.jpg", "/photos/wall-02.jpg", "/photos/wall-03.JPG", "/photos/wall-04.jpg",
  "/photos/wall-05.jpg", "/photos/wall-06.jpg", "/photos/wall-07.jpg", "/photos/wall-08.jpg",
  "/photos/wall-09.jpg", "/photos/wall-10.jpg", "/photos/wall-11.jpg", "/photos/wall-12.jpg",
  "/photos/wall-13.jpg", "/photos/wall-14.jpg", "/photos/wall-15.jpg", "/photos/wall-16.jpg",
  "/photos/wall-17.jpg", "/photos/wall-18.jpg", "/photos/wall-19.jpg", "/photos/wall-20.jpg",
]; // 🖼️ PHOTO PLACEHOLDERS — add/remove freely, the wall grid adjusts automatically.

// ----------------------------------------------------------------------------
// SPREAD 14 — BACK COVER
// ----------------------------------------------------------------------------
export const backCover = {
  // 🖼️ PHOTO PLACEHOLDER — final elegant closing photo
  photo: "/photos/back-cover.jpg",
  closingLine: "To twenty years of you, and every chaotic, loud, unforgettable year still ahead.",
  signOff: "Happy 20th, Harini. I love you. Now go be insufferable about it.",
  issueFooter: "END OF ISSUE — SEE YOU NEXT YEAR FOR VOL. II",
};
