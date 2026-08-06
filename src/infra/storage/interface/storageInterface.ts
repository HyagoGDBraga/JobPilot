import { OperationResult, ServiceDataResponse, SupabasePublicURLStorage } from "../../../types";
import { ContentType } from "../types";
export interface SupabaseStorage {
  upload(
    bucket: string,
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ServiceDataResponse>;

  delete(path: string, bucket: string): Promise<OperationResult>;

  getPublicUrl(path: string, bucket: string): Promise<SupabasePublicURLStorage>;
}
