import { QuotaView, QuotaOverride, QuotaSafetyCheck, OverrideInlineSource, Service, ConsumerQuotaMetric, AdminQuotaPolicy, ServiceIdentity } from "./resources";
import { FieldMask } from "../../../protobuf/field_mask";
import * as _m0 from "protobufjs/minimal";
/** Enum for service identity state. */
export declare enum GetServiceIdentityResponse_IdentityState {
    /**
     * IDENTITY_STATE_UNSPECIFIED - Default service identity state. This value is used if the state is
     * omitted.
     */
    IDENTITY_STATE_UNSPECIFIED = 0,
    /** ACTIVE - Service identity has been created and can be used. */
    ACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare function getServiceIdentityResponse_IdentityStateFromJSON(object: any): GetServiceIdentityResponse_IdentityState;
export declare function getServiceIdentityResponse_IdentityStateToJSON(object: GetServiceIdentityResponse_IdentityState): string;
/** Request message for the `EnableService` method. */
export interface EnableServiceRequest {
    /**
     * Name of the consumer and service to enable the service on.
     *
     * The `EnableService` and `DisableService` methods currently only support
     * projects.
     *
     * Enabling a service requires that the service is public or is shared with
     * the user enabling the service.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com`
     * where `123` is the project number (not project ID).
     */
    name: string;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
    /**
     * Name of the consumer and service to disable the service on.
     *
     * The enable and disable methods currently only support projects.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com`
     * where `123` is the project number (not project ID).
     */
    name: string;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
    /**
     * Name of the consumer and service to get the `ConsumerState` for.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com`
     * where `123` is the project number (not project ID).
     */
    name: string;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequest {
    /**
     * Parent to search for services on.
     *
     * An example name would be:
     * `projects/123`
     * where `123` is the project number (not project ID).
     */
    parent: string;
    /**
     * Requested size of the next page of data.
     * Requested page size cannot exceed 200.
     * If not set, the default page size is 50.
     */
    pageSize: number;
    /**
     * Token identifying which result to start with, which is returned by a
     * previous list call.
     */
    pageToken: string;
    /**
     * Only list services that conform to the given filter.
     * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
     */
    filter: string;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponse {
    /** The available services for the requested project. */
    services: Service[];
    /**
     * Token that can be passed to `ListServices` to resume a paginated
     * query.
     */
    nextPageToken: string;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequest {
    /**
     * Parent to enable services on.
     *
     * An example name would be:
     * `projects/123`
     * where `123` is the project number (not project ID).
     *
     * The `BatchEnableServices` method currently only supports projects.
     */
    parent: string;
    /**
     * The identifiers of the services to enable on the project.
     *
     * A valid identifier would be:
     * serviceusage.googleapis.com
     *
     * Enabling services requires that each service is public or is shared with
     * the user enabling the service.
     *
     * Two or more services must be specified. To enable a single service,
     * use the `EnableService` method instead.
     *
     * A single request can enable a maximum of 20 services at a time. If more
     * than 20 services are specified, the request will fail, and no state changes
     * will occur.
     */
    serviceIds: string[];
}
/** Request message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsRequest {
    /**
     * Parent of the quotas resource.
     *
     * Some example names would be:
     * `projects/123/services/serviceconsumermanagement.googleapis.com`
     * `folders/345/services/serviceconsumermanagement.googleapis.com`
     * `organizations/456/services/serviceconsumermanagement.googleapis.com`
     */
    parent: string;
    /** Requested size of the next page of data. */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
    /** Specifies the level of detail for quota information in the response. */
    view: QuotaView;
}
/** Response message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsResponse {
    /** Quota settings for the consumer, organized by quota metric. */
    metrics: ConsumerQuotaMetric[];
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    nextPageToken: string;
}
/** Request message for GetConsumerQuotaMetric */
export interface GetConsumerQuotaMetricRequest {
    /**
     * The resource name of the quota limit.
     *
     * An example name would be:
     * `projects/123/services/serviceusage.googleapis.com/quotas/metrics/serviceusage.googleapis.com%2Fmutate_requests`
     */
    name: string;
    /** Specifies the level of detail for quota information in the response. */
    view: QuotaView;
}
/** Request message for GetConsumerQuotaLimit */
export interface GetConsumerQuotaLimitRequest {
    /**
     * The resource name of the quota limit.
     *
     * Use the quota limit resource name returned by previous
     * ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
     */
    name: string;
    /** Specifies the level of detail for quota information in the response. */
    view: QuotaView;
}
/** Request message for CreateAdminOverride. */
export interface CreateAdminOverrideRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** The admin override to create. */
    override: QuotaOverride;
    /**
     * Whether to force the creation of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for UpdateAdminOverride. */
export interface UpdateAdminOverrideRequest {
    /**
     * The resource name of the override to update.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * The new override.
     * Only the override_value is updated; all other fields are ignored.
     */
    override: QuotaOverride;
    /**
     * Whether to force the update of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * Update only the specified fields of the override.
     * If unset, all fields will be updated.
     */
    updateMask: FieldMask;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for DeleteAdminOverride. */
export interface DeleteAdminOverrideRequest {
    /**
     * The resource name of the override to delete.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * Whether to force the deletion of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for ListAdminOverrides */
export interface ListAdminOverridesRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** Requested size of the next page of data. */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
}
/** Response message for ListAdminOverrides. */
export interface ListAdminOverridesResponse {
    /** Admin overrides on this limit. */
    overrides: QuotaOverride[];
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    nextPageToken: string;
}
/** Response message for BatchCreateAdminOverrides */
export interface BatchCreateAdminOverridesResponse {
    /** The overrides that were created. */
    overrides: QuotaOverride[];
}
/** Request message for ImportAdminOverrides */
export interface ImportAdminOverridesRequest {
    /**
     * The resource name of the consumer.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com`
     */
    parent: string;
    /** The import data is specified in the request message itself */
    inlineSource?: OverrideInlineSource;
    /**
     * Whether to force the creation of the quota overrides.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Response message for ImportAdminOverrides */
export interface ImportAdminOverridesResponse {
    /** The overrides that were created from the imported data. */
    overrides: QuotaOverride[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminOverrides.
 */
export interface ImportAdminOverridesMetadata {
}
/** Request message for CreateConsumerOverride. */
export interface CreateConsumerOverrideRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** The override to create. */
    override: QuotaOverride;
    /**
     * Whether to force the creation of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for UpdateConsumerOverride. */
export interface UpdateConsumerOverrideRequest {
    /**
     * The resource name of the override to update.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * The new override.
     * Only the override_value is updated; all other fields are ignored.
     */
    override: QuotaOverride;
    /**
     * Whether to force the update of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * Update only the specified fields of the override.
     * If unset, all fields will be updated.
     */
    updateMask: FieldMask;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for DeleteConsumerOverride. */
export interface DeleteConsumerOverrideRequest {
    /**
     * The resource name of the override to delete.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     */
    name: string;
    /**
     * Whether to force the deletion of the quota override.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Request message for ListConsumerOverrides */
export interface ListConsumerOverridesRequest {
    /**
     * The resource name of the parent quota limit, returned by a
     * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     */
    parent: string;
    /** Requested size of the next page of data. */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
}
/** Response message for ListConsumerOverrides. */
export interface ListConsumerOverridesResponse {
    /** Consumer overrides on this limit. */
    overrides: QuotaOverride[];
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    nextPageToken: string;
}
/** Response message for BatchCreateConsumerOverrides */
export interface BatchCreateConsumerOverridesResponse {
    /** The overrides that were created. */
    overrides: QuotaOverride[];
}
/** Request message for ImportConsumerOverrides */
export interface ImportConsumerOverridesRequest {
    /**
     * The resource name of the consumer.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com`
     */
    parent: string;
    /** The import data is specified in the request message itself */
    inlineSource?: OverrideInlineSource;
    /**
     * Whether to force the creation of the quota overrides.
     * Setting the force parameter to 'true' ignores all quota safety checks that
     * would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation.
     * Unlike 'force' field that ignores all the quota safety checks, the
     * 'force_only' field ignores only the specified checks; other checks are
     * still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly: QuotaSafetyCheck[];
}
/** Response message for ImportConsumerOverrides */
export interface ImportConsumerOverridesResponse {
    /** The overrides that were created from the imported data. */
    overrides: QuotaOverride[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportConsumerOverrides.
 */
export interface ImportConsumerOverridesMetadata {
}
/** Response message for ImportAdminQuotaPolicies */
export interface ImportAdminQuotaPoliciesResponse {
    /** The policies that were created from the imported data. */
    policies: AdminQuotaPolicy[];
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminQuotaPolicies.
 */
export interface ImportAdminQuotaPoliciesMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by CreateAdminQuotaPolicy.
 */
export interface CreateAdminQuotaPolicyMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by UpdateAdminQuotaPolicy.
 */
export interface UpdateAdminQuotaPolicyMetadata {
}
/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by DeleteAdminQuotaPolicy.
 */
export interface DeleteAdminQuotaPolicyMetadata {
}
/** Request message for generating service identity. */
export interface GenerateServiceIdentityRequest {
    /**
     * Name of the consumer and service to generate an identity for.
     *
     * The `GenerateServiceIdentity` methods currently only support projects.
     *
     * An example name would be:
     * `projects/123/services/example.googleapis.com` where `123` is the
     * project number.
     */
    parent: string;
}
/** Response message for getting service identity. */
export interface GetServiceIdentityResponse {
    /**
     * Service identity that service producer can use to access consumer
     * resources. If exists is true, it contains email and unique_id. If exists is
     * false, it contains pre-constructed email and empty unique_id.
     */
    identity: ServiceIdentity;
    /** Service identity state. */
    state: GetServiceIdentityResponse_IdentityState;
}
/** Metadata for the `GetServiceIdentity` method. */
export interface GetServiceIdentityMetadata {
}
export declare const EnableServiceRequest: {
    encode(message: EnableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest;
    fromJSON(object: any): EnableServiceRequest;
    toJSON(message: EnableServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<EnableServiceRequest>, I>>(object: I): EnableServiceRequest;
};
export declare const DisableServiceRequest: {
    encode(message: DisableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest;
    fromJSON(object: any): DisableServiceRequest;
    toJSON(message: DisableServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DisableServiceRequest>, I>>(object: I): DisableServiceRequest;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceRequest>, I>>(object: I): GetServiceRequest;
};
export declare const ListServicesRequest: {
    encode(message: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest;
    fromJSON(object: any): ListServicesRequest;
    toJSON(message: ListServicesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListServicesRequest>, I>>(object: I): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListServicesResponse>, I>>(object: I): ListServicesResponse;
};
export declare const BatchEnableServicesRequest: {
    encode(message: BatchEnableServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesRequest;
    fromJSON(object: any): BatchEnableServicesRequest;
    toJSON(message: BatchEnableServicesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchEnableServicesRequest>, I>>(object: I): BatchEnableServicesRequest;
};
export declare const ListConsumerQuotaMetricsRequest: {
    encode(message: ListConsumerQuotaMetricsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerQuotaMetricsRequest;
    fromJSON(object: any): ListConsumerQuotaMetricsRequest;
    toJSON(message: ListConsumerQuotaMetricsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListConsumerQuotaMetricsRequest>, I>>(object: I): ListConsumerQuotaMetricsRequest;
};
export declare const ListConsumerQuotaMetricsResponse: {
    encode(message: ListConsumerQuotaMetricsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerQuotaMetricsResponse;
    fromJSON(object: any): ListConsumerQuotaMetricsResponse;
    toJSON(message: ListConsumerQuotaMetricsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListConsumerQuotaMetricsResponse>, I>>(object: I): ListConsumerQuotaMetricsResponse;
};
export declare const GetConsumerQuotaMetricRequest: {
    encode(message: GetConsumerQuotaMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConsumerQuotaMetricRequest;
    fromJSON(object: any): GetConsumerQuotaMetricRequest;
    toJSON(message: GetConsumerQuotaMetricRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetConsumerQuotaMetricRequest>, I>>(object: I): GetConsumerQuotaMetricRequest;
};
export declare const GetConsumerQuotaLimitRequest: {
    encode(message: GetConsumerQuotaLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConsumerQuotaLimitRequest;
    fromJSON(object: any): GetConsumerQuotaLimitRequest;
    toJSON(message: GetConsumerQuotaLimitRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetConsumerQuotaLimitRequest>, I>>(object: I): GetConsumerQuotaLimitRequest;
};
export declare const CreateAdminOverrideRequest: {
    encode(message: CreateAdminOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAdminOverrideRequest;
    fromJSON(object: any): CreateAdminOverrideRequest;
    toJSON(message: CreateAdminOverrideRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateAdminOverrideRequest>, I>>(object: I): CreateAdminOverrideRequest;
};
export declare const UpdateAdminOverrideRequest: {
    encode(message: UpdateAdminOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminOverrideRequest;
    fromJSON(object: any): UpdateAdminOverrideRequest;
    toJSON(message: UpdateAdminOverrideRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAdminOverrideRequest>, I>>(object: I): UpdateAdminOverrideRequest;
};
export declare const DeleteAdminOverrideRequest: {
    encode(message: DeleteAdminOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAdminOverrideRequest;
    fromJSON(object: any): DeleteAdminOverrideRequest;
    toJSON(message: DeleteAdminOverrideRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteAdminOverrideRequest>, I>>(object: I): DeleteAdminOverrideRequest;
};
export declare const ListAdminOverridesRequest: {
    encode(message: ListAdminOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAdminOverridesRequest;
    fromJSON(object: any): ListAdminOverridesRequest;
    toJSON(message: ListAdminOverridesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAdminOverridesRequest>, I>>(object: I): ListAdminOverridesRequest;
};
export declare const ListAdminOverridesResponse: {
    encode(message: ListAdminOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAdminOverridesResponse;
    fromJSON(object: any): ListAdminOverridesResponse;
    toJSON(message: ListAdminOverridesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListAdminOverridesResponse>, I>>(object: I): ListAdminOverridesResponse;
};
export declare const BatchCreateAdminOverridesResponse: {
    encode(message: BatchCreateAdminOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateAdminOverridesResponse;
    fromJSON(object: any): BatchCreateAdminOverridesResponse;
    toJSON(message: BatchCreateAdminOverridesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchCreateAdminOverridesResponse>, I>>(object: I): BatchCreateAdminOverridesResponse;
};
export declare const ImportAdminOverridesRequest: {
    encode(message: ImportAdminOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminOverridesRequest;
    fromJSON(object: any): ImportAdminOverridesRequest;
    toJSON(message: ImportAdminOverridesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportAdminOverridesRequest>, I>>(object: I): ImportAdminOverridesRequest;
};
export declare const ImportAdminOverridesResponse: {
    encode(message: ImportAdminOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminOverridesResponse;
    fromJSON(object: any): ImportAdminOverridesResponse;
    toJSON(message: ImportAdminOverridesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportAdminOverridesResponse>, I>>(object: I): ImportAdminOverridesResponse;
};
export declare const ImportAdminOverridesMetadata: {
    encode(_: ImportAdminOverridesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminOverridesMetadata;
    fromJSON(_: any): ImportAdminOverridesMetadata;
    toJSON(_: ImportAdminOverridesMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportAdminOverridesMetadata>, I>>(_: I): ImportAdminOverridesMetadata;
};
export declare const CreateConsumerOverrideRequest: {
    encode(message: CreateConsumerOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateConsumerOverrideRequest;
    fromJSON(object: any): CreateConsumerOverrideRequest;
    toJSON(message: CreateConsumerOverrideRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateConsumerOverrideRequest>, I>>(object: I): CreateConsumerOverrideRequest;
};
export declare const UpdateConsumerOverrideRequest: {
    encode(message: UpdateConsumerOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConsumerOverrideRequest;
    fromJSON(object: any): UpdateConsumerOverrideRequest;
    toJSON(message: UpdateConsumerOverrideRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateConsumerOverrideRequest>, I>>(object: I): UpdateConsumerOverrideRequest;
};
export declare const DeleteConsumerOverrideRequest: {
    encode(message: DeleteConsumerOverrideRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteConsumerOverrideRequest;
    fromJSON(object: any): DeleteConsumerOverrideRequest;
    toJSON(message: DeleteConsumerOverrideRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteConsumerOverrideRequest>, I>>(object: I): DeleteConsumerOverrideRequest;
};
export declare const ListConsumerOverridesRequest: {
    encode(message: ListConsumerOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerOverridesRequest;
    fromJSON(object: any): ListConsumerOverridesRequest;
    toJSON(message: ListConsumerOverridesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListConsumerOverridesRequest>, I>>(object: I): ListConsumerOverridesRequest;
};
export declare const ListConsumerOverridesResponse: {
    encode(message: ListConsumerOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListConsumerOverridesResponse;
    fromJSON(object: any): ListConsumerOverridesResponse;
    toJSON(message: ListConsumerOverridesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListConsumerOverridesResponse>, I>>(object: I): ListConsumerOverridesResponse;
};
export declare const BatchCreateConsumerOverridesResponse: {
    encode(message: BatchCreateConsumerOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchCreateConsumerOverridesResponse;
    fromJSON(object: any): BatchCreateConsumerOverridesResponse;
    toJSON(message: BatchCreateConsumerOverridesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BatchCreateConsumerOverridesResponse>, I>>(object: I): BatchCreateConsumerOverridesResponse;
};
export declare const ImportConsumerOverridesRequest: {
    encode(message: ImportConsumerOverridesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportConsumerOverridesRequest;
    fromJSON(object: any): ImportConsumerOverridesRequest;
    toJSON(message: ImportConsumerOverridesRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportConsumerOverridesRequest>, I>>(object: I): ImportConsumerOverridesRequest;
};
export declare const ImportConsumerOverridesResponse: {
    encode(message: ImportConsumerOverridesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportConsumerOverridesResponse;
    fromJSON(object: any): ImportConsumerOverridesResponse;
    toJSON(message: ImportConsumerOverridesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportConsumerOverridesResponse>, I>>(object: I): ImportConsumerOverridesResponse;
};
export declare const ImportConsumerOverridesMetadata: {
    encode(_: ImportConsumerOverridesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportConsumerOverridesMetadata;
    fromJSON(_: any): ImportConsumerOverridesMetadata;
    toJSON(_: ImportConsumerOverridesMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportConsumerOverridesMetadata>, I>>(_: I): ImportConsumerOverridesMetadata;
};
export declare const ImportAdminQuotaPoliciesResponse: {
    encode(message: ImportAdminQuotaPoliciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminQuotaPoliciesResponse;
    fromJSON(object: any): ImportAdminQuotaPoliciesResponse;
    toJSON(message: ImportAdminQuotaPoliciesResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportAdminQuotaPoliciesResponse>, I>>(object: I): ImportAdminQuotaPoliciesResponse;
};
export declare const ImportAdminQuotaPoliciesMetadata: {
    encode(_: ImportAdminQuotaPoliciesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportAdminQuotaPoliciesMetadata;
    fromJSON(_: any): ImportAdminQuotaPoliciesMetadata;
    toJSON(_: ImportAdminQuotaPoliciesMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportAdminQuotaPoliciesMetadata>, I>>(_: I): ImportAdminQuotaPoliciesMetadata;
};
export declare const CreateAdminQuotaPolicyMetadata: {
    encode(_: CreateAdminQuotaPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAdminQuotaPolicyMetadata;
    fromJSON(_: any): CreateAdminQuotaPolicyMetadata;
    toJSON(_: CreateAdminQuotaPolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateAdminQuotaPolicyMetadata>, I>>(_: I): CreateAdminQuotaPolicyMetadata;
};
export declare const UpdateAdminQuotaPolicyMetadata: {
    encode(_: UpdateAdminQuotaPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminQuotaPolicyMetadata;
    fromJSON(_: any): UpdateAdminQuotaPolicyMetadata;
    toJSON(_: UpdateAdminQuotaPolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<UpdateAdminQuotaPolicyMetadata>, I>>(_: I): UpdateAdminQuotaPolicyMetadata;
};
export declare const DeleteAdminQuotaPolicyMetadata: {
    encode(_: DeleteAdminQuotaPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAdminQuotaPolicyMetadata;
    fromJSON(_: any): DeleteAdminQuotaPolicyMetadata;
    toJSON(_: DeleteAdminQuotaPolicyMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteAdminQuotaPolicyMetadata>, I>>(_: I): DeleteAdminQuotaPolicyMetadata;
};
export declare const GenerateServiceIdentityRequest: {
    encode(message: GenerateServiceIdentityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateServiceIdentityRequest;
    fromJSON(object: any): GenerateServiceIdentityRequest;
    toJSON(message: GenerateServiceIdentityRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GenerateServiceIdentityRequest>, I>>(object: I): GenerateServiceIdentityRequest;
};
export declare const GetServiceIdentityResponse: {
    encode(message: GetServiceIdentityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceIdentityResponse;
    fromJSON(object: any): GetServiceIdentityResponse;
    toJSON(message: GetServiceIdentityResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceIdentityResponse>, I>>(object: I): GetServiceIdentityResponse;
};
export declare const GetServiceIdentityMetadata: {
    encode(_: GetServiceIdentityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceIdentityMetadata;
    fromJSON(_: any): GetServiceIdentityMetadata;
    toJSON(_: GetServiceIdentityMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceIdentityMetadata>, I>>(_: I): GetServiceIdentityMetadata;
};
