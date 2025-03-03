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
 * Keepalived describes different keepalived related options
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesControlPlaneKeepalived {
    '_interface'?: string;
    'vrid'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: '_interface',
            baseName: 'interface',
            type: 'string',
        },
        {
            name: 'vrid',
            baseName: 'vrid',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterKubernetesControlPlaneKeepalived.attributeTypeMap;
    }
}
