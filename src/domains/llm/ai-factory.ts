import { AiService } from "./service/inference.service";
import { HuggingFaceProvider } from "./providers/hunggingface/hunggingface-provider";

const provider = new HuggingFaceProvider();

export const aiService = new AiService(provider);