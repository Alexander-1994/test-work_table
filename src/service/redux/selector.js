import { createSelector } from "reselect";

export const filteredData = createSelector(
    state => state.characters,
    state => state.enter,
    state => state.searchColumn,
    (characters, enter, searchColumn) => {
        if (!enter) {
            return characters;
        } 
        
        const search = Object.entries(searchColumn);
        let arr = [];

        search.forEach(elem => {
            if (!elem[1]) {
                arr.push(elem[0])
            } 
        })

        return characters.filter(({id, name, date, comics, series, stories}) => {
            return (`${id}`.indexOf(enter) !== -1 && arr.indexOf('id') === -1) ||
                (name.toLowerCase().indexOf(enter.toLowerCase()) !== -1 && arr.indexOf('name') === -1) ||
                (date.indexOf(enter) !== -1 && arr.indexOf('date') === -1) ||
                (`${comics}`.indexOf(enter) !== -1 && arr.indexOf('comics') === -1) ||
                (`${series}`.indexOf(enter) !== -1 && arr.indexOf('series') === -1) ||
                (`${stories}`.indexOf(enter) !== -1 && arr.indexOf('stories') === -1)                
        })   
    }
)