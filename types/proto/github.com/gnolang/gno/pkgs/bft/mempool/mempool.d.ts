import * as _m0 from "protobufjs/minimal";
/** messages */
export interface TxMessage {
    Tx: Uint8Array;
}
export declare const TxMessage: {
    encode(message: TxMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMessage;
    fromJSON(object: any): TxMessage;
    toJSON(message: TxMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<TxMessage>, I>>(object: I): TxMessage;
};
