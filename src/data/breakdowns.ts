// Claim-check breakdowns. Each entry is one public communication (a post,
// statement, etc.) read line by line. Add a new entry to publish a new
// breakdown — the /claims index and /claims/[slug] pages pick it up
// automatically. Newest `date` sorts first.

export interface RebuttalItem {
  /** Two-digit ordinal, e.g. "01". */
  n: string;
  /** The verbatim passage being answered. */
  quote: string;
  /** Short verdict shown as a pill. */
  verdict: string;
  /** Colour key: spin = coral, fair = teal (a point that holds), unsupported = slate. */
  tone: 'spin' | 'fair' | 'unsupported';
  /** Optional link out to the page that does the detailed work. */
  link?: { href: string; label: string };
  /** Response body as trusted HTML (may use <strong>, <em>, &mdash; etc.). */
  body: string;
}

export interface Breakdown {
  /** URL slug under /claims/. */
  slug: string;
  /** Short label for nav/cards. */
  navTitle: string;
  /** Page H1. */
  title: string;
  /** ISO date of the communication (used for sorting + display). */
  date: string;
  dateLabel: string;
  /** One-line summary for the index card. */
  summary: string;
  /** Standfirst HTML under the H1. */
  intro: string;
  post: {
    author: string;
    role?: string;
    source?: string;
    /** Verbatim body, one entry per paragraph. */
    paragraphs: string[];
    /** Optional note describing an attached image (we do not reproduce it). */
    attachment?: string;
    /** Public path to the full screenshot, if shown. */
    screenshotFull?: string;
    /** Public path to a text-only crop, if shown. */
    screenshotText?: string;
    /** Alt text for the screenshot. */
    screenshotAlt?: string;
  };
  /** Optional dark callout (e.g. about an attached image). HTML. */
  asideTitle?: string;
  aside?: string;
  /** Heading shown above the line-by-line section. */
  breakdownHeading: string;
  items: RebuttalItem[];
}

export const breakdowns: Breakdown[] = [
  {
    slug: 'krieg-mega-tip',
    navTitle: "Mayor Krieg: “Is the hype real?”",
    title: "Breaking down the mayor's post",
    date: '2025-09-01',
    dateLabel: 'September 2025',
    summary:
      'The mayor’s “is the hype real?” post — open mind, strictest regulations, just doing the research — read line by line.',
    intro:
      'Much of the public case for the proposed Blakebrook landfill was made in a single Facebook post by Lismore mayor Steve Krieg. It is reproduced in full below, then read line by line. Where the reasoning holds, we say so; where reassurance stands in for evidence, we show why.',
    post: {
      author: 'Steve Krieg',
      role: 'Mayor, Lismore City Council',
      source: 'Public Facebook post, 2025',
      screenshotFull: '/media/krieg-post-full.jpg',
      screenshotText: '/media/krieg-post-text.jpg',
      screenshotAlt:
        "Screenshot of Mayor Steve Krieg's public Facebook post about the proposed regional waste facility.",
      attachment:
        'Attached to the post: a generic infographic titled “Anatomy of a Landfill and Resource Recovery Facility.” We discuss it below but do not reproduce it.',
      paragraphs: [
        'Is the hype around the so called ‘mega tip’ real?',
        'Firstly, what is a mega tip? A regional waste facility in our LGA would take about 60,000 tonnes per year, from four neighbouring councils, if they enter into a partnership, whilst metro landfills take over 200,000 tonnes every year, many of which are in residential areas.',
        'The science and regulations in NSW behind new landfill is the strictest in the country. It is sad that some elected officials have already closed their minds to options to deal with our waste. How can councillors make informed and educated decisions in the best interests of our whole LGA if some are already actively campaigning against a potential site without even being prepared to support the studies to determine viability.',
        'The reality is that we need a solution. And we need to do the research. That is the responsible thing to do. Traffic impact, environmental reports and feasibility studies need to be completed. Is Blakebrook suitable? We simply cannot make an informed decision until these studies are done. These are responsible generational decisions that most councillors are prepared to make.',
        'The hype of 400 truck movements per day, waterways being contaminated, environmental impacts being devastated is unknown until further research is done.',
        'Personally, I am going to keep an open mind as all councillors should.',
        'The image attached is the technology that is required to create a new landfill. Not as simple as digging a hole and burying waste!',
      ],
    },
    asideTitle: 'About that attached image',
    aside:
      'The picture the post calls “the technology that is required” is a glossy, generic infographic — an American “Anatomy of a Landfill <em>and Resource Recovery Facility</em>” promotional graphic. It is not an engineering plan for Blakebrook: not its geology, not its catchment, not its design. No design for Blakebrook has been published. A borrowed, out-of-region illustration is being used to suggest the technology is settled and the question answered.',
    breakdownHeading: 'Seven sentences, weighed',
    items: [
      {
        n: '01',
        verdict: 'Wrong yardstick',
        tone: 'spin',
        quote:
          'A regional waste facility in our LGA would take about 60,000 tonnes per year… whilst metro landfills take over 200,000 tonnes every year, many of which are in residential areas.',
        link: { href: '/numbers', label: 'See the tonnage comparison' },
        body:
          'Tonnage is not the test of whether a site is safe. A smaller load in a high-rainfall, flood-influenced catchment can carry more risk than a much larger one on a dry, deep-watertable site. Comparing raw tonnes against Sydney landfills tells you nothing about whether <strong>Blakebrook</strong> is suitable — it just makes the number sound small.',
      },
      {
        n: '02',
        verdict: 'Reassurance by assertion',
        tone: 'spin',
        quote:
          'The science and regulations in NSW behind new landfill is the strictest in the country.',
        link: { href: '/numbers', label: 'How liner life depends on heat' },
        body:
          'Strict rules lower risk; they do not zero it. Engineered liners have a service life that shortens as temperature rises, and protection depends on decades of monitoring, maintenance and enforcement. “Strictest in the country” is an assurance, not a guarantee that this site, built and maintained over fifty years, will not fail.',
      },
      {
        n: '03',
        verdict: 'Reframes scrutiny',
        tone: 'unsupported',
        quote:
          'It is sad that some elected officials have already closed their minds… actively campaigning against a potential site without even being prepared to support the studies to determine viability.',
        link: { href: '/critique', label: 'On process and framing' },
        body:
          'Questioning a site — and asking whether public money should be spent investigating it — is part of due process, not a closed mind. This framing casts scrutiny as irresponsibility. People can support good waste decisions <em>and</em> doubt that this particular quarry is the right place, without being accused of obstruction.',
      },
      {
        n: '04',
        verdict: 'Reasonable, as far as it goes',
        tone: 'fair',
        quote:
          'We need to do the research… We simply cannot make an informed decision until these studies are done.',
        link: { href: '/proposal', label: "What's actually proposed" },
        body:
          'This part is fair. Traffic, environmental and feasibility studies <em>should</em> precede any decision, and saying so is responsible. The live community concern is the reverse risk — that a site is effectively chosen, and the public brought along, before genuine consultation has happened.',
      },
      {
        n: '05',
        verdict: "Can't be hype and an open question at once",
        tone: 'spin',
        quote:
          'The hype of 400 truck movements per day, waterways being contaminated… is unknown until further research is done. Personally, I am going to keep an open mind.',
        link: { href: '/numbers', label: 'The real truck math' },
        body:
          'You cannot label the community’s concerns “hype” in one breath and claim an open mind in the next. On the trucks specifically, the honest figure is neither 400 nor zero — roughly 30–50 movements a day, a real local change worth assessing. Waterway risk in a high-rainfall catchment is a legitimate question, not hype.',
      },
      {
        n: '06',
        verdict: 'Borrowed reassurance',
        tone: 'spin',
        quote:
          'The image attached is the technology that is required to create a new landfill. Not as simple as digging a hole and burying waste!',
        link: { href: '/proposal', label: 'What we actually know' },
        body:
          'The attached image is a generic, out-of-region promotional infographic — not a plan for Blakebrook. Showing a polished picture of an idealised facility implies the engineering is decided and the risks handled. They are not: no Blakebrook design exists yet. A picture is standing in for a plan that hasn’t been made.',
      },
    ],
  },
];

export const breakdownsByDate = [...breakdowns].sort((a, b) =>
  a.date < b.date ? 1 : -1
);
