import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** messages */
export interface Bip44Params {
    Purpose: number;
    CoinType: number;
    Account: number;
    Change: boolean;
    AddressIndex: number;
}
export declare const Bip44Params: {
    encode(message: Bip44Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bip44Params;
    fromJSON(object: any): Bip44Params;
    toJSON(message: Bip44Params): unknown;
    fromPartial<I extends {
        Purpose?: number;
        CoinType?: number;
        Account?: number;
        Change?: boolean;
        AddressIndex?: number;
    } & {
        Purpose?: number;
        CoinType?: number;
        Account?: number;
        Change?: boolean;
        AddressIndex?: number;
    } & Record<Exclude<keyof I, keyof Bip44Params>, never>>(object: I): Bip44Params;
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
