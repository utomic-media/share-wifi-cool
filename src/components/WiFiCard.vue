<template>
  <div>
    <div class="wifi-card my-7 p-5 shadow-md border rounded-md print-visible">
      <h2 class="pb-3">
        <span class="mr-1">📶</span>
        {{ $t("wifiCard.title") }}
      </h2>

      <div class="flex flex-row">
        <QrcodeVue :value="qrValue" :size="175" />
        <div class="flex flex-col ml-10 flex-1">
          <v-input
            v-model="wifiSSID"
            id="wifi-ssid"
            :label='$t("wifiCard.networkName")'
            :placeholder='$t("wifiCard.networkName")'
          />
          
          <v-input
            v-show="wifiEncryptionMode !== 'nopass' "
            v-model="wifiPassword"
            id="wifi-password"
            :label='$t("wifiCard.password")'
            :placeholder='$t("wifiCard.password")'
          />

          <v-radio
            v-model="wifiEncryptionMode"
            :options="wifiEncryptionList"
            :label='$t("wifiCard.encryptionMode")'
            row
          />

          <div :class="[wifiHidden ? '' : 'print-hidden']">
            <input type="checkbox" class="mr-1" id="wifi-hidden" v-model="wifiHidden" />
            <label for="wifi-hidden" class="text-gray-700">
              {{ $t("wifiCard.hiddenNetwork") }}
            </label>
          </div>

        </div>
      </div>

      <p class="mt-1">
        <span class="mr-1">📱 📷 </span>
        {{ $t("wifiCard.description") }}
      </p>

    </div>

    <div class="flex flex-row">

      <div class="flex flex-col">
        <!-- TODO: #4 Add image generation -->
        <v-button disabled textStyle class="mr-3">
          {{ $t("wifiCard.downloadImageButton") }}
        </v-button>
        <div class="text-sm text-gray-500 italic">
          {{ $t("wifiCard.comingSoon") }}!
        </div>
      </div>

      <v-button @click="printWiFiCard">
        {{ $t("wifiCard.printButton") }}
      </v-button>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import QrcodeVue from 'qrcode.vue';
import { useI18n } from 'vue-i18n';
import vInput from '@/components/base/v-Input.vue';
import vRadio from '@/components/base/v-Radio.vue';
import vButton from '@/components/base/v-Button.vue';


export default defineComponent({
  name: 'WiFiCard',
  components: {
    QrcodeVue,
    vInput,
    vRadio,
    vButton,
  },
  props: {
    //
  },
  setup() {
    const { t } = useI18n();

    const wifiSSID = ref('');
    const wifiPassword = ref('');
    const wifiEncryptionMode = ref('WPA');
    const wifiHidden = ref(false);
    const wifiEncryptionList = computed(() => [
      {
        key: 'wifi-encryption-mode--none',
        value: 'nopass',
        // label: 'none',
        label: t('wifiCard.encryption.none'),
      },
      {
        key: 'wifi-encryption-mode--wpa',
        value: 'WPA',
        label: 'WPA/WPA2/WPA3',
      },
      {
        key: 'wifi-encryption-mode--wep',
        value: 'WEP',
        label: 'WEP',
      },
    ]);

    const qrValue = computed(() => {
      const hidden = wifiHidden.value ? 'H:true' : '';
      return `WIFI:T:${wifiEncryptionMode.value};S:${wifiSSID.value};P:${wifiPassword.value}${hidden};;`;
    });

    const printWiFiCard = (() => {
      const inputsAreValid = validateInputs();

      if (inputsAreValid) {
        window.print();
      }
    });

    const validateInputs = (() => {
      const networkExists = wifiSSID.value !== '';
      const passwordExists = wifiPassword.value !== '';
      let passwordLengthValid = true;

      if (wifiEncryptionMode.value === 'WPA' && wifiPassword.value.length < 8) {
        passwordLengthValid = false;
        const error = t('wifiCard.errors.passwordTooShort', { type: 'WPA', number: 8 });
        // eslint-disable-next-line no-alert
        window.alert(error);
      } else if (wifiEncryptionMode.value === 'WEP' && wifiPassword.value.length < 5) {
        passwordLengthValid = false;
        const error = t('wifiCard.errors.passwordTooShort', { type: 'WEP', number: 5 });
        // eslint-disable-next-line no-alert
        window.alert(error);
      }


      return networkExists && passwordExists && passwordLengthValid;
    });
 
    return {
      wifiSSID,
      wifiPassword,
      wifiEncryptionMode,
      wifiHidden,
      wifiEncryptionList,
      qrValue,
      printWiFiCard,
    };
  },
});
</script>

<style scoped lang="scss">

</style>
