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
    fromPartial<I extends Exact<DeepPartial<Bip44Params>, I>>(object: I): Bip44Params;
};
