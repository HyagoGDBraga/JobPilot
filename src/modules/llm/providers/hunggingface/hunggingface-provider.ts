import { AiProvider } from './../../domain/ai-provider';
import { huggingFaceClient } from './hunggingface-client';
import { AI_MODELS } from '../../models/llm_models';
export class HunggingFace_Provider implements AiProvider {
    async generate(prompt: string): Promise<string> {

    const response = await huggingFaceClient.chatCompletion({
      model: AI_MODELS.JOB_MATCHING,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.2,
      max_tokens: 800
    });

    return response.choices[0].message.content ?? "";
  }
}
