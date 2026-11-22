// Every link the site gives out, in one place, edited by hand at each
// release (like silentsilo.com's app/links.ts). The app and the installer
// point back here: whereti/crates/whereti-app/src/links.rs and the
// installer's Windows "Apps" entry use the same addresses.

export const SITE = "https://whereti.com";
export const REPO = "https://github.com/whereti/app";

export const LATEST_VERSION = "1.2.0";
export const LATEST_TAG = `v${LATEST_VERSION}`;
export const RELEASE_NOTES = `${REPO}/releases/tag/${LATEST_TAG}`;
export const ALL_RELEASES = `${REPO}/releases`;
export const LATEST_INSTALLER_NAME = `whereti-setup-${LATEST_VERSION}.exe`;
// by tag, not releases/latest: the link names the exact file the SHA-256 is for
export const LATEST_INSTALLER = `${REPO}/releases/download/${LATEST_TAG}/${LATEST_INSTALLER_NAME}`;
/** From scripts\package.ps1 -Release output; empty until the first release. */
export const INSTALLER_SHA256 = "6d0d7d2fa39b3d0e55ccbf7270d4c4a9fb9368cb9a162c0cacc80490cbe2bda1";
export const INSTALLER_SIZE = "35 MB";
/** What is new in LATEST_VERSION, a few short lines: shown beside the
 *  download, where the app's note about a new version leads. */
export const WHATS_NEW: string[] = [
  "No more automatic updates: for security, among other reasons, whereti now only tells you when a new version is out, and you download it here. It downloads and installs nothing by itself.",
  "After an update, whereti is back next to the clock by itself.",
];

export const CONTACT = "contact@softwarehive.ro";
export const SECURITY = "contact@softwarehive.ro";
export const COMPANY_EMAIL = "contact@softwarehive.ro";
export const SILENTSILO = "https://silentsilo.com";

/** Where the download button goes: the installer itself. */
export const DOWNLOAD = LATEST_INSTALLER;
/** The download section on the home page (install steps, checking, removal). */
export const DOWNLOAD_INFO = "/#download";
