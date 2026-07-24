export type ServiceResult<T = void> = {
  success: boolean;
  status: string;
  data?: T;
  message?: string;
  timestamp: Date;
};

export type HealthCheckResult<T = any> = {
    result: T;
    message?: string
};
