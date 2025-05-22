
import { KeywordVo } from "./KeywordVo";
// File 'c:/Users/modernwave/type/project/store/ts/keyword/KeywordVo.ts' is not a module

export class KeywordApiService {
    private baseUrl: string = "http://localhost:8080/keywords";

     async generateKeywords(prompt: string): Promise<KeywordVo[]> {
    const response = await fetch(`${this.baseUrl}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `prompt=${encodeURIComponent(prompt)}`
    });

    if (!response.ok) {
      throw new Error("키워드 생성 실패");
    }

    const data = await response.json();
    return data.map((item: any) =>
      new KeywordVo(
        item.name,
        item.rank,
        item.category,
        item.searchVolume,
        item.clickVolume
      )
    );
  }

    // 인기 키워드 TOP 100을 가져온다.
    async getTopKeywords(): Promise<KeywordVo[]> {
        const response = await fetch(`${this.baseUrl}/top`);
        if (!response.ok) {
            throw new Error("Failed to fetch top keywords");
        }

        const data = await response.json();
        const keywords: KeywordVo[] = data.map((item : any) => {
            return new KeywordVo(
                item.name,
                item.rank,
                item.category,
                item.searchVolume,
                item.clickVolume
            )
        });
        return keywords;
    }

    // 클릭량 높은 것 TOP 100을 가져온다.
    async getClickTrend(): Promise<KeywordVo[]> {
        const response = await fetch(`${this.baseUrl}/click-trend`);
        if (!response.ok) {
            throw new Error("Failed to fetch click trend keywords");
        }

        const data = await response.json();
        const keywords: KeywordVo[] = data.map((item : any) => {
            return new KeywordVo(
                item.name,
                item.rank,
                item.category,
                item.searchVolume,
                item.clickVolume
            )
        });
        return keywords;
    }   
}