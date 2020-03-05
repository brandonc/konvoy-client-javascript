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
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachine } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachine';

/**
 * MachinePool used by the provisioner to configure a machine
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerNodePools {
    'bastion'?: boolean;
    'controlPlane'?: boolean;
    'count': number;
    'machine'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachine;
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'bastion',
            baseName: 'bastion',
            type: 'boolean',
        },
        {
            name: 'controlPlane',
            baseName: 'controlPlane',
            type: 'boolean',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'machine',
            baseName: 'machine',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerMachine',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerNodePools.attributeTypeMap;
    }
}
