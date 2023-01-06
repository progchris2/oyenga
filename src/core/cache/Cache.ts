import {CacheInterface} from "./CacheInterface";

export class Cache implements CacheInterface {
    expiresAfter(time: Date): unknown {
        return undefined;
    }

    expiresAt(expiration: Date): unknown {
        return undefined;
    }

    get(): unknown {
        return undefined;
    }

    getKey(): string {
        return "";
    }

    isHit(): boolean {
        return false;
    }

    set(value: unknown): void {
    }
}