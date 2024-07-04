import { useToast } from "vue-toast-notification";

const toast = useToast({
  duration: 5000,
  dismissible: true,
  position: "top-right",
  pauseOnHover: true,
});

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast,
    },
  };
});
