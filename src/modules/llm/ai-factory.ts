import { AiService } from "./service/inference.service";
import { HunggingFace_Provider } from "./providers/hunggingface/hunggingface-provider";

const provider = new HunggingFace_Provider();

export const aiService = new AiService(provider);