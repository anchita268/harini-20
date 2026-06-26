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
  bottomRight: "INSIDE PAGES:\nTIMELINE, THE MEMORIES,\nTHE YAP SESSIONS",
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
  { src: "/photos/diary-09.jpg", caption: "NUS", rotate: -3, tape: "gold" },
]; // 🖼️ Add more objects here for more polaroids — grid wraps automatically.

// Spread 5 — Film strip rolls (group photos in horizontal strips)
export const diaryFilmStrips = [
  {
    rollTitle: "ROLL 01 ",
    frames: [
      "/photos/film-01-1.jpg",
      "/photos/film-01-2.jpg",
      "/photos/film-01-3.jpg",
      "/photos/film-01-4.jpg",
      "/photos/film-01-5.jpg",
      "/photos/film-01-6.jpg",
      "/photos/film-01-7.jpg",
      "/photos/film-01-8.jpg",
      "/photos/film-01-9.jpg",
    ],
  },
  {
    rollTitle: "ROLL 02 ",
    frames: [
      "/photos/film-02-1.jpg",
      "/photos/film-02-2.jpg",
      "/photos/film-02-3.jpg",
      "/photos/film-02-4.jpg",
    ],
  },
  {
    rollTitle: "ROLL 03 ",
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
  { src: "/photos/collage-09.jpg", size: "md", rotate: -5, top: "73%", left: "90%" },
  { src: "/photos/collage-11.jpg", size: "lg", rotate: 5, top: "15%", left: "96%" },
  { src: "/photos/collage-12.jpg", size: "md", rotate: -6, top: "5%", left: "-20%" },
  { src: "/photos/collage-10.jpg", size: "sm", rotate: -5, top: "43%", left: "84%" },
  { src: "/photos/collage-13.jpg", size: "md", rotate: 5, top: "64%", left: "40%" },

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
  { src: "/photos/scrap-01.jpg", caption: "BDAY!", rotate: -3 },
  { src: "/photos/scrap-02.jpg", caption: "...", rotate: 2 },
  { src: "/photos/scrap-03.jpg", caption: "....", rotate: -1 },
  { src: "/photos/scrap-04.jpg", caption: "...", rotate: 4 },
  { src: "/photos/scrap-05.jpg", caption: "...", rotate: -4 },
  { src: "/photos/scrap-06.jpg", caption: "....", rotate: 3 },
]; // 🖼️ Freeform scrapbook strip — add more for a longer scroll.

// ----------------------------------------------------------------------------
// SPREAD 9 — 20 THINGS WE LOVE ABOUT YOU
// Keep this list at exactly 20 items if you want the "20 for 20" framing,
// but feel free to add or cut — the numbering updates itself.
// ----------------------------------------------------------------------------
export const twentyThings = [
  "You light up the room and make everything a 1000x more fun",
  "MEGA ULTRA HUGE GYAT",
  "The way you love making sure everyone in the room is having the best time",
  "You are spontaneous and always up for any plan whatsoever",
  "I love that you are always there to help me finish my last bite and rest of the buldak sauce.",
  "Love having someone to help me finish my potato corner and a friend in the west.",
  "You got the sense of style and clothes for us to steal",
  "You always have the best lore and tea to spill <3",
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
  intro: "FROM THE TWO MOST IMPORTANT, STUNNING, FABULOUS, JAW-DROPPING FRIENDS IN THE WORLD <3",
  qa: [
    {
      q: "happy 20th birthday jayyy I love you so much and I can’t believe that I’m not there to celebrate the day with you :( we’ll meet very soon and I’ll make up for it pinky!! I hope you have the best night ever and I hope your 20s are the most fun time ever I can’t wait to make more memories with you around the world I’m so lucky to have someone on the other side of the world always wishing the best for me and caring for me so much to the point you stay and listen to my rants despite the hour of the day in sg, you’re genuinely one of my platonic soulmates fr I can’t wait to experience life with you and watch you go through a lot of fun and special experiences!! You genuinely light up any room you walk into and make everything so much better, I always get so happy when you achieve something or experience something that makes you really happy bc you’re so deserving of every bit of it and I can’t wait for us to one day grow old and live in the same country again and have unlimited sleepovers I miss being one hour away from you and being attached to you throughout school I will forever hold on to those memories and tell everyone I meet about them, you’re made Singapore so so special to me and the fun we had there is genuinely irreplaceable and so are you, I physically cannot find another jay anywhere and you better not find another SK. I will hunt you down and kill you and blow up the new bitch you replace me with istg but anywayssss have the best time everrrr I love you and miss you very very much",
      a: "FROM SK",
    },
    {
      q: "HAPPY BIRTHDAY HARINI!!! It honestly feels like weve been friends since birth ive literally known you FOREVERRR. I am SO SO SO glad that bensy maam made u stay back that day to give me company while i packed up because I have no idea when and how else we wouldve become besties. I will ALWAYS cherish all the amazing and most random memories we have made over the years.. making paper stars for bunny’s card, YOGA PRACTICE! My brothers graduationn?! Going home after school, me using u as an excuse to stay longer when we went out ohmygodd we did SO MUCH random shit together. CHOIR ALSO!!! Having ice cream and noodles at seven eleven at the mrt and alll the times i brought u pasta and pav bhaji and waffles and the times we sat at the kindergarten playground during…",
      a: "FROM ANCHITA",
    },
  ],
};

// ----------------------------------------------------------------------------
// SPREAD 12 — BIRTHDAY MESSAGES (postcards from friends)
// Add one object per friend message. `stamp` is optional decorative text.
// ----------------------------------------------------------------------------
export const birthdayMessages = [
  {
    from: "RIDDHI!",
    message: "happy 20th birthday JAY!! I have known you for so many years now and it’s actually kinda crazy. I know we don’t see each other that often but when we do I know I’m gg to have a good time :3 I truly love being around you and making fun of SK. I also appreciate my fellow data science baddie (we can be unemployed together), I cannot wait to see you again queen. Have the best day ever and u better drink and dance ur heart out. Love you loads and see you soon unc :P",
    photo: "/photos/postcard-01.jpg", // 🖼️ PHOTO PLACEHOLDER (optional)
    stamp: "<3",
  },
  {
    from: "Shhreya",
    message: "HAPPY BDAY JAY!!! I camt believe I only got to know u recently because it feels like I have known u forever. Have the best day and year ahead and keep being the funny, cool, beautiful and amazinf person that you are. love you 💗",
    photo: "/photos/postcard-02.jpg", // 🖼️ PHOTO PLACEHOLDER (optional)
    stamp: "Shhreya",
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
