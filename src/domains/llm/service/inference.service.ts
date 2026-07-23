import { AiProvider } from "../domain/ai-provider";
export class AiService {
  constructor(private readonly provider: AiProvider) {}

  async ask(prompt: string): Promise<string> {
    return this.provider.generate(prompt);
  }
};



