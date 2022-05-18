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
    fromPartial<I extends Exact<DeepPartial<PubKeyEd25519>, I>>(object: I): PubKeyEd25519;
};
export declare const PrivKeyEd25519: {
    encode(message: PrivKeyEd25519, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivKeyEd25519;
    fromJSON(object: any): PrivKeyEd25519;
    toJSON(message: PrivKeyEd25519): unknown;
    fromPartial<I extends Exact<DeepPartial<PrivKeyEd25519>, I>>(object: I): PrivKeyEd25519;
};
