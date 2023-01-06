import HandleException from "../../../../core/exceptions/handleException";

export default class ConflictUserException extends HandleException {
    constructor() {
        super('this user can only create verify, verify your payload', ConflictUserException.name, 409);
    }
}

