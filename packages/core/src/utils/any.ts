const any = <T>(arr: T[], fn: (item: T) => boolean) => {
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			return true
		}
	}

	return false
}

export default any
