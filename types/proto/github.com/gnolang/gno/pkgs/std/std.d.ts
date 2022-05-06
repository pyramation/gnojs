import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../../google/protobuf/any";
/** messages */
export interface BaseAccount {
    Address: string;
    Coins: string;
    PubKey: Any;
    AccountNumber: Long;
    Sequence: Long;
}
export interface MemFile {
    Name: string;
    Body: string;
}
export interface MemPackage {
    Name: string;
    Path: string;
    Files: MemFile[];
}
export interface InternalError {
}
export interface TxDecodeError {
}
export interface InvalidSequenceError {
}
export interface UnauthorizedError {
}
export interface InsufficientFundsError {
}
export interface UnknownRequestError {
}
export interface InvalidAddressError {
}
export interface UnknownAddressError {
}
export interface InvalidPubKeyError {
}
export interface InsufficientCoinsError {
}
export interface OutOfGasError {
}
export interface MemoTooLargeError {
}
export interface InsufficientFeeError {
}
export interface TooManySignaturesError {
}
export interface NoSignaturesError {
}
export interface GasOverflowError {
}
export declare const BaseAccount: {
    encode(message: BaseAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount;
    fromJSON(object: any): BaseAccount;
    toJSON(message: BaseAccount): unknown;
    fromPartial<I extends {
        Address?: string;
        Coins?: string;
        PubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        AccountNumber?: string | number | Long;
        Sequence?: string | number | Long;
    } & {
        Address?: string;
        Coins?: string;
        PubKey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["PubKey"], keyof Any>, never>;
        AccountNumber?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["AccountNumber"], keyof Long>, never>);
        Sequence?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Sequence"], keyof Long>, never>);
    } & Record<Exclude<keyof I, keyof BaseAccount>, never>>(object: I): BaseAccount;
};
export declare const MemFile: {
    encode(message: MemFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemFile;
    fromJSON(object: any): MemFile;
    toJSON(message: MemFile): unknown;
    fromPartial<I extends {
        Name?: string;
        Body?: string;
    } & {
        Name?: string;
        Body?: string;
    } & Record<Exclude<keyof I, keyof MemFile>, never>>(object: I): MemFile;
};
export declare const MemPackage: {
    encode(message: MemPackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemPackage;
    fromJSON(object: any): MemPackage;
    toJSON(message: MemPackage): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["Files"][number], keyof MemFile>, never>)[] & Record<Exclude<keyof I["Files"], keyof {
            Name?: string;
            Body?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MemPackage>, never>>(object: I): MemPackage;
};
export declare const InternalError: {
    encode(_: InternalError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InternalError;
    fromJSON(_: any): InternalError;
    toJSON(_: InternalError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InternalError;
};
export declare const TxDecodeError: {
    encode(_: TxDecodeError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeError;
    fromJSON(_: any): TxDecodeError;
    toJSON(_: TxDecodeError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): TxDecodeError;
};
export declare const InvalidSequenceError: {
    encode(_: InvalidSequenceError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidSequenceError;
    fromJSON(_: any): InvalidSequenceError;
    toJSON(_: InvalidSequenceError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InvalidSequenceError;
};
export declare const UnauthorizedError: {
    encode(_: UnauthorizedError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnauthorizedError;
    fromJSON(_: any): UnauthorizedError;
    toJSON(_: UnauthorizedError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): UnauthorizedError;
};
export declare const InsufficientFundsError: {
    encode(_: InsufficientFundsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFundsError;
    fromJSON(_: any): InsufficientFundsError;
    toJSON(_: InsufficientFundsError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InsufficientFundsError;
};
export declare const UnknownRequestError: {
    encode(_: UnknownRequestError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnknownRequestError;
    fromJSON(_: any): UnknownRequestError;
    toJSON(_: UnknownRequestError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): UnknownRequestError;
};
export declare const InvalidAddressError: {
    encode(_: InvalidAddressError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidAddressError;
    fromJSON(_: any): InvalidAddressError;
    toJSON(_: InvalidAddressError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InvalidAddressError;
};
export declare const UnknownAddressError: {
    encode(_: UnknownAddressError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnknownAddressError;
    fromJSON(_: any): UnknownAddressError;
    toJSON(_: UnknownAddressError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): UnknownAddressError;
};
export declare const InvalidPubKeyError: {
    encode(_: InvalidPubKeyError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidPubKeyError;
    fromJSON(_: any): InvalidPubKeyError;
    toJSON(_: InvalidPubKeyError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InvalidPubKeyError;
};
export declare const InsufficientCoinsError: {
    encode(_: InsufficientCoinsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientCoinsError;
    fromJSON(_: any): InsufficientCoinsError;
    toJSON(_: InsufficientCoinsError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InsufficientCoinsError;
};
export declare const OutOfGasError: {
    encode(_: OutOfGasError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutOfGasError;
    fromJSON(_: any): OutOfGasError;
    toJSON(_: OutOfGasError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): OutOfGasError;
};
export declare const MemoTooLargeError: {
    encode(_: MemoTooLargeError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemoTooLargeError;
    fromJSON(_: any): MemoTooLargeError;
    toJSON(_: MemoTooLargeError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MemoTooLargeError;
};
export declare const InsufficientFeeError: {
    encode(_: InsufficientFeeError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFeeError;
    fromJSON(_: any): InsufficientFeeError;
    toJSON(_: InsufficientFeeError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): InsufficientFeeError;
};
export declare const TooManySignaturesError: {
    encode(_: TooManySignaturesError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TooManySignaturesError;
    fromJSON(_: any): TooManySignaturesError;
    toJSON(_: TooManySignaturesError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): TooManySignaturesError;
};
export declare const NoSignaturesError: {
    encode(_: NoSignaturesError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoSignaturesError;
    fromJSON(_: any): NoSignaturesError;
    toJSON(_: NoSignaturesError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): NoSignaturesError;
};
export declare const GasOverflowError: {
    encode(_: GasOverflowError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasOverflowError;
    fromJSON(_: any): GasOverflowError;
    toJSON(_: GasOverflowError): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GasOverflowError;
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
