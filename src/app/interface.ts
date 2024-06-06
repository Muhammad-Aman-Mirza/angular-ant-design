export interface UserOrg {
  aspNetUserOrganizationIdEncrypted: string;
  secOrgId: number;
  aspNetUserGroupIdEncrypted: string;
  secGroupIdEncrypted: Array<UserGroup>;
}
export interface UserGroup {
  idEncrypted: string;
  userOrgIdEncrypted: string;
  secGroupIdEncrypted: string;
}

export interface UserAllowedWorkingDayTime {
  idEncrypted: string;
  userId: string;
  dayGpDtId: string;
  fromTime: string;
  toTime: string;
  isAllowed: boolean;
}

export interface UserMasterRes {
  employeeIdEncrypted: string | null;
  employee: string | null;
  userId: string;
  loginName: string;
  fullName: string;
  emailAddress: string;
  contactNo: string;
  status: boolean;
  settings: UserSetting;
  remarks: string;
  allowedWorkingDaysTimes: UserAllowedWorkingDayTime[];
  aspNetUserOrganizations: UserOrg[];
}

export interface UserSetting {
  idEncrypted: string;
  userId: string;
  twoFactorAuthentication: boolean;
  isUserBindingIgnored: boolean;
  remarks: string;
  isChangePassOnLogin: boolean;
  isHideRunAllTrigger: boolean;
  isAuditEnabled: boolean;
}

export interface SelectEntityEvent {
  idEncrypted: string;
  entityName: string;
  entityTypeRelationOrgIdEncrypted: string;
  email: string;
}
