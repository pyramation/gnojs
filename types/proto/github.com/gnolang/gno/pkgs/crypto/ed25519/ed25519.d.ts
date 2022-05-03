import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** messages */
export interface PubKeyEd25519 {
    Value: Uint8Array;
}
export interface PrivKeyEd25519 {
    Value: Uint8Array;
}
export declare const PubKeyEd25519: {
    encode(message: PubKeyEd25519, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyEd25519;
    fromJSON(object: any): PubKeyEd25519;
    toJSON(message: PubKeyEd25519): unknown;
    fromPartial<I extends {
        Value?: Uint8Array;
    } & {
        Value?: Uint8Array;
    } & Record<Exclude<keyof I, "Value">, never>>(object: I): PubKeyEd25519;
};
export declare const PrivKeyEd25519: {
    encode(message: PrivKeyEd25519, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivKeyEd25519;
    fromJSON(object: any): PrivKeyEd25519;
    toJSON(message: PrivKeyEd25519): unknown;
    fromPartial<I extends {
        Value?: Uint8Array;
    } & {
        Value?: Uint8Array;
    } & Record<Exclude<keyof I, "Value">, never>>(object: I): PrivKeyEd25519;
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
