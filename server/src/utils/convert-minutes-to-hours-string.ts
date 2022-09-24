//faz o inverso da outra função
export function convertMinutesToHourString(minutesAmount: number){

	const hours = Math.floor(minutesAmount / 60);

	const minutes = minutesAmount % 60;

	//Acrescenta um zero se hours e minutes conter somente um dígito
	return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
}