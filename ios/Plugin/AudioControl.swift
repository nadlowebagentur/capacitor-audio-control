import Foundation

import MediaPlayer

@objc public class AudioControl: NSObject {
    private let volumeView = MPVolumeView(frame: .zero)

    @objc public func setVolume(_ value: Float) -> Float {
        guard let slider = volumeView.subviews.compactMap({ $0 as? UISlider }).first else {
            return value
        }

        slider.setValue(value, animated: true)

        return slider.value
    }
}
