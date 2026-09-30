// Global site data. Everything that names the studio or a URL lives here.

export const SITE_TITLE = "Bioluma Labs";
export const SITE_DESCRIPTION =
	"Small, glowing games and apps, dreamed up by kids and built by a grown-up.";
export const SITE_URL = "https://biolumalabs.com";
// Bioluma Labs is a trading name. The legal owner of the site, the domain, the games and the apps is the company.
export const COMPANY = "Diamond Hands Ltd";
export const COMPANY_DETAILS =
	"Registered in England and Wales, company no. 16857970. Registered office: 20 Wenlock Road, London N1 7GU.";
export const CONTACT_EMAIL = "support@biolumalabs.com";

// The games and apps on the homepage, in the order they appear.
// Store links: paste the App Store / Google Play URL once a listing is live.
// Until then, leave it as "" and the page shows "coming soon" for that store.
export const PRODUCTS = [
	{
		id: "axolotl",
		name: "Axolotl Odyssey",
		kicker: "Out now",
		icon: "/icons/axolotl-odyssey.png",
		blurb:
			"A swimming, digging, regrowing adventure starring an axolotl. Lose a leg to a crayfish and grow it back, just like a real <em>Ambystoma mexicanum</em>, then follow the water all the way to where it went.",
		playUrl: "/play/",
		appStore: "",
		googlePlay: "",
	},
	{
		id: "capy",
		name: "Capy Sports Club",
		kicker: "New release",
		icon: "/icons/capy-sports-club.png",
		blurb:
			"Join the most laid-back club in sport. Grab your team of capybaras and roll, bounce and splash your way to the trophy, no rush, no stress, just lots of good-natured fun.",
		playUrl: "/capy-sports-club/",
		appStore: "",
		googlePlay: "",
	},
];
