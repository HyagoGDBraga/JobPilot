import { InferenceClient } from '@huggingface/inference';
import { env } from '../../../../env/env.zod';
const hfToken = env.HF_TOKEN as string;
export const huggingFaceClient = new InferenceClient(hfToken);