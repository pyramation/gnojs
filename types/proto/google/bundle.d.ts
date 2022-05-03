import * as _12 from "./protobuf/any";
import * as _13 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _13.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Timestamp;
            fromJSON(object: any): _13.Timestamp;
            toJSON(message: _13.Timestamp): unknown;
            fromPartial<I extends {
                seconds?: string | number | import("long");
                nanos?: number;
            } & {
                seconds?: string | number | (import("long") & {
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
                } & Record<Exclude<keyof I["seconds"], keyof import("long")>, never>);
                nanos?: number;
            } & Record<Exclude<keyof I, keyof _13.Timestamp>, never>>(object: I): _13.Timestamp;
        };
        Any: {
            encode(message: _12.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Any;
            fromJSON(object: any): _12.Any;
            toJSON(message: _12.Any): unknown;
            fromPartial<I_1 extends {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I_1, keyof _12.Any>, never>>(object: I_1): _12.Any;
        };
    };
}
