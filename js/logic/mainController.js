import { getLogger } from "../shared/logging/logger.js";
const logger = getLogger("main");

import {
  filterState,
  updateFilterValue,
  subscribeToFilterChanges,
} from "../shared/filterState.js";
import { setupJobSidebar } from "../ui/jobSidebarManager.js";
import { JOB_GROUPS } from "../config/appConfig.js";
import { setupCalculateButton } from "../ui/calculateButton.js";

let allData = [];
let isLoading = false;

/**
 * Get the current loading state.
 * @returns {boolean} True if loading is in progress, false otherwise.
 */
export function getLoadingState() {
  return isLoading;
}

/**
 * Main entry point to initialize filtering and rendering.
 * Initialization now directly loads jobs from JOB_GROUPS defined in appConfig.
 * The sidebar is populated from job groups instead of external data files.
 * 1. Populates the job sidebar from JOB_GROUPS in appConfig.
 * 2. Forces initial notification so filter listeners fire on startup.
 * 3. Sets up centralized filter event listeners.
 */
export async function init() {
  isLoading = true;
  const start = performance.now();

  try {
    // Step 1: Populate job sidebar directly from JOB_GROUPS in appConfig
    const uniqueJobs = [...new Set(Object.values(JOB_GROUPS).flat())];
    setupJobSidebar(uniqueJobs); // uses idle batching to avoid blocking

    // Step 2: Force initial notification so filter listeners fire on startup
    updateFilterValue("selectedJobs", filterState.selectedJobs);

    // Reintroduce logging via subscription to filter changes
    subscribeToFilterChanges((state) => {
      logger.info("User selected jobs:", [...state.selectedJobs]);
    });

    // Step 3: Sets up centralized filter event listeners
    const tListeners = performance.now();
    logger.debug(
      `Setup filter listeners in ${(tListeners - start).toFixed(1)}ms`
    );

    // Setup Calculate button
    function handleCalculate() {
      const minutes =
        parseInt(document.getElementById("input-min").value, 10) || 0;
      const seconds =
        parseInt(document.getElementById("input-sec").value, 10) || 0;
      const totalSeconds = minutes * 60 + seconds;

      const display = document.getElementById("selection-display");
      display.textContent = `You entered ${minutes}m ${seconds}s = ${totalSeconds} seconds.`;

      logger.info("Calculate pressed. Duration (seconds):", totalSeconds);
    }

    setupCalculateButton(handleCalculate);
  } catch (e) {
    logger.error("Initialization failed:", e);
  } finally {
    isLoading = false;
  }

  const end = performance.now();
  logger.debug(`Total init() duration: ${(end - start).toFixed(1)}ms`);
}
