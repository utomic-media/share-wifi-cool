// Ready translated locale messages
// The structure of the locale message is the hierarchical object structure
// with each locale as the top property

const messages = {
  en: {
    wifiCard: {
      title: 'WiFi Login',
      networkName: 'WiFi Network',
      password: 'Password',
      encryptionMode: 'Encryption',
      encryption: {
        none: 'none',
        wpa: 'WPA/WPA2/WPA3',
        wep: 'WEP',
      },
      description: 'Scan the qr code with your phone camera to connect automatically',
      hiddenNetwork: 'Hidden network',
      errors: {
        passwordTooShort: 'Password to short. A {type} password needs to have at least {number} characters',
      },
    },
    theFooter: {
      text: 'Developed and designed with 💚 by',
      legal: {
        legal: 'Legal',
        privacyPolicy: 'Privacy policy',
      },
    },
    pages: {
      home: {
        title: '📡 📶 Share Wifi - The cool way 🚀',
        description: 'Share your WiFi at home with your friends the cool way. No more searching for the passwords. Now you can easily create a qr code that allows everyone to connect to your network. Just scan the qr code with your smartphone and it connects automatically to the network without typing a password(required Android 10 and iOS 11).',
        printButton: 'Print WiFI Card',
        faq: [
          {
            key: 'Does it works with any phone?',
            value: 'It should work with any Android phone with Android 10 or newer and every iPhone with IOS 11 or newer. You need an QR Code scanner (in most phones already integrated into the camera)',
          },
          {
            key: 'Does this WebApp stores any sensitive Data, or sends them to the server?',
            value: 'Your WiFi SSID and Password will never be send or stored anywhere. The whole process works in your local browser. The only saved data are related to some basic web analytics. You can find more about that in the privacy policy',
          },
          {
            key: 'It is secure to use?',
            value: 'Yes. this application does not stores any sensitive Data. You can even hava a look into the sourcecode on Github',
            link: {
              target: 'https://github.com/utomic-media/share-wifi-cool',
              text: 'Visit the Github Repository',
            },
          },
        ],
      },
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
