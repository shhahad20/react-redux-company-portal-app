import {useParams} from 'react-router-dom';
import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany } from '../features/companySlice';

import { RootState, CompaniesDispatch } from '../types'

const SingleCompany = () =>{

    // get the id
    const {id} = useParams();
    const { singleCompany, isLoading, error} = useSelector((state: RootState) => state.companyReducer)

    const dispatch:CompaniesDispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchCompany(Number(id)))
    }, [dispatch, id])

    if (isLoading){
        return <p>Company data is loading . . . </p>
    }
    if (error){
        return <p>{error}</p>
    }
    return(
        <div>
            <ul className="company-list">
  {singleCompany &&

        <li key={id} className="company-item">
          <div className="company-card">
            <img src={singleCompany.avatar_url} alt={singleCompany.login} className="company-avatar" />
            <div className="company-details">
              <p className="company-name">{singleCompany.login}</p>
              <h2 className="company-id">ID: {singleCompany.id}</h2>
              <p className="company-description">{singleCompany.description}</p>
            </div>
          </div>
        </li>
    }
</ul>
        </div>
    );
}
export default SingleCompany;