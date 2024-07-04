<script setup lang="ts">
import moment from "moment";

const props = defineProps<{
  people: {
    type: {
      id: string;
      name: string;
      dateOfBirth: string;
      phoneNumber: string;
    }[];
    required: false;
    default: () => [];
  };
}>();

const emits = defineEmits(["save"]);

const { $toast } = useNuxtApp();

const name = ref("");
const dateOfBirth = ref("");
const phoneNumber = ref("");

const save = () => {
  if (fieldsErrors.value.length) {
    const error = fieldsErrors.value.map((err) => {
      return `- ${err} <br>`;
    });
    $toast.error(`Erro ao salvar: <br> ${error.join("")}`);
  } else {
    const payload = {
      name: name.value,
      dateOfBirth: dateOfBirth.value,
      phoneNumber: phoneNumber.value,
    };
    console.log("payload", payload);
    console.log(console.log("givenDataIsValid", fieldsErrors.value));
    emits("save", payload);
  }
};

const fieldsErrors = computed(() => {
  const errors: string[] = [];
  const regex = /(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;

  if (!phoneNumber.value.trim()) {
    errors.push("Celular não pode ser vazio");
  } else if (!regex.test(phoneNumber.value)) {
    errors.push("Celular inválido");
  }

  if (!name.value.trim()) {
    errors.push("Nome não pode ser vazio");
  }

  if (!dateOfBirth.value.trim()) {
    errors.push("Data de Nascimento não pode ser vazio");
  } else {
    const dateSplit = dateOfBirth.value.split("-");
    const givenDate = moment([
      parseInt(dateSplit[0]),
      parseInt(dateSplit[1]),
      parseInt(dateSplit[2]),
    ]);
    const todayMinus10YearsDate = moment().subtract(10, "years");

    if (givenDate.diff(todayMinus10YearsDate, "years") < 10) {
      errors.push("A idade mínima para usar a biblioteca é 10 anos");
    } else if (givenDate.isSameOrAfter(moment())) {
      errors.push("A data de nascimento não pode ser igual ou maior que hoje");
    }
  }
  return errors;
});
</script>

<template>
  <div class="space-y-6">
    <BaseRegisterPersonTable :rows="[]"></BaseRegisterPersonTable>
    <div>
      <BaseLabel class="block" type="text">Nome</BaseLabel>
      <BaseInput class="block w-full" v-model="name"></BaseInput>
    </div>
    <div>
      <BaseLabel class="block">Data de Nascimento</BaseLabel>
      <BaseInput
        class="block w-full"
        type="date"
        v-model="dateOfBirth"
      ></BaseInput>
    </div>
    <div>
      <BaseLabel class="block">Celular</BaseLabel>
      <BaseInputPhone
        class="block w-full"
        placeholder="(##) #####-####"
        v-model="phoneNumber"
      ></BaseInputPhone>
    </div>
  </div>
  <div>
    <BaseButtonPrimary @click="save">Salvar</BaseButtonPrimary>
  </div>
</template>
