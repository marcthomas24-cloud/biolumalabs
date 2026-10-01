// Global site data. Everything that names the studio or a URL lives here.

export const SITE_TITLE = "Bioluma Labs";
export const SITE_DESCRIPTION =
	"An independent game and app studio. Designed by kids. Engineered by adults.";
export const SITE_URL = "https://biolumalabs.com";
// Bioluma Labs is a trading name. The legal owner of the site, the domain, the games and the apps is the company.
export const COMPANY = "Diamond Hands Ltd";
export const COMPANY_DETAILS =
	"Registered in England and Wales, company no. 16857970. Registered office: 20 Wenlock Road, London N1 7GU.";
export const CONTACT_EMAIL = "support@biolumalabs.com";

// The games and apps on the homepage, in the order they appear. The first
// entry with `featured: true` gets the large card at the top of "Our games".
// To add a game or app, add an entry here and put its icon in public/icons/
// and its 16:9 artwork in public/art/.
//
// playUrl: the in-browser version, or "" if there isn't one.
// appStore / googlePlay: paste the store listing URL once it is live. Until
// then leave it as "" and the card says "Coming soon" for that store.
// webOnly: true for browser-only games, so the card doesn't promise store versions.
export type Product = {
	id: string;
	name: string;
	kind: "Game" | "App";
	featured?: boolean;
	tagline: string;
	summary: string;
	icon: string;
	art: string;
	artAlt: string;
	playUrl: string;
	appStore: string;
	googlePlay: string;
	webOnly?: boolean;
};

export const PRODUCTS: Product[] = [
	{
		id: "axolotl-odyssey",
		name: "Axolotl Odyssey",
		kind: "Game",
		featured: true,
		tagline: "The water is disappearing.",
		summary:
			"An underwater adventure about an axolotl trying to discover where the water has gone.",
		icon: "/icons/axolotl-odyssey.png",
		art: "/art/axolotl-odyssey.webp",
		artAlt: "A pool full of pink, gold and dark axolotls swimming under lily pads in Axolotl Odyssey",
		playUrl: "/play/",
		appStore: "",
		googlePlay: "",
	},
	{
		id: "capy-sports-club",
		name: "Capy Sports Club",
		kind: "Game",
		tagline: "10 sports. 1 Capy. 1 champion.",
		summary: "Quick arcade sports starring Capy the capybara.",
		icon: "/icons/capy-sports-club.png",
		art: "/art/capy-sports-club.webp",
		artAlt: "The Capy Sports Club clubhouse under a blue sky, with a Pick your sport sign",
		playUrl: "/capy-sports-club/",
		appStore: "",
		googlePlay: "",
	},
	{
		id: "axolotl-chase",
		name: "Axolotl Chase",
		kind: "Game",
		tagline: "A tiny axolotl. A hungry tank. A LOT of fish.",
		summary:
			"Gobble shrimp, grab a bloodworm and turn the predators into dinner. A new daily challenge every day.",
		icon: "/icons/axolotl-chase.png",
		art: "/art/axolotl-chase.webp",
		artAlt: "A pink axolotl chasing two frightened fish through clear blue-green water, past a trail of golden shrimp",
		playUrl: "/axolotl-chase/",
		appStore: "",
		googlePlay: "",
		webOnly: true,
	},
];
