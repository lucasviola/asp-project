module.exports =
    class Device {

        constructor(deviceName, deviceType, displayPicture, controlInformation) {
            this._deviceName = deviceName;
            this._deviceType = deviceType;
            this._displayPicture = displayPicture;
            this._controlInformation = controlInformation;
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
        get controlInformation() {
            return this._controlInformation;
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
        set controlInformation(value) {
            this._controlInformation = value;
        }
    };

