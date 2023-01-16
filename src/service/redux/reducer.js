const initialState = {
    characters: [],
    enter: '',
    style: 'LemonChiffon',
    searchColumn: {
        id: true,
        name: true,
        date: true,
        comics: true,
        series: true,
        stories: true
    },
    formatDate: true,
    isLoading: false,
    isError: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHARACTERS__FETCHING': 
            return {
                ...state,
                isLoading: true
            }
        case 'CHARACTERS__FETCHED': 
            return {
                ...state,
                characters: action.payload,
                isLoading: false
            }
        case 'CHARACTERS__ERROR': 
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'ENTER_VALUE':
            return {
                ...state,
                enter: action.payload
            }
        case 'CHANGE_STYLE':
            return {
                ...state,
                style: action.payload
            }
        case 'CHANGE_SEARCH_COLUMN':
            return {
                ...state,
                searchColumn: {
                    ...state.searchColumn, [action.payload.elem]: action.payload.value
                }
            }
        case 'CHANGE_FORMAT_DATE': 
            return {
                ...state,
                formatDate: action.payload,
                characters: state.characters.map(item => {
                    if (state.formatDate) {
                        return {...item, date: item.date.slice(8) + '/' + item.date.slice(5, 7) + '/' + item.date.slice(0, 4)}
                    } else {
                        return {...item, date: item.date.slice(6) + '-' + item.date.slice(3, 5) + '-' + item.date.slice(0, 2)}
                    }
                })
            }
        default: 
            return state
    }
}