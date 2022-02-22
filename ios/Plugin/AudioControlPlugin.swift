import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AudioControlPlugin)
public class AudioControlPlugin: CAPPlugin {
    private let implementation = AudioControl()

    @objc func setVolume(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""

        if ( value.isEmpty ) {
            call.reject("Empty value")
            return
        }
        
        let newValue = String(implementation.setVolume(
            (value as NSString).floatValue
        ))

        call.resolve([
            "value": newValue
        ])
    }
}
