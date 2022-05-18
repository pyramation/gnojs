import { Value } from "./value";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 */
/** @deprecated */
export interface Explain {
    /**
     * All of the observed values.
     *
     * The field value_index is an index in the values list.
     * Separating values from steps is needed to remove redundant values.
     */
    values: Value[];
    /**
     * List of steps.
     *
     * Repeated evaluations of the same expression generate new ExprStep
     * instances. The order of such ExprStep instances matches the order of
     * elements returned by Comprehension.iter_range.
     */
    exprSteps: Explain_ExprStep[];
}
/** ID and value index of one step. */
export interface Explain_ExprStep {
    /** ID of corresponding Expr node. */
    id: Long;
    /** Index of the value in the values list. */
    valueIndex: number;
}
export declare const Explain: {
    encode(message: Explain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Explain;
    fromJSON(object: any): Explain;
    toJSON(message: Explain): unknown;
    fromPartial<I extends Exact<DeepPartial<Explain>, I>>(object: I): Explain;
};
export declare const Explain_ExprStep: {
    encode(message: Explain_ExprStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Explain_ExprStep;
    fromJSON(object: any): Explain_ExprStep;
    toJSON(message: Explain_ExprStep): unknown;
    fromPartial<I extends Exact<DeepPartial<Explain_ExprStep>, I>>(object: I): Explain_ExprStep;
};
