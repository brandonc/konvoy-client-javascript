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
import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef';

export class IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBindingStatus {
    'federatedRoleBindingRef'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'federatedRoleBindingRef',
            baseName: 'federatedRoleBindingRef',
            type: 'IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderWorkspacesV1alpha1VirtualGroupProjectRoleBindingStatus.attributeTypeMap;
    }
}
