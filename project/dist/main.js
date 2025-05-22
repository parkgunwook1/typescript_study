import { handleGenerate } from "./handlers/handleGenerate.js";
import { handleSearchTrend } from "./handlers/handleSearchTrend.js";
import { handleClickTrend } from "./handlers/handleClickTrend.js";
import { hanldeTopKeyword } from "./handlers/handleTopKeywords.js";
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generateBtn")?.addEventListener("click", handleGenerate);
    document.getElementById("searchTrendBtn")?.addEventListener("click", handleSearchTrend);
    document.getElementById("clickTrendBtn")?.addEventListener("click", handleClickTrend);
    document.getElementById("topKeywordBtn")?.addEventListener("click", hanldeTopKeyword);
    // document.getElementById("similarKeywordBtn")?.addEventListener("click", handleSimilarKeyword);
});
