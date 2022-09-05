/* eslint-disable max-len */
import { Component } from '@angular/core';
import * as BlinkCard from '@microblink/blinkcard-capacitor';

@Component({
  selector: 'app-credit-card',
  templateUrl: 'credit-card.page.html',
  styleUrls: ['credit-card.page.scss']
})
export class CreditCardPage {
  title = 'Credit card';
  scanningResults: any = null;

  constructor() {
  }

  async scan() {
    // Initialize plugin
     const plugin = new BlinkCard.BlinkCardPlugin();

     // Initialize wanted recognizer
     const blinkCardRecognizer = new BlinkCard.BlinkCardRecognizer();
     blinkCardRecognizer.returnFullDocumentImage = true;

     // Initialize license
     const licenseKeys: BlinkCard.License = {
       ios: 'sRwAAAERY29tLm12ZmFjdG9yeS5kcGa5v01E4VNTT30UzoISB8Hu4bR7a4wCvY2A9Uih1bZpk9Xd+oou/G1Kn+a0hsSo8FH7FaMIzlJiE8TMff5JXb4A0bZUHc/Cjh/VHacuVmAsgywcj3RwhZvO+w2xAXrfJ4uJ5NxSzdY4f6VUzE8rScwwNvCp4b+/nTcs9U/24w+HbyFxQxflxwgNV/YR8ds3vYUCy30QW5oaSvoBePl9EFy7Jik6DEagYG4nVCBFspPO',
       android: 'sRwAAAARY29tLm12ZmFjdG9yeS5kcGZwfE/K4MDNTFYbs2owJSWP7J2KydKEoVx7iSsGe57bBuzwCEM7BjFbK/dgJWZtspSRZfJYUu+kUv+iEaPymS+pzQtd1YuPWMARLoGRV14AD+s4AgTYRMgpmHphMSPbnz7qPoS5vllqK2UtyXodTeyN1eNT+kx4iPQg4xZzAHZEPo+7O/RUkXNk4bjgkW+qwT3UIsdhrNEzVIyoas4zZFra87i7IXCSdBIH1ti8DjyA',
       showTrialLicenseWarning: true
     };

     // Perform scan and gather results
      this.scanningResults = await plugin.scanWithCamera(
       new BlinkCard.BlinkCardOverlaySettings(),
       new BlinkCard.RecognizerCollection([blinkCardRecognizer]),
       licenseKeys
     );
  }

}
