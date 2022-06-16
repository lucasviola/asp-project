module.exports =
    class Device {
        constructor(deviceName, deviceType, displayPicture) {
            this._deviceName = deviceName;
            this._deviceType = deviceType;
            this._displayPicture = displayPicture;
        }

        get displayPicture() {
            return this._displayPicture;
        }
        get deviceType() {
            return this._deviceType;
        }
        get deviceName() {
            return this._deviceName;
        }
        set displayPicture(value) {
            this._displayPicture = value;
        }
        set deviceType(value) {
            this._deviceType = value;
        }
        set deviceName(value) {
            this._deviceName = value;
        }
    };

