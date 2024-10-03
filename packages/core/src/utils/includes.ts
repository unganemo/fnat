import eq from "./eq"
import deepEq from "./deepEq"

const includes = <T>(arr: T[], item: T) => {
	if (arr.length === 0) return false
	for (let i = 0; i < arr.length; i++) {
		const isPrimitive = typeof arr[i] !== "object"
		const compareFn = isPrimitive ? eq : deepEq
		if (compareFn(arr[i], item)) return true
	}

	return false
}

export default includes
