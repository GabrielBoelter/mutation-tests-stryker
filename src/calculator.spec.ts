import { podeVotar } from './calculator';

describe('Testes da função podeVotar', () => {
    it('deve retornar true para quem tem mais de 16 anos', () => {
        expect(podeVotar(20)).toBe(true);
    });

    it('deve retornar false para quem tem menos de 16 anos', () => {
        expect(podeVotar(10)).toBe(false);
    });

    it('deve retornar true exatamente com 16 anos (teste de borda)', () => {
        expect(podeVotar(16)).toBe(true);
    });
});