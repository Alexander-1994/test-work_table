import { useSelector, useDispatch } from "react-redux";
import ReactExelExport from "./ReactExelExport";
import {
    enterValue,
	changeStyle,
	changeSearchColumn,
    changeFormatDate
} from '../service/redux/actions';

const HeaderTable = ({pdf}) => {
    const {enter, searchColumn, formatDate} = useSelector(state => state),
          dispatch = useDispatch();

    return <>
        <div className="universal-table__tools">
            <div className="universal-table__styles">
                <div className="universal-table__styles-none tooltips" 
                     onClick={() => dispatch(changeStyle('none'))}>
                        <span className="tooltiptext">прозрачная таблица</span>    
                </div>
                <div className="universal-table__styles-light tooltips" 
                     onClick={() => dispatch(changeStyle('LemonChiffon'))}>
                        <span className="tooltiptext">светлая таблица</span>
                 </div>
                <div className="universal-table__styles-sky tooltips" 
                     onClick={() => dispatch(changeStyle('SkyBlue'))}>
                        <span className="tooltiptext">таблица небесного цвета</span>
                </div>
            </div>
            <button onClick={pdf} className="btn btn-primary tooltips">
                PDF
                <span className="tooltiptext">выгрузить таблицу в PDF</span>
            </button>
            <ReactExelExport />
            <div className='universal-table__search'>
                <input type="text" 
                        value={enter} onChange={e => dispatch(enterValue(e.target.value))}
                        placeholder="Поиск" />
                <div className="universal-table__loop">&#128269;</div>
            </div>
        </div>
        <div className='universal-table__search-settings'>
            <label className="tooltips">
                <span className="tooltiptext">Поиск по 'id' {searchColumn.id ? 'включен' : 'выключен'}</span>
                &#128270;
                <input type="checkbox"
                        id="id"
                        checked={searchColumn.id}
                        onChange={e => dispatch(changeSearchColumn(e.currentTarget.getAttribute('id'), e.target.checked))} />
            </label>
            <label className="tooltips">
                <span className="tooltiptext">Поиск по 'имя' {searchColumn.name ? 'включен' : 'выключен'}</span>
                &#128270;
                <input type="checkbox"
                        id="name"
                        checked={searchColumn.name} 
                        onChange={e => dispatch(changeSearchColumn(e.currentTarget.getAttribute('id'), e.target.checked))} />
            </label>
            <div>
                <label className="tooltips">
                    <span className="tooltiptext">Поиск по 'дате' {searchColumn.date ? 'включен' : 'выключен'}</span>
                    &#128270;
                    <input type="checkbox"
                            id="date"
                            checked={searchColumn.date} 
                            onChange={e => dispatch(changeSearchColumn(e.currentTarget.getAttribute('id'), e.target.checked))} />
                </label>
                <label className="tooltips">
                    <span className="tooltiptext">Формат {formatDate ? 'гггг-мм-дд' : 'дд/мм/гггг'}</span>
                    &#9203;
                    <input type="checkbox"
                            checked={formatDate} 
                            onChange={e => dispatch(changeFormatDate(e.target.checked))} />
                </label>
            </div>
            <label className="tooltips">
                <span className="tooltiptext">Поиск по 'комиксы' {searchColumn.comics ? 'включен' : 'выключен'}</span>
                &#128270;
                <input type="checkbox"
                        id="comics"
                        checked={searchColumn.comics} 
                        onChange={e => dispatch(changeSearchColumn(e.currentTarget.getAttribute('id'), e.target.checked))} />
            </label>
            <label className="tooltips">
                <span className="tooltiptext">Поиск по 'серии' {searchColumn.series ? 'включен' : 'выключен'}</span>
                &#128270;
                <input type="checkbox"
                        id="series"
                        checked={searchColumn.series} 
                        onChange={e => dispatch(changeSearchColumn(e.currentTarget.getAttribute('id'), e.target.checked))} />
            </label>
            <label className="tooltips">
                <span className="tooltiptext">Поиск по 'истории' {searchColumn.stories ? 'включен' : 'выключен'}</span>
                &#128270;
                <input type="checkbox"
                        id="stories"
                        checked={searchColumn.stories} 
                        onChange={e => dispatch(changeSearchColumn(e.currentTarget.getAttribute('id'), e.target.checked))} />
            </label>
        </div>
    </>
}

export default HeaderTable;