import { supabaseClient } from "./../../database/supabase/client/supabase-client";
import { SupabaseClient } from "@supabase/supabase-js";
import { ServiceDataResponse, OperationResult } from "../../../types";
import { UploadError } from "../../../errors/upload-image-error";
import { getCurrentDate } from "../../../helpers/date-helper";

const contentType = {
  JPEG: "image/jpeg",
  PNG: "image/png",
  PDF: "application/pdf",
  CSV: "application/csv",
} as const;

type ContentType = (typeof contentType)[keyof typeof contentType];

export class SupabaseProvider {
  private readonly client: SupabaseClient;
  constructor() {
    this.client = supabaseClient;
  }
  uploadImage = async (
    file: Buffer,
    path: string,
    contentType: ContentType,
  ): Promise<ServiceDataResponse> => {
    try {
      const { data, error } = await this.client.storage
        .from("images")
        .upload(path, file, { contentType, upsert: true });
      if (error) {
        throw new UploadError();
      }
      return {
        success: true,
        status: 200,
        result: data,
        message: `Ok, upload has been works`,
        timestamp: getCurrentDate(),
      };
    } catch (err) {
      throw err;
    }
  };

  uploadPdfOrCsv = async (
    path: string,
    file: Buffer,
    contentType: ContentType,
  ): Promise<ServiceDataResponse> => {
    try {
      const { data, error } = await this.client.storage
        .from("PDF-CSV files")
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

  removePdfOrCsv = async (path: string): Promise<OperationResult> => {
    try {
      const { error } = await this.client.storage
        .from("PDF-CSV files")
        .remove([path]);

      return {
        success: !error,
        message: error ? `Path has been removed` : `Failed on remove path`,
      };
    } catch (err) {
      throw err;
    }
  };
  removeImage = async (path: string): Promise<OperationResult> => {
    try {
      const { error } = await this.client.storage.from("images").remove([path]);
      return {
        success: !error,
        message: error ? `Path has been removed` : `Failed on remove path`,
      };
    } catch (err) {
      throw err;
    }
  };
}
