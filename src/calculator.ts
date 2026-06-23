export function podeVotar(idade: number): boolean {
    if (idade >= 16) {
        return true;
    }
    return false;
}