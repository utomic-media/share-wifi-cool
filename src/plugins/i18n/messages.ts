// Ready translated locale messages
// The structure of the locale message is the hierarchical object structure
// with each locale as the top property

const messages = {
  en: {
    wifiCard: {
      title: 'WiFi Login',
      networkName: 'Your WiFi Network',
      password: 'password',
      encryptionMode: 'encryption',
      encryption: {
        none: 'none',
        wpa: 'WPA/WPA2/WPA3',
        wep: 'WEP',
      },
      description: '📱📷 Scan the qr code with your phone camera to connect automatically',
      hiddenNetwork: 'Hidden network',
    },
  },
  de: {
    wifiCard: {
      title: 'WLAN Login',
      networkName: 'Dein WLAN Netzwerk',
      password: 'Passwort',
      encryptionMode: 'Verschlüsselung',
      encryption: {
        none: 'keine',
      },
      description: '📱📷 Scanne den QR-Code mit deiner Handykamera um dich automatisch mit dem WLAN zu verbinden',
      hiddenNetwork: 'Verstecktes Netzwerk',
    },
  },
};

export default messages;
