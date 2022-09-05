/* eslint-disable max-len */
import { Component } from '@angular/core';
import * as BlinkID from '@microblink/blinkid-capacitor';

@Component({
  selector: 'app-personal-id',
  templateUrl: 'personal-id.page.html',
  styleUrls: ['personal-id.page.scss']
})
export class PersonalIdPage {
  title = 'Personal ID';
  scanningResults: any = null;

  constructor() { }

  async scan() {

    // Initialize plugin
    const plugin = new BlinkID.BlinkIDPlugin();

    // Initialize wanted recognizer
    const blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
    blinkIdCombinedRecognizer.returnFullDocumentImage = true;
    blinkIdCombinedRecognizer.returnFaceImage = true;

    // Initialize license
    const licenseKeys: BlinkID.License = {
      ios: 'sRwAAAERY29tLm12ZmFjdG9yeS5kcGa5v01Eg1NTT30UtnIX8MDu46isJFi0O9SuaiPkNiC+1NpcWfeloVCCg8PwFEAQ5OzHjZfokItzJYk61UMvMqvoBAPqhFdOyZ/27kOwRJw0eYMhUxjjPyeoxTtCW7Vqohkz1dtQVhk7O5rDFpyWlJuwyvg55GpbQASHgkm4vHWn8/NGXCJIxvlCcRaKHYnnQDXISrrZFCSPqlGqRYPoXiu6fH4OBtVvP83GLIBy6g==',
      android: 'sRwAAAARY29tLm12ZmFjdG9yeS5kcGZwfE/KgsDNTFYby5o10iSP6TuGuvc6axMl01ZQQlBuYcFg2Dl1cNEXa4Py/dvm10fSGcJn5PnUGHp/l3rADxeuNs2kxb96JyHLracFosbauuzyumUXkGlBOW/62+M1NNLmgb7y51XHzOKlnzWRffnOrKPOYmW7Z3HSS+RwJWPfF3p2Pn3MfKuW/CrxoiTiqeuwj8PPVyDgZwVtkud47hCtrizRKrGaWN2iiWmVYA==',
      showTrialLicenseWarning: true
    };

    // Perform scan and gather results
    this.scanningResults = await plugin.scanWithCamera(
      new BlinkID.BlinkIdOverlaySettings(),
      new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer]),
      licenseKeys
    );
  }
}
