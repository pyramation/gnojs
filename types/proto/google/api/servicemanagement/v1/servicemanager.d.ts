import { ManagedService, ConfigSource, Rollout, ChangeReport, Diagnostic } from "./resources";
import { Service } from "../../service";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
export declare enum GetServiceConfigRequest_ConfigView {
    /** BASIC - Server response includes all fields except SourceInfo. */
    BASIC = 0,
    /**
     * FULL - Server response includes all fields including SourceInfo.
     * SourceFiles are of type 'google.api.servicemanagement.v1.ConfigFile'
     * and are only available for configs created using the
     * SubmitConfigSource method.
     */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function getServiceConfigRequest_ConfigViewFromJSON(object: any): GetServiceConfigRequest_ConfigView;
export declare function getServiceConfigRequest_ConfigViewToJSON(object: GetServiceConfigRequest_ConfigView): string;
/** Request message for `ListServices` method. */
export interface ListServicesRequest {
    /** Include services produced by the specified project. */
    producerProjectId: string;
    /**
     * The max number of items to include in the response list. Page size is 50
     * if not specified. Maximum value is 100.
     */
    pageSize: number;
    /**
     * Token identifying which result to start with; returned by a previous list
     * call.
     */
    pageToken: string;
    /**
     * Include services consumed by the specified consumer.
     *
     * The Google Service Management implementation accepts the following
     * forms:
     * - project:<project_id>
     */
    /** @deprecated */
    consumerId: string;
}
/** Response message for `ListServices` method. */
export interface ListServicesResponse {
    /** The returned services will only have the name field set. */
    services: ManagedService[];
    /** Token that can be passed to `ListServices` to resume a paginated query. */
    nextPageToken: string;
}
/** Request message for `GetService` method. */
export interface GetServiceRequest {
    /**
     * Required. The name of the service.  See the `ServiceManager` overview for naming
     * requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
}
/** Request message for CreateService method. */
export interface CreateServiceRequest {
    /** Required. Initial values for the service resource. */
    service: ManagedService;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequest {
    /**
     * Required. The name of the service. See the [overview](/service-management/overview)
     * for naming requirements. For example: `example.googleapis.com`.
     */
    serviceName: string;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponse {
    /** Revived service resource. */
    service: ManagedService;
}
/** Request message for GetServiceConfig method. */
export interface GetServiceConfigRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /**
     * Required. The id of the service configuration resource.
     *
     * This field must be specified for the server to return all fields, including
     * `SourceInfo`.
     */
    configId: string;
    /**
     * Specifies which parts of the Service Config should be returned in the
     * response.
     */
    view: GetServiceConfigRequest_ConfigView;
}
/** Request message for ListServiceConfigs method. */
export interface ListServiceConfigsRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /** The token of the page to retrieve. */
    pageToken: string;
    /**
     * The max number of items to include in the response list. Page size is 50
     * if not specified. Maximum value is 100.
     */
    pageSize: number;
}
/** Response message for ListServiceConfigs method. */
export interface ListServiceConfigsResponse {
    /** The list of service configuration resources. */
    serviceConfigs: Service[];
    /** The token of the next page of results. */
    nextPageToken: string;
}
/** Request message for CreateServiceConfig method. */
export interface CreateServiceConfigRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /** Required. The service configuration resource. */
    serviceConfig: Service;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /** Required. The source configuration for the service. */
    configSource: ConfigSource;
    /**
     * Optional. If set, this will result in the generation of a
     * `google.api.Service` configuration based on the `ConfigSource` provided,
     * but the generated config and the sources will NOT be persisted.
     */
    validateOnly: boolean;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponse {
    /** The generated service configuration. */
    serviceConfig: Service;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /** Required. The rollout resource. The `service_name` field is output only. */
    rollout: Rollout;
}
/** Request message for 'ListServiceRollouts' */
export interface ListServiceRolloutsRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /** The token of the page to retrieve. */
    pageToken: string;
    /**
     * The max number of items to include in the response list. Page size is 50
     * if not specified. Maximum value is 100.
     */
    pageSize: number;
    /**
     * Required. Use `filter` to return subset of rollouts.
     * The following filters are supported:
     * -- To limit the results to only those in
     * [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',
     * use filter='status=SUCCESS'
     * -- To limit the results to those in
     * [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'
     * or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
     */
    filter: string;
}
/** Response message for ListServiceRollouts method. */
export interface ListServiceRolloutsResponse {
    /** The list of rollout resources. */
    rollouts: Rollout[];
    /** The token of the next page of results. */
    nextPageToken: string;
}
/** Request message for GetServiceRollout method. */
export interface GetServiceRolloutRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
    /** Required. The id of the rollout resource. */
    rolloutId: string;
}
/** Request message for GenerateConfigReport method. */
export interface GenerateConfigReportRequest {
    /**
     * Required. Service configuration for which we want to generate the report.
     * For this version of API, the supported types are
     * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
     * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
     * and [google.api.Service][google.api.Service]
     */
    newConfig: Any;
    /**
     * Optional. Service configuration against which the comparison will be done.
     * For this version of API, the supported types are
     * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
     * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
     * and [google.api.Service][google.api.Service]
     */
    oldConfig: Any;
}
/** Response message for GenerateConfigReport method. */
export interface GenerateConfigReportResponse {
    /** Name of the service this report belongs to. */
    serviceName: string;
    /** ID of the service configuration this report belongs to. */
    id: string;
    /**
     * list of ChangeReport, each corresponding to comparison between two
     * service configurations.
     */
    changeReports: ChangeReport[];
    /**
     * Errors / Linter warnings associated with the service definition this
     * report
     * belongs to.
     */
    diagnostics: Diagnostic[];
}
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
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceRequest>, I>>(object: I): GetServiceRequest;
};
export declare const CreateServiceRequest: {
    encode(message: CreateServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRequest;
    fromJSON(object: any): CreateServiceRequest;
    toJSON(message: CreateServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateServiceRequest>, I>>(object: I): CreateServiceRequest;
};
export declare const DeleteServiceRequest: {
    encode(message: DeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceRequest;
    fromJSON(object: any): DeleteServiceRequest;
    toJSON(message: DeleteServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<DeleteServiceRequest>, I>>(object: I): DeleteServiceRequest;
};
export declare const UndeleteServiceRequest: {
    encode(message: UndeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceRequest;
    fromJSON(object: any): UndeleteServiceRequest;
    toJSON(message: UndeleteServiceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<UndeleteServiceRequest>, I>>(object: I): UndeleteServiceRequest;
};
export declare const UndeleteServiceResponse: {
    encode(message: UndeleteServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceResponse;
    fromJSON(object: any): UndeleteServiceResponse;
    toJSON(message: UndeleteServiceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<UndeleteServiceResponse>, I>>(object: I): UndeleteServiceResponse;
};
export declare const GetServiceConfigRequest: {
    encode(message: GetServiceConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceConfigRequest;
    fromJSON(object: any): GetServiceConfigRequest;
    toJSON(message: GetServiceConfigRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceConfigRequest>, I>>(object: I): GetServiceConfigRequest;
};
export declare const ListServiceConfigsRequest: {
    encode(message: ListServiceConfigsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsRequest;
    fromJSON(object: any): ListServiceConfigsRequest;
    toJSON(message: ListServiceConfigsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListServiceConfigsRequest>, I>>(object: I): ListServiceConfigsRequest;
};
export declare const ListServiceConfigsResponse: {
    encode(message: ListServiceConfigsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsResponse;
    fromJSON(object: any): ListServiceConfigsResponse;
    toJSON(message: ListServiceConfigsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListServiceConfigsResponse>, I>>(object: I): ListServiceConfigsResponse;
};
export declare const CreateServiceConfigRequest: {
    encode(message: CreateServiceConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceConfigRequest;
    fromJSON(object: any): CreateServiceConfigRequest;
    toJSON(message: CreateServiceConfigRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateServiceConfigRequest>, I>>(object: I): CreateServiceConfigRequest;
};
export declare const SubmitConfigSourceRequest: {
    encode(message: SubmitConfigSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceRequest;
    fromJSON(object: any): SubmitConfigSourceRequest;
    toJSON(message: SubmitConfigSourceRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<SubmitConfigSourceRequest>, I>>(object: I): SubmitConfigSourceRequest;
};
export declare const SubmitConfigSourceResponse: {
    encode(message: SubmitConfigSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceResponse;
    fromJSON(object: any): SubmitConfigSourceResponse;
    toJSON(message: SubmitConfigSourceResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<SubmitConfigSourceResponse>, I>>(object: I): SubmitConfigSourceResponse;
};
export declare const CreateServiceRolloutRequest: {
    encode(message: CreateServiceRolloutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRolloutRequest;
    fromJSON(object: any): CreateServiceRolloutRequest;
    toJSON(message: CreateServiceRolloutRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CreateServiceRolloutRequest>, I>>(object: I): CreateServiceRolloutRequest;
};
export declare const ListServiceRolloutsRequest: {
    encode(message: ListServiceRolloutsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsRequest;
    fromJSON(object: any): ListServiceRolloutsRequest;
    toJSON(message: ListServiceRolloutsRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<ListServiceRolloutsRequest>, I>>(object: I): ListServiceRolloutsRequest;
};
export declare const ListServiceRolloutsResponse: {
    encode(message: ListServiceRolloutsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsResponse;
    fromJSON(object: any): ListServiceRolloutsResponse;
    toJSON(message: ListServiceRolloutsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<ListServiceRolloutsResponse>, I>>(object: I): ListServiceRolloutsResponse;
};
export declare const GetServiceRolloutRequest: {
    encode(message: GetServiceRolloutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRolloutRequest;
    fromJSON(object: any): GetServiceRolloutRequest;
    toJSON(message: GetServiceRolloutRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GetServiceRolloutRequest>, I>>(object: I): GetServiceRolloutRequest;
};
export declare const GenerateConfigReportRequest: {
    encode(message: GenerateConfigReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportRequest;
    fromJSON(object: any): GenerateConfigReportRequest;
    toJSON(message: GenerateConfigReportRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<GenerateConfigReportRequest>, I>>(object: I): GenerateConfigReportRequest;
};
export declare const GenerateConfigReportResponse: {
    encode(message: GenerateConfigReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportResponse;
    fromJSON(object: any): GenerateConfigReportResponse;
    toJSON(message: GenerateConfigReportResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<GenerateConfigReportResponse>, I>>(object: I): GenerateConfigReportResponse;
};
