// '2023-07-11T23:47:06.07'

export const formatTime = (dateTimeString: string) => {
	const dateTime = new Date(dateTimeString)
	const hours = dateTime.getHours()
	const minutes = dateTime.getMinutes()
	const amPM = hours >= 12 ? 'PM' : 'AM'
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12
	const formattedMinutes = minutes.toString().padStart(2, '0')

	return `${formattedHours}:${formattedMinutes} ${amPM}`
}
