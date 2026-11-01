// Every link the site gives out, in one place, edited by hand at each
// release (like silentsilo.com's app/links.ts). The app and the installer
// point back here: whereti/crates/whereti-app/src/links.rs and the
// installer's Windows "Apps" entry use the same addresses.

export const SITE = "https://whereti.com";
export const REPO = "https://github.com/whereti/app";

export const LATEST_VERSION = "1.0.1";
export const LATEST_TAG = `v${LATEST_VERSION}`;
export const RELEASE_NOTES = `${REPO}/releases/tag/${LATEST_TAG}`;
export const ALL_RELEASES = `${REPO}/releases`;
export const LATEST_INSTALLER_NAME = `whereti-setup-${LATEST_VERSION}.exe`;
// by tag, not releases/latest: the link names the exact file the SHA-256 is for
export const LATEST_INSTALLER = `${REPO}/releases/download/${LATEST_TAG}/${LATEST_INSTALLER_NAME}`;
/** From scripts\package.ps1 -Release output; empty until the first release. */
export const INSTALLER_SHA256 = "04d33c42511ba7dc11ee791e7b2f1b3243bae17d9944f6a9a160e6f1f7c91c6e";
export const INSTALLER_SIZE = "32 MB";

export const CONTACT = "contact@softwarehive.ro";
export const SECURITY = "contact@softwarehive.ro";
export const COMPANY_EMAIL = "contact@softwarehive.ro";
export const SILENTSILO = "https://silentsilo.com";

/** Supporter licenses on Lemon Squeezy (merchant of record): two products, one
 *  price each. Business takes `?quantity=<PCs>`; the buyer cannot change it at
 *  checkout, so the supporter page asks for it first. */
export const BUY_PERSONAL = "https://whereti.lemonsqueezy.com/checkout/buy/ff4058f3-60ea-495b-8ea3-3a8a3f92d2ff";
export const BUY_BUSINESS = "https://whereti.lemonsqueezy.com/checkout/buy/b3ce78fa-204d-4315-b0cd-fee1c49d5408";
/** Until both are real, the buy buttons show "Checkout opens soon". */
export const BUY_READY = !BUY_PERSONAL.includes("TODO") && !BUY_BUSINESS.includes("TODO");

/** Where the download button goes: the installer itself. */
export const DOWNLOAD = LATEST_INSTALLER;
/** The download section on the home page (install steps, checking, removal). */
export const DOWNLOAD_INFO = "/#download";
