import { getCurrentInstance } from "vue";

export function vm() {
  // eslint-disable-next-line
  const instance = getCurrentInstance()!;
  return instance;
}