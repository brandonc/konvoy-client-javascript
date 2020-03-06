/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class AdmissionregistrationV1ServiceReference {
    /**
     * `name` is the name of the service. Required
     */
    'name': string;
    /**
     * `namespace` is the namespace of the service. Required
     */
    'namespace': string;
    /**
     * `path` is an optional URL path which will be sent in any request to this service.
     */
    'path'?: string;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     */
    'port'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'namespace',
            baseName: 'namespace',
            type: 'string',
        },
        {
            name: 'path',
            baseName: 'path',
            type: 'string',
        },
        {
            name: 'port',
            baseName: 'port',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return AdmissionregistrationV1ServiceReference.attributeTypeMap;
    }
}
