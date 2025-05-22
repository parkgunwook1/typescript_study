// Keyword를 받는다.
// keyword는 이름 , 순위 , 카테고리 , 검색량 , 클릭량으로 이루어진다.
export class KeywordVo {
    constructor(name, rank, category, searchVolume, clickVolume) {
        this.name = name;
        this.rank = rank;
        this.category = category;
        this.searchVolume = searchVolume;
        this.clickVolume = clickVolume;
    }
    getName() {
        return this.name;
    }
    getRank() {
        return this.rank;
    }
    getCategory() {
        return this.category;
    }
    getSearchVolume() {
        return this.searchVolume;
    }
    getClickVolume() {
        return this.clickVolume;
    }
    setName(name) {
        this.name = name;
    }
    setRank(rank) {
        this.rank = rank;
    }
    setCategory(category) {
        this.category = category;
    }
    setSearchVolume(searchVolume) {
        this.searchVolume = searchVolume;
    }
    setClickVolume(clickVolume) {
        this.clickVolume = clickVolume;
    }
}
