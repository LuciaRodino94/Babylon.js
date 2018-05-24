/// <reference path="../../../dist/preview release/babylon.d.ts"/>

module BABYLON.GUI {
    /**
     * Class used to transport Vector3 information for pointer events
     */
    export class Vector3WithInfo extends Vector3 {        
        /**
         * Creates a new Vector3WithInfo
         * @param source defines the vector3 data to transport
         * @param buttonIndex defines the current mouse button index
         */
        public constructor(source: Vector3, public buttonIndex: number = 0) {
            super(source.x, source.y, source.z);
        }
    }
}