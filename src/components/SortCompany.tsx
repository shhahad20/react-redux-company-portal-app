import {ChangeEvent} from 'react';
import { useDispatch } from 'react-redux';
import {sortCompany} from '../features/companySlice';
import { CompaniesDispatch } from '../types';

const SortCompany = () =>{
    // const { sort } = useSelector((state: RootState) => state.companyReducer)

    const dispatch: CompaniesDispatch = useDispatch();

    const handleOptions = (event:ChangeEvent<HTMLSelectElement>) =>{
        const sortValue = event.target.value;
        console.log(sortValue);
        dispatch(sortCompany(event.target.value))
        };
    return(
        <div>
            <label htmlFor="sort">Sort by:</label>
            <select name="sort" id="sort" onChange={handleOptions}>
                <option value="id">id</option>
                <option value="login">name</option>
            </select>
        </div>
    );
}
export default SortCompany;