import { Any } from "../../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
    fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(object: I): BaseAccount;
};
export declare const MemFile: {
    encode(message: MemFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemFile;
    fromJSON(object: any): MemFile;
    toJSON(message: MemFile): unknown;
    fromPartial<I extends Exact<DeepPartial<MemFile>, I>>(object: I): MemFile;
};
export declare const MemPackage: {
    encode(message: MemPackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemPackage;
    fromJSON(object: any): MemPackage;
    toJSON(message: MemPackage): unknown;
    fromPartial<I extends Exact<DeepPartial<MemPackage>, I>>(object: I): MemPackage;
};
export declare const InternalError: {
    encode(_: InternalError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InternalError;
    fromJSON(_: any): InternalError;
    toJSON(_: InternalError): unknown;
    fromPartial<I extends Exact<DeepPartial<InternalError>, I>>(_: I): InternalError;
};
export declare const TxDecodeError: {
    encode(_: TxDecodeError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeError;
    fromJSON(_: any): TxDecodeError;
    toJSON(_: TxDecodeError): unknown;
    fromPartial<I extends Exact<DeepPartial<TxDecodeError>, I>>(_: I): TxDecodeError;
};
export declare const InvalidSequenceError: {
    encode(_: InvalidSequenceError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidSequenceError;
    fromJSON(_: any): InvalidSequenceError;
    toJSON(_: InvalidSequenceError): unknown;
    fromPartial<I extends Exact<DeepPartial<InvalidSequenceError>, I>>(_: I): InvalidSequenceError;
};
export declare const UnauthorizedError: {
    encode(_: UnauthorizedError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnauthorizedError;
    fromJSON(_: any): UnauthorizedError;
    toJSON(_: UnauthorizedError): unknown;
    fromPartial<I extends Exact<DeepPartial<UnauthorizedError>, I>>(_: I): UnauthorizedError;
};
export declare const InsufficientFundsError: {
    encode(_: InsufficientFundsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFundsError;
    fromJSON(_: any): InsufficientFundsError;
    toJSON(_: InsufficientFundsError): unknown;
    fromPartial<I extends Exact<DeepPartial<InsufficientFundsError>, I>>(_: I): InsufficientFundsError;
};
export declare const UnknownRequestError: {
    encode(_: UnknownRequestError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnknownRequestError;
    fromJSON(_: any): UnknownRequestError;
    toJSON(_: UnknownRequestError): unknown;
    fromPartial<I extends Exact<DeepPartial<UnknownRequestError>, I>>(_: I): UnknownRequestError;
};
export declare const InvalidAddressError: {
    encode(_: InvalidAddressError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidAddressError;
    fromJSON(_: any): InvalidAddressError;
    toJSON(_: InvalidAddressError): unknown;
    fromPartial<I extends Exact<DeepPartial<InvalidAddressError>, I>>(_: I): InvalidAddressError;
};
export declare const UnknownAddressError: {
    encode(_: UnknownAddressError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnknownAddressError;
    fromJSON(_: any): UnknownAddressError;
    toJSON(_: UnknownAddressError): unknown;
    fromPartial<I extends Exact<DeepPartial<UnknownAddressError>, I>>(_: I): UnknownAddressError;
};
export declare const InvalidPubKeyError: {
    encode(_: InvalidPubKeyError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidPubKeyError;
    fromJSON(_: any): InvalidPubKeyError;
    toJSON(_: InvalidPubKeyError): unknown;
    fromPartial<I extends Exact<DeepPartial<InvalidPubKeyError>, I>>(_: I): InvalidPubKeyError;
};
export declare const InsufficientCoinsError: {
    encode(_: InsufficientCoinsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientCoinsError;
    fromJSON(_: any): InsufficientCoinsError;
    toJSON(_: InsufficientCoinsError): unknown;
    fromPartial<I extends Exact<DeepPartial<InsufficientCoinsError>, I>>(_: I): InsufficientCoinsError;
};
export declare const OutOfGasError: {
    encode(_: OutOfGasError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutOfGasError;
    fromJSON(_: any): OutOfGasError;
    toJSON(_: OutOfGasError): unknown;
    fromPartial<I extends Exact<DeepPartial<OutOfGasError>, I>>(_: I): OutOfGasError;
};
export declare const MemoTooLargeError: {
    encode(_: MemoTooLargeError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemoTooLargeError;
    fromJSON(_: any): MemoTooLargeError;
    toJSON(_: MemoTooLargeError): unknown;
    fromPartial<I extends Exact<DeepPartial<MemoTooLargeError>, I>>(_: I): MemoTooLargeError;
};
export declare const InsufficientFeeError: {
    encode(_: InsufficientFeeError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFeeError;
    fromJSON(_: any): InsufficientFeeError;
    toJSON(_: InsufficientFeeError): unknown;
    fromPartial<I extends Exact<DeepPartial<InsufficientFeeError>, I>>(_: I): InsufficientFeeError;
};
export declare const TooManySignaturesError: {
    encode(_: TooManySignaturesError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TooManySignaturesError;
    fromJSON(_: any): TooManySignaturesError;
    toJSON(_: TooManySignaturesError): unknown;
    fromPartial<I extends Exact<DeepPartial<TooManySignaturesError>, I>>(_: I): TooManySignaturesError;
};
export declare const NoSignaturesError: {
    encode(_: NoSignaturesError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoSignaturesError;
    fromJSON(_: any): NoSignaturesError;
    toJSON(_: NoSignaturesError): unknown;
    fromPartial<I extends Exact<DeepPartial<NoSignaturesError>, I>>(_: I): NoSignaturesError;
};
export declare const GasOverflowError: {
    encode(_: GasOverflowError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasOverflowError;
    fromJSON(_: any): GasOverflowError;
    toJSON(_: GasOverflowError): unknown;
    fromPartial<I extends Exact<DeepPartial<GasOverflowError>, I>>(_: I): GasOverflowError;
};
