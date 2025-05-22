import { KeywordVo } from "./KeywordVo.js";
// File 'c:/Users/modernwave/type/project/store/ts/keyword/KeywordVo.ts' is not a module
export class KeywordApiService {
    constructor() {
        this.baseUrl = "http://localhost:8080/keywords";
    }
    async generateKeywords(prompt) {
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
        return data.map((item) => new KeywordVo(item.name, item.rank, item.category, item.searchVolume, item.clickVolume));
    }
    // 인기 키워드 TOP 100을 가져온다.
    async getSearchTrend() {
        const response = await fetch(`${this.baseUrl}/search-trend`);
        if (!response.ok) {
            throw new Error("Failed to fetch search-trend keywords");
        }
        const data = await response.json();
        const keywords = data.map((item) => {
            return new KeywordVo(item.name, item.rank, item.category, item.searchVolume, item.clickVolume);
        });
        return keywords;
    }
    // 인기 키워드 TOP 100을 가져온다.
    async getTopKeywords() {
        const response = await fetch(`${this.baseUrl}/top`);
        if (!response.ok) {
            throw new Error("Failed to fetch top keywords");
        }
        const data = await response.json();
        const keywords = data.map((item) => {
            return new KeywordVo(item.name, item.rank, item.category, item.searchVolume, item.clickVolume);
        });
        return keywords;
    }
    // 클릭량 높은 것 TOP 100을 가져온다.
    async getClickTrend() {
        const response = await fetch(`${this.baseUrl}/click-trend`);
        if (!response.ok) {
            throw new Error("Failed to fetch click trend keywords");
        }
        const data = await response.json();
        const keywords = data.map((item) => {
            return new KeywordVo(item.name, item.rank, item.category, item.searchVolume, item.clickVolume);
        });
        return keywords;
    }
}
