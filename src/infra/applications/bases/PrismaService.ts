import {injectable} from "inversify";
import {PrismaClient} from "@prisma/client";

@injectable()
export default class PrismaService {
    private readonly prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    get client() {
        return this.prismaClient;
    }
}

