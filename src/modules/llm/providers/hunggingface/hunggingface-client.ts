import { InferenceClient } from '@huggingface/inference';
import { env } from '../../../../env/env.zod';
const hf_token = env.HF_TOKEN as string;
export const huggingFaceClient = new InferenceClient(hf_token);