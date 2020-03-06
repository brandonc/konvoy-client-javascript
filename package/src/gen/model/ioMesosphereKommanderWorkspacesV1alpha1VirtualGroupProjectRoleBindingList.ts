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
import { IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBinding } from './ioMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBinding';
import { IoVeleroV1VolumeSnapshotLocationListMetadata } from './ioVeleroV1VolumeSnapshotLocationListMetadata';

/**
 * VirtualGroupProjectRoleBindingList is a list of VirtualGroupProjectRoleBinding
 */
export class IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    'apiVersion'?: string;
    /**
     * List of virtualgroupprojectrolebindings. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    'items': Array<IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    'kind'?: string;
    'metadata'?: IoVeleroV1VolumeSnapshotLocationListMetadata;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'apiVersion',
            baseName: 'apiVersion',
            type: 'string',
        },
        {
            name: 'items',
            baseName: 'items',
            type: 'Array<IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBinding>',
        },
        {
            name: 'kind',
            baseName: 'kind',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'IoVeleroV1VolumeSnapshotLocationListMetadata',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBindingList.attributeTypeMap;
    }
}
