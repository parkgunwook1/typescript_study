import { KeywordApiService } from "../keyword/KeywordApiService";

const apiService = new KeywordApiService();

export async function handleGenerate() {
    const button = document.getElementById("generateBtn");
    const input = document.getElementById("generatePrompt") as HTMLInputElement;
    const resultDiv = document.getElementById("generateResult")!;

    try {
        const keywords = await apiService.generateKeywords(input.value);
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