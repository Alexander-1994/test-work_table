const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        с { from } по { to } герой из { size }
    </span>
);
  
const settings = {
    paginationSize: 5,
    pageStartIndex: 1,
    prePageText: 'Назад',
    nextPageText: 'Вперёд',		
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [
        {text: '10', value: 10}, 
        {text: '25', value: 25},
        {text: '50', value: 50},   
        {text: 'Все', value: 100}
    ] 
};

export default settings;