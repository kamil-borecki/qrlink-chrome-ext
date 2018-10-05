// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.tabs.getSelected(null, function(tab) {
    const url = tab.url;

    const typeNumber = 4;
    const errorCorrectionLevel = 'M';
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(url);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createSvgTag();
});