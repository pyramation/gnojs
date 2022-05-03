import * as _8 from "../github.com/gnolang/gno/pkgs/crypto/ed25519/ed25519";
import * as _9 from "../github.com/gnolang/gno/pkgs/crypto/merkle/merkle";
import * as _10 from "../github.com/gnolang/gno/pkgs/crypto/multisig/multisig";
import * as _11 from "../github.com/gnolang/gno/pkgs/crypto/secp256k1/secp256k1";
export declare const tm: {
    PubKeySecp256k1: {
        encode(message: _11.PubKeySecp256k1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PubKeySecp256k1;
        fromJSON(object: any): _11.PubKeySecp256k1;
        toJSON(message: _11.PubKeySecp256k1): unknown;
        fromPartial<I extends {
            Value?: Uint8Array;
        } & {
            Value?: Uint8Array;
        } & Record<Exclude<keyof I, "Value">, never>>(object: I): _11.PubKeySecp256k1;
    };
    PrivKeySecp256k1: {
        encode(message: _11.PrivKeySecp256k1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PrivKeySecp256k1;
        fromJSON(object: any): _11.PrivKeySecp256k1;
        toJSON(message: _11.PrivKeySecp256k1): unknown;
        fromPartial<I_1 extends {
            Value?: Uint8Array;
        } & {
            Value?: Uint8Array;
        } & Record<Exclude<keyof I_1, "Value">, never>>(object: I_1): _11.PrivKeySecp256k1;
    };
    PubKeyMultisig: {
        encode(message: _10.PubKeyMultisig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PubKeyMultisig;
        fromJSON(object: any): _10.PubKeyMultisig;
        toJSON(message: _10.PubKeyMultisig): unknown;
        fromPartial<I_2 extends {
            K?: string | number | import("long");
            PubKeys?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            K?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_2["K"], keyof import("long")>, never>);
            PubKeys?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I_2["PubKeys"][number], keyof import("../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I_2["PubKeys"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I_2, keyof _10.PubKeyMultisig>, never>>(object: I_2): _10.PubKeyMultisig;
    };
    ProofOp: {
        encode(message: _9.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ProofOp;
        fromJSON(object: any): _9.ProofOp;
        toJSON(message: _9.ProofOp): unknown;
        fromPartial<I_3 extends {
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        } & {
            Type?: string;
            Key?: Uint8Array;
            Data?: Uint8Array;
        } & Record<Exclude<keyof I_3, keyof _9.ProofOp>, never>>(object: I_3): _9.ProofOp;
    };
    Proof: {
        encode(message: _9.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Proof;
        fromJSON(object: any): _9.Proof;
        toJSON(message: _9.Proof): unknown;
        fromPartial<I_4 extends {
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
            } & Record<Exclude<keyof I_4["Ops"][number], keyof _9.ProofOp>, never>)[] & Record<Exclude<keyof I_4["Ops"], keyof {
                Type?: string;
                Key?: Uint8Array;
                Data?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I_4, "Ops">, never>>(object: I_4): _9.Proof;
    };
    PubKeyEd25519: {
        encode(message: _8.PubKeyEd25519, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.PubKeyEd25519;
        fromJSON(object: any): _8.PubKeyEd25519;
        toJSON(message: _8.PubKeyEd25519): unknown;
        fromPartial<I_5 extends {
            Value?: Uint8Array;
        } & {
            Value?: Uint8Array;
        } & Record<Exclude<keyof I_5, "Value">, never>>(object: I_5): _8.PubKeyEd25519;
    };
    PrivKeyEd25519: {
        encode(message: _8.PrivKeyEd25519, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.PrivKeyEd25519;
        fromJSON(object: any): _8.PrivKeyEd25519;
        toJSON(message: _8.PrivKeyEd25519): unknown;
        fromPartial<I_6 extends {
            Value?: Uint8Array;
        } & {
            Value?: Uint8Array;
        } & Record<Exclude<keyof I_6, "Value">, never>>(object: I_6): _8.PrivKeyEd25519;
    };
};
