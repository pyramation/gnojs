import { SourceInfo } from "./source";
import { NullValue } from "../../../protobuf/struct";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
    /** The parsed expression. */
    expr: Expr;
    /** The source info derived from input that generated the parsed `expr`. */
    sourceInfo: SourceInfo;
    /** The syntax version of the source, e.g. `cel1`. */
    syntaxVersion: string;
}
/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a [Decl][google.api.expr.v1beta1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface Expr {
    /**
     * Required. An id assigned to this node by the parser which is unique in a
     * given expression tree. This is used to associate type information and other
     * attributes to a node in the parse tree.
     */
    id: number;
    /** A literal expression. */
    literalExpr?: Literal;
    /** An identifier expression. */
    identExpr?: Expr_Ident;
    /** A field selection expression, e.g. `request.auth`. */
    selectExpr?: Expr_Select;
    /** A call expression, including calls to predefined functions and operators. */
    callExpr?: Expr_Call;
    /** A list creation expression. */
    listExpr?: Expr_CreateList;
    /** A map or object creation expression. */
    structExpr?: Expr_CreateStruct;
    /** A comprehension expression. */
    comprehensionExpr?: Expr_Comprehension;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
    /**
     * Required. Holds a single, unqualified identifier, possibly preceded by a
     * '.'.
     *
     * Qualified names are represented by the [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression.
     */
    name: string;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
    /**
     * Required. The target of the selection expression.
     *
     * For example, in the select expression `request.auth`, the `request`
     * portion of the expression is the `operand`.
     */
    operand: Expr;
    /**
     * Required. The name of the field to select.
     *
     * For example, in the select expression `request.auth`, the `auth` portion
     * of the expression would be the `field`.
     */
    field: string;
    /**
     * Whether the select is to be interpreted as a field presence test.
     *
     * This results from the macro `has(request.auth)`.
     */
    testOnly: boolean;
}
/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
    /**
     * The target of an method call-style expression. For example, `x` in
     * `x.f()`.
     */
    target: Expr;
    /** Required. The name of the function or method being called. */
    function: string;
    /** The arguments. */
    args: Expr[];
}
/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogenous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
    /** The elements part of the list. */
    elements: Expr[];
}
/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
    /**
     * The type name of the message to be created, empty when creating map
     * literals.
     */
    type: string;
    /** The entries in the creation expression. */
    entries: Expr_CreateStruct_Entry[];
}
/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
    /**
     * Required. An id assigned to this node by the parser which is unique
     * in a given expression tree. This is used to associate type
     * information and other attributes to the node.
     */
    id: number;
    /** The field key for a message creator statement. */
    fieldKey?: string;
    /** The key expression for a map creation statement. */
    mapKey?: Expr;
    /** Required. The value assigned to the key. */
    value: Expr;
}
/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 * the inputs and return `true` if the predicate is satisfied for all,
 * any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 * the subset of elements which satisfy the predicate:
 * `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 * output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_Comprehension {
    /** The name of the iteration variable. */
    iterVar: string;
    /** The range over which var iterates. */
    iterRange: Expr;
    /** The name of the variable used for accumulation of the result. */
    accuVar: string;
    /** The initial value of the accumulator. */
    accuInit: Expr;
    /**
     * An expression which can contain iter_var and accu_var.
     *
     * Returns false when the result has been computed and may be used as
     * a hint to short-circuit the remainder of the comprehension.
     */
    loopCondition: Expr;
    /**
     * An expression which can contain iter_var and accu_var.
     *
     * Computes the next value of accu_var.
     */
    loopStep: Expr;
    /**
     * An expression which can contain accu_var.
     *
     * Computes the result.
     */
    result: Expr;
}
/**
 * Represents a primitive literal.
 *
 * This is similar to the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1beta1.Expr] elements which require evaluation and are thus not constant.
 *
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Literal {
    /** null value. */
    nullValue?: NullValue;
    /** boolean value. */
    boolValue?: boolean;
    /** int64 value. */
    int64Value?: Long;
    /** uint64 value. */
    uint64Value?: Long;
    /** double value. */
    doubleValue?: number;
    /** string value. */
    stringValue?: string;
    /** bytes value. */
    bytesValue?: Uint8Array;
}
export declare const ParsedExpr: {
    encode(message: ParsedExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParsedExpr;
    fromJSON(object: any): ParsedExpr;
    toJSON(message: ParsedExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<ParsedExpr>, I>>(object: I): ParsedExpr;
};
export declare const Expr: {
    encode(message: Expr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr;
    fromJSON(object: any): Expr;
    toJSON(message: Expr): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr>, I>>(object: I): Expr;
};
export declare const Expr_Ident: {
    encode(message: Expr_Ident, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Ident;
    fromJSON(object: any): Expr_Ident;
    toJSON(message: Expr_Ident): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_Ident>, I>>(object: I): Expr_Ident;
};
export declare const Expr_Select: {
    encode(message: Expr_Select, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Select;
    fromJSON(object: any): Expr_Select;
    toJSON(message: Expr_Select): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_Select>, I>>(object: I): Expr_Select;
};
export declare const Expr_Call: {
    encode(message: Expr_Call, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Call;
    fromJSON(object: any): Expr_Call;
    toJSON(message: Expr_Call): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_Call>, I>>(object: I): Expr_Call;
};
export declare const Expr_CreateList: {
    encode(message: Expr_CreateList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateList;
    fromJSON(object: any): Expr_CreateList;
    toJSON(message: Expr_CreateList): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_CreateList>, I>>(object: I): Expr_CreateList;
};
export declare const Expr_CreateStruct: {
    encode(message: Expr_CreateStruct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct;
    fromJSON(object: any): Expr_CreateStruct;
    toJSON(message: Expr_CreateStruct): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_CreateStruct>, I>>(object: I): Expr_CreateStruct;
};
export declare const Expr_CreateStruct_Entry: {
    encode(message: Expr_CreateStruct_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct_Entry;
    fromJSON(object: any): Expr_CreateStruct_Entry;
    toJSON(message: Expr_CreateStruct_Entry): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_CreateStruct_Entry>, I>>(object: I): Expr_CreateStruct_Entry;
};
export declare const Expr_Comprehension: {
    encode(message: Expr_Comprehension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Comprehension;
    fromJSON(object: any): Expr_Comprehension;
    toJSON(message: Expr_Comprehension): unknown;
    fromPartial<I extends Exact<DeepPartial<Expr_Comprehension>, I>>(object: I): Expr_Comprehension;
};
export declare const Literal: {
    encode(message: Literal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Literal;
    fromJSON(object: any): Literal;
    toJSON(message: Literal): unknown;
    fromPartial<I extends Exact<DeepPartial<Literal>, I>>(object: I): Literal;
};
