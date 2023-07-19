interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Delivery Personnel', 'Store Manager', 'Customer Service Representative'],
  tenantName: 'Business',
  applicationName: 'Kaikari',
  addOns: ['chat', 'notifications', 'file'],
};
