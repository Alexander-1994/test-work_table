import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useReactToPrint } from "react-to-print";
import { filteredData } from '../service/redux/selector';
import { columns, expandRow, settings } from '../options';
import { useServiceData } from '../service/hooks/useServiceData';
import {
	charactersFetching,
	charactersFetched,
	charactersError,
} from '../service/redux/actions';
import HeaderTable from './HeaderTable';
import Loading from './Loading';
import Error from './Error';
import '../styles/table.sass';

const Table = () => {
	const {isLoading, isError, style} = useSelector(state => state),
		  characters = useSelector(filteredData),
		  dispatch = useDispatch(),
		  requestData = useServiceData();

	const pdfRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => pdfRef.current,
		documentTitle: 'table'
	});

	const _url = `https://gateway.marvel.com:443/v1/public/characters?offset=1200&limit=100&apikey=cc3718966f7ae60fd4a489f88f2c3bef`;

	useEffect(() => {
		getAllUsers();
		//eslint-disable-next-line
	}, []);

	const getAllUsers = () => {
		dispatch(charactersFetching());
		requestData(_url)
			.then(answer => dispatch(charactersFetched(answer)))
			.catch(() => dispatch(charactersError()))
	}

	if (isLoading) {
		return <Loading />
	} else if (isError) {
		return <Error />
	}

	const styleTable = style;

	return (
		<div className="wrapper">
			<div className='universal-table' style={{background: styleTable}} ref={pdfRef}>
				<HeaderTable pdf={handlePrint} />
				<BootstrapTable 
					striped
					hover
					condensed
					bootstrap4
					keyField='id' 
					data={characters} 
					columns={columns} 
					pagination={paginationFactory(settings)}
					expandRow={expandRow} />
			</div>
		</div>
	)
}

export default Table;