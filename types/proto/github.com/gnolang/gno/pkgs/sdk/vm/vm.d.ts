import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MemPackage } from "../../../../../../github.com/gnolang/gno/pkgs/std/std";
/** messages */
export interface mCall {
    Caller: string;
    Send: string;
    PkgPath: string;
    Func: string;
    Args: string[];
}
export interface mAddpkg {
    Creator: string;
    Package: MemPackage;
    Deposit: string;
}
export interface InvalidPkgPathError {
}
export interface InvalidStmtError {
}
export interface InvalidExprError {
}
export declare const mCall: {
    encode(message: mCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): mCall;
    fromJSON(object: any): mCall;
    toJSON(message: mCall): unknown;
    fromPartial<I extends {
        Caller?: string;
        Send?: string;
        PkgPath?: string;
        Func?: string;
        Args?: string[];
    } & {
        Caller?: string;
        Send?: string;
        PkgPath?: string;
        Func?: string;
        Args?: string[] & string[] & Record<Exclude<keyof I["Args"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof mCall>, never>>(object: I): mCall;
};
export declare const mAddpkg: {
    encode(message: mAddpkg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): mAddpkg;
    fromJSON(object: any): mAddpkg;
    toJSON(message: mAddpkg): unknown;
    fromPartial<I extends {
        Creator?: string;
        Package?: {
            Name?: string;
            Path?: string;
            Files?: {
                Name?: string;
                Body?: string;
            }[];
        };
        Deposit?: string;
    } & {
        Creator?: string;
        Package?: {
            Name?: string;
            Path?: string;
            Files?: {
                Name?: string;
                Body?: string;
            }[];
        } & {
            Name?: string;
            Path?: string;
            Files?: {
                Name?: string;
                Body?: string;
            }[] & ({
                Name?: string;
                Body?: string;
            } & {
                Name?: string;
                Body?: string;
            } & Record<Exclude<keyof I["Package"]["Files"][number], keyof import("../../../../../../github.com/gnolang/gno/pkgs/std/std").MemFile>, never>)[] & Record<Exclude<keyof I["Package"]["Files"], keyof {
                Name?: string;
                Body?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["Package"], keyof MemPackage>, never>;
        Deposit?: string;
    } & Record<Exclude<keyof I, keyof mAddpkg>, never>>(object: I): mAddpkg;
};
export declare const InvalidPkgPathError: {
    encode(_: InvalidPkgPathError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidPkgPathError;
    fromJSON(_: any): InvalidPkgPathError;
    toJSON(_: InvalidPkgPathError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InvalidPkgPathError;
};
export declare const InvalidStmtError: {
    encode(_: InvalidStmtError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidStmtError;
    fromJSON(_: any): InvalidStmtError;
    toJSON(_: InvalidStmtError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InvalidStmtError;
};
export declare const InvalidExprError: {
    encode(_: InvalidExprError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidExprError;
    fromJSON(_: any): InvalidExprError;
    toJSON(_: InvalidExprError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InvalidExprError;
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
