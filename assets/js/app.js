// === UI: Styles & Frameworks ===
// --- Global SCSS
import "../scss/main.scss";

// --- Bootstrap
import * as bootstrap from "bootstrap";

// === UI: Icons (FontAwesome) ===
// --- React wrapper
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// --- Core
import { library, dom } from "@fortawesome/fontawesome-svg-core";
// --- Solid icons (fas)
import { fas } from "@fortawesome/free-solid-svg-icons";
// --- Regular icons (far)
import { far } from "@fortawesome/free-regular-svg-icons";
// --- Brand icons (fab)
import { fab } from "@fortawesome/free-brands-svg-icons";

// Dodaj wszystkie wybrane zestawy do globalnej biblioteki
library.add(fas, far, fab);

// Skanuj DOM i zamieniaj <i class="fa ..."> na <svg>
dom.watch();

import * as domUtils from "./ui/ui";
// Wywołanie funkcji dla Dark Mode
domUtils.darkModeSwitcher();

// // Sidebar showHideSwitcher
// domUtils.showHideSidebar();
