// Every link the site gives out, in one place, edited by hand at each
// release (like silentsilo.com's app/links.ts). The app and the installer
// point back here: whereti/crates/whereti-app/src/links.rs and the
// installer's Windows "Apps" entry use the same addresses.

export const SITE = "https://whereti.com";
export const REPO = "https://github.com/whereti/whereti";

/** false until the first release is on GitHub: the site then says "coming
 *  soon" and points to the source instead of a download that would 404. */
export const RELEASED = false;

export const LATEST_VERSION = "0.0.1";
export const LATEST_TAG = `v${LATEST_VERSION}`;
export const RELEASE_NOTES = `${REPO}/releases/latest`;
export const ALL_RELEASES = `${REPO}/releases`;
export const LATEST_INSTALLER_NAME = `whereti-setup-${LATEST_VERSION}.exe`;
export const LATEST_INSTALLER = `${REPO}/releases/latest/download/${LATEST_INSTALLER_NAME}`;
/** From scripts\package.ps1 -Release output; empty until the first release. */
export const INSTALLER_SHA256 = "";
export const INSTALLER_SIZE = "30 MB";

export const CONTACT = "contact@whereti.com";
export const SECURITY = "security@whereti.com";
export const COMPANY_EMAIL = "contact@softwarehive.ro";
export const SILENTSILO = "https://silentsilo.com";

/** Where the download button goes. */
export const DOWNLOAD = RELEASED ? LATEST_INSTALLER : "/download/";
