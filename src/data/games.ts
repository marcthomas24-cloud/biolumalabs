// The whole catalogue lives here. The homepage collections, the
// trailer screen and every /games/<slug>/ page are generated from this list.
//
// To add a game:
//   1. Add an entry below (copy an existing one).
//   2. Put its 16:9 artwork in public/art/<slug>.webp (1600px wide) plus an
//      800x450 copy at public/art/<slug>-800.webp, its icon in
//      public/icons/<slug>.png (256px), a 1200x630 share image in
//      public/og/<slug>.jpg and any screenshots in public/shots/<slug>/.
//   3. That's it: the card, the page, the sitemap entry and the metadata follow.
//
// Store links: paste the listing URL once it is live. Leave it as "" until
// then and the site says "Coming soon to ..." for that store. Never guess one.

export type Screenshot = {
	src: string;
	width: number;
	height: number;
	alt: string;
};

export type Trailer = {
	/** The YouTube video id. */
	id: string;
	title: string;
	/** Our own copy of the thumbnail, so nothing loads from YouTube until play. */
	poster: string;
};

export type Game = {
	slug: string;
	name: string;
	kind: "Game" | "App";
	/** Short genre label shown on cards and pages. */
	genre: string;
	status: "released" | "upcoming";
	/** Shows a "New" flag on cards. */
	isNew?: boolean;
	tagline: string;
	/** One or two sentences, used on cards and as the meta description. */
	summary: string;
	/** Longer copy for the game's own page, one string per paragraph. */
	description: string[];
	features: { title: string; text: string }[];
	/** Short, factual "good to know" points for grown-ups. */
	facts: string[];
	icon?: string;
	art: string;
	artSmall: string;
	artWidth: number;
	artHeight: number;
	artAlt: string;
	ogImage: string;
	/** The game's own colour, used as an accent on its card and page. */
	accent: string;
	/** In-browser version, or "". */
	playUrl: string;
	googlePlay: string;
	appStore: string;
	/** true hides the "Coming soon to ..." store notes (browser-only or unannounced platforms). */
	hideStoreNotes?: boolean;
	trailer?: Trailer;
	screenshots: Screenshot[];
	/** The id of this app's section on /privacy/. */
	privacyAnchor?: string;
};

const landscape = (slug: string, alts: string[], height = 720): Screenshot[] =>
	alts.map((alt, i) => ({ src: `/shots/${slug}/${i + 1}.webp`, width: 1280, height, alt }));

export const GAMES: Game[] = [
	{
		slug: "axolotl-odyssey",
		name: "Axolotl Odyssey",
		kind: "Game",
		genre: "Adventure",
		status: "released",
		tagline: "The water is disappearing.",
		summary:
			"An underwater adventure about an axolotl trying to discover where the water has gone.",
		description: [
			"Your pool is going dry. Somebody a long way up the river is taking the water, and you are the smallest one at home, and the best swimmer. Swim east and find out where it went.",
			"Axolotl Odyssey is an underwater adventure for children, built on how real axolotls live. Where you stand matters more than how fast you tap.",
		],
		features: [
			{
				title: "No health bar. Seven body parts.",
				text: "Two gills, four legs and a tail. Lose your back legs and you can't dash; dig into the soft silt and they grow back, just like a real axolotl's.",
			},
			{
				title: "Real axolotl biology",
				text: "Slurp pebbles towards you and spit them back out, flare your gills to push danger away, and sense electricity in the dark.",
			},
			{
				title: "A whole journey",
				text: "Five places to swim through, from the warm shallows and the deep caves to the hill where the water starts.",
			},
			{
				title: "Choose who goes east",
				text: "Pick which of your brothers and sisters makes the trip and give them a name. Eight axolotl colours to discover.",
			},
			{
				title: "The Axolotl Journal",
				text: "Fill it in with the creatures, friends and places you find along the way.",
			},
			{
				title: "Made for small hands",
				text: "Large on-screen buttons, an Easier setting, and sound and music that switch off separately.",
			},
		],
		facts: [
			"The prologue and the whole first level are free",
			"One purchase unlocks the rest, behind a grown-up check",
			"No ads, no accounts, no tracking",
			"Plays offline",
		],
		icon: "/icons/axolotl-odyssey.png",
		art: "/art/axolotl-odyssey-key.webp",
		artSmall: "/art/axolotl-odyssey-key-800.webp",
		artWidth: 1280,
		artHeight: 720,
		artAlt: "The Axolotl Odyssey logo beside a smiling golden axolotl in dark, glowing water",
		ogImage: "/og/axolotl-odyssey.jpg",
		accent: "#12a594",
		playUrl: "https://play.biolumalabs.com/",
		googlePlay: "https://play.google.com/store/apps/details?id=com.biolumalabs.axolotlodyssey",
		appStore: "https://apps.apple.com/app/axolotl-odyssey/id6819019013",
		trailer: {
			id: "k4TxM0mbWEU",
			title: "Axolotl Odyssey trailer",
			poster: "/art/axolotl-odyssey-trailer.jpg",
		},
		screenshots: landscape("axolotl-odyssey", [
			"A golden axolotl swimming through the dark, glowing caves of Glowspore Deep, past a crayfish",
			"A golden axolotl beside a big green frog on the flooded forest floor of the Spillway level",
			"A golden axolotl climbing a sunlit sandy hillside in the Scree level",
			"The Choose screen, with five axolotl colours to pick from: Leucistic, Golden Albino, Melanistic, Copper and a locked mystery colour",
			"A conversation with Vermillion the dragon, who says to beat the Crayfish Matriarch first",
			"The Axolotl Journal, with pages for friends, creatures, morphs, memories and places",
		]),
	},
	{
		slug: "capy-sports-club",
		name: "Capy Sports Club",
		kind: "Game",
		genre: "Arcade sports",
		status: "released",
		tagline: "10 sports. 1 Capy. 1 champion.",
		summary: "Quick arcade sports starring Capy the capybara.",
		description: [
			"Meet Capy: a very calm capybara with very big sporting dreams. Play ten sports, each one a quick 60-second round built around a single simple gesture.",
			"Flick to shoot a hoop, swipe to bowl a strike, pull back to fire an arrow, tap in rhythm to swim a length. Every round starts gentle, builds up, and ends with a FINAL 10 countdown.",
		],
		features: [
			{
				title: "Ten sports, one touch each",
				text: "Basketball, Bowling, Football, Tennis, Golf Putting, Swimming, Ice Hockey, Archery, Javelin and Skateboarding.",
			},
			{
				title: "Medals to chase",
				text: "Earn Bronze, then go for Silver, Gold and Diamond in every sport.",
			},
			{
				title: "The Golden Capy",
				text: "Win trophies across the sports to open the Golden Capy, then earn its Bronze, Silver and Gold tiers.",
			},
			{
				title: "Dress up your champion",
				text: "Earn Capy Coins as you play and spend them on hats, glasses, capes and sparkly effects.",
			},
			{
				title: "Something new every day",
				text: "A fresh daily challenge, with a bonus for keeping your streak.",
			},
			{
				title: "Comfortable for everyone",
				text: "Reduced motion, high contrast and colour-blind friendly colours, plus separate music and sound volumes.",
			},
		],
		facts: [
			"Basketball, Bowling and Football are free to play",
			"One optional purchase, the Full Club, opens every sport",
			"No ads, no accounts, no tracking",
			"Progress is saved on your device",
		],
		icon: "/icons/capy-sports-club.png",
		art: "/art/capy-sports-club.webp",
		artSmall: "/art/capy-sports-club-800.webp",
		artWidth: 1600,
		artHeight: 900,
		artAlt:
			"Capy the capybara cheering with a basketball on an arena court, beside the Capy Sports Club logo",
		ogImage: "/og/capy-sports-club.jpg",
		accent: "#6b3fd4",
		playUrl: "",
		googlePlay: "https://play.google.com/store/apps/details?id=com.biolumalabs.capysportsclub",
		appStore: "",
		trailer: {
			id: "W8dxbcYrKJ0",
			title: "Capy Sports Club trailer",
			poster: "/art/capy-sports-club-trailer.jpg",
		},
		screenshots: landscape("capy-sports-club", [
			"The Capy Sports Club hub: Capy outside the clubhouse with signs for archery, javelin and skateboarding",
			"Basketball: Capy lining up a shot at the hoop in a packed arena",
			"Bowling: Capy at the top of a neon-lit lane as the pins scatter",
			"Football: Capy taking a penalty against a capybara goalkeeper",
			"Tennis: Capy returning a serve on a blue court, seen from above",
			"Ice hockey: Capy lining up a shot at the goal on the ice",
		]),
		privacyAnchor: "capy-sports-club-app",
	},
	{
		slug: "axolotl-colouring",
		name: "Axolotl Colouring",
		kind: "App",
		genre: "Creative colouring",
		status: "released",
		isNew: true,
		tagline: "A calm, colourful underwater world.",
		summary:
			"A relaxing colouring app with over 160 cute axolotl pictures. Tap to fill or paint with a brush, then create an axolotl of your very own.",
		description: [
			"Dive into a bright underwater world and colour over 160 cute axolotl pictures. Pick a picture, pick a colour and tap to fill: the colour stays neatly inside the lines, so even the youngest artists get a beautiful result every time.",
			"Older children can switch to the brush and paint freely. It's calm, simple and made for children aged 3 to 8, with nothing to rush and nothing to lose.",
		],
		features: [
			{
				title: "Over 160 pictures",
				text: "Hand-illustrated pages in Easy, Friends, Underwater, Adventure, Sports, Village, Halloween, Christmas and Bedtime.",
			},
			{
				title: "Tap to fill, or paint",
				text: "Fill a shape with one tap or pick up the brush. Eraser, undo and redo make mistakes easy to fix.",
			},
			{
				title: "For little fingers and big ideas",
				text: "Easy pictures with big shapes for the youngest, and detailed pictures for older children.",
			},
			{
				title: "Create your own axolotl",
				text: "Choose its colour, gills, pattern and crown, then give it a name.",
			},
			{
				title: "My Axolotls",
				text: "Every finished picture and every axolotl you make is saved in your own collection.",
			},
			{
				title: "Works offline",
				text: "Perfect for car journeys and holidays. Sound can be switched off.",
			},
		],
		facts: [
			"Free pictures to start with",
			"One optional purchase, Full Access, opens every picture, behind a grown-up check",
			"No ads, no accounts, no tracking",
			"Pictures are saved only on your device",
		],
		icon: "/icons/axolotl-colouring.png",
		art: "/art/axolotl-colouring.webp",
		artSmall: "/art/axolotl-colouring-800.webp",
		artWidth: 1280,
		artHeight: 720,
		artAlt:
			"The Axolotl Colouring logo above a finished picture of three happy axolotls coloured in pink, orange and purple, beside the app's colouring screen and palette",
		ogImage: "/og/axolotl-colouring.jpg",
		accent: "#e0478f",
		playUrl: "",
		googlePlay: "https://play.google.com/store/apps/details?id=com.bioluma.axolotlcolouring",
		appStore: "",
		screenshots: [
			"The home screen, with Colour, Create and My Axolotls buttons under a finished picture",
			"Colouring a wizard axolotl, with the fill, brush and eraser tools above the colour palette",
			"A finished pirate axolotl picture with the message 'So colourful!'",
			"Picking a picture from the Adventures category: Explorer, Pirate, Astronaut, Treasure and more",
			"The My Axolotls collection, showing saved pictures",
			"Creating a yellow axolotl called Pudding, with options for colour, gills, eyes, pattern and hat",
		].map((alt, i) => ({
			src: `/shots/axolotl-colouring/${i + 1}.webp`,
			width: 720,
			height: 1440,
			alt,
		})),
		privacyAnchor: "axolotl-colouring-app",
	},
	{
		slug: "capy-boarder",
		name: "CapyBoarder",
		kind: "Game",
		genre: "Skateboarding",
		status: "released",
		tagline: "Skate. Flip. Smile.",
		summary:
			"Capy's grabbed a skateboard and gone full send! Kickflip off ramps, grind rails and pull grabs across five sunny courses.",
		description: [
			"Capy's grabbed a skateboard and gone full send! Kickflip off ramps, grind rails and pull grabs all the way through the Skatepark, City Streets, Beach Boardwalk, Snowy Peak and Wave Bay.",
			"Chase three stars on every course, ride endless mode for a new best, and deck Capy out in wild boards, hats and flame trails.",
		],
		features: [
			{
				title: "Five courses",
				text: "Skatepark, City Streets, Beach Boardwalk, Snowy Peak and Wave Bay.",
			},
			{
				title: "Flips, grinds and grabs",
				text: "Kickflip off ramps, grind rails and pull grabs to build your score.",
			},
			{
				title: "Three stars to chase",
				text: "Every course has three stars to earn, and endless mode is there for a new personal best.",
			},
			{
				title: "The board shop",
				text: "Spend the coins you earn on wild boards, hats and flame trails.",
			},
		],
		facts: [
			"No ads and no purchases",
			"Coins are earned by playing and can't be bought",
			"No accounts, no tracking",
			"Progress is saved on your device",
		],
		icon: "/icons/capy-boarder.png",
		art: "/art/capy-boarder.webp",
		artSmall: "/art/capy-boarder-800.webp",
		artWidth: 1600,
		artHeight: 900,
		artAlt:
			"The CapyBoarder title screen: Capy the capybara on a purple skateboard between two ramps in a skatepark with palm trees against a purple and orange sunset",
		ogImage: "/og/capy-boarder.jpg",
		accent: "#d9486e",
		playUrl: "/capy-boarder/",
		googlePlay: "https://play.google.com/store/apps/details?id=com.biolumalabs.capyboarder",
		appStore: "",
		trailer: {
			id: "BnPLJr6GbwY",
			title: "CapyBoarder trailer",
			poster: "/art/capy-boarder-trailer.jpg",
		},
		screenshots: [],
		privacyAnchor: "capyboarder-app",
	},
	{
		slug: "axolotl-chase",
		name: "Axolotl Chase",
		kind: "Game",
		genre: "Maze arcade",
		status: "released",
		tagline: "A tiny axolotl. A hungry tank. A LOT of fish.",
		summary:
			"Gobble shrimp, grab a bloodworm and turn the predators into dinner. A new daily challenge every day.",
		description: [
			"A tiny axolotl. A hungry tank. A LOT of fish. Weave through the maze gobbling shrimp while the predators close in, then grab a bloodworm and turn them into dinner.",
			"Each tank has its own look and its own tricks, and there's a new daily challenge every day.",
		],
		features: [
			{
				title: "Eat shrimp. Turn the tables.",
				text: "Grab a bloodworm and the hungry fish that were chasing you become the snack.",
			},
			{
				title: "Tanks to explore",
				text: "Swim through the Canals, the Shipwreck, the Coral Reef, the Frozen Lake and the Deep Cave.",
			},
			{
				title: "A daily challenge",
				text: "The same tanks for everyone, a new twist every day, and a streak to keep going.",
			},
			{
				title: "Axolotls to unlock",
				text: "Collect new axolotls as you play and beat your best score.",
			},
		],
		facts: [
			"Free to play in your browser",
			"One optional purchase in the app, Axolotl Chase Deluxe, adds extra axolotls, tanks and modes",
			"No ads, no accounts, no tracking",
		],
		icon: "/icons/axolotl-chase.png",
		art: "/art/axolotl-chase.webp",
		artSmall: "/art/axolotl-chase-800.webp",
		artWidth: 1200,
		artHeight: 675,
		artAlt:
			"The Axolotl Chase logo above a happy pink axolotl swimming towards a red bloodworm while toothy fish close in",
		ogImage: "/og/axolotl-chase.jpg",
		accent: "#1b84d6",
		playUrl: "/axolotl-chase/",
		googlePlay: "https://play.google.com/store/apps/details?id=com.biolumalabs.axolotlchase",
		appStore: "https://apps.apple.com/app/axolotl-chase/id6822013474",
		trailer: {
			id: "W8-ubc10RHU",
			title: "Axolotl Chase trailer",
			poster: "/art/axolotl-chase-trailer.jpg",
		},
		screenshots: landscape(
			"axolotl-chase",
			[
				"The Canals tank: a pink axolotl in a mossy stone maze dotted with shrimp",
				"The Shipwreck tank: a maze of wooden planks and gold coins",
				"The Coral Reef tank: a purple reef maze with fish that have turned pale",
				"The Frozen Lake tank: a maze of ice blocks",
				"The title screen, with a Swim button and today's daily challenge, Shrimp Feast",
			],
			589,
		),
		privacyAnchor: "axolotl-chase-app",
	},
	{
		slug: "axolotl-tank",
		name: "Axolotl Tank",
		kind: "Game",
		genre: "Virtual pet & aquarium",
		status: "upcoming",
		tagline: "Your own little underwater world.",
		summary:
			"Discover, collect and care for wonderful axolotls as you create your own aquatic world.",
		description: [
			"Axolotl Tank is a cosy aquarium game about looking after real-feeling axolotls for a few minutes a day. Feed them, keep the water clean, play with them, and watch them grow.",
			"Hatch eggs to discover new colour morphs, then make the tank your own with plants, stones and treasures. It's calm, kind and unhurried: a little world to come back to.",
		],
		features: [
			{
				title: "Care that takes moments",
				text: "Feed, clean and play. A happy axolotl wiggles, grows and shows off its brightest colours.",
			},
			{
				title: "Collect real colour morphs",
				text: "Hatch eggs to discover axolotls in the colours real ones come in, from Wild type to the rare Mosaic.",
			},
			{
				title: "Decorate your tank",
				text: "Arrange plants, driftwood, stone arches and treasures to build an underwater home.",
			},
			{
				title: "Kind by design",
				text: "A neglected axolotl sulks and hides. It never runs away and is never lost for good.",
			},
		],
		facts: [],
		art: "/art/axolotl-tank.webp",
		artSmall: "/art/axolotl-tank-800.webp",
		artWidth: 2400,
		artHeight: 1200,
		artAlt:
			"Five axolotls in different colours swimming through a sunlit aquarium with kelp, red plants, driftwood, a mossy stone arch and a treasure chest on a pebbly floor",
		ogImage: "/og/axolotl-tank.jpg",
		accent: "#0fa3a3",
		playUrl: "",
		googlePlay: "",
		appStore: "",
		hideStoreNotes: true,
		screenshots: [
			{
				src: "/shots/axolotl-tank/1.webp",
				width: 720,
				height: 1118,
				alt: "A golden albino axolotl resting on the sand in a planted tank lit by sunbeams, with a dark axolotl behind it",
			},
			{
				src: "/shots/axolotl-tank/2.webp",
				width: 720,
				height: 1465,
				alt: "A newly hatched copper axolotl under a 'New discovery' banner that reads 'It's a Copper!'",
			},
			{
				src: "/shots/axolotl-tank/3.webp",
				width: 720,
				height: 1226,
				alt: "The tank screen, with Feed, Clean and Play buttons and tabs for Eggs, Book, Pond, Shop and Decorate",
			},
			{
				src: "/shots/axolotl-tank/4.webp",
				width: 494,
				height: 840,
				alt: "A rare mosaic axolotl, white with black patches, under a banner that reads 'It's a Mosaic!'",
			},
			{
				src: "/shots/axolotl-tank/5.webp",
				width: 494,
				height: 768,
				alt: "The tank at night, with a green axolotl glowing in the dark water",
			},
		],
	},
];

/** The colour morphs shown on the Axolotl Tank preview page. */
export const TANK_MORPHS = [
	{ id: "wildType", name: "Wild type" },
	{ id: "leucistic", name: "Leucistic" },
	{ id: "goldenAlbino", name: "Golden Albino" },
	{ id: "melanoid", name: "Melanoid" },
	{ id: "whiteAlbino", name: "White Albino" },
	{ id: "copper", name: "Copper" },
	{ id: "gfp", name: "GFP" },
	{ id: "mosaic", name: "Mosaic" },
].map((m) => ({ ...m, src: `/art/tank-morphs/${m.id}.webp` }));

export const gameUrl = (g: Game) => `/games/${g.slug}/`;

export const RELEASED = GAMES.filter((g) => g.status === "released");
export const UPCOMING = GAMES.filter((g) => g.status === "upcoming");
export const WITH_TRAILERS = GAMES.filter((g) => g.trailer);
