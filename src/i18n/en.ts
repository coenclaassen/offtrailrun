export const en = {
  locale: "en",

  seo: {
    home: {
      title: "Off trail run in Eindhoven",
      description:
        "Join a social running event in Eindhoven where running, map navigation, and route choice come together.",
    },
    start: {
      title: "Orienteering basics for runners",
      description:
        "Learn how orienteering works: map symbols, compass use, route choice, and how to find controls while running.",
    },
  },

  nav: {
    languageSwitch: {
      en: "EN",
      nl: "NL",
    },
  },

  hero: {
    title: ["Run hard.", "Think fast."],
    subtitle: ["When the trail runs out, ", "make your own way."],
    button: "Discover the runs",
    scrollLabel: "Discover Off Trail Run",
  },

  discover: {
    title: ["Outrun", "the obvious."],
    body: "A map, a forest and infinite ways through. Pick your line, take the shortcut, get muddy, make mistakes and do things you’d never do on a normal run.",
  },

  vibe: {
    title: ["No route.", "Better stories."],
    body: ["Wrong turns, bold shortcuts, near misses.", "Share the stories afterwards."],
    images: ["Runner with a map", "Runners in the forest", "Mud-covered running shoes", "Runner in motion", "Runners after a run"],
  },

  steps: {
    title: "What you’re in for.",
    items: [
      {
        label: "01 /",
        imageAlt: "Map held during an off-trail run",
        title: "Claim your map.",
        body: "Pick a date. We’ll print your map.",
      },
      {
        label: "02 /",
        imageAlt: "Runner navigating through the forest",
        title: "Think. Run. Adapt.",
        body: "Map in hand. Legs on fire. Navigate from control to control at speed.",
      },
      {
        label: "03 /",
        imageAlt: "Runner choosing a route through the forest",
        title: "Leave the trail behind.",
        body: "Trails, shortcuts, bushes, wrong turns. Fastest time wins. Catch your breath and see who found the best line.",
      },
    ],
  },

  events: {
    title: "Events",
    button: "Register",
    city: "Eindhoven",
  },

  faq: {
    title: "Questions people ask",
    items: [
      {
        question: "Who is this for?",
        paragraphs: ["Runners who want something different. You don’t need experience or natural navigation talent. Curiosity and enthusiasm are enough."],
      },
      {
        question: "What does it cost?",
        paragraphs: ["Your first two runs are free. After that, it’s €20/year to cover maps, printing, course preparation, and forest access. We organise 12 runs a year."],
      },
      {
        question: "Do I need experience or understand the map first?",
        paragraphs: ["No. We’ll cover the essentials before the start. Then you head into the forest with a map and figure things out. Want a head start?"],
        link: {
          label: "Read the basics →",
          href: "/start",
        },
      },
      {
        question: "Do I need to be fast or super fit?",
        paragraphs: ["Speed helps, but it’s not only about speed. Navigation and route choice matter too. Run it hard or take your time."],
      },
      {
        question: "How long does it take?",
        paragraphs: ["Anywhere from 30 minutes to 90 minutes. Navigate well and run fast, and you’ll be back quickly. Make a few mistakes and it takes longer."],
      },
      {
        question: "What if I get lost or mess it up?",
        paragraphs: ["Make a mistake? It happens. Reset, learn fast, keep moving. If you get stuck or there’s an emergency, call the number on your map."],
      },
      {
        question: "What if I use GPS or follow someone?",
        paragraphs: ["Use GPS to record your run, not to navigate. Follow the map, not another runner: not everyone runs the same course. Don’t want to run alone? Tell us and run as a pair with the same map and course."],
      },
      {
        question: "Why does registration close?",
        paragraphs: ["We build the course, set out the controls and print a map for every runner. To do that, we need to know who’s coming one week before."],
      },
      {
        question: "Who makes this happen?",
        paragraphs: ["You cannot just pick a forest and start running off trail. Forest access, map making, course setting and getting runners to show up take a group effort. Much of that work happens in collaboration with KOVZ and other clubs."],
      },
      {
        question: "What should I bring?",
        paragraphs: ["Forest-proof running gear. Shoes with grip and long socks or tights help when the best line goes through the bushes. If it’s wet, bring dry clothes and a towel. If it’s hot, bring enough to drink."],
      },
      {
        question: "Will there be a bag drop?",
        paragraphs: ["Yes. You can safely leave your bag and extra layers while you’re out running."],
      },
    ],
  },

  start: {
    intro: {
      title: "Finding your way starts here.",
      paragraphs: [
        "Running with a map is simpler than it sounds. Learn the basics, then get out there.",
      ],
      mobileParagraphs: ["Running with a map is simpler than it sounds. Learn the basics, then get out there."],
    },
    mapStrip: {
      imageLabel: "Orienteering map detail",
    },
    mapBasics: {
      title: "Map basics",
      paragraphs: [
        "Your map shows paths, water, forest, hills, and the course. Find the controls in order. How you move between them is your choice.",
      ],
      mobileParagraphs: ["Your map shows paths, water, forest, hills, and the course. Find the controls in order. How you move between them is your choice."],
      courseRows: [
        {
          key: "startTriangle",
          visualLabel: "Start triangle",
          description: "Start",
          mobileDescription: "Start",
          info: "This is where your course begins. From here, you start navigating.",
          mobileInfo: "Begin navigation here.",
        },
        {
          key: "controlCircle",
          visualLabel: "Control circle",
          description: "Control point",
          mobileDescription: "Control point",
          info: "Marked in the terrain with a flag. Find each control point in order: 1, 2, 3, etc.",
          mobileInfo: "Marked in the terrain with a flag. Find each control point in order.",
        },
        {
          key: "doubleCircle",
          visualLabel: "Double circle",
          description: "Finish",
          mobileDescription: "Finish",
          info: "This is where the course ends. Catch your breath, compare routes, and see who found the best line.",
          mobileInfo: "Fastest time wins.",
        },
      ],
    },
    mapColors: {
      title: "Map colors",
      paragraphs: ["Colors show the type of terrain."],
      mobileParagraphs: ["Colors show the type of terrain."],
      rows: [
        {
          key: "openLand",
          visualLabel: "Open land",
          description: "Open land",
          explanation: "Fast and easy to run through.",
        },
        {
          key: "openForest",
          visualLabel: "Open forest",
          description: "Open forest",
          explanation: "Forest you can usually move through well.",
        },
        {
          key: "denseForest",
          visualLabel: "Dense forest",
          description: "Dense forest",
          explanation: "Slower to move through. Often better to go around.",
        },
        {
          key: "water",
          visualLabel: "Water",
          description: "Water",
          explanation: "Lakes, ponds, streams, ditches, or wet areas.",
        },
        {
          key: "scatteredTrees",
          visualLabel: "Open land with scattered trees/bushes",
          description: "Open land with scattered trees/bushes",
          explanation: "Mostly open, but with trees or bushes in the terrain.",
        },
        {
          key: "cultivatedLand",
          visualLabel: "Cultivated land",
          description: "Cultivated land",
          explanation: "Fields or planted areas. Do not enter.",
        },
        {
          key: "forbiddenArea",
          visualLabel: "Forbidden area",
          description: "Forbidden area",
          explanation: "Typically private land. Do not enter.",
        },
      ],
    },
    mapSymbols: {
      title: "Map symbols",
      paragraphs: ["Symbols show features on the map."],
      mobileParagraphs: ["Symbols show features on the map."],
      visibleRows: [
        { key: "road", illustrationLabel: "Road illustration", symbolLabel: "Road symbol", description: "Road" },
        { key: "dirtRoad", illustrationLabel: "Dirt road illustration", symbolLabel: "Dirt road symbol", description: "Dirt road" },
        { key: "pavedArea", illustrationLabel: "Paved area illustration", symbolLabel: "Paved area symbol", description: "Paved area" },
        { key: "path", illustrationLabel: "Path illustration", symbolLabel: "Path symbol", description: "Path" },
        { key: "stream", illustrationLabel: "Stream illustration", symbolLabel: "Stream symbol", description: "Stream" },
        { key: "passableFence", illustrationLabel: "Passable fence illustration", symbolLabel: "Passable fence symbol", description: "Passable fence" },
        { key: "building", illustrationLabel: "Building illustration", symbolLabel: "Building symbol", description: "Building" },
      ],
      hiddenRows: [
        { key: "uncrossableWater", illustrationLabel: "Uncrossable water illustration", symbolLabel: "Uncrossable water symbol", description: "Uncrossable water" },
        { key: "knoll", illustrationLabel: "Knoll illustration", symbolLabel: "Knoll symbol", description: "Knoll" },
        { key: "pitDepression", illustrationLabel: "Pit, small depression illustration", symbolLabel: "Pit, small depression symbol", description: "Pit, small depression" },
        { key: "manMadeFeatures", illustrationLabel: "Prominent man-made features illustration", symbolLabel: "Prominent man-made features symbol", description: "Prominent man-made features" },
        { key: "railway", illustrationLabel: "Railway illustration", symbolLabel: "Railway symbol", description: "Railway" },
        { key: "wall", illustrationLabel: "Wall illustration", symbolLabel: "Wall symbol", description: "Wall" },
        { key: "powerline", illustrationLabel: "Major/small powerline illustration", symbolLabel: "Major/small powerline symbol", description: "Major/small powerline" },
        { key: "smallTower", illustrationLabel: "Small tower illustration", symbolLabel: "Small tower symbol", description: "Small tower" },
        { key: "cliff", illustrationLabel: "Cliff illustration", symbolLabel: "Cliff symbol", description: "Cliff" },
        { key: "ruin", illustrationLabel: "Ruin illustration", symbolLabel: "Ruin symbol", description: "Ruin" },
        { key: "marsh", illustrationLabel: "Small/large marsh illustration", symbolLabel: "Small/large marsh symbol", description: "Small/large marsh" },
        { key: "boulder", illustrationLabel: "Boulder illustration", symbolLabel: "Boulder symbol", description: "Boulder" },
        { key: "boulderField", illustrationLabel: "Boulder field illustration", symbolLabel: "Boulder field symbol", description: "Boulder field" },
      ],
      toggleMoreLabel: "Show more symbols",
    },
    contour: {
      title: "Contour lines",
      paragraphs: [
        "Brown lines show elevation. Imagine a mountain made of stacked pancakes. Each line is the shape of a pancake level.",
      ],
      mobileParagraphs: ["Brown lines show elevation. Imagine a mountain made of stacked pancakes. Each line is the shape of a pancake level."],
      imageLabel: "Contour line illustration",
      closingParagraphs: [],
    },
    compass: {
      title: "Use a compass",
      paragraphs: [],
      rows: [
        {
          imageSrc: "/images/start/compass_setDirection.svg",
          title: "Place the compass edge from A to B.",
          body: "",
          mobileBody: "Place the compass edge from A to B.",
        },
        {
          imageSrc: "/images/start/compass_alginNorth.svg",
          title: "Turn your body until the needle matches the north lines.",
          body: "",
          mobileBody: "Turn your body until the needle matches the north lines.",
        },
        {
          imageSrc: "/images/start/compass_move.svg",
          title: "Move that way. Keep the needle lined up.",
          body: "",
          mobileBody: "Move that way. Keep the needle lined up.",
        },
      ],
      closingParagraphs: [],
    },
    tryIt: {
      body: "A map changes everything when you’re in the forest. Reserve your map and try it on your next run.",
      mobileBody: "Ready to try it?",
      mobileSubtitle: "Reserve your map and join one of the upcoming runs.",
      mobileLink: "See events",
      link: "See events",
    },
  },

} as const;

type LocalizedValue<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: LocalizedValue<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: LocalizedValue<T[K]> }
      : T;

export type Translation = LocalizedValue<typeof en>;
