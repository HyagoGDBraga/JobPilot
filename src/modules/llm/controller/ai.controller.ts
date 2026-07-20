import { Request, Response } from "express";
import { aiService } from "../ai-factory";

export class AiController {
  async test(req: Request, res: Response) {
    try {
      const response = await aiService.ask(
        "Explique em poucas palavras o que é uma API REST.",
      );

      return res.json({
        success: true,
        response,
      });
    } catch (error) {
      console.error("AI ERROR:", error);

      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}
