<template>
  <div>
    <h2>{{ $t("wifiCard.title") }}</h2>

    <QrcodeVue :value="qrValue" />
    <label for="wifi-ssid">{{ $t("wifiCard.networkName") }}</label>
    <input
      id="wifi-ssid"
      name="wifi-ssid"
      :placeholder='$t("wifiCard.networkName")'
      v-model="wifiSSID"
    />

    <label for="wifi-password">{{ $t("wifiCard.password") }}</label>
    <input
      id="wifi-password"
      name="wifi-password"
      :placeholder='$t("wifiCard.password")'
      v-model="wifiPassword"
    />


    <div class="wifi-encryption-mode">
      <label>{{ $t("wifiCard.encryptionMode") }}</label>
      <span
        v-for="encryption in wifiEncryptionList"
        :key="encryption.id"
      >
        <input
          type="radio"
          :id="encryption.id"
          :value="encryption.value"
          v-model="wifiEncryptionMode"
        />
        <label :for="encryption.id">{{ encryption.label }}</label>
      </span>
    </div>

    <input type="checkbox" id="wifi-hidden" v-model="wifiHidden" />
    <label for="wifi-hidden">{{ $t("wifiCard.hiddenNetwork") }}</label>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import QrcodeVue from 'qrcode.vue';
import { useI18n } from 'vue-i18n';


export default defineComponent({
  name: 'WiFiCard',
  components: {
    QrcodeVue,
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
        id: 'wifi-encryption-mode--none',
        value: 'nopass',
        // label: 'none',
        label: t('wifiCard.encryption.none'),
      },
      {
        id: 'wifi-encryption-mode--wpa',
        value: 'WPA',
        label: 'WPA/WPA2/WPA3',
      },
      {
        id: 'wifi-encryption-mode--wep',
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
