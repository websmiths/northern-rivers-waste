// Claim-check breakdowns. Each entry is one public communication (a post,
// statement, etc.) read line by line. Add a new entry to publish a new
// breakdown — the /claims index and /claims/[slug] pages pick it up
// automatically. Newest `date` sorts first.

import type { Scorecard } from './scorecard';

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
  /** Per-claim scorecard — scores the claim/language, never the author. */
  scores?: Scorecard;
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
    /** Optional note describing an attached image (text-only fallback). */
    attachment?: string;
    /** Optional attached image, shown as the object of critique with a caption. */
    attachmentImage?: { src: string; alt: string; caption: string };
    /** Public path to the full screenshot, if shown. */
    screenshotFull?: string;
    /** Rendered height (px) of the full screenshot at 470px wide. Defaults to 960. */
    screenshotFullH?: number;
    /** Public path to a text-only crop, if shown. */
    screenshotText?: string;
    /** Rendered height (px) of the text crop at 470px wide. Defaults to 852. */
    screenshotTextH?: number;
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
    slug: 'waters-myth-busting',
    navTitle: 'Cllr Waters: “Myth busting”',
    title: 'Breaking down the “myth-busting” post',
    date: '2025-09-20',
    dateLabel: 'September 2025',
    summary:
      'A councillor’s “myth-busting” post debunks the imported infographic — much of it holds up, but a few claims outrun the evidence. Read line by line.',
    intro:
      'Not every claim-check answers the case <em>for</em> the landfill. Lismore councillor Virginia Waters posted a “myth-busting” rebuttal that takes apart the same imported infographic the mayor shared. We read it exactly as we read his — crediting what holds, and flagging where rhetoric or an unsourced figure outruns the evidence.',
    post: {
      author: 'Virginia Waters',
      role: 'Councillor, Lismore City Council',
      source: 'Public Facebook post, 2025',
      screenshotFull: '/media/waters-post-full.jpg',
      screenshotFullH: 877,
      screenshotText: '/media/waters-post-text.jpg',
      screenshotTextH: 556,
      screenshotAlt:
        'Screenshot of Councillor Virginia Waters’ public Facebook “myth busting” post about the proposed Blakebrook landfill, with the imported American landfill infographic attached.',
      attachmentImage: {
        src: '/media/attached-diagram.jpg',
        alt:
          'A generic American promotional infographic titled “Anatomy of a Landfill and Resource Recovery Facility,” showing an idealised cutaway with labelled liners, pipes and recovery systems.',
        caption:
          'The image attached to this post: the <strong>same</strong> imported American “Anatomy of a Landfill and Resource Recovery Facility” graphic the mayor shared — reproduced here as the thing being debunked, not as a Blakebrook plan.',
      },
      paragraphs: [
        'MYTH BUSTING:',
        'Misinformation is currently being circulated by some councillors using a generic American landfill infographic as though it reflects what is proposed for Blakebrook Quarry or even Australian standards.',
        'It does not.',
        'The image is not a design for Blakebrook, nor is it evidence the site is suitable for a regional landfill facility. It is a polished North American promotional infographic showing an idealised “resource recovery facility” complete with landfill gas conversion, composting systems and engineered infrastructure.',
        'To my knowledge, and having been privy to this process, no proposal has been presented to councillors or the community confirming this type of gas-to-energy facility or infrastructure for Blakebrook as part of this project.',
        'Yes, modern landfills in NSW require engineering standards such as liners, leachate collection, groundwater monitoring and gas management. But that does not automatically make every site appropriate or safe.',
        'The real concerns raised by the community remain unresolved: • high rainfall and catchment impacts • waterways and groundwater risks • traffic and haulage impacts • long-term environmental liabilities • lack of social licence • the scale of a regional facility in our LGA',
        'The entire process has also been bereft of transparency until now. Many in the community feel we are being railroaded toward an inappropriate site, while legitimate concerns are being minimised or dismissed.',
        'Using overseas promotional graphics to downplay community concerns risks misleading people and undermining informed public debate.',
        'My position remains clear: I do not support a regional waste facility in our LGA. I do not support the Blakebrook site. And I do not support spending a further $1.3 million investigating a proposal that already lacks broad community support and raises serious environmental concerns.',
        'We need responsible waste solutions. But responsible leadership also means being honest, transparent and grounded in factual information.',
        '#DontDumponLismore #recyclereusereduce — Adam Guise (Greens for Lismore), Sue Higginson, Dr Luke Robinson (Greens for Page)',
      ],
    },
    asideTitle: 'The same image, two ways',
    aside:
      'This post and the mayor’s both turn on a single picture — the imported “Anatomy of a Landfill” graphic. He offered it as “the technology that is required”; here it is held up as misleading. They cannot both be right, and the evidence favours the second reading: it is an out-of-region promotional image, not a Blakebrook design.',
    breakdownHeading: 'Where it holds, and where it overreaches',
    items: [
      {
        n: '01',
        verdict: 'Correct — and it matches our read',
        tone: 'fair',
        quote:
          'The image is not a design for Blakebrook… It is a polished North American promotional infographic showing an idealised “resource recovery facility.”',
        link: { href: '/claims/krieg-mega-tip', label: 'Our read of the same image' },
        body:
          'This holds, and we reached the same conclusion independently. The attached graphic is the imported US <strong>“Anatomy of a Landfill and Resource Recovery Facility”</strong> promo — it shows none of Blakebrook’s geology, catchment or design. An accurate point is accurate whoever makes it.',
        scores: { accuracy: 'good', relevance: 'good', framing: 'good', evidence: 'good' },
      },
      {
        n: '02',
        verdict: 'Right about the image, unproven on intent',
        tone: 'unsupported',
        quote:
          'Misinformation is currently being circulated by some councillors using a generic American landfill infographic…',
        body:
          'The image misled — that part is sound. But “misinformation… being circulated” implies <em>deliberate</em> deception by colleagues, which isn’t established. A borrowed graphic can mislead without anyone intending it to. We hold this post to the same rule we held the mayor’s: weigh the framing, not the person.',
        scores: { accuracy: 'mixed', relevance: 'good', framing: 'poor', evidence: 'mixed' },
      },
      {
        n: '03',
        verdict: 'Consistent with the public record',
        tone: 'fair',
        quote:
          'No proposal has been presented to councillors or the community confirming this type of gas-to-energy facility or infrastructure for Blakebrook.',
        link: { href: '/proposal', label: 'What’s actually proposed' },
        body:
          'Consistent with what’s public: no Blakebrook design has been published, so the infographic’s gas-to-energy and composting systems are not a committed plan. The first-hand claim (“having been privy to this process”) we can’t independently verify, but the underlying point — no published design — checks out.',
        scores: { accuracy: 'good', relevance: 'good', framing: 'good', evidence: 'mixed' },
      },
      {
        n: '04',
        verdict: 'Fair, and well put',
        tone: 'fair',
        quote:
          'Modern landfills in NSW require engineering standards… But that does not automatically make every site appropriate or safe.',
        link: { href: '/numbers', label: 'How liner life depends on heat' },
        body:
          'This is the balanced version of the mayor’s “strictest in the country.” Standards lower risk; they do not guarantee a given site is suitable. Local conditions — rainfall, catchment, water table — still decide. Said plainly and fairly.',
        scores: { accuracy: 'good', relevance: 'good', framing: 'good', evidence: 'good' },
      },
      {
        n: '05',
        verdict: 'Legitimate, and largely still open',
        tone: 'fair',
        quote:
          'The real concerns raised by the community remain unresolved: high rainfall and catchment impacts… waterways and groundwater risks… the scale of a regional facility in our LGA.',
        link: { href: '/numbers', label: 'The numbers behind the concerns' },
        body:
          'These are the substantive questions, not hype — rainfall and catchment, water, traffic, scale, social licence. On the public record they are not yet resolved by published studies, so “unresolved” is fair.',
        scores: { accuracy: 'good', relevance: 'good', framing: 'good', evidence: 'mixed' },
      },
      {
        n: '06',
        verdict: 'Fair concern, loaded words',
        tone: 'unsupported',
        quote:
          'Many in the community feel we are being railroaded toward an inappropriate site, while legitimate concerns are being minimised or dismissed.',
        link: { href: '/critique', label: 'On process and framing' },
        body:
          'The transparency concern is shared and reasonable. But “railroaded toward an <em>inappropriate</em> site” pre-judges the very question the studies are meant to answer — the mirror image of branding community concern “hype.” The process complaint stands on its own without the foregone conclusion.',
        scores: { accuracy: 'mixed', relevance: 'good', framing: 'poor', evidence: 'mixed' },
      },
      {
        n: '07',
        verdict: 'A clear position — and a figure to source',
        tone: 'unsupported',
        quote:
          'I do not support spending a further $1.3 million investigating a proposal that already lacks broad community support…',
        body:
          'Her opposition is a clearly stated position, and fairly labelled as one. The <strong>$1.3 million</strong> figure, though, is a specific, checkable claim about council spending; we have not seen it sourced publicly and flag it as needing a citation before it is treated as settled fact.',
        scores: { accuracy: 'mixed', relevance: 'good', framing: 'mixed', evidence: 'poor' },
      },
    ],
  },
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
        'Attached to the post: a generic infographic titled “Anatomy of a Landfill and Resource Recovery Facility.” We discuss it below.',
      attachmentImage: {
        src: '/media/attached-diagram.jpg',
        alt:
          'A generic American promotional infographic titled “Anatomy of a Landfill and Resource Recovery Facility,” showing an idealised cutaway of a landfill with labelled liners, pipes and recovery systems.',
        caption:
          'The image attached to the post: a generic, <strong>imported</strong> American “Anatomy of a Landfill <em>and Resource Recovery Facility</em>” promotional graphic. It is not a plan for Blakebrook — not its geology, its catchment or its design — and no Blakebrook design has been published. A polished, out-of-region picture is standing in for engineering that does not yet exist.',
      },
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
        scores: { accuracy: 'good', relevance: 'poor', framing: 'mixed', evidence: 'mixed' },
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
        scores: { accuracy: 'mixed', relevance: 'mixed', framing: 'mixed', evidence: 'poor' },
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
        scores: { accuracy: 'mixed', relevance: 'poor', framing: 'poor', evidence: 'poor' },
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
        scores: { accuracy: 'good', relevance: 'good', framing: 'good', evidence: 'good' },
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
        scores: { accuracy: 'mixed', relevance: 'mixed', framing: 'poor', evidence: 'mixed' },
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
        scores: { accuracy: 'poor', relevance: 'poor', framing: 'mixed', evidence: 'poor' },
      },
    ],
  },
];

export const breakdownsByDate = [...breakdowns].sort((a, b) =>
  a.date < b.date ? 1 : -1
);
