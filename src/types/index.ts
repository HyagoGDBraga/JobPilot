export type ServiceResult<T = void> = {
  success: boolean;
  status: number;
  data?: T;
  message?: string;
  timestamp: string;
};

export type ServiceDataResponse<T = any> = {
  result: T;
  success: boolean;
  message?: string;
  status: number;
  timestamp?: string;
};
export type OperationResult = {
  success: boolean;
  message?: string;
  error?: Error;
};

export type HealthCheckResult<T = any> = {
  result: T;
  message?: string;
};

export type InitializePromise<T = any> = {
  initialize: boolean;
  result: T;
};
