import {inject, injectable} from 'inversify';
import {DatabaseInterface} from './DatabaseInterface'
import {TYPES} from "../../../core/container/types";
import DatabaseAdaptor from "./DatabaseAdaptor";

@injectable()
export default class Database implements DatabaseInterface {
    constructor(@inject(TYPES.DatabaseAdaptor) private readonly databaseService: DatabaseAdaptor) {}

    public initialize(): void {
        this.databaseService.initialize()
    }

    public execute() {
       return this.databaseService.execute()
    }
}
