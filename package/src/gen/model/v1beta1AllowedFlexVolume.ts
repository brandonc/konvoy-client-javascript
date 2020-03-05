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
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export class V1beta1AllowedFlexVolume {
    /**
     * driver is the name of the Flexvolume driver.
     */
    'driver': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'driver',
            baseName: 'driver',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1AllowedFlexVolume.attributeTypeMap;
    }
}
