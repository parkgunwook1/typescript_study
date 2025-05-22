// Keyword를 받는다.
// keyword는 이름 , 순위 , 카테고리 , 검색량 , 클릭량으로 이루어진다.
export class KeywordVo {
    private name: string;
    private rank: number;
    private category: string;
    private searchVolume: number;
    private clickVolume: number;

    constructor(name: string , rank: number, category: string, searchVolume: number, clickVolume: number) {
        this.name = name;
        this.rank = rank;
        this.category = category;
        this.searchVolume = searchVolume;
        this.clickVolume = clickVolume;
    }
    getName(): string {
        return this.name;
    }
    getRank(): number {
        return this.rank;
    }
    getCategory(): string {
        return this.category;
    }
    getSearchVolume(): number {
        return this.searchVolume;
    }
    getClickVolume(): number {
        return this.clickVolume;
    }
    setName(name: string): void {
        this.name = name;
    }
    setRank(rank: number): void {
        this.rank = rank;
    }
    setCategory(category: string): void {
        this.category = category;
    }
    setSearchVolume(searchVolume: number): void {
        this.searchVolume = searchVolume;
    }
    setClickVolume(clickVolume: number): void {
        this.clickVolume = clickVolume;
    }
}