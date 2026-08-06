import { supabaseClient } from "./../../database/supabase/client/supabase-client";
import { SupabaseClient } from "@supabase/supabase-js";
import { ServiceDataResponse, OperationResult, SupabasePublicURLStorage } from "../../../types";
import { UploadError } from "../../../errors/upload-image-error";
import { getCurrentDate } from "../../../helpers/date-helper";
import { SupabaseStorage } from "../interface/storageInterface";
import { ContentType } from "../types";
import { UndefinedError } from "../../../errors/undefined-error";

export class SupabaseProvider implements SupabaseStorage {
  private readonly client: SupabaseClient;
  constructor() {
    this.client = supabaseClient;
  }
    upload = async (
    bucket: string,  
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ServiceDataResponse> => {
    try {
      const { data, error } = await this.client.storage
        .from(bucket)
        .upload(path, file, { contentType, upsert: true });
      if (error) {
        throw new UploadError();
      }
      return {
        success: true,
        result: data,
        status: 200,
        timestamp: getCurrentDate(),
      };
    } catch (err) {
      throw err;
    }
  };

  delete = async (path: string, bucket: string): Promise<OperationResult> => {
    try {
      const { error } = await this.client.storage
        .from(bucket)
        .remove([path]);

      return {
        success: !error,
        message: error ? `Path has been removed` : `Failed on remove path`,
      };
    } catch (err) {
      throw err;
    }
  };
getPublicUrl = async(path: string, bucket: string): Promise<SupabasePublicURLStorage> => {
    try{
      const {data} = await this.client.storage.from(bucket).getPublicUrl(path);
      if(!data){
        throw new UndefinedError();
      };
      return {
        publicUrl: data.publicUrl,
      };
    } catch(err){
      throw err;
    };
}
}
