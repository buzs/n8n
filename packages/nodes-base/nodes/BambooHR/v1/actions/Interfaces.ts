import {
  AllEntities,
  Entity,
  PropertiesOf,
} from 'n8n-workflow';

type BambooHRMap = {
  employees: 'create' | 'get' | 'getDirectory' | 'update';
  employeeFiles: 'create' | 'del' | 'get' | 'getAll' | 'update';
  companyFiles: 'create' | 'del' | 'get' | 'getAll' | 'update';
};

export type BambooHR = AllEntities<BambooHRMap>;

export type BambooHRCompanyFiles = Entity<BambooHRMap, 'companyFiles'>;
export type BambooHREmployees = Entity<BambooHRMap, 'employees'>;
export type BambooHREmployeeFiles = Entity<BambooHRMap, 'employeeFiles'>;

export type CompanyFilesProperties = PropertiesOf<BambooHRCompanyFiles>;
export type EmployeesProperties = PropertiesOf<BambooHREmployees>;
export type EmployeeFilesProperties = PropertiesOf<BambooHREmployeeFiles>;

export interface IAttachment {
  fields: {
    item?: object[];
  };
  actions: {
    item?: object[];
  };
}
