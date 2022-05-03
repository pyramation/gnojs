import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** messages */
export interface ProofOp {
    Type: string;
    Key: Uint8Array;
    Data: Uint8Array;
}
export interface Proof {
    Ops: ProofOp[];
}
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial<I extends {
        Type?: string;
        Key?: Uint8Array;
        Data?: Uint8Array;
    } & {
        Type?: string;
        Key?: Uint8Array;
        Data?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ProofOp>, never>>(object: I): ProofOp;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial<I extends {
        Ops?: {
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        }[];
    } & {
        Ops?: {
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        }[] & ({
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        } & {
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        } & Record<Exclude<keyof I["Ops"][number], keyof ProofOp>, never>)[] & Record<Exclude<keyof I["Ops"], keyof {
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, "Ops">, never>>(object: I): Proof;
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
