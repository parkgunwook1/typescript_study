import { handleGenerate } from "./handlers/handleGenerate";
import { handleSearchTrend} from "./handlers/handleSearchTrend";
import { handleClickTrend } from "./handlers/handleClickTrend";
import { hanldeTopKeyword } from "./handlers/handleTopKeywords";


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generateBtn")?.addEventListener("click", handleGenerate);
  document.getElementById("searchTrendBtn")?.addEventListener("click", handleSearchTrend);
  document.getElementById("clickTrendBtn")?.addEventListener("click", handleClickTrend);
  document.getElementById("topKeywordBtn")?.addEventListener("click", hanldeTopKeyword);
  // document.getElementById("similarKeywordBtn")?.addEventListener("click", handleSimilarKeyword);
});