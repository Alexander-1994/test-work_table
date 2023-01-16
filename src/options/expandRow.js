const expandRow = {
    renderer: row => (
        <div className='universal-table__expanded-row'>
            <div className='universal-table__expanded-img'>
                <img src={row.img} alt="img" />
            </div>
            <div className="universal-table__expanded-descr">
                <h5>О герое:</h5>
                <p>{row.descr}</p>
                <a href={row.link}>Домашняя страница</a>
            </div>
            <div className="universal-table__expanded-comics">
                <h5>Комиксы с героем:</h5>
                <ul>
                    { 
                        row.comicsItems.map((comic, i) => {
                            return <li key={i}>{comic.name}</li>
                        }) 
                    }
                </ul>
            </div>
        </div>
    ),
    showExpandColumn: true,
    onlyOneExpanding: true
};

export default expandRow;