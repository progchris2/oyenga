export default class HandleException extends Error {
    constructor(
        message: string,
        public readonly name: string,
        private readonly code: number,
    ) {
        super(message);
    }
}