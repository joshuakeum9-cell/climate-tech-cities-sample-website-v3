/** Individual chapter pages (/chapters/[slug]).
 *
 *  City narratives come from the City Narratives sheet of
 *  Potential_CTC_Website_City_Resources_3_1.xlsx, converted to US spelling.
 *  Hero hooks are purpose-written display copy: each pairs a verified city
 *  fact with a chapter clause that makes no claim about what members work on.
 *  Events and organizers are placeholders until real data exists. */

export type ChapterEvent = {
  title: string;
  description: string;
  date: string;
  location: string;
  imageVariant: "people" | "scene" | "skyline";
};

export type Organizer = { name: string; role: string };

export type ChapterPage = {
  slug: string;
  city: string;
  /** Chapter newsletter (Substack) URL for the Stay in the Loop CTA */
  newsletterUrl?: string;
  /** Purpose-written hero hook, independent of the narrative below */
  lede: string;
  /** Full narrative, shown in the "<City> and Climate Tech" section */
  narrative: string[];
  upcomingEvents: ChapterEvent[];
  pastEvents: ChapterEvent[];
  organizers: Organizer[];
};

const placeholderOrganizers: Organizer[] = Array.from({ length: 6 }, () => ({
  name: "Name Placeholder",
  role: "Role Placeholder",
}));

export const chapterPages: ChapterPage[] = [
  {
    slug: "new-york",
    city: "New York",
    newsletterUrl: "https://nyc.climatetechcities.com/",
    lede:
      "Buildings drive roughly 70% of New York's emissions, and the capital to fix them sits a subway ride away. This chapter is the meeting point for the city's climate community.",
    narrative: [
      "New York is where climate tech meets the balance sheet. The city's emissions story is unusually concentrated in its buildings, a far larger share than in most major cities, and that single fact reshapes everything a founder should understand about building here. The problem to solve isn't abstract; it's the pre-war co-op, the Midtown office tower, the aging boiler and steam riser. New York has written that reality into law with the most consequential building-performance standards in the country, and in doing so it created a real, deadline-driven market for deep retrofits, heat pumps, thermal storage, envelope work, and the software that manages compliance.",
      "Walk a single square mile and you can find the person who owns the building, the one who financed it, and the one who insures it. Here the physical problem sits next door to the deepest pool of capital on earth, and a founder's first customer, project financier, and strategic partner may all end up in the same room. The city's fintech and capital-markets depth is turning toward decarbonization: project finance, PACE lending, insurance and risk analytics, carbon and REC markets, the plumbing that moves money into retrofits at scale.",
      "Columbia, Cornell Tech, and NYU do more than run labs. They feed talent into finance, real estate, and the machinery of urban systems, so the engineers and analysts who understand the buildings are already inside the industries that own them. Around them, the city's economic development apparatus has built genuine prototyping and pilot space, giving hardware founders somewhere to build and test inside a dense urban grid.",
      "New York is also a frontline adaptation city. It is a coastal metropolis built on estuary and fill, and it has already lived through what climate risk looks like when a storm surge meets Lower Manhattan. The city is now reengineering its shoreline, and that work throws off durable demand for flood defense, resilient infrastructure, nature-based coastal systems, and the risk data that underwrites all of it.",
      "For years New York has been better at financing and deploying climate tech than at inventing the hardware itself. But for a founder whose product touches buildings, grids, water, capital, or risk, no place puts you closer to the system, or to the operators who actually run it.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "london",
    city: "London",
    lede:
      "Global capital, world-class science, and the standards that move markets all share one city. London is a climate city like no other, and this chapter brings its community together.",
    narrative: [
      "London's edge in climate tech is the same edge it has held for centuries: it is where the world's capital gets priced, moved, and insured. The most durable climate work here runs through green and transition finance, carbon markets, climate-risk analytics, disclosure and reporting infrastructure, the data and tooling that let banks, insurers, and asset managers read physical and transition risk on any asset, anywhere. The concentration of banking, insurance including the Lloyd's market, professional services, and fintech talent is genuinely global, and it is increasingly aimed at the energy transition.",
      "A few miles from the trading floors, Imperial College London and University College London turn out world-class engineers and climate scientists, and Imperial has grown into a place where rigorous science meets green fintech. The city writes rules as fluently as it prices risk: a decision taken here about disclosure, taxonomy, or a net-zero framework travels across European and global markets within the year. For founders building the trust layer of climate, measurement, verification, ratings, reporting, the institutions that set the standards are a short walk away.",
      "London's physical challenge is its building stock. This is an old city, and the overwhelming majority of the buildings that will exist for decades are already standing. Heating them runs largely on natural gas, and retrofitting that stock is slow, expensive, and technically demanding, which is exactly what makes London a serious market for heat pumps, retrofit-at-scale, energy efficiency, and the financing models that make old-building decarbonization pencil out.",
      "The ecosystem has a professional, cross-border cast. Founders here build for European and global markets from the first week, and the talent pool moves fluently across finance, policy, engineering, and design. For a climate company that needs to sit close to both capital and regulation, London is the obvious European home.",
      "Where London runs thin is hard-tech manufacturing and deployment; heavy industrial decarbonization tends to happen elsewhere in the UK and Europe, closer to the plants and the grid. But for a founder whose product is the financial, analytical, or policy machinery of the transition, or who wants to crack the retrofit problem in one of the world's densest old cities, London is the operator's city.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "boston",
    city: "Boston",
    lede:
      "No metro packs more research density than greater Boston, where fusion, storage, and green steel go from lab to company. Its chapter is the front door to the climate community.",
    narrative: [
      "Boston is the place you go when the hard part is the science. No metro in the world packs research density like greater Boston, and MIT and Harvard sit at the center of a lab-to-startup pipeline built for deep-tech climate work. This is where fusion energy, next-generation batteries and long-duration storage, green steel and low-carbon cement, geothermal drilling, and carbon capture spin out of university labs and become companies. If your solution depends on a genuine scientific or engineering breakthrough, years of R&D before a product exists, Boston has the talent, the patient capital, and the institutional muscle to carry you from bench to first-of-a-kind.",
      "Down the road from the labs sits the largest climate-tech incubator in North America, built to help scientists become founders: a lab bench, a prototyping floor, and the mentorship that carries a technical concept toward a fundable company. The region learned how to back long, capital-intensive, science-driven bets over decades of biotech, and that muscle memory transfers cleanly to climate deep tech, where the first real product can be years of R&D away.",
      "Boston founders can get close to real industrial and energy systems. The cold New England climate makes building heat a first-order problem, and the region has become a live testbed for heating decarbonization, from century-old district-energy systems converting off gas to industrial-scale heat pumps and thermal storage. It is a rare chance to prove clean-heat technology at genuine urban scale.",
      "The talent crossover is a quiet superpower. The same square miles produce world-class materials scientists, chemists, mechanical engineers, and software talent, and they move fluidly between biotech, robotics, advanced manufacturing, and climate. That density of operators who have actually scaled hard things is what founders find here and struggle to find anywhere else.",
      "Boston starts companies more readily than it manufactures them; capital-intensive firms often build their factories elsewhere, and the region is expensive and fiercely competitive for talent. But for the founder whose company begins with a hard technical problem, no place offers a deeper well of science, operators, and lab-to-market infrastructure.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    lede:
      "No region concentrates more software talent and venture capital than the Bay Area, and more of it points at climate every year. This chapter is where that community comes together.",
    narrative: [
      "The Bay Area's climate advantage is simple to state and hard to replicate: it holds the densest concentration of software talent, AI capability, and venture capital on earth, and it has turned that machine toward climate. When a climate problem yields to software, data, machine learning, and rapid iteration, grid optimization, virtual power plants, electrification platforms, energy markets, EV and charging software, carbon and monitoring analytics, no place moves faster or funds harder. That velocity and risk appetite are real assets for founders building where climate meets AI.",
      "Look past the software and the older bones show through. Silicon Valley was built on semiconductors and hardware, and that lineage still runs beneath founders working on power electronics, batteries, sensors, and advanced manufacturing. Stanford and UC Berkeley anchor the region, and just across the bay Lawrence Berkeley National Laboratory has seeded a remarkable number of climate companies, a path that runs from national-lab research to venture-backed startup without ever leaving the metro.",
      "California is the reason so much of this matters. The state is the most aggressive electrification and clean-energy market in the country, so Bay Area founders build for a demanding, forward-leaning home market before they ever scale nationally. Grid innovation here is a live problem, not a theoretical one.",
      "The region is a frontline adaptation market too, in a hard-earned way. Wildfire and water stress have created serious, well-capitalized demand for wildfire detection and mitigation, grid-hardening, and water technology, with utilities, insurers, and the state itself as motivated customers. Founders can get unusually close to those systems and the people responsible for them.",
      "The costs are real: expensive talent, fierce competition, and an AI gold rush that can pull attention and capital away from slower, harder, deploy-heavy climate work. Not every climate company should start here. But for founders whose edge is software, AI, or venture-scale ambition, and who want density of capital and technical operators around them, the Bay Area is still the center of gravity.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    lede:
      "Home to the Western Hemisphere's busiest port complex and a deep aerospace bench, Los Angeles has a climate story all its own. Meet the community driving the city's transition.",
    narrative: [
      "Los Angeles is where climate tech meets the physical movement of goods and people at continental scale. The adjacent ports of Los Angeles and Long Beach form the busiest container gateway in the Western Hemisphere, and the freight system radiating from them, drayage trucks, warehouses, distribution corridors, rail, is both an economic engine and the single largest source of the region's air pollution. That makes LA the country's most important city for freight and logistics decarbonization: electric and hydrogen trucking, charging along freight corridors, port electrification, and the goods-movement systems that touch the entire national supply chain. Founders here build next to the exact machinery they are trying to change.",
      "Beneath the freeways runs a century of aerospace and advanced manufacturing, and the engineers who once built propulsion systems and complex hardware now carry that skill into clean transportation, batteries, and industrial decarbonization. The city's cleantech incubator has spent more than a decade converting that talent into companies, with real prototyping floors and a deliberate pull toward transportation and energy.",
      "The anchor institutions give the region a rare vantage point. Caltech, which manages NASA's Jet Propulsion Laboratory, brings world-class capability in Earth observation, climate sensing, and water and wildfire monitoring, with UCLA and USC feeding research and talent alongside. And the culture and media industries add something no other city has: unmatched reach to shape how climate solutions are understood and adopted.",
      "The hardest problems here are structural. Sprawl and car dependence turn mobility and electrification into enormous undertakings. A dependence on distant, engineered water supply makes water technology and efficiency existential rather than optional. And a wildfire-prone landscape presses constantly on adaptation and resilience.",
      "LA's climate ecosystem is more diffuse than Boston's or the Bay Area's, and venture capital sits thinner on the ground. But for a founder working on freight, transportation, water, or advanced manufacturing, LA offers something rare: enormous, tangible systems and the industrial talent to build for them.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "washington-dc",
    city: "Washington, D.C.",
    lede:
      "Climate rules, federal budgets, and procurement decisions are all written in Washington. This chapter is where the capital region's climate community comes together.",
    narrative: [
      "Washington is where climate tech meets the rules of the game. Every other city on this list builds products; DC builds the environment those products live in, the regulation, standards, appropriations, and procurement that decide which technologies get built and how they scale. For a certain kind of founder, that proximity is the whole thesis. The major federal energy, environmental, and regulatory agencies sit here, and the frameworks for disclosure, grid markets, and clean-energy funding are written here. A founder whose success depends on navigating regulation, or on the federal government as a first, patient, large-scale customer, has an advantage in this city that exists almost nowhere else.",
      "The people here come out of agencies, the military, and the national labs, and they think in policy, law, economics, and systems. That makes DC the natural home for regulatory-navigation businesses, govtech, and companies selling into federal procurement, long cycles, but deep and durable revenue. Ringing the city, a dense think-tank ecosystem does the analytical work that shapes national energy and environmental policy.",
      "The research and standards anchors are serious and often underrated. The National Institute of Standards and Technology sets the measurement backbone that building-efficiency, materials, and cybersecurity companies depend on. Johns Hopkins' Applied Physics Laboratory and the University of Maryland anchor deep energy and defense-adjacent research, with Georgetown, George Washington, Howard, and George Mason alongside. Nearby NASA and NOAA facilities make the region a hub for the Earth-observation and climate data that underpins the entire resilience market.",
      "DC has its own physical stakes. It sits in the Chesapeake Bay watershed, the largest estuary in the country and one of the most exposed to sea-level rise, inside the largest power market in the country, and amid one of the densest concentrations of federal building stock and, nearby, data centers anywhere. That combination makes it a live market for grid modernization, water and watershed technology, flood resilience, and building efficiency.",
      "The defense and national-security energy nexus is the opening few cities can match: durable demand for grid resilience, microgrids, and secure power, driven by security rather than consumer markets. DC will never be a hardware or venture town first. But for founders whose real battle is policy, standards, and government-scale deployment, it is the seat.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "san-diego",
    city: "San Diego",
    lede:
      "Between the Pacific and the arid edge of California, San Diego lives its climate challenges up close, from water scarcity to the coast. Its climate community gathers here.",
    narrative: [
      "San Diego is the city built where climate meets the ocean, the border, and the arid edge of the country. Its center of gravity is the blue economy: a genuine cluster of ocean and maritime technology anchored by Scripps Institution of Oceanography and UC San Diego, among the world's foremost centers of earth and ocean science. A working port, a major naval presence, and world-class oceanographic research sit in one place, and together they open a lane in ocean tech few other cities can credibly run: marine energy, ocean carbon and monitoring, coastal resilience, and maritime decarbonization.",
      "At the arid southern edge of California, the water arrives from somewhere else, pumped, imported, engineered, and a region forced to manufacture its own supply has spent decades building the technology to do it: desalination, reuse, efficiency, the quiet systems that keep a dry place livable. For founders working on scarcity, few markets are as motivated, or as instructive.",
      "The cleantech and clean-energy cluster is real and mature. San Diego is a national leader in distributed energy and microgrids, with UC San Diego running one of the most sophisticated campus microgrids in the world, and the region has pushed hard on solar, storage, and community resilience against grid stress. That gives energy founders live, operating systems to build against rather than simulate.",
      "A deep life-sciences and biotech heritage runs alongside all of it, seeding crossover talent for bio-based materials, synthetic biology, and climate work that draws on the life sciences, a natural complement to the ocean-science base. And the city's binational position on the border with Tijuana lends it a distinctive lens on cross-border infrastructure, water, and manufacturing.",
      "The naval presence is a durable feature of the landscape: the military is both a major regional employer and an early adopter of clean energy, microgrids, and blue tech, which hands founders a serious institutional customer.",
      "San Diego's venture ecosystem is smaller than the Bay Area's or Boston's, and some founders leave for larger capital markets. But for anyone working on water, oceans, distributed energy, or the blue economy, few cities in the country combine this much science, live infrastructure, and motivated demand.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "seattle",
    city: "Seattle",
    lede:
      "Seattle runs on one of the cleanest grids in the country and builds for both the cloud and the sky. Its chapter is home base for the Pacific Northwest's climate community.",
    narrative: [
      "Seattle's climate story starts with an accident of geography and a century of industry. The Pacific Northwest runs on some of the cleanest electricity in the country, thanks to abundant hydropower, which means founders here build in a place where a low-carbon grid is not aspirational but existing infrastructure. That single fact changes the math on electrification, green hydrogen, and the energy-intensive computing that increasingly defines the region.",
      "The city grew up around the cloud. Some of the world's largest cloud-computing companies are headquartered here, and that concentration of software, AI, and data-infrastructure talent doubles as a climate asset: for grid software, buildings intelligence, carbon accounting, and the digital layer of the transition. Those same giants are among the planet's largest buyers of clean energy, carbon removal, and sustainable aviation fuel, a wall of demand that founders can sell straight into.",
      "Seattle's other heritage is hardware and flight. This is the birthplace of modern commercial aerospace, with a deep manufacturing and engineering base that now feeds aviation decarbonization, sustainable aviation fuel, electric and hydrogen propulsion, and advanced manufacturing more broadly. It is a maritime and ports city too, with a working waterfront and an ocean economy that lead naturally into marine decarbonization.",
      "The anchor institutions are strong and practical. The University of Washington is a major research and talent engine with clean-energy testbed infrastructure, and the nearby Pacific Northwest National Laboratory brings serious capability in grid, energy storage, and marine energy, including rare marine research facilities within the national-lab complex. The forests surrounding the region make Seattle a natural center for forestry, natural-carbon, and land-based climate work.",
      "Building decarbonization takes a distinctive shape here: a mild climate and a clean grid make electrification unusually clean and achievable, turning the city into a strong proving ground for building electrification done right.",
      "Seattle's climate ecosystem has long been quieter and less venture-dense than Boston's or the Bay Area's, and its software gravity can pull talent toward big-company jobs rather than startups. But for founders working on clean grids, aviation and maritime decarbonization, cloud-scale climate software, or natural carbon, few cities pair clean power, industrial depth, and technical talent so well.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "chicago",
    city: "Chicago",
    lede:
      "A quarter of American rail freight moves through Chicago, alongside heavy industry and the Great Lakes. This chapter gathers the community building at that intersection.",
    narrative: [
      "Chicago is where climate tech meets heavy industry and the laboratory bench. Few metropolitan areas put world-class battery and materials science, a deep manufacturing supply chain, the busiest freight interchange in North America, the world's commodity and derivatives markets, and the largest body of surface fresh water on the continent inside a single region. Argonne National Laboratory anchors the science, with decades of federally funded work on energy storage, recycling, and materials, and with user facilities that let a two-person company run experiments it could never afford to buy. Its lab-embedded fellowship has become one of the better routes in the country for a scientist to become a founder without leaving the instruments behind.",
      "The commercial character of the city follows from that. Chicago rewards founders who need to make something physical and then sell it to an operator, which is why a prototyping floor and an industrial supplier network matter more here than another co-working space would, and why the region's most distinctive capital cluster funds the software that runs industrial and energy assets rather than consumer applications. The state's clean energy law commits Illinois to carbon-free power on a fixed schedule, phasing out coal and then gas generation while funding contractor and workforce programs along the way, and the grid already leans heavily on nuclear generation. That changes the arithmetic on electrification, and on clean firm power for the data centers now arriving in the region.",
      "Water is the underrated story. The Great Lakes hold most of North America's surface fresh water, and Chicago has built a genuine water innovation cluster on that fact, with a federally funded regional engine convening utilities, industrial water users, and researchers across several states. Food and agriculture run just as deep, through the commodity exchanges, the processors headquartered nearby, and the farm belt that begins where the suburbs end. Freight and rail decarbonization are local problems here in a way they are not elsewhere, because the yards are inside the city.",
      "Chicago suits the founder who would rather be near a customer's plant than a competitor's office, who needs a laboratory or a machine shop, and who will trade coastal valuations for patient capital, industrial pilots, and a lower cost of building.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
  {
    slug: "amsterdam",
    city: "Amsterdam",
    lede:
      "The Dutch grid is so full that new connections wait in a queue, making constraint the market. Amsterdam's chapter brings that community together, and it works in English.",
    narrative: [
      "Amsterdam's climate story starts with a wire that is full. The Dutch electricity grid is so heavily subscribed that new connections across much of the country wait in a queue, and large users are regularly told there is no capacity to give. For a founder, that constraint is the market. Flexibility, storage, smart charging, demand response, local energy management, and forecasting are not speculative categories here. They are what grid operators, industrial users, and municipalities are actively buying, and the Netherlands is running the experiment several years ahead of most of Europe.",
      "The second force is regulation, and Amsterdam sits unusually close to it. European rules on corporate sustainability reporting, carbon pricing at the border, and fuel blending in aviation and shipping create durable demand for measurement, compliance, and decarbonization technology, and the city's weight in European finance means the institutions that have to comply are often in the same neighborhood as the companies selling to them. That proximity has produced one of the densest concentrations of climate and impact capital in Europe, running from dedicated energy transition funds through bank-backed impact vehicles to the state investment institution.",
      "The third is the city's own appetite. Amsterdam committed early and publicly to a circular economy, adopting a framework that treats material use and social outcomes as one problem, and it has kept commissioning programs, procurement, and living labs to make that real. Municipal government is therefore an unusually available first customer for circular materials, reuse, and construction ventures. The port adds industrial scale, pivoting from petroleum handling towards hydrogen and sustainable fuels, while the airport turns aviation decarbonization into an operational requirement rather than a pledge. Dutch strength in agrifood, greenhouse horticulture, and water management completes the problem set, and the last of those is an export business as much as a domestic one.",
      "None of this requires Dutch. The working language of the ecosystem is English, and programs, funds, and events are built for international founders, which makes Amsterdam one of the easier European cities to land in and start selling.",
      "Amsterdam suits the founder building for grid constraint, circular materials, agrifood, or climate finance who wants European regulatory tailwinds, dense impact capital, and a city government willing to be a customer.",
    ],
    upcomingEvents: [
      {
        title: "Monthly Climate Tech Meetup",
        description: "Sample event. Our regular general meetup for anyone working in or curious about climate.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    pastEvents: [
      {
        title: "Climate Careers Panel",
        description: "Sample event. Transitioners hear from people who made the jump into climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Buildings Decarbonization Field Trip",
        description: "Sample event. A hands-on visit to a retrofit project in the city.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Founders & Funders Dinner",
        description: "Sample event. A small dinner connecting early-stage founders with climate investors.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
      {
        title: "Climate Policy Roundtable",
        description: "Sample event. A working conversation on the rules shaping local climate work.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "scene",
      },
      {
        title: "Grid & Energy Storage Meetup",
        description: "Sample event. Talks and networking around the local energy transition.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "skyline",
      },
      {
        title: "Climate Tech Holiday Social",
        description: "Sample event. An end-of-year gathering for the whole chapter community.",
        date: "Date placeholder",
        location: "Location placeholder",
        imageVariant: "people",
      },
    ],
    organizers: placeholderOrganizers,
  },
]

export function getChapterPage(slug: string): ChapterPage | undefined {
  return chapterPages.find((page) => page.slug === slug);
}
