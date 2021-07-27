<template>
  <div class="my-7 p-5 shadow-md border rounded-md">
    <h2 class="pb-3">{{ $t("wifiCard.title") }}</h2>

    <div class="flex flex-row">
      <QrcodeVue :value="qrValue" />
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

        <div>
          <input type="checkbox" class="mr-1" id="wifi-hidden" v-model="wifiHidden" />
          <label for="wifi-hidden">{{ $t("wifiCard.hiddenNetwork") }}</label>
        </div>
      </div>

      
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import QrcodeVue from 'qrcode.vue';
import { useI18n } from 'vue-i18n';
import vInput from '@/components/base/v-Input.vue';
import vRadio from '@/components/base/v-Radio.vue';


export default defineComponent({
  name: 'WiFiCard',
  components: {
    QrcodeVue,
    vInput,
    vRadio,
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
 
    return {
      wifiSSID, wifiPassword, wifiEncryptionMode, wifiHidden, wifiEncryptionList, qrValue,
    };
  },
});
</script>

<style scoped lang="scss">

</style>
