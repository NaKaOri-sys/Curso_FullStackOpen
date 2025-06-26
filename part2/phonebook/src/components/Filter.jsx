const Filter = ({handleFilterNumbers}) => {
    return (
        <div>
            filter shown with<input onChange={handleFilterNumbers} />
        </div>
    );
};

export default Filter;