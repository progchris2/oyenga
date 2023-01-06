import {DatabaseInterface} from "./DatabaseInterface";
import {inject, injectable} from "inversify";
import PrismaService from "./PrismaService";
import {TYPES} from "../../../core/container/types";

@injectable()
export default class DatabaseAdaptor implements DatabaseInterface {
    constructor(@inject(TYPES.PrismaService) private readonly prismaService: PrismaService) {}

    public initialize(): void {
        this.prismaService.client.$connect()
    }

    public execute() {
        return this.prismaService.client
    }
}

