import { AttributeContext } from "../../../rpc/context/attribute_context";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
/** Request message for the Check method. */
export interface CheckRequest {
    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     */
    serviceName: string;
    /**
     * Specifies the version of the service configuration that should be used to
     * process the request. Must not be empty. Set this field to 'latest' to
     * specify using the latest configuration.
     */
    serviceConfigId: string;
    /** Describes attributes about the operation being executed by the service. */
    attributes: AttributeContext;
    /** Describes the resources and the policies applied to each resource. */
    resources: ResourceInfo[];
    /** Optional. Contains a comma-separated list of flags. */
    flags: string;
}
/** Describes a resource referenced in the request. */
export interface ResourceInfo {
    /** The name of the resource referenced in the request. */
    name: string;
    /** The resource type in the format of "{service}/{kind}". */
    type: string;
    /**
     * The resource permission needed for this request.
     * The format must be "{service}/{plural}.{verb}".
     */
    permission: string;
    /**
     * Optional. The identifier of the container of this resource. For Google
     * Cloud APIs, the resource container must be one of the following formats:
     * - `projects/<project-id or project-number>`
     * - `folders/<folder-id>`
     * - `organizations/<organization-id>`
     * For the policy enforcement on the container level (VPCSC and Location
     * Policy check), this field takes precedence on the container extracted from
     * name when presents.
     */
    container: string;
    /**
     * Optional. The location of the resource. The value must be a valid zone,
     * region or multiregion. For example: "europe-west4" or
     * "northamerica-northeast1-a"
     */
    location: string;
}
export interface CheckResponse_HeadersEntry {
    key: string;
    value: string;
}
/** Response message for the Check method. */
export interface CheckResponse {
    /**
     * Operation is allowed when this field is not set. Any non-'OK' status
     * indicates a denial; [google.rpc.Status.details][google.rpc.Status.details]
     * would contain additional details about the denial.
     */
    status: Status;
    /** Returns a set of request contexts generated from the `CheckRequest`. */
    headers: {
        [key: string]: string;
    };
}
/** Request message for the Report method. */
export interface ReportRequest {
    /**
     * The service name as specified in its service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See
     * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
     * for the definition of a service name.
     */
    serviceName: string;
    /**
     * Specifies the version of the service configuration that should be used to
     * process the request. Must not be empty. Set this field to 'latest' to
     * specify using the latest configuration.
     */
    serviceConfigId: string;
    /**
     * Describes the list of operations to be reported. Each operation is
     * represented as an AttributeContext, and contains all attributes around an
     * API access.
     */
    operations: AttributeContext[];
}
/**
 * Response message for the Report method.
 * If the request contains any invalid data, the server returns an RPC error.
 */
export interface ReportResponse {
}
export declare const CheckRequest: {
    encode(message: CheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest;
    fromJSON(object: any): CheckRequest;
    toJSON(message: CheckRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CheckRequest>, I>>(object: I): CheckRequest;
};
export declare const ResourceInfo: {
    encode(message: ResourceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo;
    fromJSON(object: any): ResourceInfo;
    toJSON(message: ResourceInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<ResourceInfo>, I>>(object: I): ResourceInfo;
};
export declare const CheckResponse_HeadersEntry: {
    encode(message: CheckResponse_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_HeadersEntry;
    fromJSON(object: any): CheckResponse_HeadersEntry;
    toJSON(message: CheckResponse_HeadersEntry): unknown;
    fromPartial<I extends Exact<DeepPartial<CheckResponse_HeadersEntry>, I>>(object: I): CheckResponse_HeadersEntry;
};
export declare const CheckResponse: {
    encode(message: CheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse;
    fromJSON(object: any): CheckResponse;
    toJSON(message: CheckResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<CheckResponse>, I>>(object: I): CheckResponse;
};
export declare const ReportRequest: {
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ReportRequest>, I>>(object: I): ReportRequest;
};
export declare const ReportResponse: {
    encode(_: ReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse;
    fromJSON(_: any): ReportResponse;
    toJSON(_: ReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ReportResponse>, I>>(_: I): ReportResponse;
};
