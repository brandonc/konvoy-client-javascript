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
import { V1PersistentVolumeSpec } from './v1PersistentVolumeSpec';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export class V1beta1VolumeAttachmentSource {
    'inlineVolumeSpec'?: V1PersistentVolumeSpec;
    /**
     * Name of the persistent volume to attach.
     */
    'persistentVolumeName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'inlineVolumeSpec',
            baseName: 'inlineVolumeSpec',
            type: 'V1PersistentVolumeSpec',
        },
        {
            name: 'persistentVolumeName',
            baseName: 'persistentVolumeName',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1VolumeAttachmentSource.attributeTypeMap;
    }
}
