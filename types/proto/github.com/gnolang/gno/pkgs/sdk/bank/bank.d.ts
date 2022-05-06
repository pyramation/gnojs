import Long from "long";
import * as _m0 from "protobufjs/minimal";
/** messages */
export interface NoInputsError {
}
export interface NoOutputsError {
}
export interface InputOutputMismatchError {
}
export interface MsgSend {
    FromAddress: string;
    ToAddress: string;
    Amount: string;
}
export declare const NoInputsError: {
    encode(_: NoInputsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoInputsError;
    fromJSON(_: any): NoInputsError;
    toJSON(_: NoInputsError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): NoInputsError;
};
export declare const NoOutputsError: {
    encode(_: NoOutputsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoOutputsError;
    fromJSON(_: any): NoOutputsError;
    toJSON(_: NoOutputsError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): NoOutputsError;
};
export declare const InputOutputMismatchError: {
    encode(_: InputOutputMismatchError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InputOutputMismatchError;
    fromJSON(_: any): InputOutputMismatchError;
    toJSON(_: InputOutputMismatchError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InputOutputMismatchError;
};
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial<I extends {
        FromAddress?: string;
        ToAddress?: string;
        Amount?: string;
    } & {
        FromAddress?: string;
        ToAddress?: string;
        Amount?: string;
    } & Record<Exclude<keyof I, keyof MsgSend>, never>>(object: I): MsgSend;
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
