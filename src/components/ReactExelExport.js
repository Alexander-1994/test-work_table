import { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { filteredData } from "../service/redux/selector";

const ReactExelExport = () => {
    const [exelData, setData] = useState([]),
          exelRef = useRef();

    const data = useSelector(filteredData).map(elem => {
        const obj = {};

        for (let key in elem) {
            if (key === 'img' || key === 'descr' || key === 'comicsItems' || key === 'link') {
                continue;
            }

            obj[key] = elem[key]
        }

        return obj;
    });

    const getExel = () => {
        setData(data);
        setTimeout(() => exelRef.current.link.click(), 1000)
    };
     
    return (
        <>
            <button className="btn btn-primary tooltips" onClick={getExel}>
                EXEL
                <span className="tooltiptext">выгрузить таблицу в CSV</span>
            </button>
            <CSVLink data={exelData} filename="table.csv" ref={exelRef} />
        </>
    )
};

export default ReactExelExport;