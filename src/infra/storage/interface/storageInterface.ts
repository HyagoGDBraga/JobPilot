import { OperationResult, ServiceDataResponse } from "../../../types";
import { ContentType } from "../types";
export interface SupabaseStorage {
  upload(
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ServiceDataResponse>;

  delete(path: string): Promise<OperationResult>;

  getPublicUrl(path: string): string;
}
