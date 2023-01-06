import HandleException from "./handleException";

describe('src/core/exceptions', () => {

    it('make sure the class is defined', () => {
        expect(new HandleException('', '', 404)).toBeDefined();
    })

    it('Throw an exception on any error', () => {
        try {
            throw new HandleException('i am a critical error', 'From the HomePage class', 501)
        } catch (e: unknown) {
            expect((e as Record<string, unknown>).message).toBe('i am a critical error');
            expect((e as Record<string, unknown>).code).toBe(501);
            expect((e as Record<string, unknown>).name).toBe('From the HomePage class');
        }
    })
})