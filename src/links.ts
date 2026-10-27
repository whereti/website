// Every link the site gives out, in one place, edited by hand at each
// release (like silentsilo.com's app/links.ts). The app and the installer
// point back here: whereti/crates/whereti-app/src/links.rs and the
// installer's Windows "Apps" entry use the same addresses.

export const SITE = "https://whereti.com";
export const REPO = "https://github.com/whereti/app";

export const LATEST_VERSION = "0.9.0";
export const LATEST_TAG = `v${LATEST_VERSION}`;
export const RELEASE_NOTES = `${REPO}/releases/tag/${LATEST_TAG}`;
export const ALL_RELEASES = `${REPO}/releases`;
export const LATEST_INSTALLER_NAME = `whereti-setup-${LATEST_VERSION}.exe`;
// by tag, not releases/latest: GitHub never counts a pre-release (0.9.x) as latest
export const LATEST_INSTALLER = `${REPO}/releases/download/${LATEST_TAG}/${LATEST_INSTALLER_NAME}`;
/** From scripts\package.ps1 -Release output; empty until the first release. */
export const INSTALLER_SHA256 = "c63dabeaaf5b98a1aeedb642436b2180143269bf00bf3584d28aab035450ddf7";
export const INSTALLER_SIZE = "31 MB";

export const CONTACT = "contact@softwarehive.ro";
export const SECURITY = "contact@softwarehive.ro";
export const COMPANY_EMAIL = "contact@softwarehive.ro";
export const SILENTSILO = "https://silentsilo.com";

/** Supporter licenses on Lemon Squeezy (merchant of record). Fill in the two
 *  product links before the site goes live. */
export const BUY_PERSONAL = "https://whereti.lemonsqueezy.com/buy/TODO-personal";
export const BUY_BUSINESS = "https://whereti.lemonsqueezy.com/buy/TODO-business";
/** Until both are real, the buy buttons show "Checkout opens soon". */
export const BUY_READY = !BUY_PERSONAL.includes("TODO") && !BUY_BUSINESS.includes("TODO");

/** Where the download button goes: the installer itself. */
export const DOWNLOAD = LATEST_INSTALLER;
/** The download section on the home page (install steps, checking, removal). */
export const DOWNLOAD_INFO = "/#download";
