import { openai } from '../lib/openai';

export async function normalizeCPF(inputCPF: string): Promise<string | null> {
    try {
        const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "Normalize the following CPF to the format XXX.XXX.XXX-XX. If the CPF is invalid, respond with 'Invalid CPF'." },
            { role: "user", content: inputCPF }
        ]
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error normalizing CPF:', error);
        return 'Invalid CPF';
    }
}
