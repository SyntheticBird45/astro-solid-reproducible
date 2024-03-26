import { atom } from 'nanostores';
import { useStore } from '@nanostores/solid'

const NotificationToggle = atom<boolean>(true);

export function toggleNotification() {
	//const $notifications = useStore(NotificationToggle);
	//NotificationToggle.set(!$notifications());
	NotificationToggle.set(false);
}

export function AlertList() {

	const $notifications = useStore(NotificationToggle);
	console.log($notifications());

	return  $notifications() ? (<li class={"bg-[red]"}>A TEMPLATE ALERT</li>) : null
}