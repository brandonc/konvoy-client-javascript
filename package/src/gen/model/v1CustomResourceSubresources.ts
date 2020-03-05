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
import { V1CustomResourceSubresourceScale } from './v1CustomResourceSubresourceScale';

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 */
export class V1CustomResourceSubresources {
    'scale'?: V1CustomResourceSubresourceScale;
    /**
     * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
     */
    'status'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'scale',
            baseName: 'scale',
            type: 'V1CustomResourceSubresourceScale',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'object',
        },
    ];

    static getAttributeTypeMap() {
        return V1CustomResourceSubresources.attributeTypeMap;
    }
}
