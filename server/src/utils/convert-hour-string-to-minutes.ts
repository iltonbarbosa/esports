//Converte a hora (tipo 12:00) em um valor numérico correspondente
export function convertHourStringToMinutes(hourString: string){
	const [ hours, minutes ] = hourString.split(':').map(Number)

	const minutesAmount = (hours * 60) + minutes;

	return minutesAmount;
}