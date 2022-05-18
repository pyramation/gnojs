import { Any } from "../../../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface PubKeyMultisig {
    K: Long;
    PubKeys: Any[];
}
export declare const PubKeyMultisig: {
    encode(message: PubKeyMultisig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyMultisig;
    fromJSON(object: any): PubKeyMultisig;
    toJSON(message: PubKeyMultisig): unknown;
    fromPartial<I extends Exact<DeepPartial<PubKeyMultisig>, I>>(object: I): PubKeyMultisig;
};
