import { ToggleNotification } from '../components/alertstore'
import { useStore } from '@nanostores/solid'

//const NotificationToggle = atom<boolean>(true);

export function toggleNotification() {
	ToggleNotification.set(false);
}

export function AlertList() {

	const $notifications = useStore(ToggleNotification);
	console.log($notifications());

	return  $notifications() ? <li class={"bg-[red]"}>A TEMPLATE ALERT</li> : null
}