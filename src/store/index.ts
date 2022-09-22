import { useMainStore } from "./modules/Main";
import { useComposeStore } from "./modules/Compose";

export default function useStore() {
  return {
    main: useMainStore,
    compose: useComposeStore,
  };
}
