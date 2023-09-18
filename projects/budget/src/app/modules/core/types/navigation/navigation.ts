export type NavigationArray = {
    route: string,
    title: string,
    icon: string
}[];


type ActionFn<K,T> = (params: K) => T;
export type ACTION_KEY = "TOGGLE_THEME"
export type Action<K,T> = {
  key: ACTION_KEY;
  description: string;
  action: ActionFn<K,T>
}