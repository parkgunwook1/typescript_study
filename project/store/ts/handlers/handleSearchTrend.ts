import { KeywordApiService } from "../keyword/KeywordApiService";

const apiService = new KeywordApiService();

export async function handleSearchTrend() {

    const searchTrendBtn = document.getElementById("searchTrendBtn") as HTMLButtonElement;
    const resultDiv = document.getElementById("searchTrendResult")!;

    try {
        const keywords = await apiService.getSearchTrend();
        resultDiv.innerHTML = keywords.map(k => `
      <div>
        <strong>${k.getName()}</strong> (${k.getCategory()})<br>
        순위: ${k.getRank()} / 검색량: ${k.getSearchVolume()} / 클릭량: ${k.getClickVolume()}
      </div>
    `).join("");
    } catch (err) {
        alert("에러: " + (err as Error).message);
    }
}

