import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** messages */
export interface PubKeySecp256k1 {
    Value: Uint8Array;
}
export interface PrivKeySecp256k1 {
    Value: Uint8Array;
}
export declare const PubKeySecp256k1: {
    encode(message: PubKeySecp256k1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeySecp256k1;
    fromJSON(object: any): PubKeySecp256k1;
    toJSON(message: PubKeySecp256k1): unknown;
    fromPartial<I extends {
        Value?: Uint8Array;
    } & {
        Value?: Uint8Array;
    } & Record<Exclude<keyof I, "Value">, never>>(object: I): PubKeySecp256k1;
};
export declare const PrivKeySecp256k1: {
    encode(message: PrivKeySecp256k1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivKeySecp256k1;
    fromJSON(object: any): PrivKeySecp256k1;
    toJSON(message: PrivKeySecp256k1): unknown;
    fromPartial<I extends {
        Value?: Uint8Array;
    } & {
        Value?: Uint8Array;
    } & Record<Exclude<keyof I, "Value">, never>>(object: I): PrivKeySecp256k1;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
