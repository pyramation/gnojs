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
    fromPartial<I extends Exact<DeepPartial<NoInputsError>, I>>(_: I): NoInputsError;
};
export declare const NoOutputsError: {
    encode(_: NoOutputsError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoOutputsError;
    fromJSON(_: any): NoOutputsError;
    toJSON(_: NoOutputsError): unknown;
    fromPartial<I extends Exact<DeepPartial<NoOutputsError>, I>>(_: I): NoOutputsError;
};
export declare const InputOutputMismatchError: {
    encode(_: InputOutputMismatchError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InputOutputMismatchError;
    fromJSON(_: any): InputOutputMismatchError;
    toJSON(_: InputOutputMismatchError): unknown;
    fromPartial<I extends Exact<DeepPartial<InputOutputMismatchError>, I>>(_: I): InputOutputMismatchError;
};
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend;
};
