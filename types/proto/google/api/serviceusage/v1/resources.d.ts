import { Api } from "../../../protobuf/api";
import { Documentation } from "../../documentation";
import { Quota } from "../../quota";
import { Authentication } from "../../auth";
import { Usage } from "../../usage";
import { Endpoint } from "../../endpoint";
import { MonitoredResourceDescriptor } from "../../monitored_resource";
import { Monitoring } from "../../monitoring";
import * as _m0 from "protobufjs/minimal";
/** Whether or not a service has been enabled for use by a consumer. */
export declare enum State {
    /**
     * STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
     * is unspecified or not meaningful. Currently, all consumers other than
     * projects (such as folders and organizations) are always in this state.
     */
    STATE_UNSPECIFIED = 0,
    /**
     * DISABLED - The service cannot be used by this consumer. It has either been explicitly
     * disabled, or has never been enabled.
     */
    DISABLED = 1,
    /** ENABLED - The service has been explicitly enabled for use by this consumer. */
    ENABLED = 2,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/** A service that is available for use by the consumer. */
export interface Service {
    /**
     * The resource name of the consumer and service.
     *
     * A valid name would be:
     * - projects/123/services/serviceusage.googleapis.com
     */
    name: string;
    /**
     * The resource name of the consumer.
     *
     * A valid name would be:
     * - projects/123
     */
    parent: string;
    /**
     * The service configuration of the available service.
     * Some fields may be filtered out of the configuration in responses to
     * the `ListServices` method. These fields are present only in responses to
     * the `GetService` method.
     */
    config: ServiceConfig;
    /** Whether or not the service has been enabled for use by the consumer. */
    state: State;
}
/** The configuration of the service. */
export interface ServiceConfig {
    /**
     * The DNS address at which this service is available.
     *
     * An example DNS address would be:
     * `calendar.googleapis.com`.
     */
    name: string;
    /** The product title for this service. */
    title: string;
    /**
     * A list of API interfaces exported by this service. Contains only the names,
     * versions, and method names of the interfaces.
     */
    apis: Api[];
    /**
     * Additional API documentation. Contains only the summary and the
     * documentation URL.
     */
    documentation: Documentation;
    /** Quota configuration. */
    quota: Quota;
    /** Auth configuration. Contains only the OAuth rules. */
    authentication: Authentication;
    /** Configuration controlling usage of this service. */
    usage: Usage;
    /**
     * Configuration for network endpoints. Contains only the names and aliases
     * of the endpoints.
     */
    endpoints: Endpoint[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     * This should not include the 'producer_destinations' field.
     */
    monitoring: Monitoring;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
    /**
     * The full name of the resources that this operation is directly
     * associated with.
     */
    resourceNames: string[];
}
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service;
};
export declare const ServiceConfig: {
    encode(message: ServiceConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceConfig;
    fromJSON(object: any): ServiceConfig;
    toJSON(message: ServiceConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<ServiceConfig>, I>>(object: I): ServiceConfig;
};
export declare const OperationMetadata: {
    encode(message: OperationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata;
    fromJSON(object: any): OperationMetadata;
    toJSON(message: OperationMetadata): unknown;
    fromPartial<I extends Exact<DeepPartial<OperationMetadata>, I>>(object: I): OperationMetadata;
};
