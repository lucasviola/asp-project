module.exports =
    class DeviceType {
        get deviceType() {
            return this._deviceType;
        }

        set deviceType(value) {
            this._deviceType = value;
        }
        constructor(deviceType) {
            this._deviceType = deviceType;
        }
    };

