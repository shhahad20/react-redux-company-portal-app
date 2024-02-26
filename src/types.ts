import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchData,fetchCompany } from "./features/companySlice";
import companySlice from './features/companySlice'


export type Company = {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: null;
}

export type CompaniesState ={
    data: Company[];
    isLoading: boolean;
    error: string | null;
    search: number | string;
    singleCompany: Company | null;
  }
export type RootState ={
    companyReducer: ReturnType<typeof companySlice>
  }
 type FeatchCompaniesPendingAction = ReturnType<typeof fetchData.pending>;
 type FeatchCompaniesFulfilledAction = ReturnType<typeof fetchData.fulfilled>;
 type FeatchCompaniesErrorAction = ReturnType<typeof fetchData.rejected>;

 type FeatchCompanyPendingAction = ReturnType<typeof fetchCompany.pending>;
 type FeatchCompanyFulfilledAction = ReturnType<typeof fetchCompany.fulfilled>;
 type FeatchCompanyErrorAction = ReturnType<typeof fetchCompany.rejected>;

 type CompaniesSearchAction = {
    type: 'companies/searchCompany';
    payload: string;
 }
 type CompaniesSortAction = {
  type: 'companies/sortCompany';
  payload: string;
}
export type CompaniesAction =
  |FeatchCompaniesPendingAction
  |FeatchCompaniesFulfilledAction
  |FeatchCompaniesErrorAction
  |FeatchCompanyPendingAction
  |FeatchCompanyFulfilledAction
  |FeatchCompanyErrorAction
  |CompaniesSearchAction
  |CompaniesSortAction;
  
 export type CompaniesDispatch = ThunkDispatch<RootState, void, CompaniesAction>;