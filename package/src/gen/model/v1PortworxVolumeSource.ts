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
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export class V1PortworxVolumeSource {
    /**
     * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified.
     */
    'fsType'?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     */
    'readOnly'?: boolean;
    /**
     * VolumeID uniquely identifies a Portworx volume
     */
    'volumeID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'fsType',
            baseName: 'fsType',
            type: 'string',
        },
        {
            name: 'readOnly',
            baseName: 'readOnly',
            type: 'boolean',
        },
        {
            name: 'volumeID',
            baseName: 'volumeID',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1PortworxVolumeSource.attributeTypeMap;
    }
}
