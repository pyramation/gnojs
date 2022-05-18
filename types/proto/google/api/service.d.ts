import { Api } from "../protobuf/api";
import { Type, Enum } from "../protobuf/type";
import { Documentation } from "./documentation";
import { Backend } from "./backend";
import { Http } from "./http";
import { Quota } from "./quota";
import { Authentication } from "./auth";
import { Context } from "./context";
import { Usage } from "./usage";
import { Endpoint } from "./endpoint";
import { Control } from "./control";
import { LogDescriptor } from "./log";
import { MetricDescriptor } from "./metric";
import { MonitoredResourceDescriptor } from "./monitored_resource";
import { Billing } from "./billing";
import { Logging } from "./logging";
import { Monitoring } from "./monitoring";
import { SystemParameters } from "./system_parameter";
import { SourceInfo } from "./source_info";
import { UInt32Value } from "../protobuf/wrappers";
import * as _m0 from "protobufjs/minimal";
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 *
 * Example:
 *
 * type: google.api.Service
 * name: calendar.googleapis.com
 * title: Google Calendar API
 * apis:
 * - name: google.calendar.v3.Calendar
 * authentication:
 * providers:
 * - id: google_calendar_auth
 * jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 * issuer: https://securetoken.google.com
 * rules:
 * - selector: "*"
 * requirements:
 * provider_id: google_calendar_auth
 */
export interface Service {
    /**
     * The service name, which is a DNS-like logical identifier for the
     * service, such as `calendar.googleapis.com`. The service name
     * typically goes through DNS verification to make sure the owner
     * of the service also owns the DNS name.
     */
    name: string;
    /** The product title for this service. */
    title: string;
    /** The Google project that owns this service. */
    producerProjectId: string;
    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. Must be no longer than 63 characters
     * and only lower case letters, digits, '.', '_' and '-' are allowed. If
     * empty, the server may choose to generate one instead.
     */
    id: string;
    /**
     * A list of API interfaces exported by this service. Only the `name` field
     * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
     * author, as the remaining fields will be derived from the IDL during the
     * normalization process. It is an error to specify an API interface here
     * which cannot be resolved against the associated IDL files.
     */
    apis: Api[];
    /**
     * A list of all proto message types included in this API service.
     * Types referenced directly or indirectly by the `apis` are
     * automatically included.  Messages which are not referenced but
     * shall be included, such as types used by the `google.protobuf.Any` type,
     * should be listed here by name. Example:
     *
     * types:
     * - name: google.protobuf.Int32
     */
    types: Type[];
    /**
     * A list of all enum types included in this API service.  Enums
     * referenced directly or indirectly by the `apis` are automatically
     * included.  Enums which are not referenced but shall be included
     * should be listed here by name. Example:
     *
     * enums:
     * - name: google.someapi.v1.SomeEnum
     */
    enums: Enum[];
    /** Additional API documentation. */
    documentation: Documentation;
    /** API backend configuration. */
    backend: Backend;
    /** HTTP configuration. */
    http: Http;
    /** Quota configuration. */
    quota: Quota;
    /** Auth configuration. */
    authentication: Authentication;
    /** Context configuration. */
    context: Context;
    /** Configuration controlling usage of this service. */
    usage: Usage;
    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint
     * with the same name as the service is automatically generated to service all
     * defined APIs.
     */
    endpoints: Endpoint[];
    /** Configuration for the service control plane. */
    control: Control;
    /** Defines the logs used by this service. */
    logs: LogDescriptor[];
    /** Defines the metrics used by this service. */
    metrics: MetricDescriptor[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /** Billing configuration. */
    billing: Billing;
    /** Logging configuration. */
    logging: Logging;
    /** Monitoring configuration. */
    monitoring: Monitoring;
    /** System parameter configuration. */
    systemParameters: SystemParameters;
    /** Output only. The source information for this configuration if available. */
    sourceInfo: SourceInfo;
    /**
     * Obsolete. Do not use.
     *
     * This field has no semantic meaning. The service config compiler always
     * sets this field to `3`.
     */
    /** @deprecated */
    configVersion: UInt32Value;
}
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service;
};
