import { useEffect, useState, ChangeEvent,  } from 'react'
import { fetchData, searchCompany } from '../features/companySlice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, CompaniesDispatch } from '../types'
import SortCompany from './SortCompany';
import {Link} from 'react-router-dom';

const Companies = () => {
  const { data, isLoading, error, search } = useSelector((state: RootState) => state.companyReducer)

  const dispatch:CompaniesDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])


  const handelSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCompany(event.target.value))
  }

  const filteredCompanies = search
    ? data.filter((company) => company.login.toLowerCase().includes(search.toString().toLowerCase()))
    : data;

  return (
    <div className="companies-container">
      <h1 className="companies-title">COMPANIES:</h1>
      <div>
      <label htmlFor="search">Search:</label>
      <input type="text" placeholder="Company Name" onChange={handelSearch} value={search} />
      < SortCompany />
      </div>
      {isLoading === true ? (
        <p className="loading-message">Stay close, we are loading the data</p>
      ) : error ? (
        <p className="error-message">{error || 'Sorry, An error occurred.'}</p>
      ) : (
        <ul className="company-list">
  {filteredCompanies.length > 0 &&
    filteredCompanies.map((company) => {
      const { id, avatar_url, login, description } = company;


      return (
        <li key={id} className="company-item">
          <div className="company-card">
            <img src={avatar_url} alt={login} className="company-avatar" />
            <div className="company-details">
              <p className="company-name">{login}</p>
              <h2 className="company-id">ID: {id}</h2>
              <p className="company-description">{description}</p>

              <Link to={`/companies/${id}`}><button>show more</button></Link>
            </div>
          </div>
        </li>
      );
    })}
</ul>

      )}
    </div>
  )
}
export default Companies