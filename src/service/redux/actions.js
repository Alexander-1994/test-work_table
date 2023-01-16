export const charactersFetching = () => ({type: 'CHARACTERS__FETCHING'});
export const charactersFetched = data => ({type: 'CHARACTERS__FETCHED', payload: data});
export const charactersError = () => ({type: 'CHARACTERS__ERROR'});
export const enterValue = data => ({type: 'ENTER_VALUE', payload: data});
export const changeStyle = data => ({type: 'CHANGE_STYLE', payload: data});
export const changeSearchId = data => ({type: 'CHANGE_STYLE', payload: data});
export const changeSearchColumn = (elem, value) => ({type: 'CHANGE_SEARCH_COLUMN', payload: {elem, value}});
export const changeFormatDate = value => ({type: 'CHANGE_FORMAT_DATE', payload: value});