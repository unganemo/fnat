const deepEq = <T>(a: T, b: T): boolean => {
	if (a === b) return true
	if (a == null || b == null) return false
	if (typeof a !== typeof b) return false
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false
		return a.every((item, index) => deepEq(item, b[index]))
	}
	if (typeof a === "object" && typeof b === "object") {
		const keysA = Object.keys(a as object)
		const keysB = Object.keys(b as object)

		if (keysA.length !== keysB.length) return false

		return keysA.every(
			(key) =>
				Object.prototype.hasOwnProperty.call(b, key) &&
				deepEq((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])
		)
	}

	return a === b
}

export default deepEq
