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
import { V1LoadBalancerStatus } from './v1LoadBalancerStatus';

/**
 * IngressStatus describe the current state of the Ingress.
 */
export class ExtensionsV1beta1IngressStatus {
    'loadBalancer'?: V1LoadBalancerStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'loadBalancer',
            baseName: 'loadBalancer',
            type: 'V1LoadBalancerStatus',
        },
    ];

    static getAttributeTypeMap() {
        return ExtensionsV1beta1IngressStatus.attributeTypeMap;
    }
}
