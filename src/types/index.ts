import { ProfileResponse } from "../domains/user/dto/profile-dto";
import { UserSkillResponseDTO } from "../domains/user/dto/skill-dto";
import { UserResponse } from "../domains/user/dto/user-dto";

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

export type ServiceUserCache<T = UserResponse> = {
    userService: T[];
    userCache: string | null;
}

export type ServiceSkillCache<T = UserSkillResponseDTO> = {
    userService: T[];
}

export type ServiceProfileCache<T = ProfileResponse> = {
    userService: T[];
}

export type SupabasePublicURLStorage = {
  publicUrl: string;
};

export type HealthCheckResult<T = any> = {
  result: T;
  message?: string;
};

export type InitializePromise<T = any> = {
  initialize: boolean;
  result: T;
};
