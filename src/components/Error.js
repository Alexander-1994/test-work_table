import error from '../sources/error.gif';

const Error = () => {
    return (
        <div className='universal-table__error'>
            <img src={error} alt="error" />
            <h5>
                К сожалению, возникла ошибка. <br/>
                Попробуйте позже
            </h5>
		</div>
    )
};

export default Error;