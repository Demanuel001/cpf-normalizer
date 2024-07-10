import { normalizeCPF } from '../../src/utils/normalizeCPF';
import { openai } from '../../src/lib/openai';

jest.mock('../../src/lib/openai', () => ({
    openai: {
        chat: {
            completions: {
                create: jest.fn()
            }
        }
    }
}));

describe('normalizeCPF', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should return formatted CPF when API responds successfully', async () => {
      const inputCPF = '12345678900';
      const formattedCPF = '123.456.789-00';

      (openai.chat.completions.create as jest.Mock).mockResolvedValue({
        choices: [{
          message: {
            content: formattedCPF
          }
        }]
      });

      const result = await normalizeCPF(inputCPF);
      expect(result).toBe(formattedCPF);
    });

    it('should return "Invalid CPF" when API response is an error', async () => {
      const inputCPF = 'invalid-cpf';
      jest.spyOn(console, 'error').mockImplementation(() => {});

      (openai.chat.completions.create as jest.Mock).mockRejectedValue(new Error('API Error'));

      const result = await normalizeCPF(inputCPF);
      expect(result).toBe('Invalid CPF');
    });
  });
